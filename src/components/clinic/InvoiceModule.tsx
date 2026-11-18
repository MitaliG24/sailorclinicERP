import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCircle2,
  CheckSquare,
  Clock3,
  CreditCard,
  Download,
  Edit3,
  FileCheck2,
  FileText,
  Receipt,
  Search,
  Square,
  Trash2,
  TrendingUp,
  User,
  WalletCards,
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
import {
  formatINR,
  type ClinicRole,
  type InvoiceRecord,
  type PatientRecord,
} from "@/lib/clinic";
import type { PaymentRecord } from "@/lib/payments";
import { PaymentReceiptModal } from "./PaymentReceiptModal";

interface InvoiceModuleProps {
  invoices: InvoiceRecord[];
  patients: PatientRecord[];
  onAddInvoice: (invoice: InvoiceRecord) => void;
  onUpdateInvoice: (invoice: InvoiceRecord) => void;
  onDeleteInvoice: (id: string) => void;
  onNotice: (message: string) => void;
  onUpdatePatient?: (patient: PatientRecord) => void;
  role?: ClinicRole | null;
}

type ExtendedInvoiceRecord = InvoiceRecord & { patientRecord?: PatientRecord | undefined };

export function InvoiceModule({
  invoices,
  patients,
  onAddInvoice,
  onUpdateInvoice,
  onDeleteInvoice,
  onNotice,
  onUpdatePatient,
  role,
}: InvoiceModuleProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [collectionPeriod, setCollectionPeriod] = useState<"day" | "month" | "year" | "all">("all");
  const [selectedRecordIds, setSelectedRecordIds] = useState<string[]>([]);
  const [selectedReceiptPayment, setSelectedReceiptPayment] = useState<PaymentRecord | null>(null);

  // Edit Payment Modal state for partial payment / pending payment updates
  const [editingRecord, setEditingRecord] = useState<ExtendedInvoiceRecord | null>(null);
  const [editStatus, setEditStatus] = useState<"Paid" | "Partial" | "Pending">("Paid");
  const [editTotalFee, setEditTotalFee] = useState<number>(3500);
  const [editAmountPaid, setEditAmountPaid] = useState<number>(3500);
  const [editPaymentMode, setEditPaymentMode] = useState<"Cash" | "Trans. ID" | "UPI" | "Bank Transfer">("UPI");
  const [editTransactionId, setEditTransactionId] = useState<string>("");
  const [editPaymentProof, setEditPaymentProof] = useState<string>("");

  const isStaff = role === "staff";
  const todayIso = new Date().toISOString().slice(0, 10);

  // Derive combined payment records from patients & invoices so all patient payment details are 100% synchronized
  const allRecords = useMemo(() => {
    // 1. Primary records derived directly from patients list - guarantees 100% parity with Patient Records
    const list: (InvoiceRecord & { patientRecord?: PatientRecord | undefined })[] = patients
      .filter((p) => {
        // If an invoice was explicitly deleted from invoices list, don't show it
        if (p.invoiceNo) {
          return invoices.some((inv) => inv.id === p.invoiceNo || inv.patientId === p.id);
        }
        return true;
      })
      .map((p) => {
      const matchingInv = invoices.find(
        (inv) => (inv.patientId && inv.patientId === p.id) || (inv.id && p.invoiceNo && inv.id === p.invoiceNo) || (inv.patient && p.name && inv.patient.toLowerCase() === p.name.toLowerCase())
      );

      const rawAmt =
        p.paymentAmount !== undefined && p.paymentAmount !== ""
          ? Number(p.paymentAmount.replace(/[^0-9.]/g, "")) || 0
          : (matchingInv?.amountPaid ?? (p.paymentStatus === "Pending" ? 0 : (p.totalFee || 3500)));
      const fee = p.totalFee || matchingInv?.total || (rawAmt > 0 ? rawAmt : 3500);

      // Status resolution matching patient record payment details exactly
      const pStatus = p.paymentStatus || matchingInv?.paymentStatus || (matchingInv?.status === "Paid" ? "Paid" : "Pending");
      const isPaid = pStatus === "Paid" || pStatus === "Own";
      const isPartial = pStatus === "Partial";
      const isPending = pStatus === "Pending";

      let amountPaid = 0;
      let dues = 0;

      if (isPaid) {
        amountPaid = fee;
        dues = 0;
      } else if (isPending) {
        amountPaid = 0;
        dues = p.balanceDue ?? fee;
      } else if (isPartial) {
        amountPaid = Math.min(fee, Math.max(0, rawAmt));
        dues = p.balanceDue ?? Math.max(0, fee - amountPaid);
      } else {
        amountPaid = fee;
        dues = 0;
      }

      const recordId = matchingInv?.id || p.invoiceNo || `INV-2026-${String(p.srNo || 1).padStart(3, "0")}`;

      return {
        id: recordId,
        patient: p.name,
        patientId: p.id,
        date: p.date || todayIso,
        dueDate: isPaid ? (p.date || todayIso) : new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10),
        amount: formatINR(fee),
        total: fee,
        subtotal: fee,
        tax: 0,
        discount: 0,
        status: isPaid ? ("Paid" as const) : ("Pending" as const),
        paymentStatus: pStatus as "Paid" | "Own" | "Partial" | "Pending",
        amountPaid,
        balanceDue: dues,
        company: p.companyName || "Independent / Agency",
        rank: p.rank,
        vessel: p.vesselName || p.vessel,
        indosNo: p.indosNo,
        cdcNo: p.cdcNo,
        certificateNo: p.certificateNo,
        paymentMethod: p.paymentMode || matchingInv?.paymentMethod || "UPI",
        transactionRef: p.transactionId || p.paymentProof || matchingInv?.transactionRef || (isPaid ? "Cleared" : "Pending clearance"),
        paidDate:
          isPaid || isPartial
            ? p.date
              ? new Date(p.date).toLocaleDateString("en-IN", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Today"
            : undefined,
        items: matchingInv?.items || [
          {
            id: "item-1",
            description: p.typeOfMedical || "Marine Medical Fitness Examination",
            sacCode: "999312",
            qty: 1,
            rate: fee,
            amount: fee,
          },
        ],
        patientRecord: p,
      };
    });

    // 2. Add standalone invoices that don't belong to any patient in the patients list
    invoices.forEach((inv) => {
      const exists = list.some(
        (item) => item.id === inv.id || (inv.patientId && item.patientId === inv.patientId) || (inv.patient && item.patient.toLowerCase() === inv.patient.toLowerCase())
      );
      if (!exists) {
        const isPaid = inv.status === "Paid";
        const isPending = inv.status === "Pending" || inv.status === "Overdue";
        const fee = inv.total || 0;
        const paid = inv.amountPaid !== undefined
          ? inv.amountPaid
          : isPaid
            ? fee
            : 0;
        const dues = inv.balanceDue !== undefined
          ? inv.balanceDue
          : isPending
            ? Math.max(0, fee - paid)
            : 0;

        list.push({
          ...inv,
          total: fee,
          amountPaid: paid,
          balanceDue: dues,
          paymentStatus: (inv.paymentStatus || (isPaid ? "Paid" : "Pending")) as any,
        });
      }
    });

    return list;
  }, [invoices, patients, todayIso]);

  // Statistics calculation: Day/Month/Year/All-wise collections, invoiced fees, and outstanding dues
  const stats = useMemo(() => {
    const thisMonthStr = todayIso.slice(0, 7);
    const thisYearStr = todayIso.slice(0, 4);

    // Dynamic resolution of the active recording date
    const latestRecordDate = allRecords.reduce((latest, r) => {
      if (!r.date) return latest;
      const dStr = r.date.slice(0, 10);
      return dStr > latest ? dStr : latest;
    }, "");

    const activeDay = allRecords.some((r) => r.date === todayIso)
      ? todayIso
      : (latestRecordDate || todayIso);
    const activeMonth = activeDay.slice(0, 7);
    const activeYear = activeDay.slice(0, 4);

    // Records filtered strictly for the selected period (Staff only sees daily payments)
    const effectivePeriod = isStaff ? "day" : collectionPeriod;
    const periodRecords =
      effectivePeriod === "all"
        ? allRecords
        : effectivePeriod === "day"
          ? allRecords.filter((rec) => {
              const d = rec.date || "";
              return (
                d === activeDay ||
                d === todayIso ||
                rec.paidDate?.includes("Today") ||
                rec.paidDate?.includes(activeDay)
              );
            })
          : effectivePeriod === "month"
            ? allRecords.filter((rec) => {
                const d = rec.date || "";
                return (
                  d.startsWith(activeMonth) ||
                  d.startsWith(thisMonthStr) ||
                  rec.paidDate?.includes(activeMonth)
                );
              })
            : allRecords.filter((rec) => {
                const d = rec.date || "";
                return (
                  d.startsWith(activeYear) ||
                  d.startsWith(thisYearStr) ||
                  rec.paidDate?.includes(activeYear)
                );
              });

    // Exact sums for the active period
    const periodInvoiced = periodRecords.reduce((sum, rec) => sum + (rec.total || 0), 0);
    const periodCollected = periodRecords.reduce((sum, rec) => sum + (rec.amountPaid || 0), 0);
    const periodOutstanding = periodRecords.reduce((sum, rec) => sum + (rec.balanceDue || 0), 0);
    const periodSettledCount = periodRecords.filter(
      (rec) => (rec.balanceDue || 0) === 0 && (rec.amountPaid || 0) > 0
    ).length;
    const periodPartialCount = periodRecords.filter(
      (rec) => (rec.balanceDue || 0) > 0
    ).length;

    // Exact sums across all records (All-time totals)
    const totalInvoicedAll = allRecords.reduce((sum, rec) => sum + (rec.total || 0), 0);
    const totalCollectedAll = allRecords.reduce((sum, rec) => sum + (rec.amountPaid || 0), 0);
    const totalOutstandingAll = allRecords.reduce((sum, rec) => sum + (rec.balanceDue || 0), 0);

    const periodLabel =
      effectivePeriod === "day"
        ? "Today"
        : effectivePeriod === "month"
          ? "This Month"
          : effectivePeriod === "year"
            ? "This Year"
            : "All Time";

    if (isStaff) {
      return {
        isStaff: true,
        primaryLabel: "Today's Collection",
        primaryValue: formatINR(periodCollected),
        primaryNote: `${periodSettledCount} receipt(s) collected today`,
        secondaryLabel: "Today's Settled Records",
        secondaryValue: String(periodSettledCount),
        secondaryNote: "Candidates cleared full fee today",
        tertiaryLabel: "Today's Partial / Dues",
        tertiaryValue: String(periodPartialCount),
        tertiaryNote: "Awaiting balance completion",
      };
    }

    return {
      isStaff: false,
      primaryLabel: "Total collection",
      primaryValue: formatINR(periodCollected),
      primaryNote: `${periodSettledCount} receipt(s) collected • All-time: ${formatINR(totalCollectedAll)}`,
      secondaryLabel: "Total Fees Invoiced",
      secondaryValue: formatINR(periodInvoiced),
      secondaryNote: `${periodRecords.length} record(s) in ${periodLabel.toLowerCase()} • All-time: ${formatINR(totalInvoicedAll)}`,
      tertiaryLabel: "Total Outstanding Dues",
      tertiaryValue: formatINR(periodOutstanding),
      tertiaryNote: `${periodPartialCount} record(s) with dues • All-time: ${formatINR(totalOutstandingAll)}`,
    };
  }, [allRecords, collectionPeriod, isStaff, todayIso]);

  // Filtered payment records based on search and status
  const filtered = useMemo(() => {
    return allRecords.filter((rec) => {
      const matchSearch =
        `${rec.id} ${rec.patient} ${rec.company} ${rec.rank || ""} ${rec.indosNo || ""} ${rec.cdcNo || ""} ${rec.paymentMethod || ""} ${rec.transactionRef || ""}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const statusLower = (rec.paymentStatus || rec.status).toLowerCase();
      let matchStatus = true;
      if (statusFilter === "paid") {
        matchStatus = statusLower === "paid" || statusLower === "own";
      } else if (statusFilter === "partial") {
        matchStatus = statusLower === "partial" || ((rec.balanceDue ?? 0) > 0 && (rec.amountPaid ?? 0) > 0);
      } else if (statusFilter === "pending") {
        matchStatus = statusLower === "pending";
      }

      return matchSearch && matchStatus;
    });
  }, [allRecords, search, statusFilter]);

  // Open professional money receipt for candidate
  const handleViewReceipt = (record: InvoiceRecord) => {
    const totalFee = record.total || 3500;
    const isPartialStatus = record.paymentStatus === "Partial";
    const paidAmt =
      record.amountPaid ?? (record.status === "Paid" ? totalFee : isPartialStatus ? 2000 : 0);
    const balance =
      record.balanceDue ?? (isPartialStatus ? Math.max(0, totalFee - paidAmt) : record.status === "Paid" ? 0 : totalFee);

    const receipt: PaymentRecord = {
      id: record.transactionRef || `REC-${record.id.replace(/[^0-9]/g, "") || "8491"}`,
      patientId: record.patientId || "PT-2408",
      patientName: record.patient,
      method: (record.paymentMethod as (typeof import("@/lib/payments").paymentMethods)[number]) || "UPI",
      amount: paidAmt > 0 ? paidAmt : totalFee,
      totalAmount: totalFee,
      balanceDue: balance,
      date: record.paidDate ? new Date(record.paidDate).toISOString() : new Date().toISOString(),
      status: balance > 0 ? "Partial" : "Completed",
      rank: record.rank,
      vessel: record.vessel,
      indosNo: record.indosNo,
      cdcNo: record.cdcNo,
    };
    setSelectedReceiptPayment(receipt);
  };

  // Open Edit Payment Modal
  const openEditPayment = (record: ExtendedInvoiceRecord) => {
    setEditingRecord(record);
    const fee = record.total || 3500;
    const isPartial = record.paymentStatus === "Partial";
    const isPending = record.paymentStatus === "Pending" || record.status === "Pending";
    const status: "Paid" | "Partial" | "Pending" = isPartial
      ? "Partial"
      : isPending
        ? "Pending"
        : "Paid";

    setEditStatus(status);
    setEditTotalFee(fee);
    setEditAmountPaid(
      status === "Paid"
        ? fee
        : status === "Pending"
          ? 0
          : record.amountPaid ?? 2000
    );
    const mode = record.paymentMethod;
    const safeMode: "Cash" | "Trans. ID" | "UPI" | "Bank Transfer" =
      mode === "Cash" || mode === "Trans. ID" || mode === "UPI" || mode === "Bank Transfer"
        ? mode
        : "UPI";
    setEditPaymentMode(safeMode);
    setEditTransactionId(record.transactionRef || `TXN-${Math.floor(10000 + Math.random() * 90000)}`);
    setEditPaymentProof("Digital receipt attached");
  };

  // Save payment changes from Edit Payment Modal
  const handleSaveEditPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRecord) return;

    const fee = Number(editTotalFee) || 3500;
    let paid = 0;
    let dues = 0;

    if (editStatus === "Paid") {
      paid = fee;
      dues = 0;
    } else if (editStatus === "Partial") {
      paid = Math.min(fee, Math.max(1, Number(editAmountPaid) || 0));
      dues = Math.max(0, fee - paid);
    } else {
      paid = 0;
      dues = fee;
    }

    const updatedRecord: InvoiceRecord = {
      ...editingRecord,
      total: fee,
      amount: formatINR(fee),
      amountPaid: paid,
      balanceDue: dues,
      paymentStatus: editStatus,
      status: editStatus === "Paid" ? "Paid" : "Pending",
      ...(editStatus !== "Pending"
        ? {
            paymentMethod: editPaymentMode,
            transactionRef: editTransactionId,
            paidDate: new Date().toLocaleDateString("en-IN", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          }
        : {}),
    };

    onUpdateInvoice(updatedRecord);

    // Also sync the associated patient dossier if present
    if (editingRecord.patientRecord && onUpdatePatient) {
      const updatedPatient: PatientRecord = {
        ...editingRecord.patientRecord,
        paymentStatus: editStatus,
        paymentAmount: `₹${paid.toLocaleString("en-IN")}.00`,
        totalFee: fee,
        balanceDue: dues,
        paymentMode: editStatus === "Pending" ? "Cash" : editPaymentMode,
        transactionId: editStatus === "Pending" ? "" : editTransactionId,
        paymentProof: editStatus === "Pending" ? "Pending clearance" : editPaymentProof,
      };
      onUpdatePatient(updatedPatient);
    }

    onNotice(
      `Payment record updated for ${editingRecord.patient}: Status ${editStatus} (Paid: ${formatINR(paid)}, Dues: ${formatINR(dues)}).`
    );
    setEditingRecord(null);
  };

  const handleToggleSelectRecord = (id: string) => {
    setSelectedRecordIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleSelectAllRecords = () => {
    if (selectedRecordIds.length === filtered.length && filtered.length > 0) {
      setSelectedRecordIds([]);
    } else {
      setSelectedRecordIds(filtered.map((r) => r.id));
    }
  };

  const handleDeleteSelectedRecords = () => {
    if (!selectedRecordIds.length) return;
    if (
      window.confirm(
        `Are you sure you want to delete ${selectedRecordIds.length} selected payment record(s)?`
      )
    ) {
      selectedRecordIds.forEach((id) => {
        onDeleteInvoice(id);
      });
      onNotice(`Deleted ${selectedRecordIds.length} payment record(s).`);
      setSelectedRecordIds([]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Metric Cards in INR: Daily payments received for staff, date-wise all records for admin */}
      <div className="grid gap-3 sm:grid-cols-3">
        {/* Card 1: Primary revenue metric - Total collection */}
        <div className="rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-muted-foreground">{stats.primaryLabel}</span>
              {!isStaff ? (
                <div className="flex items-center rounded-md border border-border bg-muted/60 p-0.5 text-[10px]">
                  {(["day", "month", "year", "all"] as const).map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setCollectionPeriod(period)}
                      className={`rounded px-1.5 py-0.5 capitalize transition-colors ${
                        collectionPeriod === period
                          ? "bg-primary text-primary-foreground font-bold shadow-2xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              ) : (
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                  Today
                </span>
              )}
            </div>
            <span className="grid size-8 place-items-center rounded bg-emerald-500/10 text-emerald-600 shrink-0">
              <WalletCards className="size-4" />
            </span>
          </div>
          <p className="mt-3 text-2xl font-bold font-mono text-emerald-600">
            {stats.primaryValue}
          </p>
          <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
            <span>{stats.primaryNote}</span>
          </p>
        </div>

        {/* Card 2: Total Fees Invoiced / Settled */}
        <div className="rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">{stats.secondaryLabel}</span>
            <span className="grid size-8 place-items-center rounded bg-primary/10 text-primary">
              <CheckCircle2 className="size-4" />
            </span>
          </div>
          <p className="mt-3 text-2xl font-bold font-mono text-foreground">
            {stats.secondaryValue}
          </p>
          <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
            <ArrowUpRight className="size-3 text-primary" />
            <span>{stats.secondaryNote}</span>
          </p>
        </div>

        {/* Card 3: Outstanding / Dues */}
        <div className="rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">{stats.tertiaryLabel}</span>
            <span className="grid size-8 place-items-center rounded bg-amber-500/10 text-amber-600">
              <Clock3 className="size-4" />
            </span>
          </div>
          <p className="mt-3 text-2xl font-bold font-mono text-amber-600">
            {stats.tertiaryValue}
          </p>
          <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
            <span>{stats.tertiaryNote}</span>
          </p>
        </div>
      </div>

      {/* Payment Records Table Section */}
      <section className="rounded-xl border border-border bg-card shadow-xs">
        {/* Table Toolbar */}
        <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold tracking-tight">Payment Records</h2>
              <Badge variant="outline" className="font-mono text-xs">
                {filtered.length} of {allRecords.length}
              </Badge>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Seafarer examination payment records, partial settlements, and official money receipts
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <Input
                placeholder="Search candidate, txn ref..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 pl-8 text-xs"
              />
            </div>

            {/* Status Filter */}
            <select
              aria-label="Filter by payment status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-2.5 text-xs font-medium"
            >
              <option value="all">All Statuses</option>
              <option value="paid">Paid (Full Cleared)</option>
              <option value="partial">Partial Payment</option>
              <option value="pending">Pending / Due</option>
            </select>

            {/* Select All / Deselect All Toggle Button */}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleToggleSelectAllRecords}
              className="h-9 gap-1.5 text-xs font-medium border-border hover:bg-muted/60"
              title={selectedRecordIds.length === filtered.length && filtered.length > 0 ? "Deselect all payment records" : "Select all filtered payment records"}
            >
              {selectedRecordIds.length === filtered.length && filtered.length > 0 ? (
                <>
                  <CheckSquare className="size-3.5 text-primary" /> Deselect All
                </>
              ) : (
                <>
                  <Square className="size-3.5 text-muted-foreground" /> Select All ({filtered.length})
                </>
              )}
            </Button>

            {selectedRecordIds.length > 0 && (
              <div className="flex items-center gap-1.5">
                <Badge variant="secondary" className="h-9 px-2.5 font-medium text-xs gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary" />
                  {selectedRecordIds.length} selected
                </Badge>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleDeleteSelectedRecords}
                  className="h-9 gap-1.5 shadow-xs text-xs font-medium"
                  title={`Delete ${selectedRecordIds.length} selected record(s)`}
                >
                  <Trash2 className="size-3.5" /> Delete Selected ({selectedRecordIds.length})
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent bg-muted/30">
                <TableHead className="w-12 pl-5 text-center">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={filtered.length > 0 && selectedRecordIds.length === filtered.length}
                    aria-label="Select all payment records"
                    onClick={handleToggleSelectAllRecords}
                    className={`size-4.5 rounded-[4px] border flex items-center justify-center transition-all cursor-pointer mx-auto ${
                      filtered.length > 0 && selectedRecordIds.length === filtered.length
                        ? "bg-primary border-primary text-primary-foreground shadow-2xs"
                        : "border-muted-foreground/40 bg-background hover:border-primary/80"
                    }`}
                  >
                    {filtered.length > 0 && selectedRecordIds.length === filtered.length && (
                      <Check className="size-3.5 stroke-[3]" />
                    )}
                  </button>
                </TableHead>
                <TableHead className="pl-2 w-32 text-xs font-semibold">Receipt / Record #</TableHead>
                <TableHead className="min-w-[190px] text-xs font-semibold">Candidate / Seafarer</TableHead>
                <TableHead className="min-w-[150px] text-xs font-semibold">Company / Agency</TableHead>
                <TableHead className="text-xs font-semibold">Date</TableHead>
                <TableHead className="text-right text-xs font-semibold">Fee & Dues</TableHead>
                <TableHead className="min-w-[200px] text-xs font-semibold">Payment Settlement Details</TableHead>
                <TableHead className="text-center text-xs font-semibold">Status</TableHead>
                <TableHead className="pr-6 text-right text-xs font-semibold">Receipt & Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length > 0 ? (
                filtered.map((record) => {
                  const statusKey = record.paymentStatus || record.status;
                  const isPaid = statusKey === "Paid" || statusKey === "Own";
                  const isPartial = statusKey === "Partial";
                  const isPending = statusKey === "Pending";
                  const totalFee = record.total || 3500;
                  const amountPaid = record.amountPaid ?? (isPaid ? totalFee : isPartial ? 2000 : 0);
                  const balanceDue = record.balanceDue ?? (isPartial ? Math.max(0, totalFee - amountPaid) : isPending ? totalFee : 0);
                  const isSelected = selectedRecordIds.includes(record.id);

                  return (
                    <TableRow
                      key={record.id}
                      className={`transition-colors ${
                        isSelected
                          ? "bg-primary/10 hover:bg-primary/15"
                          : "hover:bg-muted/30"
                      }`}
                    >
                      {/* Checkbox */}
                      <TableCell className="pl-5 text-center">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={isSelected}
                          aria-label={`Select payment record ${record.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleSelectRecord(record.id);
                          }}
                          className={`size-4.5 rounded-[4px] border flex items-center justify-center transition-all cursor-pointer mx-auto ${
                            isSelected
                              ? "bg-primary border-primary text-primary-foreground shadow-2xs"
                              : "border-muted-foreground/40 bg-background hover:border-primary/80"
                          }`}
                        >
                          {isSelected && <Check className="size-3.5 stroke-[3]" />}
                        </button>
                      </TableCell>

                      {/* Record ID / Receipt No */}
                      <TableCell className="pl-2 font-mono text-xs font-bold text-primary whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Receipt className="size-3.5 shrink-0 text-primary" />
                          <span>{record.id}</span>
                        </div>
                      </TableCell>

                      {/* Candidate Name & Rank */}
                      <TableCell>
                        <div className="font-semibold text-xs text-foreground">
                          {record.patient}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mt-0.5">
                          {record.rank && <span>{record.rank}</span>}
                          {record.indosNo && (
                            <>
                              <span>•</span>
                              <span className="font-mono">{record.indosNo}</span>
                            </>
                          )}
                        </div>
                      </TableCell>

                      {/* Company Name */}
                      <TableCell>
                        <div className="text-xs font-medium text-foreground truncate max-w-[170px]" title={record.company}>
                          {record.company}
                        </div>
                      </TableCell>

                      {/* Dates */}
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {record.date}
                      </TableCell>

                      {/* Amount and Dues */}
                      <TableCell className="text-right whitespace-nowrap">
                        <div className="font-mono text-xs font-bold text-foreground">
                          {formatINR(totalFee)}
                        </div>
                        {isPartial && balanceDue > 0 && (
                          <div className="text-[10px] font-semibold text-amber-700 font-mono mt-0.5">
                            Due: {formatINR(balanceDue)}
                          </div>
                        )}
                        {isPending && (
                          <div className="text-[10px] font-semibold text-destructive font-mono mt-0.5">
                            Full Due
                          </div>
                        )}
                      </TableCell>

                      {/* Visible Payment Record Details */}
                      <TableCell>
                        {isPaid ? (
                          <div className="text-xs space-y-0.5">
                            <div className="flex items-center gap-1.5 font-semibold">
                              <span className="inline-flex items-center gap-1 rounded bg-emerald-100 dark:bg-emerald-950/50 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 shadow-2xs">
                                <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
                                PAID
                              </span>
                              <span className="text-muted-foreground text-xs font-normal">
                                ({record.paymentMethod || "UPI / Digital Clearance"})
                              </span>
                            </div>
                            <div className="text-[10px] text-muted-foreground font-mono">
                              {record.paidDate ? `Date: ${record.paidDate}` : ""}
                              {record.transactionRef && record.transactionRef !== "Cleared" ? ` • ${record.transactionRef}` : ""}
                            </div>
                          </div>
                        ) : isPartial ? (
                          <div className="text-xs space-y-0.5">
                            <div className="flex items-center gap-1 font-semibold text-amber-700">
                              <Clock3 className="size-3 text-amber-600" />
                              <span>Paid: {formatINR(amountPaid)} • Balance Due: {formatINR(balanceDue)}</span>
                            </div>
                            <div className="text-[10px] text-muted-foreground font-mono">
                              Mode: {record.paymentMethod || "UPI"} {record.transactionRef ? `• ${record.transactionRef}` : ""}
                            </div>
                          </div>
                        ) : (
                          <div className="text-xs text-muted-foreground space-y-0.5">
                            <div className="flex items-center gap-1 text-destructive font-medium">
                              <Clock3 className="size-3 text-destructive" />
                              <span>Payment Pending</span>
                            </div>
                            <span className="text-[10px] text-muted-foreground">
                              Due: {record.dueDate || "Awaiting settlement"}
                            </span>
                          </div>
                        )}
                      </TableCell>

                      {/* Status Badge */}
                      <TableCell className="text-center whitespace-nowrap">
                        <Badge
                          variant={isPaid ? "default" : isPartial ? "secondary" : "outline"}
                          className={`text-[10px] px-2 py-0.5 font-semibold uppercase tracking-wide ${
                            isPaid
                              ? "bg-emerald-600 hover:bg-emerald-700 text-white border-transparent"
                              : isPartial
                              ? "bg-amber-100 text-amber-800 border-amber-300"
                              : ""
                          }`}
                        >
                          {isPaid ? "Paid" : isPartial ? "Partial" : "Pending"}
                        </Badge>
                      </TableCell>

                      {/* Receipt Download & Action Buttons */}
                      <TableCell className="pr-6 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Receipt Download Button: Available for BOTH Paid and Partial payments */}
                          {(isPaid || isPartial) && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 gap-1 px-2.5 text-xs font-semibold text-primary hover:bg-primary/10 border-primary/40 shadow-xs"
                              onClick={() => handleViewReceipt(record)}
                              title="Download / Print Official Money Receipt"
                            >
                              <Download className="size-3" />
                              Receipt
                            </Button>
                          )}

                          {/* Edit / Record Payment Option */}
                          <Button
                            size="sm"
                            variant={isPending ? "default" : "outline"}
                            className={`h-7 px-2 text-xs font-medium gap-1 ${isPending
                                ? "shadow-xs"
                                : "text-muted-foreground hover:text-foreground"
                              }`}
                            onClick={() => openEditPayment(record)}
                            title={isPending ? "Record Payment" : "Edit Payment & Dues"}
                          >
                            <Edit3 className="size-3" />
                            {isPending ? "Record Pay" : "Edit Pay"}
                          </Button>

                          <Button
                            size="sm"
                            variant="ghost"
                            className="size-7 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            onClick={() => onDeleteInvoice(record.id)}
                            title="Delete Payment Record"
                          >
                            <Trash2 className="size-3.5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={9} className="py-12 text-center text-muted-foreground text-xs">
                    No matching payment records found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer info */}
        <div className="flex flex-wrap items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground sm:px-6">
          <span>Showing {filtered.length} of {allRecords.length} seafarer payment records</span>
          <span className="font-medium text-foreground">Standard DG Shipping medical examination fee: ₹3,500/-</span>
        </div>
      </section>

      {/* Edit Payment & Dues Modal */}
      {editingRecord && (
        <Dialog open={!!editingRecord} onOpenChange={(open) => !open && setEditingRecord(null)}>
          <DialogContent className="max-w-lg p-0 overflow-hidden sm:rounded-xl">
            <DialogHeader className="bg-muted/40 p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs font-mono">
                  {editingRecord.id}
                </Badge>
                <DialogTitle className="text-base font-semibold">
                  Update Candidate Payment & Dues
                </DialogTitle>
              </div>
              <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                Record payment clearance, partial payments, or remaining dues for {editingRecord.patient}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSaveEditPayment} className="p-5 space-y-4">
              <div className="rounded-md border border-border/70 bg-muted/20 p-3 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Candidate:</span>
                  <span className="font-semibold text-foreground">{editingRecord.patient}</span>
                </div>
                {editingRecord.rank && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rank:</span>
                    <span className="font-medium text-foreground">{editingRecord.rank}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Company:</span>
                  <span className="text-foreground">{editingRecord.company}</span>
                </div>
              </div>

              {/* Payment Status Selector */}
              <div className="space-y-1.5">
                <label htmlFor="edit-status" className="text-xs font-medium text-foreground">
                  Payment Status <span className="text-destructive">*</span>
                </label>
                <select
                  id="edit-status"
                  value={editStatus}
                  onChange={(e) => {
                    const val = e.target.value as "Paid" | "Partial" | "Pending";
                    setEditStatus(val);
                    if (val === "Paid") {
                      setEditAmountPaid(editTotalFee);
                    } else if (val === "Pending") {
                      setEditAmountPaid(0);
                    } else if (val === "Partial" && (editAmountPaid === 0 || editAmountPaid === editTotalFee)) {
                      setEditAmountPaid(2000);
                    }
                  }}
                  className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs font-semibold"
                >
                  <option value="Paid">Paid (Full Examination Cleared - ₹{editTotalFee.toLocaleString("en-IN")})</option>
                  <option value="Partial">Partial Payment (Candidate Paid Part Amount)</option>
                  <option value="Pending">Pending / Due (Payment Not Received Yet)</option>
                </select>
              </div>

              {/* Total Fee & Partial Breakdown */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="edit-fee" className="text-xs font-medium text-foreground">
                    Total Examination Fee
                  </label>
                  <Input
                    id="edit-fee"
                    type="number"
                    min="1"
                    value={editTotalFee}
                    onChange={(e) => {
                      const fee = Number(e.target.value) || 3500;
                      setEditTotalFee(fee);
                      if (editStatus === "Paid") setEditAmountPaid(fee);
                    }}
                    className="h-9 font-mono text-xs font-semibold"
                    required
                  />
                </div>

                {editStatus === "Partial" ? (
                  <div className="space-y-1.5">
                    <label htmlFor="edit-paid" className="text-xs font-medium text-foreground">
                      Amount Paid (Received) <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="edit-paid"
                      type="number"
                      min="1"
                      max={editTotalFee}
                      value={editAmountPaid}
                      onChange={(e) => setEditAmountPaid(Number(e.target.value) || 0)}
                      className="h-9 font-mono text-xs font-bold text-emerald-700"
                      required
                    />
                  </div>
                ) : editStatus === "Pending" ? (
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Amount Paid</label>
                    <div className="h-9 flex items-center px-3 rounded-md border border-input bg-muted/40 font-mono text-xs text-muted-foreground">
                      ₹0.00
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Amount Paid</label>
                    <div className="h-9 flex items-center px-3 rounded-md border border-emerald-300 bg-emerald-50 font-mono text-xs font-bold text-emerald-700">
                      ₹{editTotalFee.toLocaleString("en-IN")}.00
                    </div>
                  </div>
                )}
              </div>

              {/* Remaining Dues Box for Partial or Pending */}
              {editStatus === "Partial" && (
                <div className="rounded-lg border border-amber-300 bg-amber-50 p-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-900">Remaining Balance Due:</span>
                  <span className="font-mono text-sm font-bold text-destructive">
                    ₹{Math.max(0, editTotalFee - editAmountPaid).toLocaleString("en-IN")}.00
                  </span>
                </div>
              )}

              {/* Mode and Transaction ID: Hidden if Pending */}
              {editStatus !== "Pending" ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="edit-mode" className="text-xs font-medium text-foreground">
                      Payment Mode <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="edit-mode"
                      value={editPaymentMode}
                      onChange={(e) => setEditPaymentMode(e.target.value as "Cash" | "Trans. ID" | "UPI" | "Bank Transfer")}
                      className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs"
                    >
                      <option value="UPI">UPI / Digital</option>
                      <option value="Cash">Cash</option>
                      <option value="Trans. ID">Trans. ID (Online / POS)</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="edit-trans" className="text-xs font-medium text-foreground">
                      Trans. ID / Reference
                    </label>
                    <Input
                      id="edit-trans"
                      value={editTransactionId}
                      onChange={(e) => setEditTransactionId(e.target.value)}
                      placeholder="e.g. TXN-50941"
                      className="h-9 font-mono text-xs"
                    />
                  </div>
                </div>
              ) : (
                <div className="rounded-md border border-destructive/20 bg-destructive/5 p-3 text-xs text-muted-foreground">
                  Payment mode and transaction reference are hidden while payment is pending. When payment is received, update status to Paid or Partial.
                </div>
              )}

              <DialogFooter className="mt-5 flex justify-end gap-2 border-t border-border pt-4">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setEditingRecord(null)}
                >
                  Cancel
                </Button>
                <Button type="submit" size="sm" className="gap-1.5">
                  <FileCheck2 className="size-3.5" />
                  Save Payment Record
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* Payment Receipt Modal */}
      <PaymentReceiptModal
        payment={selectedReceiptPayment}
        open={!!selectedReceiptPayment}
        onOpenChange={(open) => !open && setSelectedReceiptPayment(null)}
      />
    </div>
  );
}