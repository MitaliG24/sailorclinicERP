import { Edit, FileText, Printer, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SalarySlip } from "@/lib/staff";

interface SalarySlipDocumentProps {
  slip: SalarySlip;
  onEdit?: (slip: SalarySlip) => void;
  onClose?: () => void;
  showActions?: boolean;
}

export function formatCurrencyINR(val: number): string {
  if (isNaN(val)) return "0.00";
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(val);
}

export function buildSalarySlipWhatsAppMessage(slip: SalarySlip): string {
  return `*SAILOR'S MEDICAL CLINIC*
*Payslip for the Month of ${slip.payPeriod}*
----------------------------
*Employee Name:* ${slip.employeeName}
*Designation:* ${slip.designation}
*Pay Period:* ${slip.payPeriod}
*Pay Date:* ${slip.payDate}

*EARNINGS:*
- Gross Salary: Rs.${formatCurrencyINR(slip.grossSalary)}
- Travelling Allowance (T.A.): Rs.${formatCurrencyINR(slip.travellingAllowance)}
- *Gross Earnings:* Rs.${formatCurrencyINR(slip.grossEarnings)}

*DEDUCTIONS:*
- Total Leaves: ${slip.totalLeaves}
- *Total Deductions:* Rs.${formatCurrencyINR(slip.totalDeductions)}

----------------------------
*TOTAL NET PAYABLE: Rs.${formatCurrencyINR(slip.netPay)}*
${slip.amountInWords}
----------------------------
Total Net Payable = Gross Earnings + T.A. - Total Deductions

Sailor's Medical Clinic
Shop No. 21, Punit Tower 1, Opp. YAK Marine, Sec-11, CBD Belapur, Navi Mumbai - 400 614
Tel: 022-2756 0304 | medical@sailorsmedicalclinic.com
www.sailorsmedicalclinic.com`;
}

/**
 * Builds a complete, self-contained HTML page for the salary slip.
 * 100% table-based layout — renders identically across all browsers
 * and in html2canvas / browser print engine.
 */
