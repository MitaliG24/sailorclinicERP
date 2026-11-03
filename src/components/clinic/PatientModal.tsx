import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  FileBadge,
  FileCheck2,
  FileText,
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
import type { PatientRecord } from "@/lib/clinic";

interface PatientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  patientToEdit?: PatientRecord | null;
  nextSrNo: number;
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

const USG_XRAY_OPTIONS = [
  "USG & Chest X-Ray Normal",
  "Chest X-Ray Normal",
  "USG Normal",
  "Pending USG",
  "Pending X-Ray",
  "Both Pending",
  "Not Required",
  "Abnormal - Requires Review",
];

const COMMON_COMPANIES = [
  "Maersk Marine Services",
  "Synergy Maritime",
  "Anglo-Eastern Shipping",
  "Fleet Management Ltd",
  "MSC Mediterranean",
  "Teekay Tankers",
  "Bernhard Schulte (BSM)",
  "V.Group / V.Ships",
  "Great Eastern Shipping",
  "Executive Ship Management",
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
  onSave,
}: PatientModalProps) {
  const isEditing = Boolean(patientToEdit);

  const [srNo, setSrNo] = useState<number>(nextSrNo);
  const [date, setDate] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("Male");
  const [rank, setRank] = useState<string>("");
  const [typeOfMedical, setTypeOfMedical] = useState<string>("Annual Seafarer Medical");
  const [usgXray, setUsgXray] = useState<string>("Normal (USG & CXR Normal)");
  const [testMedical, setTestMedical] = useState<string>("Normal (USG & CXR Normal, ECG Clear)");
  const [fitnessStatus, setFitnessStatus] = useState<"Fit" | "Unfit">("Fit");
  const [unfitType, setUnfitType] = useState<"Temporary" | "Permanent">("Temporary");
  const [unfitReason, setUnfitReason] = useState<string>("");
  const [examinationRemark, setExaminationRemark] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [vessel, setVessel] = useState<string>("");

  // Payment status & partial settlement fields
  const [paymentStatus, setPaymentStatus] = useState<"Paid" | "Own" | "Partial" | "Pending">("Paid");
  const [totalFee, setTotalFee] = useState<number>(3500);
  const [amountPaid, setAmountPaid] = useState<number>(3500);
  const [paymentMode, setPaymentMode] = useState<"Cash" | "Trans. ID" | "UPI" | "Bank Transfer">("Trans. ID");
  const [paymentProof, setPaymentProof] = useState<string>("");
  const [transactionId, setTransactionId] = useState<string>("");

  // Timing
  const [timeIn, setTimeIn] = useState<string>("09:00 AM");
  const [timeOut, setTimeOut] = useState<string>("01:00 PM");

  // Alphanumeric credentials
  const [certificateNo, setCertificateNo] = useState<string>("");
  const [indosNo, setIndosNo] = useState<string>("");
  const [cdcNo, setCdcNo] = useState<string>("");
  const [invoiceNo, setInvoiceNo] = useState<string>("");

  const [activeTab, setActiveTab] = useState<"candidate" | "medical" | "payment">("candidate");

  // Populate when patientToEdit changes or modal opens
  useEffect(() => {
    if (patientToEdit) {
      setSrNo(patientToEdit.srNo || 1);
      setDate(patientToEdit.date || new Date().toISOString().slice(0, 10));
      setName(patientToEdit.name || "");
      setPhone(patientToEdit.phone || "");
      setEmail(patientToEdit.email || "");
      setDob(patientToEdit.dob || "");
      setAge(patientToEdit.age ? String(patientToEdit.age) : "");
      setGender(patientToEdit.gender || "Male");
      setRank(patientToEdit.rank || "");
      setTypeOfMedical(patientToEdit.typeOfMedical || "Annual Seafarer Medical");
      const findings = patientToEdit.testMedical || patientToEdit.usgXray || "Normal (USG & CXR Normal, ECG Clear)";
      setUsgXray(findings);
      setTestMedical(findings);
      setFitnessStatus(patientToEdit.fitnessStatus || (patientToEdit.condition?.toLowerCase().includes("unfit") ? "Unfit" : "Fit"));
      setUnfitType(patientToEdit.unfitType || "Temporary");
      setUnfitReason(patientToEdit.unfitReason || "");
      setExaminationRemark(patientToEdit.examinationRemark || "");
      setCompanyName(patientToEdit.companyName || "");
      setVessel(patientToEdit.vesselName || patientToEdit.vessel || "");
      setPaymentStatus(patientToEdit.paymentStatus || "Paid");
      const fee = patientToEdit.totalFee || 3500;
      setTotalFee(fee);
      const rawAmt = Number(patientToEdit.paymentAmount?.replace(/[^0-9.]/g, "")) || (patientToEdit.paymentStatus === "Pending" ? 0 : fee);
      setAmountPaid(rawAmt);
      setPaymentMode(patientToEdit.paymentMode || "Trans. ID");
      setPaymentProof(patientToEdit.paymentProof || "");
      setTransactionId(patientToEdit.transactionId || "");
      setTimeIn(patientToEdit.timeIn || "09:00 AM");
      setTimeOut(patientToEdit.timeOut || "01:00 PM");
      setCertificateNo(patientToEdit.certificateNo || "");
      setIndosNo(patientToEdit.indosNo || "");
      setCdcNo(patientToEdit.cdcNo || "");
      setInvoiceNo(patientToEdit.invoiceNo || `REC-2026-${String(patientToEdit.srNo || nextSrNo).padStart(3, "0")}`);
    } else {
      // New patient defaults
      const today = new Date().toISOString().slice(0, 10);
      setSrNo(nextSrNo);
      setDate(today);
      setName("");
      setPhone("");
      setEmail("");
      setDob("1995-05-15");
      setAge("31");
      setGender("Male");
      setRank("Chief Officer");
      setTypeOfMedical("Annual Seafarer Medical");
      setUsgXray("Normal (USG & CXR Normal, ECG Clear)");
      setTestMedical("Normal (USG & CXR Normal, ECG Clear)");
      setFitnessStatus("Fit");
      setUnfitType("Temporary");
      setUnfitReason("");
      setExaminationRemark("Fit for worldwide maritime sea service without restrictions.");
      setCompanyName("Maersk Marine Services");
      setVessel("MV Maersk Mc-Kinney");
      setPaymentStatus("Paid");
      setTotalFee(3500);
      setAmountPaid(3500);
      setPaymentMode("Trans. ID");
      setPaymentProof("Online receipt attached");
      setTransactionId(`TXN-${Math.floor(10000 + Math.random() * 90000)}`);
      setTimeIn("09:00 AM");
      setTimeOut("01:30 PM");
      setCertificateNo(`MC-2026-${Math.floor(9000 + nextSrNo)}`);
      setIndosNo(`${Math.floor(10 + Math.random() * 89)}NL${Math.floor(1000 + Math.random() * 9000)}`);
      setCdcNo(`MUM ${Math.floor(100000 + Math.random() * 900000)}`);
      setInvoiceNo(`REC-2026-${String(nextSrNo + 84).padStart(3, "0")}`);
    }
    setActiveTab("candidate");
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

    const id = patientToEdit ? patientToEdit.id : `PT-${(2400 + srNo).toString()}`;

    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "Oct 22, 2026";

    const savedRecord: PatientRecord = {
      id,
      srNo: Number(srNo) || nextSrNo,
      date: date || new Date().toISOString().slice(0, 10),
      name: cleanName,
      candidateName: cleanName,
      initials,
      dob: dob || "1995-01-01",
      age: Number(age) || 30,
      gender: gender || "Male",
      phone: phone || "—",
      email: email || `${cleanName.toLowerCase().replace(/\s+/g, ".")}@seafarer.demo`,
      rank: rank || "Seafarer",
      typeOfMedical: typeOfMedical || "Annual Seafarer Medical",
      usgXray: testMedical.trim() || usgXray || "Normal (USG & CXR Normal)",
      testMedical: testMedical.trim() || "Normal (USG & CXR Normal, ECG Clear)",
      fitnessStatus,
      unfitType: fitnessStatus === "Unfit" ? unfitType : undefined,
      unfitReason: fitnessStatus === "Unfit" ? unfitReason.trim() : undefined,
      examinationRemark: examinationRemark.trim() || undefined,
      companyName: companyName || "Independent / Agency",
      vessel: vessel.trim() || undefined,
      vesselName: vessel.trim() || undefined,
      paymentStatus: paymentStatus || "Paid",
      paymentAmount: paymentStatus === "Pending" ? "₹0.00" : `₹${(amountPaid || 3500).toLocaleString("en-IN")}.00`,
      totalFee: Number(totalFee) || 3500,
      balanceDue: paymentStatus === "Partial" ? Math.max(0, (Number(totalFee) || 3500) - (Number(amountPaid) || 0)) : paymentStatus === "Pending" ? (Number(totalFee) || 3500) : 0,
      paymentMode: paymentStatus === "Pending" ? "Cash" : paymentMode || "Trans. ID",
      paymentProof: paymentStatus === "Pending" ? "Pending clearance" : paymentProof || "Standard voucher",
      transactionId: paymentStatus === "Pending" ? "" : transactionId || `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      timeIn: timeIn || "09:00 AM",
      timeOut: timeOut || "01:00 PM",
      certificateNo: sanitizeAlphanumeric(certificateNo),
      indosNo: sanitizeAlphanumeric(indosNo),
      cdcNo: sanitizeAlphanumeric(cdcNo),
      invoiceNo: invoiceNo || `REC-2026-${String(srNo).padStart(3, "0")}`,
      lastVisit: formattedDate,
      nextVisit: "Scheduled in 1 yr",
      condition: fitnessStatus === "Unfit" ? `Unfit (${unfitType || "Temporary"})` : typeOfMedical || "Annual Seafarer Medical",
      status: fitnessStatus === "Unfit" ? "Follow-up" : paymentStatus === "Paid" ? "Active" : "Follow-up",
    };

    onSave(savedRecord);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] w-full max-w-3xl overflow-y-auto p-0 sm:rounded-xl">
        <DialogHeader className="border-b border-border bg-muted/40 p-5 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Ship className="size-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <DialogTitle className="text-lg font-semibold tracking-tight">
                  {isEditing ? "Edit Patient Record" : "Add New Patient Record"}
                </DialogTitle>
                <Badge variant={isEditing ? "secondary" : "default"} className="text-[11px]">
                  {isEditing ? `Record #${patientToEdit?.id}` : "DG Shipping / Maritime"}
                </Badge>
              </div>
              <DialogDescription className="mt-0.5 text-xs text-muted-foreground">
                Marine seafarer clinical dossier & medical fitness examination fields
              </DialogDescription>
            </div>
          </div>

          {/* Form Tabs */}
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
            <button
              type="button"
              onClick={() => setActiveTab("candidate")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                activeTab === "candidate"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <User className="size-3.5" />
              1. Candidate Details
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("medical")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                activeTab === "medical"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Stethoscope className="size-3.5" />
              2. Medical & Timing
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("payment")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                activeTab === "payment"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <CreditCard className="size-3.5" />
              3. Payment Details
            </button>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6">
          {/* TAB 1: Candidate Details */}
          {activeTab === "candidate" && (
            <div className="space-y-4">
              <div className="rounded-lg border border-border/70 bg-card p-4">
                <div className="mb-3 flex items-center justify-between border-b border-border/50 pb-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Basic Maritime Candidate Info
                  </h3>
                  <span className="text-[11px] text-muted-foreground">Sr. No #{srNo}</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="space-y-1.5">
                    <label htmlFor="field-srno" className="text-xs font-medium text-foreground">
                      Sr. No <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="field-srno"
                      type="number"
                      min="1"
                      value={srNo}
                      onChange={(e) => setSrNo(Number(e.target.value))}
                      className="h-9 text-xs"
                      required
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
                      className="h-9 text-xs"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="field-dob" className="text-xs font-medium text-foreground">
                      DOB (Date of Birth) <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="field-dob"
                      type="date"
                      value={dob}
                      onChange={(e) => handleDobChange(e.target.value)}
                      className="h-9 text-xs"
                      required
                    />
                  </div>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="field-name" className="text-xs font-medium text-foreground">
                      Candidate Name / Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="field-name"
                      placeholder="e.g. Captain Rajesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-9 text-xs"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="field-age" className="text-xs font-medium text-foreground">
                      Age & Gender
                    </label>
                    <div className="flex gap-2">
                      <Input
                        id="field-age"
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="h-9 w-20 text-xs"
                      />
                      <select
                        aria-label="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="h-9 flex-1 rounded-md border border-input bg-background px-2 text-xs"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="field-contact" className="text-xs font-medium text-foreground">
                      Contact No. <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="field-contact"
                      type="tel"
                      placeholder="+91 98765 43210 or +1 (212) 555-0148"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-9 text-xs"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="field-email" className="text-xs font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="field-email"
                      type="email"
                      placeholder="candidate@marine.demo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-9 text-xs"
                    />
                  </div>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div className="space-y-1.5">
                    <label htmlFor="field-rank" className="text-xs font-medium text-foreground">
                      Rank <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="field-rank"
                        list="rank-suggestions"
                        placeholder="e.g. Chief Officer, Captain, Bosun"
                        value={rank}
                        onChange={(e) => setRank(e.target.value)}
                        className="h-9 text-xs"
                        required
                      />
                      <datalist id="rank-suggestions">
                        {COMMON_RANKS.map((r) => (
                          <option key={r} value={r} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="field-company" className="text-xs font-medium text-foreground">
                      Company Name <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="field-company"
                        list="company-suggestions"
                        placeholder="e.g. Maersk Marine, Synergy, MSC"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="h-9 text-xs"
                        required
                      />
                      <datalist id="company-suggestions">
                        {COMMON_COMPANIES.map((c) => (
                          <option key={c} value={c} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="field-vessel" className="text-xs font-medium text-foreground flex items-center gap-1.5">
                      <Ship className="size-3.5 text-primary" />
                      Vessel Name
                    </label>
                    <div className="relative">
                      <Input
                        id="field-vessel"
                        list="vessel-suggestions"
                        placeholder="e.g. MV Maersk Mc-Kinney"
                        value={vessel}
                        onChange={(e) => setVessel(e.target.value)}
                        className="h-9 text-xs"
                      />
                      <datalist id="vessel-suggestions">
                        {COMMON_VESSELS.map((v) => (
                          <option key={v} value={v} />
                        ))}
                      </datalist>
                    </div>
                  </div>
                </div>

                {/* Candidate Credentials Section (Kept in Candidate Details) */}
                <div className="mt-4 rounded-lg border border-primary/25 bg-primary/5 p-4 space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary/15 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="grid size-7 place-items-center rounded-md bg-primary/10 text-primary">
                        <FileBadge className="size-4" />
                      </span>
                      <div>
                        <h4 className="text-xs font-semibold text-foreground">
                          Candidate Maritime Credentials
                        </h4>
                        <p className="text-[10px] text-muted-foreground">
                          Official DG Shipping seafarer identification and fitness certificate reference
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-background text-[10px] font-mono">
                      Alphanumeric: Char A-Z, 0-9
                    </Badge>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label htmlFor="field-indos-cand" className="text-xs font-medium text-foreground">
                          INDoS No. <span className="text-destructive">*</span>
                        </label>
                        <span className="text-[10px] font-mono text-muted-foreground">Char A-Z, 0-9</span>
                      </div>
                      <Input
                        id="field-indos-cand"
                        placeholder="e.g. 12NL8492"
                        value={indosNo}
                        onChange={(e) => setIndosNo(sanitizeAlphanumeric(e.target.value))}
                        className="h-9 font-mono text-xs uppercase tracking-wide bg-background"
                        required
                      />
                      <p className="text-[10px] text-muted-foreground">
                        Indian National Database of Seafarers
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label htmlFor="field-cdc-cand" className="text-xs font-medium text-foreground">
                          CDC No. <span className="text-destructive">*</span>
                        </label>
                        <span className="text-[10px] font-mono text-muted-foreground">Char A-Z, 0-9</span>
                      </div>
                      <Input
                        id="field-cdc-cand"
                        placeholder="e.g. MUM 248910"
                        value={cdcNo}
                        onChange={(e) => setCdcNo(sanitizeAlphanumeric(e.target.value))}
                        className="h-9 font-mono text-xs uppercase tracking-wide bg-background"
                        required
                      />
                      <p className="text-[10px] text-muted-foreground">
                        Continuous Discharge Certificate
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label htmlFor="field-cert-cand" className="text-xs font-medium text-foreground">
                          Certificate No.
                        </label>
                        <span className="text-[10px] font-mono text-muted-foreground">Fitness Ref</span>
                      </div>
                      <Input
                        id="field-cert-cand"
                        placeholder="e.g. MC-2026-9041"
                        value={certificateNo}
                        onChange={(e) => setCertificateNo(sanitizeAlphanumeric(e.target.value))}
                        className="h-9 font-mono text-xs uppercase tracking-wide bg-background"
                      />
                      <p className="text-[10px] text-muted-foreground">
                        Official Medical Fitness Cert Ref
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3">
                  <span className="text-[11px] text-muted-foreground">
                    Candidate info & credentials completed
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      type="submit"
                      size="sm"
                      variant="outline"
                      className="gap-1.5 text-xs font-medium border-primary/40 text-primary hover:bg-primary/5"
                    >
                      <FileCheck2 className="size-3.5" />
                      Save Record
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="secondary"
                      className="gap-1.5 text-xs font-medium"
                      onClick={() => setActiveTab("medical")}
                    >
                      Next: Medical & Timing
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Medical & Timing */}
          {activeTab === "medical" && (
            <div className="space-y-4">
              <div className="rounded-lg border border-border/70 bg-card p-4">
                <div className="mb-3 flex items-center justify-between border-b border-border/50 pb-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Medical Examination & Clinical Diagnostics
                  </h3>
                  <span className="text-[11px] text-muted-foreground">Clinic Protocol</span>
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
                      className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs"
                      required
                    >
                      {MEDICAL_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="field-test-medical" className="text-xs font-medium text-foreground">
                      Test / Medical Findings (Enter manually) <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="field-test-medical"
                      placeholder="e.g. CXR Clear, USG Abdomen Normal, ECG Normal, CBC in range"
                      value={testMedical}
                      onChange={(e) => {
                        setTestMedical(e.target.value);
                        setUsgXray(e.target.value);
                      }}
                      className="h-9 text-xs"
                      required
                    />
                  </div>
                </div>

                {/* Medical Fitness: Fit / Unfit assessment */}
                <div className="mt-4 rounded-lg border border-border/80 bg-muted/20 p-3.5 space-y-3.5">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="size-4 text-primary" />
                      <h4 className="text-xs font-semibold text-foreground">
                        Medical Fitness Assessment
                      </h4>
                    </div>
                    <Badge
                      variant={fitnessStatus === "Fit" ? "default" : "destructive"}
                      className="text-[10px] font-semibold"
                    >
                      {fitnessStatus === "Fit" ? "FIT" : `UNFIT (${unfitType.toUpperCase()})`}
                    </Badge>
                  </div>

                  {/* Fit / Unfit selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">
                      Candidate Fitness Status <span className="text-destructive">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-medium bg-background px-3 py-1.5 rounded-md border border-input hover:border-emerald-500/50 transition-colors">
                        <input
                          type="radio"
                          name="patient-fitness-status"
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
                          name="patient-fitness-status"
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
                  </div>

                  {/* If Unfit: show Type of Unfitness (Temporary / Permanent) and Reason of Unfit */}
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
                              name="patient-unfit-type"
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
                              name="patient-unfit-type"
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
                          placeholder="Specify reason for unfitness (e.g. Uncontrolled Hypertension, Defective Color Vision)"
                          value={unfitReason}
                          onChange={(e) => setUnfitReason(e.target.value)}
                          className="h-9 text-xs bg-background"
                          required={fitnessStatus === "Unfit"}
                        />
                      </div>
                    </div>
                  )}

                  {/* Examination Remark */}
                  <div className="space-y-1.5">
                    <label htmlFor="field-exam-remark" className="text-xs font-medium text-foreground">
                      Examination Remark
                    </label>
                    <Input
                      id="field-exam-remark"
                      placeholder="e.g. Fit for sea duty with corrective spectacles. Review in 6 months."
                      value={examinationRemark}
                      onChange={(e) => setExaminationRemark(e.target.value)}
                      className="h-9 text-xs bg-background"
                    />
                  </div>
                </div>

                <div className="mt-4 border-t border-border/60 pt-3">
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Clock className="size-3.5 text-primary" />
                    Time . In & Out (Check-in & Departure)
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="field-timein" className="text-xs font-medium text-foreground">
                        Time In <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="field-timein"
                        placeholder="09:00 AM"
                        value={timeIn}
                        onChange={(e) => setTimeIn(e.target.value)}
                        className="h-9 text-xs"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="field-timeout" className="text-xs font-medium text-foreground">
                        Time Out
                      </label>
                      <Input
                        id="field-timeout"
                        placeholder="01:30 PM (or In Progress)"
                        value={timeOut}
                        onChange={(e) => setTimeOut(e.target.value)}
                        className="h-9 text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="gap-1.5 text-xs"
                    onClick={() => setActiveTab("candidate")}
                  >
                    <ArrowLeft className="size-3.5" />
                    Back to Candidate Details
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button
                      type="submit"
                      size="sm"
                      variant="outline"
                      className="gap-1.5 text-xs font-medium border-primary/40 text-primary hover:bg-primary/5"
                    >
                      <FileCheck2 className="size-3.5" />
                      Save Record
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="secondary"
                      className="gap-1.5 text-xs font-medium"
                      onClick={() => setActiveTab("payment")}
                    >
                      Next: Payment Details
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Payment Details */}
          {activeTab === "payment" && (
            <div className="space-y-4">
              <div className="rounded-lg border border-border/70 bg-card p-4">
                <div className="mb-3 flex items-center justify-between border-b border-border/50 pb-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Payment Status & Financial Settlement
                  </h3>
                  <Badge
                    variant={paymentStatus === "Paid" ? "default" : paymentStatus === "Partial" ? "secondary" : "outline"}
                    className="text-[10px]"
                  >
                    Status: {paymentStatus}
                  </Badge>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="field-status" className="text-xs font-medium text-foreground">
                      Status (Payment - Paid / Own / Partial / Pending) <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="field-status"
                      value={paymentStatus}
                      onChange={(e) => {
                        const val = e.target.value as "Paid" | "Own" | "Partial" | "Pending";
                        setPaymentStatus(val);
                        if (val === "Paid" || val === "Own") {
                          setAmountPaid(totalFee);
                        } else if (val === "Pending") {
                          setAmountPaid(0);
                        } else if (val === "Partial" && (amountPaid === 0 || amountPaid === totalFee)) {
                          setAmountPaid(2000);
                        }
                      }}
                      className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs font-semibold"
                    >
                      <option value="Paid">Paid (Full Examination Cleared - ₹3,500)</option>
                      <option value="Own">Own (Candidate Paid In Full)</option>
                      <option value="Partial">Partial Payment (Candidate Paid Part Amount)</option>
                      <option value="Pending">Pending / Due (Payment Not Received Yet)</option>
                    </select>
                  </div>

                  {/* Partial Payment Options: Total Fee, Amount Paid, Dues */}
                  {paymentStatus === "Partial" ? (
                    <div className="sm:col-span-2 rounded-lg border border-amber-300 bg-amber-50/50 p-3.5 space-y-3">
                      <div className="text-xs font-semibold text-amber-800 flex items-center gap-1.5">
                        <CreditCard className="size-3.5" />
                        Partial Payment Breakdown & Dues
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="space-y-1.5">
                          <label htmlFor="field-total-fee" className="text-xs font-medium text-foreground">
                            Total Examination Fee
                          </label>
                          <Input
                            id="field-total-fee"
                            type="number"
                            min="1"
                            value={totalFee}
                            onChange={(e) => setTotalFee(Number(e.target.value) || 3500)}
                            className="h-9 text-xs font-semibold bg-background font-mono"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="field-amt-paid" className="text-xs font-medium text-foreground">
                            Amount Paid (Received) <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="field-amt-paid"
                            type="number"
                            min="1"
                            max={totalFee}
                            value={amountPaid}
                            onChange={(e) => setAmountPaid(Number(e.target.value) || 0)}
                            className="h-9 text-xs font-bold bg-background text-emerald-700 font-mono"
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-foreground">
                            Remaining Dues (Balance)
                          </label>
                          <div className="h-9 flex items-center px-3 rounded-md border border-amber-200 bg-amber-100/60 font-mono font-bold text-destructive text-xs">
                            ₹{Math.max(0, totalFee - amountPaid).toLocaleString("en-IN")}.00
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : paymentStatus === "Pending" ? (
                    <div className="sm:col-span-2 rounded-lg border border-destructive/20 bg-destructive/5 p-3.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-foreground">Total Fee Outstanding / Due:</span>
                        <span className="font-bold font-mono text-destructive text-sm">₹{totalFee.toLocaleString("en-IN")}.00</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1.5">
                        Payment mode, reference, and receipt options are hidden while payment is pending.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <label htmlFor="field-amt" className="text-xs font-medium text-foreground">
                        Examination Fee Cleared
                      </label>
                      <Input
                        id="field-amt"
                        type="number"
                        min="1"
                        value={amountPaid}
                        onChange={(e) => {
                          const val = Number(e.target.value) || 3500;
                          setAmountPaid(val);
                          setTotalFee(val);
                        }}
                        className="h-9 text-xs font-bold text-foreground font-mono"
                        required
                      />
                    </div>
                  )}

                  {/* Mode and Transaction Reference: Shown if not Pending */}
                  {paymentStatus !== "Pending" && (
                    <>
                      <div className="space-y-1.5">
                        <label htmlFor="field-mode" className="text-xs font-medium text-foreground">
                          Payment Mode <span className="text-destructive">*</span>
                        </label>
                        <select
                          id="field-mode"
                          value={paymentMode}
                          onChange={(e) =>
                            setPaymentMode(e.target.value as "Cash" | "Trans. ID" | "UPI" | "Bank Transfer")
                          }
                          className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs"
                        >
                          <option value="Cash">Cash</option>
                          <option value="Trans. ID">Trans. ID (Online / POS)</option>
                          <option value="UPI">UPI / Digital</option>
                          <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="field-transid" className="text-xs font-medium text-foreground">
                          Trans. ID / Transaction Reference
                        </label>
                        <Input
                          id="field-transid"
                          placeholder="e.g. TXN-50941 or UPI/UTR reference"
                          value={transactionId}
                          onChange={(e) => setTransactionId(e.target.value)}
                          className="h-9 font-mono text-xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="field-proof" className="text-xs font-medium text-foreground">
                          Payment Proof / Receipt Memo
                        </label>
                        <Input
                          id="field-proof"
                          placeholder="e.g. Online receipt attached / Voucher #441"
                          value={paymentProof}
                          onChange={(e) => setPaymentProof(e.target.value)}
                          className="h-9 text-xs"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="gap-1.5 text-xs"
                    onClick={() => setActiveTab("medical")}
                  >
                    <ArrowLeft className="size-3.5" />
                    Back to Medical & Timing
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    className="gap-1.5 text-xs font-medium"
                  >
                    <FileCheck2 className="size-3.5" />
                    {isEditing ? "Save Changes" : "Save Record"}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation & Submit Footer */}
          <DialogFooter className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between sm:space-x-0 border-t border-border pt-4">
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <span>* Required seafarer fields</span>
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
