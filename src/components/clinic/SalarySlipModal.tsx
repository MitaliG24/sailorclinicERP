import { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  Check,
  CreditCard,
  Download,
  Edit,
  Eye,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Filter,
  Plus,
  Printer,
  ReceiptText,
  RefreshCw,
  Search,
  Trash2,
  User,
  Users,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  convertNumberToWordsIndian,
  initialSalarySlips,
  type SalarySlip,
  type StaffMember,
} from "@/lib/staff";
import {
  formatCurrencyINR,
  SalarySlipDocument,
} from "@/components/clinic/SalarySlipDocument";

interface SalarySlipModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  staffList: StaffMember[];
  selectedStaffForSlip?: StaffMember | null;
  onNotice?: (msg: string) => void;
}

const STORAGE_KEY = "marine_clinic_salary_slips_v1";

export function SalarySlipModal({
  open,
  onOpenChange,
  staffList,
  selectedStaffForSlip,
  onNotice,
}: SalarySlipModalProps) {
  // Slips store (persisted in localStorage + defaults)
  const [slips, setSlips] = useState<SalarySlip[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        console.warn("Could not read salary slips from storage:", e);
      }
    }
    return initialSalarySlips;
  });

  // Save to localStorage whenever slips change
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(slips));
      } catch (e) {
        console.warn("Could not persist salary slips:", e);
      }
    }
  }, [slips]);

  // Mode: "archive" (monthwise list) | "form" (create/edit) | "view" (preview & print)
  const [activeTab, setActiveTab] = useState<"archive" | "form" | "view">("archive");

  // Filter states
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  // Viewing/Editing Slip State
  const [currentSlip, setCurrentSlip] = useState<SalarySlip | null>(null);

  // Manual Form State
  const [formEmployeeId, setFormEmployeeId] = useState<string>("");
  const [formEmployeeName, setFormEmployeeName] = useState<string>("YUKTA JADHAV");
  const [formDesignation, setFormDesignation] = useState<string>("LAB TECHNICIAN");
  const [formPayPeriod, setFormPayPeriod] = useState<string>("SEP 2026");
  const [formPayDate, setFormPayDate] = useState<string>("05-10-2026");
  const [formGrossSalary, setFormGrossSalary] = useState<number>(17000);
  const [formTravellingAllowance, setFormTravellingAllowance] = useState<number>(350);
  const [formGrossEarnings, setFormGrossEarnings] = useState<number>(17350);
  const [formTotalLeaves, setFormTotalLeaves] = useState<string>("2 DAY & HALF DAY");
  const [formDeductionAmount, setFormDeductionAmount] = useState<number>(1416);
  const [formTotalDeductions, setFormTotalDeductions] = useState<number>(1416);
  const [formNetPay, setFormNetPay] = useState<number>(15934);
  const [formAmountInWords, setFormAmountInWords] = useState<string>(
    "FIFTEEN THOUSAND NINE HUNDRED THIRTYFOUR RUPEES ONLY"
  );
  const [formFormulaNote, setFormFormulaNote] = useState<string>(
    "**Total Net Payable = Gross Earnings+ T.A.- Total Deductions"
  );
  const [formPhone, setFormPhone] = useState<string>("+91 98205 61402");
  const [formEmail, setFormEmail] = useState<string>("yukta.j@sailorsmedical.com");
  const [editingSlipId, setEditingSlipId] = useState<string | null>(null);

  // When selectedStaffForSlip is passed upon opening, initialize form for that staff
  useEffect(() => {
    if (open && selectedStaffForSlip) {
      handleOpenCreateForStaff(selectedStaffForSlip);
    }
  }, [open, selectedStaffForSlip]);

  // Available unique month-year periods for monthwise filtering
  const availableMonths = useMemo(() => {
    const set = new Set<string>();
    slips.forEach((s) => {
      if (s.payPeriod) set.add(s.payPeriod.trim());
    });
    // Ensure default common periods exist
    set.add("SEP 2026");
    set.add("OCT 2026");
    set.add("AUG 2026");
    return Array.from(set);
  }, [slips]);

  // Filtered slips by month & search
  const filteredSlips = useMemo(() => {
    const q = search.trim().toLowerCase();
    return slips.filter((s) => {
      const matchMonth =
        selectedMonth === "all" ||
        s.payPeriod.toLowerCase() === selectedMonth.toLowerCase();

      const matchQuery =
        !q ||
        `${s.employeeName} ${s.designation} ${s.employeeId} ${s.payPeriod}`
          .toLowerCase()
          .includes(q);

      return matchMonth && matchQuery;
    });
  }, [slips, selectedMonth, search]);

  // Auto-calculate Gross Earnings when Gross Salary or T.A. changes
  const handleGrossSalaryChange = (val: number) => {
    setFormGrossSalary(val);
    const newGross = val + formTravellingAllowance;
    setFormGrossEarnings(newGross);
    const newNet = newGross - formTotalDeductions;
    setFormNetPay(newNet);
    setFormAmountInWords(convertNumberToWordsIndian(newNet));
  };

  const handleTravellingAllowanceChange = (val: number) => {
    setFormTravellingAllowance(val);
    const newGross = formGrossSalary + val;
    setFormGrossEarnings(newGross);
    const newNet = newGross - formTotalDeductions;
    setFormNetPay(newNet);
    setFormAmountInWords(convertNumberToWordsIndian(newNet));
  };

  const handleDeductionChange = (val: number) => {
    setFormDeductionAmount(val);
    setFormTotalDeductions(val);
    const newNet = formGrossEarnings - val;
    setFormNetPay(newNet);
    setFormAmountInWords(convertNumberToWordsIndian(newNet));
  };

  // Switch employee from dropdown: auto-fills all fields from employee record
  const handleSelectStaff = (empId: string) => {
    setFormEmployeeId(empId);
    const found = staffList.find((s) => s.id === empId);
    if (found) {
      setFormEmployeeName(found.name.toUpperCase());
      setFormDesignation(found.role.toUpperCase());
      setFormPhone(found.phone || "+91 ");
      setFormEmail(found.email || "");

      const basic = found.basicSalary || 17000;
      const ta = found.allowances || 350;
      const ded = found.deductions || 0;
      const gross = basic + ta;
      const net = gross - ded;

      setFormGrossSalary(basic);
      setFormTravellingAllowance(ta);
      setFormGrossEarnings(gross);
      setFormDeductionAmount(ded);
      setFormTotalDeductions(ded);
      setFormNetPay(net);
      setFormAmountInWords(convertNumberToWordsIndian(net));
    }
  };

  const handleOpenCreateForStaff = (staff: StaffMember) => {
    setEditingSlipId(null);
    setFormEmployeeId(staff.id);
    setFormEmployeeName(staff.name.toUpperCase());
    setFormDesignation(staff.role.toUpperCase());
    setFormPhone(staff.phone || "");
    setFormEmail(staff.email || "");
    setFormPayPeriod("SEP 2026");
    setFormPayDate("05-10-2026");

    const basic = staff.basicSalary || 17000;
    const ta = staff.allowances || 350;
    const ded = staff.deductions || 1416;
    const gross = basic + ta;
    const net = gross - ded;

    setFormGrossSalary(basic);
    setFormTravellingAllowance(ta);
    setFormGrossEarnings(gross);
    setFormTotalLeaves("2 DAY & HALF DAY");
    setFormDeductionAmount(ded);
    setFormTotalDeductions(ded);
    setFormNetPay(net);
    setFormAmountInWords(convertNumberToWordsIndian(net));
    setFormFormulaNote("**Total Net Payable = Gross Earnings+ T.A.- Total Deductions");

    setActiveTab("form");
  };

  const handleOpenCreateNew = () => {
    setEditingSlipId(null);
    setFormEmployeeId("");
    setFormEmployeeName("YUKTA JADHAV");
    setFormDesignation("LAB TECHNICIAN");
    setFormPayPeriod("SEP 2026");
    setFormPayDate("05-10-2026");
    setFormGrossSalary(17000);
    setFormTravellingAllowance(350);
    setFormGrossEarnings(17350);
    setFormTotalLeaves("2 DAY & HALF DAY");
    setFormDeductionAmount(1416);
    setFormTotalDeductions(1416);
    setFormNetPay(15934);
    setFormAmountInWords("FIFTEEN THOUSAND NINE HUNDRED THIRTYFOUR RUPEES ONLY");
    setFormFormulaNote("**Total Net Payable = Gross Earnings+ T.A.- Total Deductions");
    setFormPhone("+91 98205 61402");
    setFormEmail("yukta.j@sailorsmedical.com");

    setActiveTab("form");
  };

  const handleEditSlip = (slip: SalarySlip) => {
    setEditingSlipId(slip.id);
    setFormEmployeeId(slip.employeeId);
    setFormEmployeeName(slip.employeeName);
    setFormDesignation(slip.designation);
    setFormPayPeriod(slip.payPeriod);
    setFormPayDate(slip.payDate);
    setFormGrossSalary(slip.grossSalary);
    setFormTravellingAllowance(slip.travellingAllowance);
    setFormGrossEarnings(slip.grossEarnings);
    setFormTotalLeaves(slip.totalLeaves);
    setFormDeductionAmount(slip.deductionAmount);
    setFormTotalDeductions(slip.totalDeductions);
    setFormNetPay(slip.netPay);
    setFormAmountInWords(slip.amountInWords);
    setFormFormulaNote(
      slip.formulaNote || "**Total Net Payable = Gross Earnings+ T.A.- Total Deductions"
    );
    setFormPhone(slip.employeePhone || "");
    setFormEmail(slip.employeeEmail || "");

    setActiveTab("form");
  };

  const handleSaveSlip = (e: React.FormEvent) => {
    e.preventDefault();
    const id = editingSlipId || `SLIP-${Date.now().toString().slice(-6)}`;
    const [monthPart, yearPart] = formPayPeriod.split(" ");
    const month = monthPart ? monthPart.toUpperCase() : "SEP";
    const year = Number(yearPart) || 2026;

    const newSlip: SalarySlip = {
      id,
      employeeId: formEmployeeId || `EMP-${Date.now().toString().slice(-4)}`,
      employeeName: formEmployeeName.trim().toUpperCase() || "EMPLOYEE",
      designation: formDesignation.trim().toUpperCase() || "STAFF",
      payPeriod: formPayPeriod.trim().toUpperCase() || "SEP 2026",
      payDate: formPayDate.trim() || "05-10-2026",
      month,
      year,
      grossSalary: Number(formGrossSalary) || 0,
      travellingAllowance: Number(formTravellingAllowance) || 0,
      grossEarnings: Number(formGrossEarnings) || 0,
      totalLeaves: formTotalLeaves.trim() || "None",
      deductionAmount: Number(formDeductionAmount) || 0,
      totalDeductions: Number(formTotalDeductions) || 0,
      netPay: Number(formNetPay) || 0,
      amountInWords:
        formAmountInWords.trim().toUpperCase() ||
        convertNumberToWordsIndian(Number(formNetPay) || 0),
      formulaNote: formFormulaNote.trim() || undefined,
      employeePhone: formPhone.trim() || undefined,
      employeeEmail: formEmail.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    if (editingSlipId) {
      setSlips((prev) => prev.map((s) => (s.id === editingSlipId ? newSlip : s)));
      onNotice?.(`Updated salary slip for ${newSlip.employeeName}`);
    } else {
      setSlips((prev) => [newSlip, ...prev]);
      onNotice?.(`Generated new salary slip for ${newSlip.employeeName} (${newSlip.payPeriod})`);
    }

    setCurrentSlip(newSlip);
    setActiveTab("view");
  };

  const handleDeleteSlip = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete the salary slip for ${name}?`)) {
      setSlips((prev) => prev.filter((s) => s.id !== id));
      if (currentSlip?.id === id) {
        setCurrentSlip(null);
        setActiveTab("archive");
      }
      onNotice?.(`Deleted salary slip for ${name}`);
    }
  };

  // Export Monthwise Slips as CSV / Excel
  const handleExportMonthwiseCsv = () => {
    const listToExport = filteredSlips;
    if (listToExport.length === 0) {
      alert("No salary slips found to export for the selected filter.");
      return;
    }

    const headers = [
      "Slip ID",
      "Employee ID",
      "Employee Name",
      "Designation",
      "Pay Period",
      "Pay Date",
      "Gross Salary (INR)",
      "Travelling Allowance (INR)",
      "Gross Earnings (INR)",
      "Total Leaves",
      "Deduction Amount (INR)",
      "Total Deductions (INR)",
      "Total Net Payable (INR)",
      "Amount in Words",
      "Phone",
    ];

    const rows = listToExport.map((s) => [
      `"${s.id}"`,
      `"${s.employeeId}"`,
      `"${s.employeeName}"`,
      `"${s.designation}"`,
      `"${s.payPeriod}"`,
      `"${s.payDate}"`,
      s.grossSalary,
      s.travellingAllowance,
      s.grossEarnings,
      `"${s.totalLeaves}"`,
      s.deductionAmount,
      s.totalDeductions,
      s.netPay,
      `"${s.amountInWords}"`,
      `"${s.employeePhone || ""}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    const periodLabel = selectedMonth === "all" ? "All_Months" : selectedMonth.replace(/\s+/g, "_");
    link.setAttribute("download", `Salary_Slips_Report_${periodLabel}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onNotice?.(`Exported ${listToExport.length} salary slips to CSV`);
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[94vh] w-full max-w-5xl overflow-y-auto p-0 sm:rounded-xl">
        <DialogHeader className="border-b border-border bg-muted/40 p-5 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-emerald-600 text-white shadow-sm">
                <ReceiptText className="size-5" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <DialogTitle className="text-lg font-semibold tracking-tight text-foreground">
                    Staff Salary Slips & Monthly Payroll
                  </DialogTitle>
                  <Badge variant="outline" className="text-[10px] font-mono border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
                    D.G. Shipping Approved
                  </Badge>
                </div>
                <DialogDescription className="mt-0.5 text-xs text-muted-foreground">
                  Manual entry salary slip generator, monthwise archive &amp; PDF download
                </DialogDescription>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-background border border-border p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveTab("archive")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === "archive"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Calendar className="size-3.5" />
                Monthwise Slips ({slips.length})
              </button>
              <button
                type="button"
                onClick={handleOpenCreateNew}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === "form"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Plus className="size-3.5" />
                {editingSlipId ? "Edit Slip" : "Generate Slip"}
              </button>
              {currentSlip && (
                <button
                  type="button"
                  onClick={() => setActiveTab("view")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === "view"
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Eye className="size-3.5" />
                  View & Print
                </button>
              )}
            </div>
          </div>
        </DialogHeader>

        {/* ============================================================ */}
        {/* TAB 1: MONTHWISE SLIPS ARCHIVE & MANAGEMENT */}
        {/* ============================================================ */}
        {activeTab === "archive" && (
          <div className="p-5 sm:p-6 space-y-4">
            {/* Filter Toolbar */}
            <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-3.5 sm:flex-row sm:items-center sm:justify-between shadow-xs">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Monthwise Filter Dropdown */}
                <div className="flex items-center gap-1.5">
                  <Filter className="size-3.5 text-muted-foreground" />
                  <span className="text-xs font-semibold text-foreground">Pay Month:</span>
                  <select
                    aria-label="Filter salary slips by month"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="h-9 rounded-md border border-input bg-background px-3 text-xs font-semibold text-foreground focus:outline-hidden"
                  >
                    <option value="all">All Pay Periods ({slips.length})</option>
                    {availableMonths.map((m) => (
                      <option key={m} value={m}>
                        {m} ({slips.filter((s) => s.payPeriod.toLowerCase() === m.toLowerCase()).length})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Search Filter */}
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
                  <Input
                    placeholder="Search employee name or role..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-9 pl-8 text-xs w-[180px] sm:w-[220px]"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleExportMonthwiseCsv}
                  className="h-9 gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 border-emerald-600/30 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
                  title="Download monthwise salary slips as CSV spreadsheet"
                >
                  <FileSpreadsheet className="size-3.5" />
                  Export Month (.csv)
                </Button>

                <Button
                  type="button"
                  size="sm"
                  onClick={handleOpenCreateNew}
                  className="h-9 gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Plus className="size-3.5" />
                  Generate Salary Slip
                </Button>
              </div>
            </div>

            {/* Salary Slips Table */}
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-border bg-muted/40 text-muted-foreground">
                      <th className="p-3 text-left font-bold uppercase w-[220px]">Employee</th>
                      <th className="p-3 text-left font-bold uppercase">Pay Period</th>
                      <th className="p-3 text-left font-bold uppercase">Gross Earnings</th>
                      <th className="p-3 text-left font-bold uppercase">Leaves & Deductions</th>
                      <th className="p-3 text-left font-bold uppercase">Net Payable</th>
                      <th className="p-3 text-right font-bold uppercase pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredSlips.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-muted-foreground">
                          <ReceiptText className="mx-auto size-8 opacity-40 mb-2" />
                          <p className="text-sm font-medium">No salary slips found for this period</p>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={handleOpenCreateNew}
                            className="mt-3 gap-1.5 text-xs"
                          >
                            <Plus className="size-3.5" /> Generate First Slip
                          </Button>
                        </td>
                      </tr>
                    ) : (
                      filteredSlips.map((slip) => (
                        <tr key={slip.id} className="hover:bg-muted/30 transition-colors">
                          <td className="p-3">
                            <div className="font-bold text-foreground">{slip.employeeName}</div>
                            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
                              <span>{slip.designation}</span>
                              <span>•</span>
                              <span className="font-mono text-[10px]">{slip.employeeId}</span>
                            </div>
                          </td>

                          <td className="p-3">
                            <Badge variant="outline" className="font-bold text-[11px] bg-background">
                              {slip.payPeriod}
                            </Badge>
                            <div className="text-[10px] text-muted-foreground mt-0.5">
                              Date: {slip.payDate}
                            </div>
                          </td>

                          <td className="p-3">
                            <div className="font-bold text-foreground">
                              ₹{formatCurrencyINR(slip.grossEarnings)}
                            </div>
                            <div className="text-[10px] text-muted-foreground mt-0.5">
                              Salary: ₹{formatCurrencyINR(slip.grossSalary)} + T.A: ₹{formatCurrencyINR(slip.travellingAllowance)}
                            </div>
                          </td>

                          <td className="p-3">
                            <div className="text-destructive font-medium">
                              -₹{formatCurrencyINR(slip.totalDeductions)}
                            </div>
                            <div className="text-[10px] text-muted-foreground mt-0.5">
                              Leaves: {slip.totalLeaves}
                            </div>
                          </td>

                          <td className="p-3">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                              ₹{formatCurrencyINR(slip.netPay)}
                            </div>
                            <div className="text-[10px] text-muted-foreground truncate max-w-[140px]" title={slip.amountInWords}>
                              {slip.amountInWords}
                            </div>
                          </td>

                          <td className="p-3 text-right pr-4">
                            <div className="flex items-center justify-end gap-1.5">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 px-2 text-xs gap-1 border-primary/30 text-primary hover:bg-primary/10"
                                onClick={() => {
                                  setCurrentSlip(slip);
                                  setActiveTab("view");
                                }}
                                title="View & Print Salary Slip"
                              >
                                <Eye className="size-3" />
                                View
                              </Button>

                              <Button
                                size="sm"
                                variant="ghost"
                                className="size-7 p-0 text-muted-foreground hover:text-foreground"
                                onClick={() => handleEditSlip(slip)}
                                title="Edit Slip"
                              >
                                <Edit className="size-3" />
                              </Button>

                              <Button
                                size="sm"
                                variant="ghost"
                                className="size-7 p-0 text-destructive/80 hover:text-destructive hover:bg-destructive/10"
                                onClick={() => handleDeleteSlip(slip.id, slip.employeeName)}
                                title="Delete Slip"
                              >
                                <Trash2 className="size-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: MANUAL ENTRY FORM FOR SALARY SLIP */}
        {/* ============================================================ */}
        {activeTab === "form" && (
          <form onSubmit={handleSaveSlip} className="p-5 sm:p-6 space-y-5">
            <div className="rounded-lg border border-border/70 bg-card p-4 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-2.5">
                <div className="flex items-center gap-2">
                  <ReceiptText className="size-4 text-emerald-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {editingSlipId ? "Edit Salary Slip Particulars" : "Generate Monthly Salary Slip (Manual Entry)"}
                  </h3>
                </div>
                <span className="text-[11px] text-muted-foreground font-mono">
                  All fields manually editable • Format identical to official payslip
                </span>
              </div>

              {/* Quick autofill from existing staff */}
              <div className="grid gap-3 sm:grid-cols-3 bg-muted/20 p-3 rounded-lg border border-border/60">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-foreground">
                    Autofill from Staff Directory (Optional)
                  </label>
                  <select
                    value={formEmployeeId}
                    onChange={(e) => handleSelectStaff(e.target.value)}
                    className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs font-semibold"
                  >
                    <option value="">-- Choose employee to autofill or type manually below --</option>
                    {staffList.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.role} - {s.id})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">
                    Employee Phone
                  </label>
                  <Input
                    placeholder="e.g. +91 98205 61402"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="h-9 text-xs"
                  />
                </div>
              </div>

              {/* Row 1: Employee Name, Designation, Pay Period, Pay Date */}
              <div className="grid gap-3 sm:grid-cols-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-foreground">
                    Employee Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="e.g. YUKTA JADHAV"
                    value={formEmployeeName}
                    onChange={(e) => setFormEmployeeName(e.target.value.toUpperCase())}
                    className="h-9 text-xs font-bold uppercase"
                    required
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-foreground">
                    Designation <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="e.g. LAB TECHNICIAN"
                    value={formDesignation}
                    onChange={(e) => setFormDesignation(e.target.value.toUpperCase())}
                    className="h-9 text-xs uppercase"
                    required
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-foreground">
                    Pay Period <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="e.g. SEP 2026"
                    value={formPayPeriod}
                    onChange={(e) => setFormPayPeriod(e.target.value.toUpperCase())}
                    className="h-9 text-xs font-semibold uppercase"
                    required
                  />
                  <p className="text-[10px] text-muted-foreground">Month and Year (e.g. SEP 2026)</p>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-foreground">
                    Pay Date <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="e.g. 05-10-2026"
                    value={formPayDate}
                    onChange={(e) => setFormPayDate(e.target.value)}
                    className="h-9 text-xs"
                    required
                  />
                  <p className="text-[10px] text-muted-foreground">Disbursement date (DD-MM-YYYY)</p>
                </div>
              </div>

              {/* Row 2: Earnings & Deductions Details */}
              <div className="border-t border-border/60 pt-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                  Earnings & Deductions Particulars
                </h4>
                <div className="grid gap-3 sm:grid-cols-4">
                  {/* Gross Salary */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">
                      Gross Salary (₹) <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="number"
                      step="any"
                      placeholder="17000"
                      value={formGrossSalary}
                      onChange={(e) => handleGrossSalaryChange(Number(e.target.value) || 0)}
                      className="h-9 text-xs font-semibold"
                      required
                    />
                  </div>

                  {/* Travelling Allowance */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">
                      Travelling Allowance (T.A.) (₹)
                    </label>
                    <Input
                      type="number"
                      step="any"
                      placeholder="350"
                      value={formTravellingAllowance}
                      onChange={(e) => handleTravellingAllowanceChange(Number(e.target.value) || 0)}
                      className="h-9 text-xs"
                    />
                  </div>

                  {/* Total Leaves */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">
                      Total Leaves (Text)
                    </label>
                    <Input
                      placeholder="e.g. 2 DAY & HALF DAY"
                      value={formTotalLeaves}
                      onChange={(e) => setFormTotalLeaves(e.target.value.toUpperCase())}
                      className="h-9 text-xs uppercase"
                    />
                  </div>

                  {/* Deductions Amount */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">
                      Leave Deductions (₹)
                    </label>
                    <Input
                      type="number"
                      step="any"
                      placeholder="1416"
                      value={formDeductionAmount}
                      onChange={(e) => handleDeductionChange(Number(e.target.value) || 0)}
                      className="h-9 text-xs"
                    />
                  </div>
                </div>

                {/* Net Summary Fields */}
                <div className="mt-3 grid gap-3 sm:grid-cols-3 bg-primary/5 p-3 rounded-lg border border-primary/20">
                  <div className="space-y-1">
                    <span className="text-[11px] font-medium text-muted-foreground">Gross Earnings (Sum):</span>
                    <Input
                      type="number"
                      step="any"
                      value={formGrossEarnings}
                      onChange={(e) => setFormGrossEarnings(Number(e.target.value) || 0)}
                      className="h-9 text-xs font-bold bg-background"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-medium text-muted-foreground">Total Deductions:</span>
                    <Input
                      type="number"
                      step="any"
                      value={formTotalDeductions}
                      onChange={(e) => setFormTotalDeductions(Number(e.target.value) || 0)}
                      className="h-9 text-xs font-bold bg-background text-destructive"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-primary">Total Net Payable:</span>
                    <Input
                      type="number"
                      step="any"
                      value={formNetPay}
                      onChange={(e) => {
                        const val = Number(e.target.value) || 0;
                        setFormNetPay(val);
                        setFormAmountInWords(convertNumberToWordsIndian(val));
                      }}
                      className="h-9 text-sm font-bold bg-background text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                </div>

                {/* Amount in words & formula note */}
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">
                      Amount in Words (Capitalized)
                    </label>
                    <Input
                      value={formAmountInWords}
                      onChange={(e) => setFormAmountInWords(e.target.value.toUpperCase())}
                      className="h-9 text-xs uppercase font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">
                      Formula Footer Note
                    </label>
                    <Input
                      value={formFormulaNote}
                      onChange={(e) => setFormFormulaNote(e.target.value)}
                      className="h-9 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setActiveTab("archive")}
              >
                Back to Slips List
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  type="submit"
                  size="sm"
                  className="gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs font-semibold"
                >
                  <FileCheck2 className="size-4" />
                  {editingSlipId ? "Update & Preview Slip" : "Save & Generate Slip"}
                </Button>
              </div>
            </div>
          </form>
        )}

        {/* ============================================================ */}
        {/* TAB 3: VIEW & PRINT SALARY SLIP (EXACT FORMAT MATCHING IMAGE) */}
        {/* ============================================================ */}
        {activeTab === "view" && currentSlip && (
          <div className="p-5 sm:p-6 space-y-4">
            <SalarySlipDocument
              slip={currentSlip}
              onEdit={handleEditSlip}
              onClose={() => setActiveTab("archive")}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

