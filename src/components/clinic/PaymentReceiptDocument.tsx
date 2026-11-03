import {
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileCheck2,
  Printer,
  ShieldCheck,
  Ship,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClinicLogo } from "@/components/clinic/ClinicLogo";
import { amountToWordsINR, formatINR } from "@/lib/clinic";
import type { PaymentRecord } from "@/lib/payments";

interface PaymentReceiptDocumentProps {
  payment: PaymentRecord;
  onPrint?: () => void;
  onClose?: () => void;
}

export function PaymentReceiptDocument({ payment, onPrint, onClose }: PaymentReceiptDocumentProps) {
  const isCompleted = payment.status === "Completed";
  const isPartial = payment.status === "Partial";

  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  const formattedDate = new Date(payment.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedTime = new Date(payment.date).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const totalFee = payment.totalAmount || 3500;
  const balance = payment.balanceDue ?? Math.max(0, totalFee - payment.amount);

  // Safe mode label that NEVER mentions Card or Bank details
  const getSafePaymentMode = (method: string) => {
    const m = (method || "").toLowerCase();
    if (m.includes("cash")) return "Cash";
    if (m.includes("upi")) return "UPI / Digital Transfer";
    // If card, bank transfer, cheque, or other: display clean professional digital/cleared mode
    return "Online / Digital Clearance";
  };

  return (
    <div className="receipt-container bg-background text-foreground max-w-3xl mx-auto">
      {/* Top Action Bar (hidden during printing) */}
      <div className="print:hidden mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <Badge
            variant={isCompleted ? "default" : isPartial ? "secondary" : "outline"}
            className="text-xs font-semibold px-2.5 py-0.5"
          >
            {isCompleted ? "PAYMENT COMPLETED" : isPartial ? "PARTIAL PAYMENT" : "PENDING CLEARANCE"}
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">
            Receipt #{payment.id}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handlePrint}
            className="gap-1.5 text-xs font-medium shadow-xs"
          >
            <Printer className="size-3.5" />
            Print / Save PDF
          </Button>
          {onClose && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-xs"
            >
              Close
            </Button>
          )}
        </div>
      </div>

      {/* Printable Receipt Paper */}
      <div className="receipt-paper rounded-xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm print:border-0 print:shadow-none print:p-0">
        {/* Header - STRICTLY NO GST, NO ISO */}
        <div className="border-b-2 border-primary/25 pb-5">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex items-start gap-3.5">
              <ClinicLogo size="lg" showText={false} />
              <div>
                <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  SAILOR'S MEDICAL CLINIC
                </h1>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">
                  Centre for Marine Medical Examinations • D.G. Shipping Approved Doctors
                </p>
                <p className="text-[11px] text-muted-foreground mt-1 max-w-[440px] leading-relaxed">
                  Shop No. 21, Punit Tower - 1, Sec-11, CBD Belapur, Navi Mumbai - 400614
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Mob: +91 95614 50104 | Email: medical@sailorsmedicalclinic.com
                </p>
              </div>
            </div>

            <div className="sm:text-right w-full sm:w-auto mt-2 sm:mt-0 flex flex-col sm:items-end">
              <div className="inline-block rounded-md bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest border border-primary/20">
                MONEY RECEIPT
              </div>
              <div className="mt-2.5 space-y-1 text-xs font-mono text-right">
                <div className="flex justify-between sm:justify-end gap-3">
                  <span className="text-muted-foreground font-sans">Receipt No:</span>
                  <span className="font-bold text-foreground">{payment.id}</span>
                </div>
                <div className="flex justify-between sm:justify-end gap-3">
                  <span className="text-muted-foreground font-sans">Date:</span>
                  <span className="font-semibold text-foreground">{formattedDate}</span>
                </div>
                <div className="flex justify-between sm:justify-end gap-3">
                  <span className="text-muted-foreground font-sans">Time:</span>
                  <span className="text-muted-foreground">{formattedTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate & Maritime Particulars - Cleanly Aligned 2-Column Table */}
        <div className="py-4 border-b border-border/80">
          <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <User className="size-3.5" /> Candidate & Maritime Examination Particulars
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-muted/30 p-3.5 rounded-lg border border-border/60 text-xs">
            {/* Left Column: Personal info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-border/40 pb-1.5">
                <span className="text-muted-foreground">Candidate Name:</span>
                <span className="font-bold text-foreground text-right">{payment.patientName}</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/40 pb-1.5">
                <span className="text-muted-foreground">Candidate ID:</span>
                <span className="font-mono font-semibold text-foreground">{payment.patientId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Rank / Designation:</span>
                <span className="font-medium text-foreground">{payment.rank || "Seafarer"}</span>
              </div>
            </div>

            {/* Right Column: Maritime credentials */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-border/40 pb-1.5">
                <span className="text-muted-foreground">Vessel Name:</span>
                <span className="font-medium text-foreground text-right">{payment.vessel || "—"}</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/40 pb-1.5">
                <span className="text-muted-foreground">INDoS No:</span>
                <span className="font-mono font-semibold text-foreground">{payment.indosNo || "—"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">CDC No:</span>
                <span className="font-mono font-semibold text-foreground">{payment.cdcNo || "—"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fee & Payment Breakdown - Strictly Formatted Table */}
        <div className="py-4 border-b border-border/80">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border/80 bg-muted/40 text-muted-foreground uppercase text-[10px] tracking-wider">
                <th className="text-center py-2.5 px-3 w-12">Sr.</th>
                <th className="text-left py-2.5 px-3">Examination / Service Description</th>
                <th className="text-right py-2.5 px-3 w-28">Total Fee</th>
                <th className="text-right py-2.5 px-3 w-32">Amount Received</th>
                {isPartial && <th className="text-right py-2.5 px-3 w-28">Balance Due</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="py-3.5 px-3 text-center font-mono text-muted-foreground">1</td>
                <td className="py-3.5 px-3">
                  <p className="font-bold text-foreground">
                    Marine Medical Fitness Examination & Certification
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    D.G. Shipping Approved Seafarer Comprehensive Medical Assessment
                  </p>
                </td>
                <td className="py-3.5 px-3 text-right font-mono font-medium">
                  {formatINR(totalFee)}
                </td>
                <td className="py-3.5 px-3 text-right font-mono font-bold text-foreground">
                  {formatINR(payment.amount)}
                </td>
                {isPartial && (
                  <td className="py-3.5 px-3 text-right font-mono font-bold text-destructive">
                    {formatINR(balance)}
                  </td>
                )}
              </tr>
            </tbody>
          </table>

          {/* Clean Summary Box - Strictly NO card/bank account details */}
          <div className="mt-4 rounded-lg bg-primary/5 border border-primary/20 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-foreground flex items-center gap-2">
                <FileCheck2 className="size-4 text-primary" />
                <span>Payment Mode:</span>
                <span className="font-bold text-primary">{getSafePaymentMode(payment.method)}</span>
              </div>
              <p className="text-[11px] text-muted-foreground italic">
                Amount in words: <span className="font-semibold text-foreground">{amountToWordsINR(payment.amount)}</span>
              </p>
            </div>

            <div className="text-right sm:self-auto self-end">
              <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider block">
                Total Amount Received
              </span>
              <span className="text-2xl font-bold font-mono text-primary">
                {formatINR(payment.amount)}
              </span>
            </div>
          </div>
        </div>

        {/* Footer & Signature Box with Perfect Alignment */}
        <div className="pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="space-y-2 text-[11px] text-muted-foreground max-w-sm">
            {isPartial ? (
              <div className="rounded-md border border-amber-300 bg-amber-50 p-2.5 text-amber-800 text-xs">
                <strong>Partial Settlement:</strong> Balance payment of <strong>{formatINR(balance)}</strong> is due upon report collection.
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-xs">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Official Receipt Cleared in Full</span>
              </div>
            )}
            <p className="text-[10px] leading-relaxed text-muted-foreground">
              This is a verified official money receipt issued by Sailor's Medical Clinic for maritime candidate clinical examinations.
            </p>
          </div>

          <div className="text-center sm:text-right w-full sm:w-auto">
            <div className="inline-block border border-dashed border-border rounded-lg p-3 text-center min-w-[190px] bg-muted/20">
              <div className="h-10 flex items-center justify-center text-[10px] font-mono text-muted-foreground tracking-widest">
                [ CLINIC SEAL & STAMP ]
              </div>
              <div className="border-t border-border pt-1.5">
                <p className="text-xs font-bold text-foreground">Sailor's Medical Clinic</p>
                <p className="text-[10px] text-muted-foreground">Authorized Signatory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
