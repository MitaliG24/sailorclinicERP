import { useEffect, useState } from "react";
import {
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  FileBadge,
  FileCheck2,
  HeartPulse,
  Ship,
  Sparkles,
  Stethoscope,
  User,
  X,
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
import { initialCompanies, type PatientRecord } from "@/lib/clinic";

interface PatientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  patientToEdit?: PatientRecord | null;
  nextSrNo: number;
  nextPatientId?: string;
  companyList?: string[];
  onSave: (patient: PatientRecord) => void;
}

const COMMON_RANKS = [
  "Captain / Master",
  "Chief Officer",
  "2nd Officer",
  "3rd Officer",
  "Chief Engineer",
  "2nd Engineer",
  "3rd Engineer",
  "4th Engineer",
  "Electrical Officer (ETO)",
  "Bosun",
  "Able Seaman (AB)",
  "Ordinary Seaman (OS)",
  "Deck Cadet",
  "Engine Cadet",
  "Oiler / Motorman",
  "Fitter",
  "Chief Cook",
  "Trainee Seaman",
];

const MEDICAL_TYPES = [
  "Pre-Sea Examination",
  "Annual Seafarer Medical",
  "Flag State Medical",
  "Periodic Maritime Medical",
  "Offshore / DG Shipping",
  "Re-examination / Follow-up",
  "Routine Checkup",
];

const COMMON_VESSELS = [
  "MV Maersk Mc-Kinney",
  "MT Synergy Tide",
  "MV Pacific Pioneer",
  "MV Eastern Glory",
  "MSC Oscar",
  "MT Nordic Voyager",
  "MV Ever Given",
  "MT BSM Stralsund",
  "MV Jag Anand",
  "MT Ridgebury Pioneer",
];

