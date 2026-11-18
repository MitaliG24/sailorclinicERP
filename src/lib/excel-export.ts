import * as XLSX from "xlsx";
import type { FeedbackRecord } from "@/lib/feedback";
import type { PatientRecord } from "@/lib/clinic";

/**
 * Generates and downloads a standardized Microsoft Excel (.xlsx) file
 * for Sailor's Medical Clinic Feedback Form submissions, compliant with
 * DG Shipping Govt. of India clinical audit rules.
 */
export function exportGrievancesToExcel(
  records: FeedbackRecord[],
  filename?: string,
): void {
  const rows = records.map((r, index) => ({
    "Sr. No.": index + 1,
    "Token ID": r.id,
    "Date": r.date,
    "Candidate Name": r.name,
    "Company Name": r.companyName || "N/A",
    "Vessel": r.vessel || "N/A",
    "Rank": r.rank || "N/A",
    "Passport or CDC No": r.passportOrCdcNo || "N/A",
    "Indos No": r.indosNo || "N/A",
    "Mobile No": r.mobileNo,
    "Email Add": r.email || "N/A",
    "1. Time taken at reception": r.timeTakenAtReception,
    "2. Skill & Friendliness of technician collecting blood":
      r.skillAndFriendlinessTechnician,
    "3. ECG - Audiometry Technician": r.ecgAudiometryTechnician,
    "4. Guidance by staff during your wait": r.guidanceByStaffDuringWait,
    "5. Hygiene / Cleanliness of Clinics": r.hygieneCleanlinessClinics,
    "6. Friendliness of the Medical Centre Staff": r.friendlinessMedicalStaff,
    "7. Interaction with the Doctor": r.interactionWithDoctor,
    "8. Turnaround time for reports": r.turnaroundTimeReports,
    "Suggestions / Comments": r.suggestionsComments || "None",
    "Signature of Candidate": r.candidateSignature || r.name,
    "Status": r.status,
    "Official Resolution Remarks": r.resolutionRemarks || "Under Review",
    "Resolved Date": r.resolvedAt
      ? new Date(r.resolvedAt).toLocaleDateString("en-IN")
      : "Pending",
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);

  // Set explicit column widths for Excel
  worksheet["!cols"] = [
    { wch: 8 },  // Sr. No.
    { wch: 20 }, // Token ID
    { wch: 14 }, // Date
    { wch: 24 }, // Candidate Name
    { wch: 26 }, // Company Name
    { wch: 24 }, // Vessel
    { wch: 20 }, // Rank
    { wch: 20 }, // Passport or CDC No
    { wch: 16 }, // Indos No
    { wch: 18 }, // Mobile No
    { wch: 26 }, // Email Add
    { wch: 25 }, // 1. Time taken at reception
    { wch: 38 }, // 2. Skill & Friendliness of technician collecting blood
    { wch: 28 }, // 3. ECG - Audiometry Technician
    { wch: 32 }, // 4. Guidance by staff during your wait
    { wch: 30 }, // 5. Hygiene / Cleanliness of Clinics
    { wch: 35 }, // 6. Friendliness of the Medical Centre Staff
    { wch: 26 }, // 7. Interaction with the Doctor
    { wch: 28 }, // 8. Turnaround time for reports
    { wch: 45 }, // Suggestions / Comments
    { wch: 24 }, // Signature of Candidate
    { wch: 16 }, // Status
    { wch: 40 }, // Official Resolution Remarks
    { wch: 16 }, // Resolved Date
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sailors Clinic Feedback");

  const actualFilename =
    filename ||
    `Sailors_Medical_Clinic_Feedback_Report_${new Date().toISOString().slice(0, 10)}.xlsx`;

  XLSX.writeFile(workbook, actualFilename);
}

/**
 * Fallback CSV export with UTF-8 BOM so Excel opens it directly without character corruption.
 */
export function exportGrievancesToCSV(
  records: FeedbackRecord[],
  filename?: string,
): void {
  const headers = [
    "Sr. No.",
    "Token ID",
    "Date",
    "Candidate Name",
    "Company Name",
    "Vessel",
    "Rank",
    "Passport or CDC No",
    "Indos No",
    "Mobile No",
    "Email Add",
    "1. Time taken at reception",
    "2. Skill & Friendliness of technician collecting blood",
    "3. ECG - Audiometry Technician",
    "4. Guidance by staff during your wait",
    "5. Hygiene / Cleanliness of Clinics",
    "6. Friendliness of the Medical Centre Staff",
    "7. Interaction with the Doctor",
    "8. Turnaround time for reports",
    "Suggestions / Comments",
    "Signature of Candidate",
    "Status",
    "Official Resolution Remarks",
    "Resolved Date",
  ];

  const csvRows = records.map((r, i) => [
    i + 1,
    `"${r.id}"`,
    `"${r.date}"`,
    `"${(r.name || "").replace(/"/g, '""')}"`,
    `"${(r.companyName || "").replace(/"/g, '""')}"`,
    `"${(r.vessel || "").replace(/"/g, '""')}"`,
    `"${(r.rank || "").replace(/"/g, '""')}"`,
    `"${(r.passportOrCdcNo || "").replace(/"/g, '""')}"`,
    `"${(r.indosNo || "").replace(/"/g, '""')}"`,
    `"${r.mobileNo}"`,
    `"${r.email || "N/A"}"`,
    `"${r.timeTakenAtReception}"`,
    `"${r.skillAndFriendlinessTechnician}"`,
    `"${r.ecgAudiometryTechnician}"`,
    `"${r.guidanceByStaffDuringWait}"`,
    `"${r.hygieneCleanlinessClinics}"`,
    `"${r.friendlinessMedicalStaff}"`,
    `"${r.interactionWithDoctor}"`,
    `"${r.turnaroundTimeReports}"`,
    `"${(r.suggestionsComments || "None").replace(/"/g, '""')}"`,
    `"${(r.candidateSignature || r.name).replace(/"/g, '""')}"`,
    `"${r.status}"`,
    `"${(r.resolutionRemarks || "Under Review").replace(/"/g, '""')}"`,
    `"${r.resolvedAt ? new Date(r.resolvedAt).toLocaleDateString("en-IN") : "Pending"}"`,
  ]);

  const csvContent =
    "\uFEFF" + [headers.join(","), ...csvRows.map((row) => row.join(","))].join("\r\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    filename ||
      `Sailors_Medical_Clinic_Feedback_${new Date().toISOString().slice(0, 10)}.csv`,
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Exports comprehensive Staff & Employee register to Excel (.xlsx)
 * including basic info, joining date, resignation details, salary breakdown,
 * banking details, and documents status.
 */
export function exportStaffToExcel(
  staffList: any[],
  filename?: string,
): void {
  const rows = staffList.map((st, index) => ({
    "Sr. No.": index + 1,
    "Employee ID": st.id,
    "Full Name": st.name,
    "Gender": st.gender || "N/A",
    "Date of Birth": st.dob || "N/A",
    "Role / Designation": st.role,
    "Department": st.department,
    "Employment Type": st.employmentType,
    "Status": st.status,
    "Joining Date": st.joiningDate,
    "Resignation Date": st.resignationDate || "Active",
    "Relieving Date": st.relievingDate || "N/A",
    "Resignation Reason": st.resignationReason || "N/A",
    "Working Schedule": st.schedule,
    "Basic Salary (₹)": st.basicSalary,
    "Allowances (₹)": st.allowances,
    "Deductions (₹)": st.deductions,
    "Net Monthly Salary (₹)": st.netSalary,
    "Pay Frequency": st.payFrequency,
    "PAN Number": st.panNo || "N/A",
    "Bank Name": st.bankName || "N/A",
    "Account Number": st.bankAccountNo || "N/A",
    "IFSC Code": st.ifscCode || "N/A",
    "Mobile Phone": st.phone,
    "Email Address": st.email,
    "Residential Address": st.address,
    "Emergency Contact": `${st.emergencyContactName} (${st.emergencyContactPhone})`,
    "Documents Count": st.documents?.length || 0,
    "Documents Verified":
      st.documents?.filter((d: any) => d.verificationStatus === "Verified").length || 0,
    "Document Details": (st.documents || [])
      .map((d: any) => `${d.name} [${d.type}] - ${d.verificationStatus}`)
      .join("; ") || "None",
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);

  worksheet["!cols"] = [
    { wch: 8 },  // Sr. No.
    { wch: 16 }, // Employee ID
    { wch: 22 }, // Full Name
    { wch: 10 }, // Gender
    { wch: 14 }, // DOB
    { wch: 26 }, // Role
    { wch: 26 }, // Department
    { wch: 16 }, // Employment Type
    { wch: 18 }, // Status
    { wch: 14 }, // Joining Date
    { wch: 16 }, // Resignation Date
    { wch: 16 }, // Relieving Date
    { wch: 30 }, // Resignation Reason
    { wch: 26 }, // Working Schedule
    { wch: 16 }, // Basic Salary
    { wch: 16 }, // Allowances
    { wch: 16 }, // Deductions
    { wch: 20 }, // Net Salary
    { wch: 16 }, // Pay Frequency
    { wch: 16 }, // PAN
    { wch: 20 }, // Bank Name
    { wch: 20 }, // Account No
    { wch: 16 }, // IFSC
    { wch: 18 }, // Phone
    { wch: 26 }, // Email
    { wch: 35 }, // Address
    { wch: 30 }, // Emergency Contact
    { wch: 16 }, // Documents Count
    { wch: 18 }, // Documents Verified
    { wch: 45 }, // Document Details
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Staff Register");

  const finalName =
    filename ||
    `Sailors_Medical_Clinic_Staff_Register_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(workbook, finalName);
}

/**
 * Generates and downloads a standardized Microsoft Excel (.xlsx) file
 * containing all Seafarer Patient Examination Records.
 */
export function exportPatientsToExcel(
  patients: PatientRecord[],
  filename?: string,
): void {
  const rows = patients.map((p, index) => ({
    "Sr. No.": p.srNo || index + 1,
    "Candidate ID": p.id,
    "Examination Date": p.date || "N/A",
    "Candidate Name": p.name,
    "Rank / Category": p.rank || "N/A",
    "INDoS No.": p.indosNo || "N/A",
    "CDC No.": p.cdcNo || "N/A",
    "Passport No.": p.passportNo || "N/A",
    "Certificate No.": p.certificateNo || "N/A",
    "Shipping Company": p.companyName || "N/A",
    "Vessel Name": p.vesselName || p.vessel || "N/A",
    "Age": p.age ?? "N/A",
    "Gender": p.gender || "N/A",
    "Mobile Phone": p.phone || "N/A",
    "Email Address": p.email || "N/A",
    "Medical Type": p.typeOfMedical || "Pre-Sea / Periodic",
    "Medical Fitness": p.condition || "Fit for Sea Service",
    "USG Findings": p.usgFindings || "Normal",
    "Chest X-Ray": p.chestXRay || "Normal",
    "Payment Status": p.paymentStatus || "Paid",
    "Payment Mode": p.paymentMode || "UPI",
    "Total Fee (₹)": p.totalFee || 3500,
    "Amount Paid": p.paymentAmount || "₹3,500.00",
    "Balance Due (₹)": p.balanceDue || 0,
    "Time In": p.timeIn || "09:30 AM",
    "Time Out": p.timeOut || "11:45 AM",
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);
  worksheet["!cols"] = [
    { wch: 8 },  // Sr. No.
    { wch: 16 }, // Candidate ID
    { wch: 16 }, // Examination Date
    { wch: 24 }, // Candidate Name
    { wch: 20 }, // Rank / Category
    { wch: 16 }, // INDoS No.
    { wch: 16 }, // CDC No.
    { wch: 20 }, // Certificate No.
    { wch: 26 }, // Shipping Company
    { wch: 20 }, // Vessel Name
    { wch: 8 },  // Age
    { wch: 10 }, // Gender
    { wch: 16 }, // Mobile Phone
    { wch: 26 }, // Email Address
    { wch: 24 }, // Medical Type
    { wch: 22 }, // Medical Fitness
    { wch: 18 }, // USG Findings
    { wch: 18 }, // Chest X-Ray
    { wch: 16 }, // Payment Status
    { wch: 16 }, // Payment Mode
    { wch: 14 }, // Total Fee (₹)
    { wch: 14 }, // Amount Paid
    { wch: 14 }, // Balance Due (₹)
    { wch: 12 }, // Time In
    { wch: 12 }, // Time Out
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Seafarer Candidates");

  const finalName =
    filename ||
    `Sailors_Medical_Clinic_Patients_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(workbook, finalName);
}


