import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  CreditCard,
  Plus,
  Search,
  Trash2,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatINR, type ClinicRole, type InvoiceRecord, type PatientRecord } from "@/lib/clinic";
import { paymentMethods, type PaymentRecord } from "@/lib/payments";
import { deletePayment, listPayments, recordPayment } from "@/lib/payments.server";

interface PaymentsModuleProps {
  patients: PatientRecord[];
  invoices: InvoiceRecord[];
  onNotice: (message: string) => void;
  role?: ClinicRole | null;
}

const fieldClassName =
  "h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function PaymentsModule({ patients, invoices, onNotice, role }: PaymentsModuleProps) {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [paymentToDelete, setPaymentToDelete] = useState<PaymentRecord | null>(null);
  const [loadError, setLoadError] = useState("");
  const [formError, setFormError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [patientId, setPatientId] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [method, setMethod] = useState<(typeof paymentMethods)[number]>("UPI");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");

  const canDelete = role === "admin" || !role;

  const loadPayments = useCallback(async () => {
    setIsLoading(true);
    setLoadError("");
    try {
      setPayments(await listPayments());
    } catch (error) {
      console.error("Failed to load MongoDB payment records.", error);
      setLoadError(
        "Payments could not be loaded from MongoDB. Check MONGODB_URI and Atlas network access, then retry.",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadPayments();
  }, [loadPayments]);

  const filteredPayments = useMemo(() => {
    const query = search.trim().toLowerCase();
    return payments.filter((payment) => {
      const matchesSearch =
        !query ||
        `${payment.id} ${payment.patientName} ${payment.method} ${payment.reference ?? ""} ${payment.invoiceId ?? ""}`
          .toLowerCase()
          .includes(query);
      const matchesStatus = statusFilter === "all" || payment.status.toLowerCase() === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [payments, search, statusFilter]);

  const totalReceived = payments
    .filter((payment) => payment.status === "Completed")
    .reduce((sum, payment) => sum + payment.amount, 0);
  const completedCount = payments.filter((payment) => payment.status === "Completed").length;
  const linkedCount = payments.filter((payment) => payment.invoiceId).length;

  function resetForm() {
    setPatientId("");
    setInvoiceId("");
    setMethod("UPI");
    setAmount("");
    setReference("");
    setFormError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const patient = patients.find((item) => item.id === patientId);
    if (!patient) {
      setFormError("Select a patient before recording the payment.");
      return;
    }

    setIsSaving(true);
    setFormError("");
    try {
      const result = await recordPayment({
        data: {
          patientId: patient.id,
          patientName: patient.name,
          ...(invoiceId ? { invoiceId } : {}),
          method,
          amount: Number(amount),
          ...(reference.trim() ? { reference: reference.trim() } : {}),
        },
      });
      if (!result.success) {
        setFormError(result.message);
        return;
      }

      const payment = result.payment;
      setPayments((current) => [payment, ...current]);
      setDialogOpen(false);
      resetForm();
      onNotice(`Payment ${payment.id} recorded and saved to MongoDB.`);
    } catch (error) {
      console.error("Failed to record payment in MongoDB.", error);
      setFormError(error instanceof Error ? error.message : "Payment could not be saved. Check the server log for details.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleConfirmDelete() {
    if (!paymentToDelete) return;
    setIsDeleting(true);
    const target = paymentToDelete;
    try {
      setPayments((current) => current.filter((p) => p.id !== target.id));
      setPaymentToDelete(null);
      await deletePayment({ data: { id: target.id } });
      onNotice(`Payment ${target.id} (${formatINR(target.amount)}) removed from clinic records.`);
    } catch (err) {
      console.error("Failed to delete payment:", err);
      onNotice(`Payment ${target.id} removed locally.`);
    } finally {
      setIsDeleting(false);
    }
  }

  function handleDialogChange(open: boolean) {
    setDialogOpen(open);
    if (!open) resetForm();
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-3">
        <MetricCard
          label="Total recorded"
          value={formatINR(totalReceived)}
          icon={WalletCards}
          note="Completed payments"
        />
        <MetricCard
          label="Completed transactions"
          value={String(completedCount)}
          icon={CheckCircle2}
          note="Saved in MongoDB"
        />
        <MetricCard
          label="Linked to invoices"
          value={String(linkedCount)}
          icon={CreditCard}
          note={`${payments.length - linkedCount} without an invoice`}
        />
      </div>

      <section className="rounded-md border border-border bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-5">
          <div>
            <h2 className="text-sm font-semibold">Payment transactions</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Record and review clinic payments stored in MongoDB Atlas
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-2 sm:w-auto">
            <div className="relative min-w-[180px] flex-1 sm:flex-none">
              <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <Input
                aria-label="Search payments"
                placeholder="Search transactions..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="h-9 pl-8 text-xs"
              />
            </div>
            <select
              aria-label="Filter by payment status"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="h-9 rounded-md border border-input bg-background px-2 text-xs"
            >
              <option value="all">All statuses</option>
              <option value="completed">Completed</option>
            </select>
            <Button size="sm" onClick={() => setDialogOpen(true)}>
              <Plus /> Record payment
            </Button>
          </div>
        </div>

        {loadError && (
          <div role="alert" className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 text-sm text-destructive sm:px-5">
            <span>{loadError}</span>
            <Button variant="outline" size="sm" onClick={() => void loadPayments()}>
              Retry
            </Button>
          </div>
        )}

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-5">Transaction</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Payment method</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                {canDelete && <TableHead className="pr-5 text-right">Actions</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={canDelete ? 7 : 6} className="h-24 text-center text-sm text-muted-foreground">
                    Loading payments...
                  </TableCell>
                </TableRow>
              ) : filteredPayments.length ? (
                filteredPayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="whitespace-nowrap pl-5 text-xs font-semibold">
                      <div>{payment.id}</div>
                      {(payment.invoiceId || payment.reference) && (
                        <div className="mt-1 text-[10px] font-normal text-muted-foreground">
                          {[payment.invoiceId, payment.reference].filter(Boolean).join(" · ")}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-xs font-medium">
                      {payment.patientName}
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                      {payment.method}
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                      {formatPaymentDate(payment.date)}
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-xs font-semibold">
                      {formatINR(payment.amount)}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                        <CheckCircle2 className="size-3" />
                        {payment.status}
                      </span>
                    </TableCell>
                    {canDelete && (
                      <TableCell className="pr-5 text-right whitespace-nowrap">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-7 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                          title="Delete payment record"
                          aria-label={`Delete payment ${payment.id}`}
                          onClick={() => setPaymentToDelete(payment)}
                        >
                          <Trash2 className="size-3.5" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={canDelete ? 7 : 6} className="h-24 text-center text-sm text-muted-foreground">
                    {payments.length
                      ? "No payments match this search."
                      : "No payments have been recorded yet."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="border-t border-border px-4 py-3 text-xs text-muted-foreground sm:px-5">
          Showing {filteredPayments.length} of {payments.length} saved transactions
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Record a payment</DialogTitle>
            <DialogDescription>
              Save a completed payment transaction to the clinic database.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5 text-xs font-medium">
                Patient
                <select
                  required
                  value={patientId}
                  onChange={(event) => setPatientId(event.target.value)}
                  className={fieldClassName}
                >
                  <option value="">Select patient</option>
                  {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                      {patient.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1.5 text-xs font-medium">
                Invoice (optional)
                <select
                  value={invoiceId}
                  onChange={(event) => setInvoiceId(event.target.value)}
                  className={fieldClassName}
                >
                  <option value="">No invoice linked</option>
                  {invoices.map((invoice) => (
                    <option key={invoice.id} value={invoice.id}>
                      {invoice.id} · {invoice.patient}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1.5 text-xs font-medium">
                Payment method
                <select
                  required
                  value={method}
                  onChange={(event) =>
                    setMethod(event.target.value as (typeof paymentMethods)[number])
                  }
                  className={fieldClassName}
                >
                  {paymentMethods.map((paymentMethod) => (
                    <option key={paymentMethod} value={paymentMethod}>
                      {paymentMethod}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1.5 text-xs font-medium">
                Amount (INR)
                <Input
                  required
                  min="0.01"
                  max="10000000"
                  step="0.01"
                  type="number"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="e.g. 4500"
                  className="h-9 text-sm"
                />
              </label>
            </div>
            <label className="block space-y-1.5 text-xs font-medium">
              Transaction reference (optional)
              <Input
                maxLength={120}
                value={reference}
                onChange={(event) => setReference(event.target.value)}
                placeholder="UPI reference, receipt number, etc."
                className="h-9 text-sm"
              />
            </label>
            {formError && (
              <p role="alert" className="text-sm text-destructive">
                {formError}
              </p>
            )}
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleDialogChange(false)}
                disabled={isSaving}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "Saving..." : "Save payment"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Payment Confirmation Dialog */}
      <Dialog open={!!paymentToDelete} onOpenChange={(open) => !open && setPaymentToDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2.5 text-destructive">
              <span className="grid size-9 place-items-center rounded-lg bg-destructive/10 text-destructive">
                <AlertTriangle className="size-5" />
              </span>
              <div>
                <DialogTitle className="text-base font-semibold">Delete Payment Record</DialogTitle>
                <DialogDescription className="text-xs">
                  This transaction will be permanently removed from clinic records and MongoDB Atlas.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {paymentToDelete && (
            <div className="rounded-lg border border-border bg-muted/40 p-3.5 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaction ID:</span>
                <span className="font-mono font-semibold">{paymentToDelete.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Patient:</span>
                <span className="font-semibold">{paymentToDelete.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-semibold text-foreground">{formatINR(paymentToDelete.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Method:</span>
                <span>{paymentToDelete.method}</span>
              </div>
              {paymentToDelete.invoiceId && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Linked Invoice:</span>
                  <span className="font-mono">{paymentToDelete.invoiceId}</span>
                </div>
              )}
            </div>
          )}

          <DialogFooter className="gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPaymentToDelete(null)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="gap-1.5"
              onClick={handleConfirmDelete}
              disabled={isDeleting}
            >
              <Trash2 className="size-3.5" />
              {isDeleting ? "Deleting..." : "Delete Payment"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon: Icon,
  note,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  note: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-xs sm:p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="grid size-8 place-items-center rounded bg-primary/10 text-primary">
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-3 text-2xl font-bold font-mono text-foreground">{value}</p>
      <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
        {label === "Total recorded" ? <CreditCard className="size-3" /> : <Clock3 className="size-3" />}
        {note}
      </p>
    </div>
  );
}

function formatPaymentDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });
}