function buildSlipHtml(slip: SalarySlip): string {
  const name = slip.employeeName.replace(/\s+/g, "_");
  const period = slip.payPeriod.replace(/\s+/g, "_");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Payslip_${name}_${period}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #000;
    background: #fff;
    padding: 24px;
  }
  /* Outer wrapper */
  table.outer {
    width: 720px;
    border-collapse: collapse;
    border: 2px solid #800000;
    margin: 0 auto;
  }
  table.outer td, table.outer th {
    padding: 0;
    margin: 0;
  }
  /* ── Header row ── */
  .hdr-iso {
    font-size: 11px;
    font-weight: bold;
    line-height: 1.5;
    padding: 6px 12px 4px;
    vertical-align: bottom;
    width: 40%;
  }
  .hdr-dg {
    font-size: 13px;
    font-weight: bold;
    color: #1e3a8a;
    text-align: right;
    padding: 6px 12px 4px;
    vertical-align: bottom;
    width: 60%;
  }
  /* ── Double divider ── */
  .dbl-div {
    border-top: 3px double #000;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
  /* ── Address row ── */
  .addr {
    text-align: center;
    font-size: 11px;
    line-height: 1.6;
    padding: 4px 10px 5px;
    border-bottom: 1px solid #000;
  }
  /* ── Title ── */
  .title {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    padding: 7px 10px;
    border-top: 1px solid #800000;
    border-bottom: 2px solid #800000;
  }
  /* ── Summary section ── */
  table.summary {
    width: 100%;
    border-collapse: collapse;
    border-bottom: 2px solid #800000;
  }
  .sum-left {
    width: 58%;
    border-right: 2px solid #800000;
    padding: 10px 14px;
    vertical-align: top;
  }
  .sum-right {
    width: 42%;
    text-align: center;
    vertical-align: middle;
    padding: 10px;
  }
  .sum-title { font-weight: bold; font-size: 13px; margin-bottom: 8px; }
  table.emp-info { border-collapse: collapse; width: 100%; }
  table.emp-info td {
    border: none;
    padding: 2px 0;
    font-size: 12px;
    vertical-align: top;
  }
  .lbl { width: 115px; white-space: nowrap; }
  .net-label { color: #1e3a8a; font-size: 14px; font-weight: bold; margin-bottom: 6px; }
  .net-amt   { font-size: 24px; font-weight: bold; }
  /* ── Data tables (earnings/deductions, netpay) ── */
  table.data {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    border-bottom: 2px solid #800000;
  }
  table.data th {
    border: 1px solid #800000;
    padding: 5px 8px;
    font-weight: bold;
    text-align: left;
    background: #fff;
  }
  table.data td {
    border: 1px solid #800000;
    padding: 5px 8px;
  }
  .r { text-align: right; }
  .b { font-weight: bold; }
  /* ── Footer ── */
  .words {
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    padding: 7px 12px;
    letter-spacing: 0.03em;
    border-bottom: 1px solid #800000;
  }
  .formula {
    text-align: center;
    font-size: 11px;
    padding: 5px 12px 6px;
  }
  @media print {
    body { padding: 0; }
    @page { margin: 12mm; size: A4; }
  }
</style>
</head>
<body>

<table class="outer">
  <!-- ── HEADER ── -->
  <tr>
    <td class="hdr-iso">ISO 9001:2015<br>CERTIFIED CENTRE</td>
    <td class="hdr-dg">THE D.G. SHIPPING GOVT. OF INDIA APPROVED DOCTORS</td>
  </tr>

  <!-- ── DOUBLE DIVIDER ── -->
  <tr><td colspan="2" class="dbl-div"></td></tr>

  <!-- ── ADDRESS ── -->
  <tr>
    <td colspan="2" class="addr">
      Shop No. 21, Punit Tower 1, Opp. YAK Marine, MTNL Lane, Sec-11, CBD Belapur, Navi Mumbai - 400 614<br>
      Tel: 022-2756 0304 &nbsp;|&nbsp; Email : medical@sailorsmedicalclinic.com &nbsp;|&nbsp; Web: www.sailorsmedicalclinic.com
    </td>
  </tr>

  <!-- ── TITLE ── -->
  <tr>
    <td colspan="2" class="title">Payslip for the Month of ${slip.payPeriod}</td>
  </tr>

  <!-- ── SUMMARY ── -->
  <tr>
    <td colspan="2" style="padding:0">
      <table class="summary">
        <tr>
          <td class="sum-left">
            <div class="sum-title">Employee Pay Summary</div>
            <table class="emp-info">
              <tr>
                <td class="lbl">Employee Name</td>
                <td>: <strong>${slip.employeeName}</strong></td>
              </tr>
              <tr>
                <td class="lbl">Designation</td>
                <td>: ${slip.designation}</td>
              </tr>
              <tr><td colspan="2" style="height:7px"></td></tr>
              <tr>
                <td class="lbl">Pay Period</td>
                <td>: ${slip.payPeriod}</td>
              </tr>
              <tr>
                <td class="lbl">Pay Date</td>
                <td>: ${slip.payDate}</td>
              </tr>
            </table>
          </td>
          <td class="sum-right">
            <div class="net-label">Employee Net Pay</div>
            <div class="net-amt">&#8377;${formatCurrencyINR(slip.netPay)}</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── EARNINGS & DEDUCTIONS ── -->
  <tr>
    <td colspan="2" style="padding:0">
      <table class="data">
        <thead>
          <tr>
            <th style="width:30%">EARNINGS</th>
            <th style="width:20%">AMOUNT</th>
            <th style="width:28%">DEDUCTIONS</th>
            <th style="width:22%">DAYS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GROSS SALARY</td>
            <td class="r">&#8377;${formatCurrencyINR(slip.grossSalary)}</td>
            <td>TOTAL LEAVES</td>
            <td>${slip.totalLeaves || "&mdash;"}</td>
          </tr>
          <tr>
            <td>Travelling Allowance</td>
            <td class="r">&#8377;${formatCurrencyINR(slip.travellingAllowance)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="b">Gross Earnings</td>
            <td class="r b">&#8377;${formatCurrencyINR(slip.grossEarnings)}</td>
            <td>Deduction</td>
            <td>${slip.deductionAmount > 0 ? slip.deductionAmount : "0"}</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>

  <!-- ── NETPAY ── -->
  <tr>
    <td colspan="2" style="padding:0">
      <table class="data">
        <thead>
          <tr>
            <th style="width:75%">NETPAY</th>
            <th style="width:25%;text-align:right;padding-right:10px">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gross Earnings</td>
            <td class="r" style="padding-right:10px">&#8377;${formatCurrencyINR(slip.grossEarnings)}</td>
          </tr>
          <tr>
            <td>Total Deductions</td>
            <td class="r" style="padding-right:10px">&#8377;${formatCurrencyINR(slip.totalDeductions)}</td>
          </tr>
          <tr>
            <td class="b">Total Net Payable</td>
            <td class="r b" style="padding-right:10px">&#8377;${formatCurrencyINR(slip.netPay)}</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>

  <!-- ── AMOUNT IN WORDS ── -->
  <tr>
    <td colspan="2" class="words">${slip.amountInWords}</td>
  </tr>

  <!-- ── FORMULA ── -->
  <tr>
    <td colspan="2" class="formula">
      ${slip.formulaNote || "**Total Net Payable = Gross Earnings + T.A. - Total Deductions"}
    </td>
  </tr>
</table>

</body>
</html>`;
}

/**
 * Prints the salary slip using a hidden iframe injected into the current page.
 * No new window / popup is opened, so browser popup blockers are never triggered.
 * The browser's native print dialog appears (user selects "Save as PDF").
 */
function printSlipInPage(slip: SalarySlip): void {
  const name = slip.employeeName.replace(/\s+/g, "_");
  const period = slip.payPeriod.replace(/\s+/g, "_");

  // Build HTML with a title override so "Save as PDF" defaults to a good filename
  const html = buildSlipHtml(slip).replace(
    `<title>Payslip_${name}_${period}</title>`,
    `<title>Payslip_${name}_${period}</title>`
  );

  // Create a hidden iframe — no popup, no new tab
  const iframe = document.createElement("iframe");
  iframe.style.cssText =
    "position:fixed;top:-9999px;left:-9999px;width:210mm;height:297mm;border:none;visibility:hidden;";
  document.body.appendChild(iframe);

  const iframeDoc = iframe.contentDocument!;
  iframeDoc.open();
  iframeDoc.write(html);
  iframeDoc.close();

  // Give the iframe time to render fonts/layout, then print
  setTimeout(() => {
    iframe.contentWindow!.focus();
    iframe.contentWindow!.print();
    // Clean up after print dialog is dismissed
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }, 2000);
  }, 600);
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SalarySlipDocument({
  slip,
  onEdit,
  onClose,
  showActions = true,
}: SalarySlipDocumentProps) {
  return (
    <div className="payslip-wrapper w-full max-w-4xl mx-auto text-black">
      {/* ── Action Toolbar (hidden while printing) ── */}
      {showActions && (
        <div className="print:hidden mb-3 flex flex-wrap items-center justify-between gap-2.5 rounded-lg border border-border bg-card p-3 shadow-xs">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <FileText className="size-4 text-primary" />
            Salary Slip: {slip.employeeName} ({slip.payPeriod})
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {/* Download PDF — hidden iframe print, no popup blocker */}
            <Button
              type="button"
              size="sm"
              onClick={() => printSlipInPage(slip)}
              className="h-8 gap-1.5 text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs"
              title="Prints salary slip → choose 'Save as PDF' in the print dialog"
            >
              <Printer className="size-3.5" />
              Download / Print PDF
            </Button>

            {onEdit && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => onEdit(slip)}
                className="h-8 gap-1.5 text-xs font-medium"
              >
                <Edit className="size-3.5" />
                Edit
              </Button>
            )}

            {onClose && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="size-8 p-0"
              >
                <X className="size-4" />
              </Button>
            )}
          </div>
        </div>
      )}

      {/* ── Printable Payslip preview (matches image format) ── */}
      <div className="payslip-sheet mx-auto w-full max-w-[780px] bg-white text-black p-4 sm:p-6 shadow-sm border border-[#800000] print:border-[#800000] print:p-0 print:shadow-none font-sans">
        {/* Header */}
        <div className="flex items-end justify-between px-2 pt-1 pb-0.5">
          <div className="text-left text-[11px] font-bold leading-tight text-black">
            <div>ISO 9001:2015</div>
            <div>CERTIFIED CENTRE</div>
          </div>
          <div className="text-right text-[13px] font-bold tracking-wide text-[#1e3a8a] uppercase">
            THE D.G. SHIPPING GOVT. OF INDIA APPROVED DOCTORS
          </div>
        </div>

        {/* Double Border Divider */}
        <div className="my-1 border-t border-b border-black py-[0.5px]" />

        {/* Address */}
        <div className="text-center text-[11px] leading-snug px-2 text-black">
          <div>Shop No. 21, Punit Tower 1, Opp. YAK Marine, MTNL Lane, Sec-11, CBD Belapur, Navi Mumbai - 400 614</div>
          <div className="mt-0.5">Tel: 022-2756 0304 | Email : medical@sailorsmedicalclinic.com | Web: www.sailorsmedicalclinic.com</div>
        </div>

        {/* Title */}
        <div className="mt-2 border-t-[1.5px] border-b-[1.5px] border-[#800000] py-1 text-center font-bold text-xs sm:text-sm text-black">
          Payslip for the Month of {slip.payPeriod}
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-12 border-b-[1.5px] border-[#800000]">
          <div className="sm:col-span-7 border-b sm:border-b-0 sm:border-r-[1.5px] border-[#800000] p-2.5 sm:p-3 text-xs">
            <div className="font-bold text-[13px] text-black mb-1.5">Employee Pay Summary</div>
            <table className="w-full text-xs border-collapse">
              <tbody>
                <tr>
                  <td className="w-[115px] py-0.5 align-top">Employee Name</td>
                  <td className="font-bold uppercase py-0.5">: {slip.employeeName}</td>
                </tr>
                <tr>
                  <td className="py-0.5 align-top">Designation</td>
                  <td className="uppercase py-0.5">: {slip.designation}</td>
                </tr>
                <tr><td colSpan={2} className="h-2" /></tr>
                <tr>
                  <td className="py-0.5">Pay Period</td>
                  <td className="uppercase py-0.5">: {slip.payPeriod}</td>
                </tr>
                <tr>
                  <td className="py-0.5">Pay Date</td>
                  <td className="py-0.5">: {slip.payDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:col-span-5 flex flex-col items-center justify-center p-3 text-center bg-white">
            <div className="text-[14px] font-medium text-[#1e3a8a] mb-0.5">Employee Net Pay</div>
            <div className="text-xl sm:text-2xl font-bold text-black tracking-tight">
              ₹{formatCurrencyINR(slip.netPay)}
            </div>
          </div>
        </div>

        {/* Earnings & Deductions */}
        <table className="w-full border-collapse text-xs text-black border-b-[1.5px] border-[#800000]">
          <thead>
            <tr className="border-b-[1.5px] border-[#800000]">
              <th className="border border-[#800000] p-1.5 text-left font-bold uppercase w-[30%]">EARNINGS</th>
              <th className="border border-[#800000] p-1.5 text-left font-bold uppercase w-[20%]">AMOUNT</th>
              <th className="border border-[#800000] p-1.5 text-left font-bold uppercase w-[28%]">DEDUCTIONS</th>
              <th className="border border-[#800000] p-1.5 text-left font-bold uppercase w-[22%]">DAYS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#800000] p-1.5 font-medium uppercase">GROSS SALARY</td>
              <td className="border border-[#800000] p-1.5 font-medium">₹{formatCurrencyINR(slip.grossSalary)}</td>
              <td className="border border-[#800000] p-1.5 font-medium uppercase">TOTAL LEAVES</td>
              <td className="border border-[#800000] p-1.5 font-medium uppercase">{slip.totalLeaves || "—"}</td>
            </tr>
            <tr>
              <td className="border border-[#800000] p-1.5">Travelling Allowance</td>
              <td className="border border-[#800000] p-1.5">₹{formatCurrencyINR(slip.travellingAllowance)}</td>
              <td className="border border-[#800000] p-1.5"></td>
              <td className="border border-[#800000] p-1.5"></td>
            </tr>
            <tr>
              <td className="border border-[#800000] p-1.5 font-bold">Gross Earnings</td>
              <td className="border border-[#800000] p-1.5 font-bold">₹{formatCurrencyINR(slip.grossEarnings)}</td>
              <td className="border border-[#800000] p-1.5">Deduction</td>
              <td className="border border-[#800000] p-1.5">{slip.deductionAmount > 0 ? slip.deductionAmount : "0"}</td>
            </tr>
          </tbody>
        </table>

        {/* Net Pay Table */}
        <table className="w-full border-collapse text-xs text-black border-b-[1.5px] border-[#800000]">
          <thead>
            <tr className="border-b-[1.5px] border-[#800000]">
              <th className="border border-[#800000] p-1.5 text-left font-bold uppercase w-[75%]">NETPAY</th>
              <th className="border border-[#800000] p-1.5 text-right font-bold uppercase w-[25%] pr-3">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#800000] p-1.5">Gross Earnings</td>
              <td className="border border-[#800000] p-1.5 text-right pr-3">₹{formatCurrencyINR(slip.grossEarnings)}</td>
            </tr>
            <tr>
              <td className="border border-[#800000] p-1.5">Total Deductions</td>
              <td className="border border-[#800000] p-1.5 text-right pr-3">₹{formatCurrencyINR(slip.totalDeductions)}</td>
            </tr>
            <tr>
              <td className="border border-[#800000] p-1.5 font-bold">Total Net Payable</td>
              <td className="border border-[#800000] p-1.5 text-right pr-3 font-bold">₹{formatCurrencyINR(slip.netPay)}</td>
            </tr>
          </tbody>
        </table>

        {/* Amount in Words */}
        <div className="border-b border-[#800000] py-1.5 px-2 text-center text-xs font-bold uppercase tracking-wide text-black">
          {slip.amountInWords}
        </div>

        {/* Formula */}
        <div className="py-1 px-2 text-center text-[11px] font-medium text-black">
          {slip.formulaNote || "**Total Net Payable = Gross Earnings + T.A. - Total Deductions"}
        </div>
      </div>
    </div>
  );
}