export function PatientModal({
  open,
  onOpenChange,
  patientToEdit,
  nextSrNo,
  nextPatientId,
  companyList,
  onSave,
}: PatientModalProps) {
  const isEditing = Boolean(patientToEdit);

  // Available companies for dropdown: passed prop or default initialCompanies list
  const availableCompanies =
    companyList && companyList.length > 0
      ? companyList
      : initialCompanies.map((c) => c.name);

  // Form Fields - ALL start blank for new candidate registration
  const [srNo, setSrNo] = useState<number | "">("");
  const [date, setDate] = useState<string>("");
  const [timeIn, setTimeIn] = useState<string>("");
  const [timeOut, setTimeOut] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [rank, setRank] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [vessel, setVessel] = useState<string>("");

  // Alphanumeric credentials
  const [indosNo, setIndosNo] = useState<string>("");
  const [cdcNo, setCdcNo] = useState<string>("");
  const [passportNo, setPassportNo] = useState<string>("");
  const [certificateNo, setCertificateNo] = useState<string>("");

  // Medical examination
  const [typeOfMedical, setTypeOfMedical] = useState<string>("");
  const [testMedical, setTestMedical] = useState<string>("");
  const [fitnessStatus, setFitnessStatus] = useState<"Fit" | "Unfit" | "">("");
  const [unfitType, setUnfitType] = useState<"Temporary" | "Permanent">("Temporary");
  const [unfitReason, setUnfitReason] = useState<string>("");
  const [examinationRemark, setExaminationRemark] = useState<string>("");

  // Payment details
  const [paymentStatus, setPaymentStatus] = useState<"Paid" | "Own" | "Partial" | "Pending" | "">("");
  const [totalFee, setTotalFee] = useState<number | "">("");
  const [amountPaid, setAmountPaid] = useState<number | "">("");
  const [paymentMode, setPaymentMode] = useState<string>("");
  const [transactionId, setTransactionId] = useState<string>("");

  // Split payment state
  const [isSplitPayment, setIsSplitPayment] = useState<boolean>(false);
  const [cashAmount, setCashAmount] = useState<number | "">("");
  const [onlineAmount, setOnlineAmount] = useState<number | "">("");
  const [onlineMode, setOnlineMode] = useState<string>("");
  const [onlineTransId, setOnlineTransId] = useState<string>("");

  // Populate when patientToEdit changes or modal opens
  useEffect(() => {
    if (patientToEdit) {
      setSrNo(patientToEdit.srNo || 1);
      setDate(patientToEdit.date || "");
      setTimeIn(patientToEdit.timeIn || "");
      setTimeOut(patientToEdit.timeOut || "");
      setName(patientToEdit.name || "");
      setPhone(patientToEdit.phone || "");
      setEmail(patientToEdit.email || "");
      setDob(patientToEdit.dob || "");
      setAge(patientToEdit.age ? String(patientToEdit.age) : "");
      setGender(patientToEdit.gender || "");
      setRank(patientToEdit.rank || "");
      setCompanyName(patientToEdit.companyName || "");
      setVessel(patientToEdit.vesselName || patientToEdit.vessel || "");
      setIndosNo(patientToEdit.indosNo || "");
      setCdcNo(patientToEdit.cdcNo || "");
      setPassportNo(patientToEdit.passportNo || "");
      setCertificateNo(patientToEdit.certificateNo || "");
      setTypeOfMedical(patientToEdit.typeOfMedical || "");
      const findings = patientToEdit.testMedical || patientToEdit.usgXray || "";
      setTestMedical(findings);
      setFitnessStatus(
        patientToEdit.fitnessStatus ||
          (patientToEdit.condition?.toLowerCase().includes("unfit") ? "Unfit" : "Fit"),
      );
      setUnfitType(patientToEdit.unfitType || "Temporary");
      setUnfitReason(patientToEdit.unfitReason || "");
      setExaminationRemark(patientToEdit.examinationRemark || "");
      setPaymentStatus(patientToEdit.paymentStatus || "Paid");
      setTotalFee(patientToEdit.totalFee ?? 3500);
      const rawAmt =
        Number(patientToEdit.paymentAmount?.replace(/[^0-9.]/g, "")) ||
        (patientToEdit.paymentStatus === "Pending" ? 0 : 3500);
      setAmountPaid(rawAmt);
      setPaymentMode(patientToEdit.paymentMode || "Cash");
      setTransactionId(patientToEdit.transactionId || "");

      // Check for split payment
      const split = Boolean(
        patientToEdit.isSplitPayment ||
          patientToEdit.paymentMode === "Split (Cash + Online)",
      );
      setIsSplitPayment(split);
      setCashAmount(patientToEdit.cashAmount ?? "");
      setOnlineAmount(patientToEdit.onlineAmount ?? "");
      setOnlineMode(patientToEdit.onlineMode || "UPI");
      setOnlineTransId(patientToEdit.onlineTransId || "");
    } else {
      // New patient: COMPLETE FORM FIELDS REMOVED DEFAULT VALUES - ALL BLANK
      setSrNo("");
      setDate("");
      setTimeIn("");
      setTimeOut("");
      setName("");
      setPhone("");
      setEmail("");
      setDob("");
      setAge("");
      setGender("");
      setRank("");
      setCompanyName("");
      setVessel("");
      setIndosNo("");
      setCdcNo("");
      setPassportNo("");
      setCertificateNo("");
      setTypeOfMedical("");
      setTestMedical("");
      setFitnessStatus("");
      setUnfitType("Temporary");
      setUnfitReason("");
      setExaminationRemark("");
      setPaymentStatus("");
      setTotalFee("");
      setAmountPaid("");
      setPaymentMode("");
      setTransactionId("");
      setIsSplitPayment(false);
      setCashAmount("");
      setOnlineAmount("");
      setOnlineMode("");
      setOnlineTransId("");
    }
  }, [patientToEdit, open, nextSrNo]);

  // Auto calculate age when DOB changes
  const handleDobChange = (value: string) => {
    setDob(value);
    if (value) {
      const birth = new Date(value);
      if (!isNaN(birth.getTime())) {
        const diff = Date.now() - birth.getTime();
        const calculatedAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        if (calculatedAge >= 0 && calculatedAge < 120) {
          setAge(String(calculatedAge));
        }
      }
    }
  };

  // Enforce Alphanumeric helper (Char A-Z, 0-9)
  const sanitizeAlphanumeric = (val: string) => {
    return val.replace(/[^a-zA-Z0-9\s-]/g, "").toUpperCase();
  };

  // Split payment handlers
  const handleSplitCashChange = (val: string) => {
    const num = val === "" ? "" : Number(val);
    setCashAmount(num);
    const cNum = typeof num === "number" ? num : 0;
    const oNum = typeof onlineAmount === "number" ? onlineAmount : 0;
    setAmountPaid(cNum + oNum);
  };

  const handleSplitOnlineChange = (val: string) => {
    const num = val === "" ? "" : Number(val);
    setOnlineAmount(num);
    const oNum = typeof num === "number" ? num : 0;
    const cNum = typeof cashAmount === "number" ? cashAmount : 0;
    setAmountPaid(cNum + oNum);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) return;

    const initials = cleanName
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const finalSrNo =
      typeof srNo === "number" && srNo > 0 ? srNo : nextSrNo;
    const id = patientToEdit
      ? patientToEdit.id
      : (nextPatientId || `PT-${Math.max(2408, 2400 + finalSrNo) + 1}`);

    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

    const parsedTotalFee =
      typeof totalFee === "number" && totalFee >= 0
        ? totalFee
        : Number(totalFee) || 3500;

    const finalPaymentStatus: "Paid" | "Own" | "Partial" | "Pending" =
      (paymentStatus as any) || "Paid";

    let parsedAmountPaid = 0;
    if (finalPaymentStatus === "Paid" || finalPaymentStatus === "Own") {
      parsedAmountPaid = parsedTotalFee;
    } else if (finalPaymentStatus === "Pending") {
      parsedAmountPaid = 0;
    } else if (finalPaymentStatus === "Partial") {
      parsedAmountPaid = isSplitPayment
        ? (typeof cashAmount === "number" ? cashAmount : 0) +
          (typeof onlineAmount === "number" ? onlineAmount : 0)
        : typeof amountPaid === "number"
          ? amountPaid
          : Number(amountPaid) || 0;
      parsedAmountPaid = Math.min(parsedTotalFee, Math.max(0, parsedAmountPaid));
    }

    const calculatedBalanceDue =
      finalPaymentStatus === "Partial"
        ? Math.max(0, parsedTotalFee - parsedAmountPaid)
        : finalPaymentStatus === "Pending"
          ? parsedTotalFee
          : 0;

    const finalPaymentMode = isSplitPayment
      ? "Split (Cash + Online)"
      : (paymentMode as any) || "Cash";

    const finalTxnId = isSplitPayment
      ? `CASH:₹${cashAmount || 0} + ${onlineMode || "UPI"}:₹${onlineAmount || 0}${onlineTransId ? ` (${onlineTransId})` : ""}`
      : transactionId || (finalPaymentStatus === "Paid" ? "Full payment cleared" : finalPaymentStatus === "Pending" ? "Pending clearance" : "Partial clearance");

    const finalFitnessStatus: "Fit" | "Unfit" =
      fitnessStatus === "Unfit" ? "Unfit" : "Fit";

    const savedRecord: PatientRecord = {
      id,
      srNo: finalSrNo,
      date: date || new Date().toISOString().slice(0, 10),
      name: cleanName,
      candidateName: cleanName,
      initials,
      dob: dob || "",
      age: Number(age) || 0,
      gender: gender || "Male",
      phone: phone || "—",
      email: email || "",
      rank: rank || "",
      typeOfMedical: typeOfMedical || "Pre-Sea / Maritime Examination",
      usgXray: testMedical.trim() || "Normal",
      testMedical: testMedical.trim() || "",
      fitnessStatus: finalFitnessStatus,
      unfitType: finalFitnessStatus === "Unfit" ? unfitType : undefined,
      unfitReason:
        finalFitnessStatus === "Unfit" ? unfitReason.trim() : undefined,
      examinationRemark: examinationRemark.trim() || undefined,
      companyName: companyName || "Independent",
      vessel: vessel.trim() || undefined,
      vesselName: vessel.trim() || undefined,
      paymentStatus: finalPaymentStatus,
      paymentAmount:
        finalPaymentStatus === "Pending"
          ? "₹0.00"
          : `₹${parsedAmountPaid.toLocaleString("en-IN")}.00`,
      totalFee: parsedTotalFee,
      balanceDue: calculatedBalanceDue,
      paymentMode: finalPaymentMode,
      transactionId: finalTxnId,
      isSplitPayment,
      cashAmount:
        isSplitPayment && typeof cashAmount === "number"
          ? cashAmount
          : undefined,
      onlineAmount:
        isSplitPayment && typeof onlineAmount === "number"
          ? onlineAmount
          : undefined,
      onlineMode: isSplitPayment ? onlineMode : undefined,
      onlineTransId: isSplitPayment ? onlineTransId : undefined,
      timeIn: timeIn || "09:00 AM",
      timeOut: timeOut || "",
      certificateNo: sanitizeAlphanumeric(certificateNo),
      indosNo: sanitizeAlphanumeric(indosNo),
      cdcNo: sanitizeAlphanumeric(cdcNo),
      passportNo: sanitizeAlphanumeric(passportNo),
      invoiceNo: patientToEdit?.invoiceNo || undefined,
      lastVisit: formattedDate,
      nextVisit: "Scheduled in 1 yr",
      condition:
        finalFitnessStatus === "Unfit"
          ? `Unfit (${unfitType || "Temporary"})`
          : typeOfMedical || "Maritime Examination",
      status:
        finalFitnessStatus === "Unfit"
          ? "Follow-up"
          : finalPaymentStatus === "Paid"
            ? "Active"
            : "Follow-up",
    };

    onSave(savedRecord);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] w-full max-w-4xl overflow-y-auto p-0 sm:rounded-xl">
        <DialogHeader className="border-b border-border bg-muted/40 p-5 sm:px-6 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Ship className="size-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <DialogTitle className="text-lg font-semibold tracking-tight">
                  {isEditing ? "Edit Patient Record" : "Add New Patient Record"}
                </DialogTitle>
                {isEditing && (
                  <Badge variant="secondary" className="text-[11px]">
                    Record #{patientToEdit?.id}
                  </Badge>
                )}
              </div>
              <DialogDescription className="mt-0.5 text-xs text-muted-foreground">
                Official DG Shipping seafarer medical dossier and candidate clinical registration form
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-6">
          {/* SECTION 1: CANDIDATE & MARITIME IDENTIFICATION */}
          <div className="rounded-xl border border-border/70 bg-card p-4 sm:p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-md bg-primary/10 text-primary">
                  <User className="size-3.5" />
                </span>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  1. Candidate & Identification Details
                </h3>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground">
                {srNo ? `Sr. No #${srNo}` : ""}
              </span>
            </div>

            {/* Row 1: Sr. No, Date, Check-in Time (Time In) aligned immediately after Date */}
            <div className="grid gap-3 sm:grid-cols-4">
              <div className="space-y-1.5">
                <label htmlFor="field-srno" className="text-xs font-medium text-foreground">
                  Sr. No
                </label>
                <Input
                  id="field-srno"
                  type="number"
                  min="1"
                  placeholder=""
                  value={srNo}
                  onChange={(e) =>
                    setSrNo(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs font-mono font-semibold text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="field-date" className="text-xs font-medium text-foreground">
                  Date <span className="text-destructive">*</span>
                </label>
                <Input
                  id="field-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  required
                />
              </div>

              {/* Check-in Time aligned directly after date */}
              <div className="space-y-1.5">
                <label
                  htmlFor="field-timein"
                  className="text-xs font-medium text-foreground flex items-center gap-1"
                >
                  <Clock className="size-3 text-primary" />
                  Check-in Time (Time In) <span className="text-destructive">*</span>
                </label>
                <Input
                  id="field-timein"
                  placeholder=""
                  value={timeIn}
                  onChange={(e) => setTimeIn(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="field-timeout"
                  className="text-xs font-medium text-foreground flex items-center gap-1"
                >
                  <Clock className="size-3 text-muted-foreground" />
                  Departure Time (Time Out)
                </label>
                <Input
                  id="field-timeout"
                  placeholder=""
                  value={timeOut}
                  onChange={(e) => setTimeOut(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>
            </div>

            {/* Row 2: Candidate Name, DOB, Age, Gender */}
            <div className="grid gap-3 sm:grid-cols-12">
              <div className="space-y-1.5 sm:col-span-5">
                <label htmlFor="field-name" className="text-xs font-medium text-foreground">
                  Candidate Name / Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="field-name"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  required
                />
              </div>

              <div className="space-y-1.5 sm:col-span-3">
                <label htmlFor="field-dob" className="text-xs font-medium text-foreground">
                  DOB (Date of Birth)
                </label>
                <Input
                  id="field-dob"
                  type="date"
                  value={dob}
                  onChange={(e) => handleDobChange(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="field-age" className="text-xs font-medium text-foreground">
                  Age
                </label>
                <Input
                  id="field-age"
                  type="number"
                  placeholder=""
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="field-gender" className="text-xs font-medium text-foreground">
                  Gender
                </label>
                <select
                  id="field-gender"
                  aria-label="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3: Contact No, Email */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="field-contact" className="text-xs font-medium text-foreground">
                  Contact Mobile No.
                </label>
                <Input
                  id="field-contact"
                  type="tel"
                  placeholder=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="field-email" className="text-xs font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="field-email"
                  type="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>
            </div>

            {/* Row 4: Rank, Company Name (Dropdown from registered companies), Vessel */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="space-y-1.5">
                <label htmlFor="field-rank" className="text-xs font-medium text-foreground">
                  Rank <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="field-rank"
                    list="rank-suggestions"
                    placeholder=""
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    required
                  />
                  <datalist id="rank-suggestions">
                    {COMMON_RANKS.map((r) => (
                      <option key={r} value={r} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Company Name Dropdown */}
              <div className="space-y-1.5">
                <label
                  htmlFor="field-company"
                  className="text-xs font-medium text-foreground flex items-center justify-between"
                >
                  <span className="flex items-center gap-1">
                    <Building2 className="size-3 text-primary" />
                    Company Name <span className="text-destructive">*</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground font-normal">
                    From Directory
                  </span>
                </label>
                <select
                  id="field-company"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer font-medium"
                  required
                >
                  <option value="">Select Company</option>
                  {availableCompanies.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="field-vessel"
                  className="text-xs font-medium text-foreground flex items-center gap-1.5"
                >
                  <Ship className="size-3.5 text-primary" />
                  Vessel Name
                </label>
                <div className="relative">
                  <Input
                    id="field-vessel"
                    list="vessel-suggestions"
                    placeholder=""
                    value={vessel}
                    onChange={(e) => setVessel(e.target.value)}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  />
                  <datalist id="vessel-suggestions">
                    {COMMON_VESSELS.map((v) => (
                      <option key={v} value={v} />
                    ))}
                  </datalist>
                </div>
              </div>
            </div>

            {/* Maritime Credentials Sub-block */}
            <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-3.5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary/15 pb-2">
                <div className="flex items-center gap-2">
                  <FileBadge className="size-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">
                    Candidate Maritime Credentials
                  </span>
                </div>
                <Badge variant="outline" className="bg-background text-[10px] font-mono">
                  Alphanumeric: Char A-Z, 0-9
                </Badge>
              </div>

              {/* INDoS No, CDC No, Passport No (after CDC), Certificate No */}
              <div className="grid gap-3 sm:grid-cols-4">
                <div className="space-y-1.5">
                  <label htmlFor="field-indos" className="text-xs font-medium text-foreground">
                    INDoS No. <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="field-indos"
                    placeholder=""
                    value={indosNo}
                    onChange={(e) => setIndosNo(sanitizeAlphanumeric(e.target.value))}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 font-mono text-xs uppercase text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    required
                  />
                  <p className="text-[10px] text-muted-foreground">DG Shipping INDoS</p>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="field-cdc" className="text-xs font-medium text-foreground">
                    CDC No. <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="field-cdc"
                    placeholder=""
                    value={cdcNo}
                    onChange={(e) => setCdcNo(sanitizeAlphanumeric(e.target.value))}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 font-mono text-xs uppercase text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    required
                  />
                  <p className="text-[10px] text-muted-foreground">Continuous Discharge Cert</p>
                </div>

                {/* Passport No. filed directly after CDC No. */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="field-passport"
                    className="text-xs font-medium text-foreground flex items-center justify-between"
                  >
                    <span>Passport No.</span>
                    <span className="text-[10px] font-mono text-primary font-semibold">New</span>
                  </label>
                  <Input
                    id="field-passport"
                    placeholder=""
                    value={passportNo}
                    onChange={(e) => setPassportNo(sanitizeAlphanumeric(e.target.value))}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 font-mono text-xs uppercase text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  />
                  <p className="text-[10px] text-muted-foreground">Seafarer Passport No.</p>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="field-cert" className="text-xs font-medium text-foreground">
                    Certificate No.
                  </label>
                  <Input
                    id="field-cert"
                    placeholder=""
                    value={certificateNo}
                    onChange={(e) => setCertificateNo(sanitizeAlphanumeric(e.target.value))}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 font-mono text-xs uppercase text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  />
                  <p className="text-[10px] text-muted-foreground">Medical Certificate Ref</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: MEDICAL FITNESS & CLINICAL DIAGNOSTICS */}
          <div className="rounded-xl border border-border/70 bg-card p-4 sm:p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-md bg-emerald-500/10 text-emerald-600">
                  <Stethoscope className="size-3.5" />
                </span>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  2. Medical Examination & Diagnostics
                </h3>
              </div>
              <Badge
                variant={
                  fitnessStatus === "Fit"
                    ? "default"
                    : fitnessStatus === "Unfit"
                      ? "destructive"
                      : "outline"
                }
                className="text-[10px] font-semibold"
              >
                {fitnessStatus === "Fit"
                  ? "FIT"
                  : fitnessStatus === "Unfit"
                    ? `UNFIT (${unfitType.toUpperCase()})`
                    : "ASSESSMENT PENDING"}
              </Badge>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="field-type" className="text-xs font-medium text-foreground">
                  Type of Medical <span className="text-destructive">*</span>
                </label>
                <select
                  id="field-type"
                  value={typeOfMedical}
                  onChange={(e) => setTypeOfMedical(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                  required
                >
                  <option value="">Select Medical Type</option>
                  {MEDICAL_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="field-test-medical" className="text-xs font-medium text-foreground">
                  Test / Medical Findings
                </label>
                <Input
                  id="field-test-medical"
                  placeholder=""
                  value={testMedical}
                  onChange={(e) => setTestMedical(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>
            </div>

            {/* Medical Fitness: Fit / Unfit assessment */}
            <div className="rounded-lg border border-border/80 bg-muted/20 p-3.5 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-foreground">
                  Candidate Sea Fitness Assessment <span className="text-destructive">*</span>
                </label>
                <span className="text-[11px] text-muted-foreground">DG Shipping Maritime Rule</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium bg-background px-3 py-1.5 rounded-md border border-input hover:border-emerald-500/50 transition-colors">
                  <input
                    type="radio"
                    name="patient-fitness-status-onepage"
                    value="Fit"
                    checked={fitnessStatus === "Fit"}
                    onChange={() => setFitnessStatus("Fit")}
                    className="size-3.5 text-emerald-600"
                  />
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                    Fit for Sea Service
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium bg-background px-3 py-1.5 rounded-md border border-input hover:border-destructive/50 transition-colors">
                  <input
                    type="radio"
                    name="patient-fitness-status-onepage"
                    value="Unfit"
                    checked={fitnessStatus === "Unfit"}
                    onChange={() => setFitnessStatus("Unfit")}
                    className="size-3.5 text-destructive"
                  />
                  <span className="text-destructive font-semibold flex items-center gap-1">
                    <X className="size-3.5 text-destructive" />
                    Unfit
                  </span>
                </label>
              </div>

              {fitnessStatus === "Unfit" && (
                <div className="rounded-md border border-destructive/30 bg-destructive/5 p-3.5 space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-destructive">
                      Type of Unfitness <span className="text-destructive">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-medium bg-background px-3 py-1.5 rounded border border-border">
                        <input
                          type="radio"
                          name="patient-unfit-type-onepage"
                          value="Temporary"
                          checked={unfitType === "Temporary"}
                          onChange={() => setUnfitType("Temporary")}
                          className="size-3.5 text-amber-600"
                        />
                        <span className="text-amber-800 font-semibold">Temporary Unfitness</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-medium bg-background px-3 py-1.5 rounded border border-border">
                        <input
                          type="radio"
                          name="patient-unfit-type-onepage"
                          value="Permanent"
                          checked={unfitType === "Permanent"}
                          onChange={() => setUnfitType("Permanent")}
                          className="size-3.5 text-destructive"
                        />
                        <span className="text-destructive font-semibold">Permanent Unfitness</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="field-unfit-reason" className="text-xs font-medium text-foreground">
                      Reason of Unfit <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="field-unfit-reason"
                      placeholder=""
                      value={unfitReason}
                      onChange={(e) => setUnfitReason(e.target.value)}
                      className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      required={fitnessStatus === "Unfit"}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label htmlFor="field-exam-remark" className="text-xs font-medium text-foreground">
                  Examination Remark
                </label>
                <Input
                  id="field-exam-remark"
                  placeholder=""
                  value={examinationRemark}
                  onChange={(e) => setExaminationRemark(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: FEE SETTLEMENT & PAYMENT DETAILS */}
          <div className="rounded-xl border border-border/70 bg-card p-4 sm:p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-md bg-primary/10 text-primary">
                  <CreditCard className="size-3.5" />
                </span>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  3. Fee Settlement & Payment Details
                </h3>
              </div>
              <Badge
                variant={
                  paymentStatus === "Paid"
                    ? "default"
                    : paymentStatus === "Partial"
                      ? "secondary"
                      : "outline"
                }
                className="text-[10px]"
              >
                Status: {paymentStatus || "Pending"}
              </Badge>
            </div>

            {/* Payment Status Dropdown: all blank initially, option text "Paid (Full Payment Cleared)" */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="field-status" className="text-xs font-medium text-foreground">
                  Payment Status <span className="text-destructive">*</span>
                </label>
                <select
                  id="field-status"
                  value={paymentStatus}
                  onChange={(e) => {
                    const val = e.target.value as "Paid" | "Own" | "Partial" | "Pending" | "";
                    setPaymentStatus(val);
                    if (val === "Pending") {
                      setAmountPaid(0);
                    } else if (val === "Paid" || val === "Own") {
                      if (typeof totalFee === "number" && totalFee > 0) {
                        setAmountPaid(totalFee);
                      }
                    }
                  }}
                  className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer font-medium"
                  required
                >
                  <option value="">Select Payment Status</option>
                  <option value="Paid">Paid (Full Payment Cleared)</option>
                  <option value="Own">Own (Candidate Paid In Full)</option>
                  <option value="Partial">Partial Payment (Candidate Paid Part Amount)</option>
                  <option value="Pending">Pending / Due (Payment Not Received Yet)</option>
                </select>
              </div>

              {/* Total Fee & Amount Paid Inputs */}
              <div className="space-y-1.5">
                <label htmlFor="field-total-fee" className="text-xs font-medium text-foreground">
                  Total Fee (₹)
                </label>
                <Input
                  id="field-total-fee"
                  type="number"
                  min="0"
                  placeholder=""
                  value={totalFee}
                  onChange={(e) => {
                    const val = e.target.value === "" ? "" : Number(e.target.value);
                    setTotalFee(val);
                    if (paymentStatus === "Paid" || paymentStatus === "Own") {
                      setAmountPaid(val);
                    }
                  }}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs font-mono font-semibold text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>

              {/* Amount Paid / Full Payment Cleared */}
              {paymentStatus === "Pending" ? (
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Payment Due
                  </label>
                  <div className="h-9 flex items-center px-3 rounded-md border border-destructive/20 bg-destructive/5 font-mono font-bold text-destructive text-xs">
                    ₹{(Number(totalFee) || 0).toLocaleString("en-IN")}.00 (Pending)
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <label htmlFor="field-amt" className="text-xs font-medium text-foreground">
                    {paymentStatus === "Paid" || paymentStatus === "Own"
                      ? "Full Payment Cleared"
                      : "Amount Paid (Received)"}{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="field-amt"
                    type="number"
                    min="0"
                    placeholder=""
                    value={amountPaid}
                    onChange={(e) => {
                      const val = e.target.value === "" ? "" : Number(e.target.value);
                      setAmountPaid(val);
                    }}
                    disabled={isSplitPayment}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs font-mono font-semibold text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    required={paymentStatus !== "" && paymentStatus !== "Pending"}
                  />
                  {isSplitPayment && (
                    <p className="text-[10px] text-muted-foreground">
                      Calculated automatically from Cash + Online amounts below
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Split Payment Option: Add opt to another payment record if same patient did some online and in some cash */}
            {paymentStatus !== "Pending" && (
              <div className="rounded-lg border border-border/80 bg-muted/20 p-3.5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="size-4 text-primary" />
                    <div>
                      <span className="text-xs font-semibold text-foreground">
                        Split Payment (Combined Cash + Online / UPI)
                      </span>
                      <p className="text-[10px] text-muted-foreground">
                        Enable if candidate made partial payment in cash and remaining via online / UPI / card
                      </p>
                    </div>
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium bg-background px-3 py-1.5 rounded-md border border-input hover:border-primary/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={isSplitPayment}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setIsSplitPayment(checked);
                        if (checked) {
                          setPaymentMode("Split (Cash + Online)");
                          const half =
                            typeof totalFee === "number" ? Math.floor(totalFee / 2) : 0;
                          if (cashAmount === "" && onlineAmount === "") {
                            setCashAmount(half);
                            setOnlineAmount(typeof totalFee === "number" ? totalFee - half : 0);
                            setAmountPaid(typeof totalFee === "number" ? totalFee : 0);
                          }
                        } else {
                          setPaymentMode("Cash");
                        }
                      }}
                      className="size-3.5 rounded text-primary"
                    />
                    <span className="font-semibold text-primary">Enable Split</span>
                  </label>
                </div>

                {isSplitPayment ? (
                  /* Split Payment inputs */
                  <div className="grid gap-3.5 sm:grid-cols-2 pt-2 border-t border-border/50">
                    {/* Component 1: Cash */}
                    <div className="rounded-md border border-emerald-500/30 bg-emerald-500/5 p-3 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                          1. Cash Payment Record
                        </span>
                        <Badge variant="outline" className="text-[10px] bg-background">
                          Cash
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="field-split-cash" className="text-[11px] font-medium text-foreground">
                          Cash Amount (₹) <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="field-split-cash"
                          type="number"
                          min="0"
                          placeholder=""
                          value={cashAmount}
                          onChange={(e) => handleSplitCashChange(e.target.value)}
                          className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs font-mono font-semibold text-emerald-700 shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                          required={isSplitPayment}
                        />
                      </div>
                    </div>

                    {/* Component 2: Online */}
                    <div className="rounded-md border border-blue-500/30 bg-blue-500/5 p-3 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-800 dark:text-blue-400">
                          2. Online / Digital Payment Record
                        </span>
                        <select
                          aria-label="Online Payment Mode"
                          value={onlineMode}
                          onChange={(e) => setOnlineMode(e.target.value)}
                          className="h-9 w-36 rounded-md border border-input bg-background px-2.5 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                        >
                          <option value="">Select Mode</option>
                          <option value="UPI">UPI / GPay / PhonePe</option>
                          <option value="Trans. ID">POS / Card Terminal</option>
                          <option value="Bank Transfer">NetBanking / IMPS</option>
                        </select>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="space-y-1">
                          <label htmlFor="field-split-online" className="text-[11px] font-medium text-foreground">
                            Online Amount (₹) <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="field-split-online"
                            type="number"
                            min="0"
                            placeholder=""
                            value={onlineAmount}
                            onChange={(e) => handleSplitOnlineChange(e.target.value)}
                            className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs font-mono font-semibold text-blue-700 shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                            required={isSplitPayment}
                          />
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="field-split-ref" className="text-[11px] font-medium text-foreground">
                            Online Ref / Trans. ID
                          </label>
                          <Input
                            id="field-split-ref"
                            placeholder=""
                            value={onlineTransId}
                            onChange={(e) => setOnlineTransId(e.target.value)}
                            className="h-9 w-full rounded-md border border-input bg-background px-3 font-mono text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Summary row for Split */}
                    <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-2 rounded bg-background p-2.5 border border-border">
                      <div className="text-xs">
                        <span className="text-muted-foreground">Total Combined Received: </span>
                        <span className="font-mono font-bold text-foreground">
                          ₹{((Number(cashAmount) || 0) + (Number(onlineAmount) || 0)).toLocaleString("en-IN")}.00
                        </span>
                      </div>
                      {typeof totalFee === "number" && totalFee > 0 && (
                        <div className="text-xs">
                          <span className="text-muted-foreground">Balance Due: </span>
                          <span
                            className={`font-mono font-bold ${
                              Math.max(
                                0,
                                totalFee -
                                  ((Number(cashAmount) || 0) + (Number(onlineAmount) || 0)),
                              ) > 0
                                ? "text-destructive"
                                : "text-emerald-600"
                            }`}
                          >
                            ₹
                            {Math.max(
                              0,
                              totalFee -
                                ((Number(cashAmount) || 0) + (Number(onlineAmount) || 0)),
                            ).toLocaleString("en-IN")}
                            .00
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Standard Single Payment Mode (No Payment Proof field per user request) */
                  <div className="grid gap-3 sm:grid-cols-2 pt-2 border-t border-border/50">
                    <div className="space-y-1.5">
                      <label htmlFor="field-mode" className="text-xs font-medium text-foreground">
                        Payment Mode <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="field-mode"
                        value={paymentMode}
                        onChange={(e) =>
                          setPaymentMode(e.target.value)
                        }
                        className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer font-medium"
                      >
                        <option value="">Select Payment Mode</option>
                        <option value="Cash">Cash</option>
                        <option value="Trans. ID">Trans. ID (Online / POS)</option>
                        <option value="UPI">UPI / Digital (GPay / PhonePe)</option>
                        <option value="Bank Transfer">Bank Transfer (NEFT / IMPS)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="field-transid" className="text-xs font-medium text-foreground">
                        Trans. ID / Transaction Reference
                      </label>
                      <Input
                        id="field-transid"
                        placeholder=""
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        className="h-9 w-full rounded-md border border-input bg-background px-3 font-mono text-xs text-foreground shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Footer with Cancel and Save Buttons */}
          <DialogFooter className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between sm:space-x-0 border-t border-border pt-4">
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <span>* Required DG Shipping seafarer fields</span>
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" className="gap-1.5">
                <FileCheck2 className="size-4" />
                {isEditing ? "Save Changes" : "Save Record"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
