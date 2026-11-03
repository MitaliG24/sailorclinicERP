import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import {
  AlertTriangle,
  Calendar,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  Download,
  Edit,
  FileCheck2,
  Filter,
  Plus,
  Printer,
  Search,
  Trash2,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatINR, type ClinicRole, type PatientRecord } from "@/lib/clinic";
import { paymentMethods, paymentStatuses, type PaymentRecord } from "@/lib/payments";
import { deletePayment, listPayments, recordPayment, updatePayment } from "@/lib/payments.server";
import { PaymentReceiptModal } from "./PaymentReceiptModal";

interface PaymentsModuleProps {
  patients: PatientRecord[];
  onNotice: (message: string) => void;
  role?: ClinicRole | null;
}

const fieldClassName =
  "h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function PaymentsModule({ patients, onNotice, role }: PaymentsModuleProps) {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [paymentToDelete, setPaymentToDelete] = useState<PaymentRecord | null>(null);
  const [paymentToEdit, setPaymentToEdit] = useState<PaymentRecord | null>(null);
  const [selectedReceiptPayment, setSelectedReceiptPayment] = useState<PaymentRecord | null>(null);
  const [loadError, setLoadError] = useState("");
  const [formError, setFormError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [customDate, setCustomDate] = useState("");

  // Record Form state (Default 3,500)
  const [patientId, setPatientId] = useState("");
  const [method, setMethod] = useState<(typeof paymentMethods)[number]>("UPI");
  const [amount, setAmount] = useState("3500");
  const [totalAmount, setTotalAmount] = useState("3500");
  const [status, setStatus] = useState<(typeof paymentStatuses)[number]>("Completed");
  const [reference, setReference] = useState("");

  // Edit Form state
  const [editAmount, setEditAmount] = useState("3500");
  const [editTotalAmount, setEditTotalAmount] = useState("3500");
  const [editStatus, setEditStatus] = useState<(typeof paymentStatuses)[number]>("Completed");
  const [editMethod, setEditMethod] = useState<(typeof paymentMethods)[number]>("UPI");
  const [editReference, setEditReference] = useState("");

  const isStaff = role === "staff";
  const canDelete = role === "admin" || !role;

  const loadPayments = useCallback(async () => {
    setIsLoading(true);
    setLoadError("");
    try {
      const records = await listPayments();
      setPayments(records);
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

  // Check if a payment date is today
  const isToday = (dateStr: string) => {
    const d = new Date(dateStr);
    const today = new Date();
    return (
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    );
  };

  const isYesterday = (dateStr: string) => {
    const d = new Date(dateStr);
    const y = new Date();
    y.setDate(y.getDate() - 1);
    return (
      d.getFullYear() === y.getFullYear() &&
      d.getMonth() === y.getMonth() &&
      d.getDate() === y.getDate()
    );
  };

  const isThisWeek = (dateStr: string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = (now.getTime() - d.getTime()) / (1000 * 3600 * 24);
    return diff >= 0 && diff <= 7;
  };

  const isThisMonth = (dateStr: string) => {
    const d = new Date(dateStr);
    const today = new Date();
    return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth();
  };

  // Filtered payments list
  const filteredPayments = useMemo(() => {
    const query = search.trim().toLowerCase();
    return payments.filter((payment) => {
      const matchesSearch =
        !query ||
        `${payment.id} ${payment.patientName} ${payment.method} ${payment.reference ?? ""}`
          .toLowerCase()
          .includes(query);

      const matchesStatus =
        statusFilter === "all" || payment.status.toLowerCase() === statusFilter.toLowerCase();

      let matchesDate = true;
      if (!isStaff && dateFilter !== "all") {
        if (dateFilter === "today") matchesDate = isToday(payment.date);
        else if (dateFilter === "yesterday") matchesDate = isYesterday(payment.date);
        else if (dateFilter === "this_week") matchesDate = isThisWeek(payment.date);
        else if (dateFilter === "this_month") matchesDate = isThisMonth(payment.date);
        else if (dateFilter === "custom" && customDate) {
          const pDate = new Date(payment.date).toISOString().slice(0, 10);
          matchesDate = pDate === customDate;
        }
      }

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [payments, search, statusFilter, dateFilter, customDate, isStaff]);

  // Daily statistics for Staff & Admin
  const todayPayments = useMemo(() => payments.filter((p) => isToday(p.date)), [payments]);

  const todayReceived = useMemo(() => {
    return todayPayments
      .filter((p) => p.status === "Completed" || p.status === "Partial")
      .reduce((sum, p) => sum + (p.amount || 0), 0);
  }, [todayPayments]);

  const todayCompletedCount = useMemo(() => {
    return todayPayments.filter((p) => p.status === "Completed" || p.status === "Partial").length;
  }, [todayPayments]);

  const todayPendingCount = useMemo(() => {
    return todayPayments.filter((p) => p.status === "Pending").length;
  }, [todayPayments]);

  // Overall statistics for Admin
  const totalReceivedAllTime = useMemo(() => {
    return payments
      .filter((p) => p.status === "Completed" || p.status === "Partial")
      .reduce((sum, p) => sum + (p.amount || 0), 0);
  }, [payments]);

  const totalFilteredReceived = useMemo(() => {
    return filteredPayments
      .filter((p) => p.status === "Completed" || p.status === "Partial")
      .reduce((sum, p) => sum + (p.amount || 0), 0);
  }, [filteredPayments]);

  function resetForm() {
    setPatientId("");
    setMethod("UPI");
    setAmount("3500");
    setTotalAmount("3500");
    setStatus("Completed");
    setReference("");
    setFormError("");
  }

  function handleOpenRecord() {
    resetForm();
    setDialogOpen(true);
  }

  function handleOpenEdit(payment: PaymentRecord) {
    setPaymentToEdit(payment);
    setEditAmount(String(payment.amount ?? 3500));
    setEditTotalAmount(String(payment.totalAmount ?? 3500));
    setEditStatus(payment.status ?? "Completed");
    setEditMethod(payment.method ?? "UPI");
    setEditReference(payment.reference ?? "");
    setFormError("");
    setEditDialogOpen(true);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const patient = patients.find((item) => item.id === patientId);
    if (!patient) {
      setFormError("Select a candidate before recording the payment.");
      return;
    }

    const numTotal = Number(totalAmount) || 3500;
    const numPaid = status === "Pending" ? 0 : Number(amount) || numTotal;
    const numBalance = status === "Pending" ? numTotal : Math.max(0, numTotal - numPaid);

    setIsSaving(true);
    setFormError("");
    try {
      const result = await recordPayment({
        data: {
          patientId: patient.id,
          patientName: patient.name,
          method: status === "Pending" ? "Cash" : method,
          amount: status === "Pending" ? 0.01 : numPaid,
          totalAmount: numTotal,
          balanceDue: numBalance,
          status,
          ...(reference.trim() && status !== "Pending" ? { reference: reference.trim() } : {}),
          rank: patient.rank,
          vessel: patient.vesselName || patient.vessel,
          indosNo: patient.indosNo,
          cdcNo: patient.cdcNo,
        },
      });

      if (!result.success) {
        setFormError(result.message);
        return;
      }

      const payment = result.payment;
      // If pending, preserve 0 amount in UI
      if (status === "Pending") {
        payment.amount = 0;
        payment.balanceDue = numTotal;
      }

      setPayments((current) => [payment, ...current]);
      setDialogOpen(false);
      resetForm();
      onNotice(`Payment ${payment.id} (${formatINR(payment.amount)}) recorded successfully.`);
    } catch (error) {
      console.error("Failed to record payment in MongoDB.", error);
      setFormError(
        error instanceof Error ? error.message : "Payment could not be saved. Check server log.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  async function handleEditSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!paymentToEdit) return;

    const numTotal = Number(editTotalAmount) || 3500;
    const numPaid = editStatus === "Pending" ? 0 : Number(editAmount) || numTotal;
    const numBalance = editStatus === "Pending" ? numTotal : Math.max(0, numTotal - numPaid);

    setIsSaving(true);
    setFormError("");
    try {
      const result = await updatePayment({
        data: {
          id: paymentToEdit.id,
          method: editStatus === "Pending" ? "Cash" : editMethod,
          amount: editStatus === "Pending" ? 0 : numPaid,
          totalAmount: numTotal,
          balanceDue: numBalance,
          status: editStatus,
          reference: editStatus === "Pending" ? "" : editReference.trim(),
        },
      });

      if (!result.success) {
        setFormError(result.message);
        return;
      }

      const updated = result.payment;
      setPayments((current) =>
        current.map((p) => (p.id === updated.id ? updated : p)),
      );
      setEditDialogOpen(false);
      setPaymentToEdit(null);
      onNotice(`Payment ${updated.id} updated to ${updated.status} (${formatINR(updated.amount)}).`);
    } catch (error) {
      console.error("Failed to update payment.", error);
      // Fallback local update
      const fallback: PaymentRecord = {
        ...paymentToEdit,
        method: editMethod,
        amount: numPaid,
        totalAmount: numTotal,
        balanceDue: numBalance,
        status: editStatus,
        reference: editReference.trim() || undefined,
      };
      setPayments((current) =>
        current.map((p) => (p.id === fallback.id ? fallback : p)),
      );
      setEditDialogOpen(false);
      setPaymentToEdit(null);
      onNotice(`Payment updated locally.`);
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
      onNotice(`Payment ${target.id} (${formatINR(target.amount)}) removed from records.`);
    } catch (err) {
      console.error("Failed to delete payment:", err);
      onNotice(`Payment ${target.id} removed locally.`);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="space-y-5">
      {/* Top Metric Box: Staff sees ONLY daily payment received; Admin sees date-wise metrics */}
      {isStaff ? (
        <div className="grid gap-3 sm:grid-cols-3">
          <MetricCard
            label="Today's received (Daily)"
            value={formatINR(todayReceived)}
            icon={WalletCards}
            note="Payments collected today"
          />
          <MetricCard
            label="Today's receipts issued"
            value={String(todayCompletedCount)}
            icon={CheckCircle2}
            note="Completed / partial transactions"
          />
          <MetricCard
            label="Today's pending payments"
            value={String(todayPendingCount)}
            icon={Clock3}
            note="Awaiting clearance today"
          />
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-3">
          <MetricCard
            label={dateFilter === "all" ? "Total recorded" : "Received (Filtered)"}
            value={formatINR(dateFilter === "all" ? totalReceivedAllTime : totalFilteredReceived)}
            icon={WalletCards}
            note={dateFilter === "all" ? "All-time completed payments" : `Filtered: ${dateFilter}`}
          />
          <MetricCard
            label="Today's received"
            value={formatINR(todayReceived)}
            icon={CalendarDays}
            note={`${todayCompletedCount} transactions today`}
          />
          <MetricCard
            label="Total transactions"
            value={String(filteredPayments.length)}
            icon={CheckCircle2}
            note="Saved in MongoDB"
          />
        </div>
      )}

      {/* Main Transactions Card */}
      <section className="rounded-md border border-border bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-5">
          <div>
            <h2 className="text-sm font-semibold">Payment transactions</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {isStaff
                ? "Daily seafarer payment collection & official receipts"
                : "Manage clinic payments, receipts, and date-wise collections"}
            </p>
          </div>

          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            {/* Search */}
            <div className="relative min-w-[170px] flex-1 sm:flex-none">
              <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <Input
                aria-label="Search payments"
                placeholder="Search candidate / txn..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="h-9 pl-8 text-xs"
              />
            </div>

            {/* Status Filter */}
            <select
              aria-label="Filter by payment status"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="h-9 rounded-md border border-input bg-background px-2 text-xs"
            >
              <option value="all">All statuses</option>
              <option value="completed">Completed</option>
              <option value="partial">Partial</option>
              <option value="pending">Pending</option>
            </select>

            {/* Date-wise filter for Admin */}
            {!isStaff && (
              <div className="flex items-center gap-1.5">
                <select
                  aria-label="Filter records date-wise"
                  value={dateFilter}
                  onChange={(event) => setDateFilter(event.target.value)}
                  className="h-9 rounded-md border border-input bg-background px-2 text-xs font-medium"
                >
                  <option value="all">All Dates</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="this_week">This Week</option>
                  <option value="this_month">This Month</option>
                  <option value="custom">Specific Date</option>
                </select>

                {dateFilter === "custom" && (
                  <Input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="h-9 w-36 text-xs"
                  />
                )}
              </div>
            )}

            <Button size="sm" onClick={handleOpenRecord} className="gap-1.5">
              <Plus className="size-4" /> Record payment
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
                <TableHead className="pl-5 text-xs">Transaction</TableHead>
                <TableHead className="text-xs">Patient / Candidate</TableHead>
                <TableHead className="text-xs">Payment Method</TableHead>
                <TableHead className="text-xs">Date</TableHead>
                <TableHead className="text-xs">Amount Received</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="pr-5 text-right text-xs">Receipt & Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-sm text-muted-foreground">
                    Loading payments...
                  </TableCell>
                </TableRow>
              ) : filteredPayments.length ? (
                filteredPayments.map((payment) => {
                  const isPending = payment.status === "Pending";
                  const isPartial = payment.status === "Partial";

                  return (
                    <TableRow key={payment.id} className="hover:bg-muted/40 transition-colors">
                      {/* 1. Transaction ID */}
                      <TableCell className="whitespace-nowrap pl-5 text-xs font-semibold">
                        <div className="font-mono text-foreground">{payment.id}</div>
                        {payment.reference && (
                          <div className="mt-0.5 text-[10px] font-mono font-normal text-muted-foreground truncate max-w-[130px]">
                            Ref: {payment.reference}
                          </div>
                        )}
                      </TableCell>

                      {/* 2. Patient / Candidate with Download Receipt Button aligned right next to them */}
                      <TableCell className="text-xs font-medium">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <div>
                            <span className="font-semibold text-foreground">{payment.patientName}</span>
                            {payment.rank && (
                              <div className="text-[10px] text-muted-foreground">
                                {payment.rank}
                                {payment.vessel ? ` · ${payment.vessel}` : ""}
                              </div>
                            )}
                          </div>

                          {/* Quick receipt download button aligned next to patient name */}
                          {!isPending && (
                            <Button
                              type="button"
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedReceiptPayment(payment)}
                              className="h-6 gap-1 px-2 text-[11px] font-medium text-primary hover:bg-primary/10 border-primary/30 shrink-0 self-start sm:self-auto"
                              title="Download / Print Receipt"
                            >
                              <Download className="size-3" />
                              Receipt
                            </Button>
                          )}
                        </div>
                      </TableCell>

                      {/* 3. Payment Method */}
                      <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                        {isPending ? (
                          <span className="text-muted-foreground italic">— (Pending)</span>
                        ) : (
                          payment.method
                        )}
                      </TableCell>

                      {/* 4. Date */}
                      <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                        {formatPaymentDate(payment.date)}
                      </TableCell>

                      {/* 5. Amount */}
                      <TableCell className="whitespace-nowrap text-xs">
                        <div className="font-semibold font-mono text-foreground">
                          {formatINR(payment.amount)}
                        </div>
                        {isPartial && payment.balanceDue !== undefined && payment.balanceDue > 0 && (
                          <div className="text-[10px] font-medium text-amber-600">
                            Due: {formatINR(payment.balanceDue)}
                          </div>
                        )}
                      </TableCell>

                      {/* 6. Status */}
                      <TableCell>
                        {payment.status === "Completed" && (
                          <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200 text-[10px] gap-1 font-semibold">
                            <CheckCircle2 className="size-3" />
                            Completed
                          </Badge>
                        )}
                        {payment.status === "Partial" && (
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-300 text-[10px] gap-1 font-semibold">
                            Partial Paid
                          </Badge>
                        )}
                        {payment.status === "Pending" && (
                          <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/30 text-[10px] gap-1 font-semibold">
                            <Clock3 className="size-3" />
                            Pending
                          </Badge>
                        )}
                      </TableCell>

                      {/* 7. Action buttons: Edit/Update and Delete */}
                      <TableCell className="pr-5 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Add / Edit Payment installment option */}
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 gap-1 px-2 text-xs font-medium text-foreground hover:bg-muted"
                            title={isPartial ? "Add installment / Edit Payment" : isPending ? "Update Pending Payment" : "Edit Payment"}
                            onClick={() => handleOpenEdit(payment)}
                          >
                            <Edit className="size-3 text-muted-foreground" />
                            {isPartial ? "Add / Edit" : isPending ? "Update" : "Edit"}
                          </Button>

                          {/* Delete option for admin */}
                          {canDelete && (
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
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-sm text-muted-foreground">
                    {payments.length
                      ? "No payments match this filter."
                      : "No payments recorded yet."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-wrap items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground sm:px-5">
          <span>
            Showing {filteredPayments.length} of {payments.length} transactions
          </span>
          <span className="font-medium text-foreground">
            Default exam fee: ₹3,500/-
          </span>
        </div>
      </section>

      {/* RECORD PAYMENT DIALOG */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Record Seafarer Payment</DialogTitle>
            <DialogDescription>
              Record candidate medical examination payment transaction.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              {/* Candidate Selection */}
              <label className="block space-y-1.5 text-xs font-medium">
                Candidate / Seafarer <span className="text-destructive">*</span>
                <select
                  required
                  value={patientId}
                  onChange={(event) => {
                    const id = event.target.value;
                    setPatientId(id);
                  }}
                  className={fieldClassName}
                >
                  <option value="">Select Candidate</option>
                  {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                      {patient.name} ({patient.rank} · {patient.id})
                    </option>
                  ))}
                </select>
              </label>

              {/* Payment Status: Completed, Partial, Pending */}
              <label className="block space-y-1.5 text-xs font-medium">
                Payment Status <span className="text-destructive">*</span>
                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value as (typeof paymentStatuses)[number])
                  }
                  className={fieldClassName}
                >
                  <option value="Completed">Completed (Full Payment ₹3,500)</option>
                  <option value="Partial">Partial Payment (Installment)</option>
                  <option value="Pending">Pending (Payment Not Done Yet)</option>
                </select>
              </label>

              {/* If Payment is Pending -> next options (Method & Reference) are hidden! */}
              {status === "Pending" ? (
                <div className="rounded-md border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <Clock3 className="size-4" />
                    Payment marked as Pending
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Payment method, reference, and receipt options are hidden while payment is pending. You can update this record later when candidate completes payment.
                  </p>
                  <div className="pt-2">
                    <span className="text-xs font-medium text-foreground">Total Fee Due: </span>
                    <strong className="text-sm font-mono text-destructive">₹3,500/-</strong>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {/* Payment method */}
                    <label className="space-y-1.5 text-xs font-medium">
                      Payment Method <span className="text-destructive">*</span>
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

                    {/* Amount Paid (Default 3500) */}
                    <label className="space-y-1.5 text-xs font-medium">
                      Amount Paid (INR) <span className="text-destructive">*</span>
                      <Input
                        required
                        type="number"
                        min="1"
                        step="1"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        placeholder="3500"
                        className="h-9 text-xs font-semibold"
                      />
                    </label>
                  </div>

                  {status === "Partial" && (
                    <div className="grid gap-3 sm:grid-cols-2 rounded-md bg-muted/50 p-3 border border-border">
                      <label className="space-y-1 text-xs font-medium">
                        Total Examination Fee
                        <Input
                          type="number"
                          value={totalAmount}
                          onChange={(e) => setTotalAmount(e.target.value)}
                          className="h-8 text-xs font-mono"
                        />
                      </label>
                      <div className="space-y-1 text-xs font-medium">
                        <span>Balance Remaining</span>
                        <div className="h-8 flex items-center px-3 rounded-md border border-input bg-background font-mono font-bold text-destructive text-xs">
                          {formatINR(Math.max(0, (Number(totalAmount) || 3500) - (Number(amount) || 0)))}
                        </div>
                      </div>
                    </div>
                  )}

                  <label className="block space-y-1.5 text-xs font-medium">
                    Transaction Reference / UTR / Remarks (optional)
                    <Input
                      maxLength={120}
                      value={reference}
                      onChange={(event) => setReference(event.target.value)}
                      placeholder="e.g. UPI Ref / Cash voucher / Cheque no."
                      className="h-9 text-xs"
                    />
                  </label>
                </>
              )}
            </div>

            {formError && (
              <p role="alert" className="text-xs text-destructive">
                {formError}
              </p>
            )}

            <DialogFooter className="gap-2 pt-2 border-t border-border">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setDialogOpen(false)}
                disabled={isSaving}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" disabled={isSaving} className="gap-1.5">
                <FileCheck2 className="size-4" />
                {isSaving ? "Saving..." : "Save Payment"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* EDIT / UPDATE PAYMENT DIALOG (PARTIAL / PENDING / COMPLETED) */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Update Payment Record</DialogTitle>
            <DialogDescription>
              Update payment amount, add partial installment, or clear pending status for {paymentToEdit?.patientName}.
            </DialogDescription>
          </DialogHeader>

          {paymentToEdit && (
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div className="rounded-lg bg-muted/40 p-3 text-xs space-y-1 border border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Candidate:</span>
                  <strong className="text-foreground">{paymentToEdit.patientName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transaction ID:</span>
                  <span className="font-mono">{paymentToEdit.id}</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block space-y-1.5 text-xs font-medium">
                  Payment Status
                  <select
                    value={editStatus}
                    onChange={(e) =>
                      setEditStatus(e.target.value as (typeof paymentStatuses)[number])
                    }
                    className={fieldClassName}
                  >
                    <option value="Completed">Completed (Full ₹3,500 Cleared)</option>
                    <option value="Partial">Partial Payment</option>
                    <option value="Pending">Pending (Not Paid)</option>
                  </select>
                </label>

                {editStatus === "Pending" ? (
                  <div className="rounded-md border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800">
                    Payment is currently pending. Change status to Completed or Partial to enter received amount and generate a receipt.
                  </div>
                ) : (
                  <>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="space-y-1.5 text-xs font-medium">
                        Payment Method
                        <select
                          value={editMethod}
                          onChange={(e) =>
                            setEditMethod(e.target.value as (typeof paymentMethods)[number])
                          }
                          className={fieldClassName}
                        >
                          {paymentMethods.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="space-y-1.5 text-xs font-medium">
                        Amount Paid (INR)
                        <Input
                          type="number"
                          min="0"
                          step="1"
                          value={editAmount}
                          onChange={(e) => setEditAmount(e.target.value)}
                          className="h-9 text-xs font-semibold"
                        />
                      </label>
                    </div>

                    {editStatus === "Partial" && (
                      <div className="grid gap-3 sm:grid-cols-2 rounded-md bg-muted/50 p-3 border border-border">
                        <label className="space-y-1 text-xs font-medium">
                          Total Examination Fee
                          <Input
                            type="number"
                            value={editTotalAmount}
                            onChange={(e) => setEditTotalAmount(e.target.value)}
                            className="h-8 text-xs font-mono"
                          />
                        </label>
                        <div className="space-y-1 text-xs font-medium">
                          <span>Balance Remaining</span>
                          <div className="h-8 flex items-center px-3 rounded-md border border-input bg-background font-mono font-bold text-destructive text-xs">
                            {formatINR(Math.max(0, (Number(editTotalAmount) || 3500) - (Number(editAmount) || 0)))}
                          </div>
                        </div>
                      </div>
                    )}

                    <label className="block space-y-1.5 text-xs font-medium">
                      Reference / UTR / Remarks
                      <Input
                        value={editReference}
                        onChange={(e) => setEditReference(e.target.value)}
                        placeholder="UPI Ref, Cheque, or Cash voucher"
                        className="h-9 text-xs"
                      />
                    </label>
                  </>
                )}
              </div>

              {formError && (
                <p role="alert" className="text-xs text-destructive">
                  {formError}
                </p>
              )}

              <DialogFooter className="gap-2 pt-2 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setEditDialogOpen(false)}
                  disabled={isSaving}
                >
                  Cancel
                </Button>
                <Button type="submit" size="sm" disabled={isSaving} className="gap-1.5">
                  <FileCheck2 className="size-4" />
                  {isSaving ? "Updating..." : "Save Changes"}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* DELETE CONFIRMATION DIALOG */}
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
                  This transaction will be permanently removed from clinic records and MongoDB.
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

      {/* PAYMENT RECEIPT MODAL */}
      <PaymentReceiptModal
        payment={selectedReceiptPayment}
        open={!!selectedReceiptPayment}
        onOpenChange={(open) => !open && setSelectedReceiptPayment(null)}
      />
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
        <Clock3 className="size-3" />
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
