import { a as objectType, i as numberType, n as enumType, o as stringType, r as literalType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/staff-D45nO_Ee.js
var clinicSections = [
	{
		id: "dashboard",
		label: "Dashboard",
		group: "Workspace"
	},
	{
		id: "patients",
		label: "Patient Records",
		group: "Workspace"
	},
	{
		id: "invoices",
		label: "Invoices",
		group: "Workspace"
	},
	{
		id: "payments",
		label: "Payments",
		group: "Workspace"
	},
	{
		id: "feedback",
		label: "Grievances & Reviews",
		group: "Clinic administration"
	},
	{
		id: "staff",
		label: "Staff Management",
		group: "Clinic administration"
	},
	{
		id: "reports",
		label: "Reports",
		group: "Clinic administration"
	},
	{
		id: "activity",
		label: "Activity Logs",
		group: "Clinic administration"
	},
	{
		id: "settings",
		label: "Settings",
		group: "Clinic administration"
	}
];
var staffSections = [
	"dashboard",
	"patients",
	"invoices",
	"payments",
	"reports"
];
function getVisibleSections(role) {
	return clinicSections.filter((section) => role === "admin" || staffSections.includes(section.id));
}
function canAccessSection(role, section) {
	return role === "admin" || staffSections.includes(section);
}
var initialPatients = [
	{
		id: "PT-2408",
		srNo: 1,
		date: "2026-10-21",
		name: "Amara Johnson",
		initials: "AJ",
		dob: "1992-04-12",
		age: 34,
		gender: "Female",
		phone: "+91 98201 44821",
		email: "amara.j@seafarer.demo",
		rank: "Chief Officer",
		vessel: "MV Maersk Mc-Kinney",
		vesselName: "MV Maersk Mc-Kinney",
		typeOfMedical: "Annual Seafarer Medical",
		usgXray: "USG & Chest X-Ray Normal",
		companyName: "Maersk Marine Services",
		paymentStatus: "Paid",
		paymentAmount: "₹4,500.00",
		paymentMode: "Trans. ID",
		paymentProof: "TXN-PR-88219",
		transactionId: "TXN-50941",
		timeIn: "08:30 AM",
		timeOut: "12:15 PM",
		certificateNo: "MC-2026-9041",
		indosNo: "12NL8492",
		cdcNo: "MUM 248910",
		invoiceNo: "INV-2026-084",
		candidateName: "Amara Johnson",
		lastVisit: "Oct 21, 2026",
		nextVisit: "Oct 28, 2026",
		condition: "Annual Seafarer Medical",
		status: "Active"
	},
	{
		id: "PT-2407",
		srNo: 2,
		date: "2026-10-21",
		name: "Noah Williams",
		initials: "NW",
		dob: "1974-09-18",
		age: 52,
		gender: "Male",
		phone: "+91 98402 11963",
		email: "noah.w@seafarer.demo",
		rank: "Captain / Master",
		vessel: "MT Synergy Tide",
		vesselName: "MT Synergy Tide",
		typeOfMedical: "Flag State Medical",
		usgXray: "Chest X-Ray Done",
		companyName: "Synergy Maritime",
		paymentStatus: "Own",
		paymentAmount: "₹8,200.00",
		paymentMode: "Cash",
		paymentProof: "Cash Voucher #441",
		transactionId: "CSH-2026-018",
		timeIn: "09:00 AM",
		timeOut: "01:30 PM",
		certificateNo: "MC-2026-9040",
		indosNo: "05NL3190",
		cdcNo: "CHE 192844",
		invoiceNo: "INV-2026-083",
		candidateName: "Noah Williams",
		lastVisit: "Oct 21, 2026",
		nextVisit: "Oct 24, 2026",
		condition: "Cardiology Review",
		status: "Follow-up"
	},
	{
		id: "PT-2406",
		srNo: 3,
		date: "2026-10-20",
		name: "Sofia Patel",
		initials: "SP",
		dob: "1998-11-05",
		age: 28,
		gender: "Female",
		phone: "+91 97115 90113",
		email: "sofia.p@seafarer.demo",
		rank: "2nd Officer",
		vessel: "MV Pacific Pioneer",
		vesselName: "MV Pacific Pioneer",
		typeOfMedical: "Pre-Sea Examination",
		usgXray: "USG & X-Ray Normal",
		companyName: "Fleet Management Ltd",
		paymentStatus: "Paid",
		paymentAmount: "₹3,800.00",
		paymentMode: "Trans. ID",
		paymentProof: "Receipt #0982",
		transactionId: "TXN-50940",
		timeIn: "08:45 AM",
		timeOut: "11:50 AM",
		certificateNo: "MC-2026-9039",
		indosNo: "18NL7714",
		cdcNo: "KOL 309112",
		invoiceNo: "INV-2026-082",
		candidateName: "Sofia Patel",
		lastVisit: "Oct 20, 2026",
		nextVisit: "Oct 29, 2026",
		condition: "Pre-Sea Fitness",
		status: "Active"
	},
	{
		id: "PT-2405",
		srNo: 4,
		date: "2026-10-20",
		name: "Ethan Chen",
		initials: "EC",
		dob: "1985-02-14",
		age: 41,
		gender: "Male",
		phone: "+91 98334 50177",
		email: "ethan.c@seafarer.demo",
		rank: "Chief Engineer",
		vessel: "MV Eastern Glory",
		vesselName: "MV Eastern Glory",
		typeOfMedical: "Periodic Maritime Medical",
		usgXray: "Pending USG",
		companyName: "Anglo-Eastern Shipping",
		paymentStatus: "Own",
		paymentAmount: "₹6,500.00",
		paymentMode: "Cash",
		paymentProof: "Cash Memo #829",
		transactionId: "CSH-2026-015",
		timeIn: "10:00 AM",
		timeOut: "02:00 PM",
		certificateNo: "MC-2026-9038",
		indosNo: "11NL4562",
		cdcNo: "GOA 154890",
		invoiceNo: "INV-2026-081",
		candidateName: "Ethan Chen",
		lastVisit: "Oct 20, 2026",
		nextVisit: "Oct 23, 2026",
		condition: "Physical Fitness Review",
		status: "Follow-up"
	},
	{
		id: "PT-2404",
		srNo: 5,
		date: "2026-10-19",
		name: "Olivia Martinez",
		initials: "OM",
		dob: "2007-06-25",
		age: 19,
		gender: "Female",
		phone: "+91 98210 50144",
		email: "olivia.m@seafarer.demo",
		rank: "Deck Cadet",
		vessel: "MSC Oscar",
		vesselName: "MSC Oscar",
		typeOfMedical: "Pre-Sea Examination",
		usgXray: "USG & X-Ray Normal",
		companyName: "MSC Mediterranean",
		paymentStatus: "Paid",
		paymentAmount: "₹2,500.00",
		paymentMode: "Trans. ID",
		paymentProof: "Online Conf #7712",
		transactionId: "TXN-50935",
		timeIn: "09:15 AM",
		timeOut: "12:30 PM",
		certificateNo: "MC-2026-9037",
		indosNo: "24NL9012",
		cdcNo: "MUM 398110",
		invoiceNo: "INV-2026-080",
		candidateName: "Olivia Martinez",
		lastVisit: "Oct 19, 2026",
		nextVisit: "Nov 02, 2026",
		condition: "Pre-Sea Medical Check",
		status: "New"
	},
	{
		id: "PT-2403",
		srNo: 6,
		date: "2026-10-19",
		name: "Liam Thompson",
		initials: "LT",
		dob: "1959-03-30",
		age: 67,
		gender: "Male",
		phone: "+91 98401 55182",
		email: "liam.t@seafarer.demo",
		rank: "Bosun",
		vessel: "MT Nordic Voyager",
		vesselName: "MT Nordic Voyager",
		typeOfMedical: "Periodic Maritime Medical",
		usgXray: "Chest X-Ray Normal",
		companyName: "Teekay Tankers",
		paymentStatus: "Paid",
		paymentAmount: "₹9,800.00",
		paymentMode: "Trans. ID",
		paymentProof: "Company Voucher #662",
		transactionId: "TXN-50939",
		timeIn: "08:15 AM",
		timeOut: "01:00 PM",
		certificateNo: "MC-2026-9036",
		indosNo: "98NL0123",
		cdcNo: "CHE 087221",
		invoiceNo: "INV-2026-079",
		candidateName: "Liam Thompson",
		lastVisit: "Oct 19, 2026",
		nextVisit: "Oct 26, 2026",
		condition: "Cardiology Review",
		status: "Active"
	}
];
function formatINR(val) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 2
	}).format(val);
}
function amountToWordsINR(num) {
	const a = [
		"",
		"One ",
		"Two ",
		"Three ",
		"Four ",
		"Five ",
		"Six ",
		"Seven ",
		"Eight ",
		"Nine ",
		"Ten ",
		"Eleven ",
		"Twelve ",
		"Thirteen ",
		"Fourteen ",
		"Fifteen ",
		"Sixteen ",
		"Seventeen ",
		"Eighteen ",
		"Nineteen "
	];
	const b = [
		"",
		"",
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety"
	];
	function inWords(n) {
		if ((n = n.toString().length > 9 ? parseFloat(n.toString().slice(0, 9)) : n) === 0) return "";
		let str = "";
		const nStr = ("000000000" + n).slice(-9);
		const crore = parseInt(nStr.substring(0, 2), 10);
		const lakh = parseInt(nStr.substring(2, 4), 10);
		const thousand = parseInt(nStr.substring(4, 6), 10);
		const hundred = parseInt(nStr.substring(6, 7), 10);
		const rest = parseInt(nStr.substring(7, 9), 10);
		if (crore > 0) str += (a[crore] || b[Math.floor(crore / 10)] + " " + a[crore % 10]) + "Crore ";
		if (lakh > 0) str += (a[lakh] || b[Math.floor(lakh / 10)] + " " + a[lakh % 10]) + "Lakh ";
		if (thousand > 0) str += (a[thousand] || b[Math.floor(thousand / 10)] + " " + a[thousand % 10]) + "Thousand ";
		if (hundred > 0) str += a[hundred] + "Hundred ";
		if (rest > 0) {
			if (str !== "") str += "and ";
			str += a[rest] || b[Math.floor(rest / 10)] + " " + a[rest % 10];
		}
		return str.trim();
	}
	const words = inWords(Math.round(num));
	return words ? `Rupees ${words} Only` : "Rupees Zero Only";
}
var invoiceRecords = [
	{
		id: "INV-2026-084",
		date: "Oct 21, 2026",
		dueDate: "Nov 05, 2026",
		patient: "Amara Johnson",
		patientId: "PT-2408",
		rank: "Chief Officer",
		vessel: "MV Maersk Mc-Kinney",
		indosNo: "12NL8492",
		cdcNo: "MUM 248910",
		certificateNo: "MC-2026-9041",
		company: "Maersk Marine Services India Pvt Ltd",
		companyGstin: "27AAACM0124P1Z4",
		companyAddress: "12th Floor, Tower B, Peninsula Business Park, Lower Parel, Mumbai 400013",
		status: "Paid",
		subtotal: 4500,
		tax: 0,
		discount: 0,
		total: 4500,
		amount: "₹4,500.00",
		paymentMethod: "UPI / Trans. ID",
		transactionRef: "TXN-50941 / UTR-882190",
		paidDate: "Oct 21, 2026",
		notes: "DG Shipping Annual Seafarer Fitness examination cleared.",
		items: [
			{
				id: "1",
				description: "DG Shipping Comprehensive Medical Fitness Examination",
				sacCode: "999312",
				qty: 1,
				rate: 2500,
				amount: 2500
			},
			{
				id: "2",
				description: "Digital Chest X-Ray (PA View with Radiologist Report)",
				sacCode: "999312",
				qty: 1,
				rate: 1200,
				amount: 1200
			},
			{
				id: "3",
				description: "Pathology Diagnostics (Complete Haemogram & Fasting Glucose)",
				sacCode: "999312",
				qty: 1,
				rate: 800,
				amount: 800
			}
		]
	},
	{
		id: "INV-2026-083",
		date: "Oct 21, 2026",
		dueDate: "Nov 05, 2026",
		patient: "Noah Williams",
		patientId: "PT-2407",
		rank: "Captain / Master",
		vessel: "MT Synergy Tide",
		indosNo: "05NL3190",
		cdcNo: "CHE 192844",
		certificateNo: "MC-2026-9040",
		company: "Synergy Maritime Pvt Ltd",
		companyGstin: "33AABCS8891Q1Z8",
		companyAddress: "4th Floor, Apex Chambers, Chennai 600017",
		status: "Pending",
		subtotal: 8200,
		tax: 0,
		discount: 0,
		total: 8200,
		amount: "₹8,200.00",
		paymentMethod: "Cash / Pending",
		transactionRef: "CSH-2026-018",
		paidDate: "Pending Verification",
		notes: "Flag state medical with Cardiology review protocol.",
		items: [
			{
				id: "1",
				description: "Flag State Master Mariner Fitness Examination",
				sacCode: "999312",
				qty: 1,
				rate: 3500,
				amount: 3500
			},
			{
				id: "2",
				description: "Cardiology Evaluation & 12-Lead Resting ECG",
				sacCode: "999312",
				qty: 1,
				rate: 2500,
				amount: 2500
			},
			{
				id: "3",
				description: "Whole Abdomen Ultrasound Screening (USG)",
				sacCode: "999312",
				qty: 1,
				rate: 2200,
				amount: 2200
			}
		]
	},
	{
		id: "INV-2026-082",
		date: "Oct 20, 2026",
		dueDate: "Nov 04, 2026",
		patient: "Sofia Patel",
		patientId: "PT-2406",
		rank: "2nd Officer",
		vessel: "MV Pacific Pioneer",
		indosNo: "18NL7714",
		cdcNo: "KOL 309112",
		certificateNo: "MC-2026-9039",
		company: "Fleet Management India Ltd",
		companyGstin: "27AACCF1209M1ZG",
		companyAddress: "601, Enterprise Hub, Andheri East, Mumbai 400069",
		status: "Paid",
		subtotal: 3800,
		tax: 0,
		discount: 0,
		total: 3800,
		amount: "₹3,800.00",
		paymentMethod: "HDFC Bank IMPS",
		transactionRef: "TXN-50940 / IMPS-90172",
		paidDate: "Oct 20, 2026",
		notes: "Pre-Sea medical certificate issued.",
		items: [
			{
				id: "1",
				description: "Pre-Sea Seafarer Medical Examination",
				sacCode: "999312",
				qty: 1,
				rate: 2200,
				amount: 2200
			},
			{
				id: "2",
				description: "Digital Chest X-Ray (PA View)",
				sacCode: "999312",
				qty: 1,
				rate: 1e3,
				amount: 1e3
			},
			{
				id: "3",
				description: "Audiometry & Ishihara 38 Plates Color Vision Test",
				sacCode: "999312",
				qty: 1,
				rate: 600,
				amount: 600
			}
		]
	},
	{
		id: "INV-2026-081",
		date: "Oct 20, 2026",
		dueDate: "Oct 15, 2026",
		patient: "Ethan Chen",
		patientId: "PT-2405",
		rank: "Chief Engineer",
		vessel: "MV Eastern Glory",
		indosNo: "11NL4562",
		cdcNo: "GOA 154890",
		certificateNo: "MC-2026-9038",
		company: "Anglo-Eastern Ship Management India",
		companyGstin: "27AABCA3319L1ZP",
		companyAddress: "Anglo-Eastern House, MIDC, Andheri East, Mumbai 400093",
		status: "Overdue",
		subtotal: 6500,
		tax: 0,
		discount: 0,
		total: 6500,
		amount: "₹6,500.00",
		paymentMethod: "Corporate Billing / Due",
		transactionRef: "INV-REF-081",
		notes: "USG pending; follow-up payment overdue.",
		items: [
			{
				id: "1",
				description: "Periodic Maritime Medical Checkup (Chief Engineer)",
				sacCode: "999312",
				qty: 1,
				rate: 2800,
				amount: 2800
			},
			{
				id: "2",
				description: "Whole Abdomen & Pelvis Ultrasonography (USG)",
				sacCode: "999312",
				qty: 1,
				rate: 2200,
				amount: 2200
			},
			{
				id: "3",
				description: "Biochemical Lab Panel (Lipid, LFT, KFT & Serum Creatinine)",
				sacCode: "999312",
				qty: 1,
				rate: 1500,
				amount: 1500
			}
		]
	},
	{
		id: "INV-2026-080",
		date: "Oct 19, 2026",
		dueDate: "Nov 03, 2026",
		patient: "Olivia Martinez",
		patientId: "PT-2404",
		rank: "Deck Cadet",
		vessel: "MSC Oscar",
		indosNo: "24NL9012",
		cdcNo: "MUM 398110",
		certificateNo: "MC-2026-9037",
		company: "MSC Mediterranean Shipping Co. India",
		companyGstin: "27AABCM7712E1Z2",
		companyAddress: "MSC House, Andheri Kurla Road, Mumbai 400059",
		status: "Pending",
		subtotal: 2500,
		tax: 0,
		discount: 0,
		total: 2500,
		amount: "₹2,500.00",
		paymentMethod: "Trans. ID / Online",
		transactionRef: "TXN-50935",
		notes: "New deck cadet joining examination.",
		items: [{
			id: "1",
			description: "Deck Cadet Pre-Sea Medical Examination",
			sacCode: "999312",
			qty: 1,
			rate: 1800,
			amount: 1800
		}, {
			id: "2",
			description: "Chest X-Ray & Vision Acuity Screening",
			sacCode: "999312",
			qty: 1,
			rate: 700,
			amount: 700
		}]
	},
	{
		id: "INV-2026-079",
		date: "Oct 19, 2026",
		dueDate: "Nov 02, 2026",
		patient: "Liam Thompson",
		patientId: "PT-2403",
		rank: "Bosun",
		vessel: "MT Nordic Voyager",
		indosNo: "98NL0123",
		cdcNo: "CHE 087221",
		certificateNo: "MC-2026-9036",
		company: "Teekay Tankers India Pvt Ltd",
		companyGstin: "27AABCT9918F1ZU",
		companyAddress: "7th Floor, Solitaire Corporate Park, Mumbai 400093",
		status: "Paid",
		subtotal: 9800,
		tax: 0,
		discount: 0,
		total: 9800,
		amount: "₹9,800.00",
		paymentMethod: "Teekay Corporate NEFT",
		transactionRef: "TXN-50939 / NEFT-66219",
		paidDate: "Oct 19, 2026",
		notes: "Senior deck crew physical fitness clearance.",
		items: [
			{
				id: "1",
				description: "Periodic Seafarer Medical Examination",
				sacCode: "999312",
				qty: 1,
				rate: 3e3,
				amount: 3e3
			},
			{
				id: "2",
				description: "Echocardiogram & Cardiac Stress Evaluation",
				sacCode: "999312",
				qty: 1,
				rate: 4200,
				amount: 4200
			},
			{
				id: "3",
				description: "Whole Abdomen Ultrasound Screening",
				sacCode: "999312",
				qty: 1,
				rate: 2600,
				amount: 2600
			}
		]
	}
];
var activityRecords = [
	{
		user: "Rachel Adams",
		action: "Updated patient record",
		subject: "Amara Johnson · PT-2408",
		time: "2 min ago",
		kind: "Patients"
	},
	{
		user: "Michael Rivera",
		action: "Generated tax invoice",
		subject: "INV-2026-084 · ₹4,500.00",
		time: "18 min ago",
		kind: "Billing"
	},
	{
		user: "Dr. Maya Bennett",
		action: "Completed maritime medical",
		subject: "Noah Williams · Cardiology",
		time: "36 min ago",
		kind: "Appointments"
	},
	{
		user: "Rachel Adams",
		action: "Recorded UPI payment",
		subject: "TXN-50941 · ₹4,500.00",
		time: "1 hr ago",
		kind: "Payments"
	},
	{
		user: "Michael Rivera",
		action: "Added new seafarer",
		subject: "Olivia Martinez · PT-2404",
		time: "2 hr ago",
		kind: "Patients"
	},
	{
		user: "Dr. Daniel Kim",
		action: "Updated fitness certificate",
		subject: "Ethan Chen · PT-2405",
		time: "3 hr ago",
		kind: "Patients"
	}
];
var appointmentRecords = [
	{
		time: "09:00 AM",
		patient: "Amara Johnson",
		initials: "AJ",
		doctor: "Dr. Maya Bennett",
		type: "Annual Seafarer Medical",
		status: "Completed"
	},
	{
		time: "10:30 AM",
		patient: "Noah Williams",
		initials: "NW",
		doctor: "Dr. Daniel Kim",
		type: "Cardiology Review",
		status: "In progress"
	},
	{
		time: "11:15 AM",
		patient: "Sofia Patel",
		initials: "SP",
		doctor: "Dr. Aisha Khan",
		type: "Pre-Sea Examination",
		status: "Upcoming"
	},
	{
		time: "01:00 PM",
		patient: "Ethan Chen",
		initials: "EC",
		doctor: "Rachel Adams, RN",
		type: "Periodic Physical Fitness",
		status: "Upcoming"
	}
];
var staffDepartments = [
	"Medical & DG Examinations",
	"Cardiology & ECG",
	"Radiology & Diagnostics",
	"Pathology & Laboratory",
	"Nursing & Phlebotomy",
	"Clinic Administration"
];
var staffStatuses = [
	"Active / On duty",
	"On leave",
	"Resigned",
	"Terminated"
];
var documentTypes = [
	"Medical License & DG Approval",
	"Identity Proof (Aadhaar / Passport)",
	"Educational Degree / Qualification",
	"Employment Agreement & Offer Letter",
	"Experience / Relieving Certificate",
	"PAN Card / Tax Document",
	"Other"
];
objectType({
	id: stringType().trim().min(1, "Employee ID is required"),
	name: stringType().trim().min(2, "Name must be at least 2 characters").max(100),
	initials: stringType().trim().max(5).default("SM"),
	gender: enumType([
		"Male",
		"Female",
		"Other"
	]).default("Male"),
	dob: stringType().trim().default("1990-01-01"),
	phone: stringType().trim().min(8, "Phone number is required"),
	email: stringType().trim().email("Invalid email"),
	address: stringType().trim().default("Navi Mumbai, Maharashtra"),
	emergencyContactName: stringType().trim().default("Emergency Contact"),
	emergencyContactPhone: stringType().trim().default("+91 95614 50104"),
	role: stringType().trim().min(2, "Role/Designation is required"),
	department: enumType(staffDepartments).default("Medical & DG Examinations"),
	employmentType: enumType([
		"Full-time",
		"Part-time",
		"Consultant",
		"Visiting Doctor"
	]).default("Full-time"),
	status: enumType(staffStatuses).default("Active / On duty"),
	joiningDate: stringType().trim().min(1, "Joining date is required"),
	schedule: stringType().trim().default("Mon – Fri, 9:00 AM – 5:00 PM"),
	resignationDate: stringType().trim().optional().or(literalType("")),
	relievingDate: stringType().trim().optional().or(literalType("")),
	resignationReason: stringType().trim().optional().or(literalType("")),
	noticePeriodDays: numberType().nonnegative().optional().default(30),
	basicSalary: numberType().nonnegative().default(5e4),
	allowances: numberType().nonnegative().default(1e4),
	deductions: numberType().nonnegative().default(2500),
	netSalary: numberType().nonnegative().default(57500),
	payFrequency: enumType([
		"Monthly",
		"Bi-Weekly",
		"Consultation Fee"
	]).default("Monthly"),
	panNo: stringType().trim().optional().or(literalType("")),
	bankName: stringType().trim().optional().or(literalType("")),
	bankAccountNo: stringType().trim().optional().or(literalType("")),
	ifscCode: stringType().trim().optional().or(literalType("")),
	notes: stringType().trim().optional().or(literalType("")),
	documents: arrayType(objectType({
		id: stringType(),
		name: stringType(),
		type: enumType(documentTypes),
		documentNo: stringType().optional(),
		issuedDate: stringType().optional(),
		expiryDate: stringType().optional(),
		fileUrl: stringType().optional(),
		verificationStatus: enumType([
			"Verified",
			"Pending",
			"Expired"
		])
	})).default([])
});
function convertNumberToWordsIndian(num) {
	if (!num || isNaN(num) || num <= 0) return "ZERO RUPEES ONLY";
	const single = [
		"",
		"ONE",
		"TWO",
		"THREE",
		"FOUR",
		"FIVE",
		"SIX",
		"SEVEN",
		"EIGHT",
		"NINE",
		"TEN",
		"ELEVEN",
		"TWELVE",
		"THIRTEEN",
		"FOURTEEN",
		"FIFTEEN",
		"SIXTEEN",
		"SEVENTEEN",
		"EIGHTEEN",
		"NINETEEN"
	];
	const tens = [
		"",
		"",
		"TWENTY",
		"THIRTY",
		"FORTY",
		"FIFTY",
		"SIXTY",
		"SEVENTY",
		"EIGHTY",
		"NINETY"
	];
	const numToWords = (n) => {
		if (n === 0) return "";
		if (n < 20) return single[n] + " ";
		if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + single[n % 10] : "") + " ";
		return single[Math.floor(n / 100)] + " HUNDRED " + (n % 100 !== 0 ? numToWords(n % 100) : "");
	};
	let n = Math.floor(num);
	let str = "";
	const crore = Math.floor(n / 1e7);
	n %= 1e7;
	const lakh = Math.floor(n / 1e5);
	n %= 1e5;
	const thousand = Math.floor(n / 1e3);
	n %= 1e3;
	const remainder = n;
	if (crore > 0) str += numToWords(crore) + "CRORE ";
	if (lakh > 0) str += numToWords(lakh) + "LAKH ";
	if (thousand > 0) str += numToWords(thousand) + "THOUSAND ";
	if (remainder > 0) str += numToWords(remainder);
	return str.trim().replace(/\s+/g, " ") + " RUPEES ONLY";
}
var initialStaffMembers = [
	{
		id: "SMC-EMP-001",
		name: "Dr. Maya Bennett",
		initials: "MB",
		gender: "Female",
		dob: "1980-08-14",
		phone: "+91 98201 44910",
		email: "dr.maya@sailorsmedical.com",
		address: "Sea Breeze Towers, Palm Beach Road, Sanpada, Navi Mumbai 400705",
		emergencyContactName: "Dr. Bennett (Spouse)",
		emergencyContactPhone: "+91 98201 44919",
		role: "Medical Director & DG Examiner",
		department: "Medical & DG Examinations",
		employmentType: "Full-time",
		status: "Active / On duty",
		joiningDate: "2021-03-01",
		schedule: "Mon – Fri, 8:00 AM – 4:00 PM",
		basicSalary: 18e4,
		allowances: 35e3,
		deductions: 7500,
		netSalary: 207500,
		payFrequency: "Monthly",
		panNo: "AAAPB9812K",
		bankName: "HDFC Bank (CBD Belapur)",
		bankAccountNo: "•••• •••• 4481",
		ifscCode: "HDFC0000492",
		notes: "Lead medical superintendent and authorized DG Shipping medical examiner.",
		createdAt: "2021-03-01T00:00:00.000Z",
		documents: [
			{
				id: "DOC-001",
				name: "DG Shipping Medical Approval Certificate",
				type: "Medical License & DG Approval",
				documentNo: "DG-MED-MUM-2019-041",
				issuedDate: "2019-04-10",
				expiryDate: "2029-04-09",
				verificationStatus: "Verified"
			},
			{
				id: "DOC-002",
				name: "Maharashtra Medical Council (MMC) Registration",
				type: "Medical License & DG Approval",
				documentNo: "MMC-2005-08-2914",
				issuedDate: "2005-08-15",
				expiryDate: "2030-08-14",
				verificationStatus: "Verified"
			},
			{
				id: "DOC-003",
				name: "MD Internal Medicine Degree Certificate",
				type: "Educational Degree / Qualification",
				documentNo: "BOM-UNI-MED-8491",
				issuedDate: "2005-05-20",
				verificationStatus: "Verified"
			}
		]
	},
	{
		id: "SMC-EMP-002",
		name: "Dr. Daniel Kim",
		initials: "DK",
		gender: "Male",
		dob: "1983-11-22",
		phone: "+91 98334 22019",
		email: "dr.kim@sailorsmedical.com",
		address: "Sector 15, CBD Belapur, Navi Mumbai 400614",
		emergencyContactName: "Eunji Kim",
		emergencyContactPhone: "+91 98334 22020",
		role: "Cardiologist & TMT Specialist",
		department: "Cardiology & ECG",
		employmentType: "Full-time",
		status: "Active / On duty",
		joiningDate: "2022-01-15",
		schedule: "Mon – Thu, 9:00 AM – 5:00 PM",
		basicSalary: 14e4,
		allowances: 25e3,
		deductions: 5e3,
		netSalary: 16e4,
		payFrequency: "Monthly",
		panNo: "BCDPK1042M",
		bankName: "ICICI Bank (Sector 11)",
		bankAccountNo: "•••• •••• 9912",
		ifscCode: "ICIC0000881",
		notes: "Supervises resting ECG, stress echocardiograms, and cardiology approvals.",
		createdAt: "2022-01-15T00:00:00.000Z",
		documents: [{
			id: "DOC-004",
			name: "DM Cardiology Fellowship Certificate",
			type: "Educational Degree / Qualification",
			documentNo: "CARD-FELL-2012-99",
			issuedDate: "2012-07-01",
			verificationStatus: "Verified"
		}, {
			id: "DOC-005",
			name: "Aadhaar Card",
			type: "Identity Proof (Aadhaar / Passport)",
			documentNo: "•••• •••• 8102",
			issuedDate: "2016-02-10",
			verificationStatus: "Verified"
		}]
	},
	{
		id: "SMC-EMP-003",
		name: "Rachel Adams",
		initials: "RA",
		gender: "Female",
		dob: "1992-04-18",
		phone: "+91 97110 33819",
		email: "rachel.adams@sailorsmedical.com",
		address: "Kharghar Sector 20, Navi Mumbai 400710",
		emergencyContactName: "David Adams",
		emergencyContactPhone: "+91 97110 33825",
		role: "Registered Nurse & Head Phlebotomist",
		department: "Nursing & Phlebotomy",
		employmentType: "Full-time",
		status: "Active / On duty",
		joiningDate: "2023-05-10",
		schedule: "Tue – Sat, 7:00 AM – 3:00 PM",
		basicSalary: 48e3,
		allowances: 8e3,
		deductions: 2200,
		netSalary: 53800,
		payFrequency: "Monthly",
		panNo: "ADMPR8821B",
		bankName: "State Bank of India",
		bankAccountNo: "•••• •••• 3319",
		ifscCode: "SBIN0004921",
		notes: "Conducts blood samples collection, vitals measurement, and vaccines.",
		createdAt: "2023-05-10T00:00:00.000Z",
		documents: [{
			id: "DOC-006",
			name: "B.Sc Nursing Degree & State Nursing Council Reg.",
			type: "Educational Degree / Qualification",
			documentNo: "MNC-NURS-2015-883",
			issuedDate: "2015-06-30",
			verificationStatus: "Verified"
		}, {
			id: "DOC-007",
			name: "BLS / ACLS Healthcare Provider Certificate",
			type: "Medical License & DG Approval",
			documentNo: "AHA-ACLS-2024-118",
			issuedDate: "2024-03-12",
			expiryDate: "2026-03-11",
			verificationStatus: "Verified"
		}]
	},
	{
		id: "SMC-EMP-004",
		name: "Michael Rivera",
		initials: "MR",
		gender: "Male",
		dob: "1988-09-05",
		phone: "+91 98331 44820",
		email: "m.rivera@sailorsmedical.com",
		address: "Seawoods Estates, Sector 54, Nerul, Navi Mumbai 400706",
		emergencyContactName: "Elena Rivera",
		emergencyContactPhone: "+91 98331 44829",
		role: "Clinic Operations & Billing Manager",
		department: "Clinic Administration",
		employmentType: "Full-time",
		status: "Active / On duty",
		joiningDate: "2022-08-01",
		schedule: "Mon – Fri, 8:30 AM – 5:00 PM",
		basicSalary: 65e3,
		allowances: 12e3,
		deductions: 3e3,
		netSalary: 74e3,
		payFrequency: "Monthly",
		panNo: "RVRMR6612Q",
		bankName: "Axis Bank",
		bankAccountNo: "•••• •••• 6614",
		ifscCode: "UTIB0001092",
		notes: "Supervises candidate registration, GST invoicing, and corporate billing.",
		createdAt: "2022-08-01T00:00:00.000Z",
		documents: [{
			id: "DOC-008",
			name: "MBA Healthcare Management Degree",
			type: "Educational Degree / Qualification",
			documentNo: "MBA-HCM-2012-441",
			issuedDate: "2012-05-15",
			verificationStatus: "Verified"
		}, {
			id: "DOC-009",
			name: "Employment Contract & Non-Disclosure Agreement",
			type: "Employment Agreement & Offer Letter",
			documentNo: "SMC-EMP-AGR-2022-04",
			issuedDate: "2022-08-01",
			verificationStatus: "Verified"
		}]
	},
	{
		id: "SMC-EMP-005",
		name: "Dr. Aisha Khan",
		initials: "AK",
		gender: "Female",
		dob: "1986-03-30",
		phone: "+91 98401 55921",
		email: "dr.aisha@sailorsmedical.com",
		address: "Vashi Sector 9, Navi Mumbai 400703",
		emergencyContactName: "Tariq Khan",
		emergencyContactPhone: "+91 98401 55930",
		role: "Consultant Radiologist",
		department: "Radiology & Diagnostics",
		employmentType: "Consultant",
		status: "Active / On duty",
		joiningDate: "2023-11-01",
		schedule: "Mon, Wed, Fri, 10:00 AM – 6:00 PM",
		basicSalary: 11e4,
		allowances: 15e3,
		deductions: 4e3,
		netSalary: 121e3,
		payFrequency: "Monthly",
		panNo: "KHNAK9901R",
		bankName: "HDFC Bank",
		bankAccountNo: "•••• •••• 1042",
		ifscCode: "HDFC0000180",
		notes: "Conducts USG Abdomen and reviews Digital Chest X-Rays for DG fitness.",
		createdAt: "2023-11-01T00:00:00.000Z",
		documents: [{
			id: "DOC-010",
			name: "MD Radio-Diagnosis Degree",
			type: "Educational Degree / Qualification",
			documentNo: "MUM-RAD-2014-991",
			issuedDate: "2014-06-25",
			verificationStatus: "Verified"
		}]
	},
	{
		id: "SMC-EMP-006",
		name: "Sanjay Verma",
		initials: "SV",
		gender: "Male",
		dob: "1994-07-12",
		phone: "+91 98209 11844",
		email: "sanjay.v@sailorsmedical.com",
		address: "Ulwe Sector 19, Navi Mumbai 410206",
		emergencyContactName: "Ramesh Verma (Father)",
		emergencyContactPhone: "+91 98209 11850",
		role: "ECG & Audiometry Technician",
		department: "Cardiology & ECG",
		employmentType: "Full-time",
		status: "Active / On duty",
		joiningDate: "2024-02-15",
		schedule: "Mon – Sat, 8:30 AM – 4:30 PM",
		basicSalary: 35e3,
		allowances: 5e3,
		deductions: 1500,
		netSalary: 38500,
		payFrequency: "Monthly",
		panNo: "VRMSV4410P",
		bankName: "Kotak Mahindra Bank",
		bankAccountNo: "•••• •••• 9840",
		ifscCode: "KKBK0001421",
		notes: "Operates Pure Tone Audiometry booth and computerized 12-lead ECG.",
		createdAt: "2024-02-15T00:00:00.000Z",
		documents: [{
			id: "DOC-011",
			name: "Diploma in Medical Laboratory & Audiology Technology",
			type: "Educational Degree / Qualification",
			documentNo: "DMLT-AUD-2016-081",
			issuedDate: "2016-05-18",
			verificationStatus: "Verified"
		}]
	},
	{
		id: "SMC-EMP-007",
		name: "Priya Deshmukh",
		initials: "PD",
		gender: "Female",
		dob: "1996-12-04",
		phone: "+91 98190 77123",
		email: "priya.d@sailorsmedical.com",
		address: "Koperkhairane Sector 4, Navi Mumbai 400709",
		emergencyContactName: "Sunil Deshmukh",
		emergencyContactPhone: "+91 98190 77125",
		role: "Former Front Desk Executive",
		department: "Clinic Administration",
		employmentType: "Full-time",
		status: "Resigned",
		joiningDate: "2023-09-01",
		resignationDate: "2026-08-31",
		relievingDate: "2026-09-30",
		resignationReason: "Relocated to Pune for family reasons & higher studies",
		noticePeriodDays: 30,
		schedule: "Mon – Fri, 9:00 AM – 5:30 PM",
		basicSalary: 32e3,
		allowances: 4e3,
		deductions: 1200,
		netSalary: 34800,
		payFrequency: "Monthly",
		panNo: "DSMPD1129T",
		bankName: "Bank of Baroda",
		bankAccountNo: "•••• •••• 7719",
		ifscCode: "BARB0BELAPU",
		notes: "Successfully completed full handover and received official relieving letter.",
		createdAt: "2023-09-01T00:00:00.000Z",
		documents: [{
			id: "DOC-012",
			name: "Official Relieving & Experience Letter",
			type: "Experience / Relieving Certificate",
			documentNo: "SMC-REL-2026-091",
			issuedDate: "2026-09-30",
			verificationStatus: "Verified"
		}, {
			id: "DOC-013",
			name: "No-Dues Clearance Form",
			type: "Other",
			documentNo: "NODUES-2026-091",
			issuedDate: "2026-09-30",
			verificationStatus: "Verified"
		}]
	},
	{
		id: "SMC-EMP-008",
		name: "Yukta Jadhav",
		initials: "YJ",
		gender: "Female",
		dob: "1998-06-15",
		phone: "+91 98205 61402",
		email: "yukta.j@sailorsmedical.com",
		address: "Sector 11, CBD Belapur, Navi Mumbai 400614",
		emergencyContactName: "Sanjay Jadhav (Father)",
		emergencyContactPhone: "+91 98205 61410",
		role: "Lab Technician",
		department: "Pathology & Laboratory",
		employmentType: "Full-time",
		status: "Active / On duty",
		joiningDate: "2024-01-10",
		schedule: "Mon – Sat, 8:30 AM – 4:30 PM",
		basicSalary: 17e3,
		allowances: 350,
		deductions: 1416,
		netSalary: 15934,
		payFrequency: "Monthly",
		panNo: "JDHYP4910L",
		bankName: "HDFC Bank (CBD Belapur)",
		bankAccountNo: "•••• •••• 5591",
		ifscCode: "HDFC0000492",
		notes: "Lead pathology diagnostic technician, blood sampling & DG shipping medical reports.",
		createdAt: "2024-01-10T00:00:00.000Z",
		documents: [{
			id: "DOC-014",
			name: "Diploma in Medical Laboratory Technology (DMLT)",
			type: "Educational Degree / Qualification",
			documentNo: "DMLT-MUM-2019-441",
			issuedDate: "2019-07-20",
			verificationStatus: "Verified"
		}]
	}
];
var initialSalarySlips = [
	{
		id: "SLIP-2026-09-001",
		employeeId: "SMC-EMP-008",
		employeeName: "YUKTA JADHAV",
		designation: "LAB TECHNICIAN",
		payPeriod: "SEP 2026",
		payDate: "05-10-2026",
		month: "SEP",
		year: 2026,
		grossSalary: 17e3,
		travellingAllowance: 350,
		grossEarnings: 17350,
		totalLeaves: "2 DAY & HALF DAY",
		deductionAmount: 1416,
		totalDeductions: 1416,
		netPay: 15934,
		amountInWords: "FIFTEEN THOUSAND NINE HUNDRED THIRTYFOUR RUPEES ONLY",
		formulaNote: "**Total Net Payable = Gross Earnings+ T.A.- Total Deductions",
		employeePhone: "+91 98205 61402",
		employeeEmail: "yukta.j@sailorsmedical.com",
		createdAt: "2026-10-05T10:00:00.000Z"
	},
	{
		id: "SLIP-2026-09-002",
		employeeId: "SMC-EMP-001",
		employeeName: "DR. MAYA BENNETT",
		designation: "MEDICAL DIRECTOR & DG EXAMINER",
		payPeriod: "SEP 2026",
		payDate: "05-10-2026",
		month: "SEP",
		year: 2026,
		grossSalary: 18e4,
		travellingAllowance: 5e3,
		grossEarnings: 185e3,
		totalLeaves: "1 DAY",
		deductionAmount: 6e3,
		totalDeductions: 6e3,
		netPay: 179e3,
		amountInWords: "ONE LAKH SEVENTY NINE THOUSAND RUPEES ONLY",
		formulaNote: "**Total Net Payable = Gross Earnings+ T.A.- Total Deductions",
		employeePhone: "+91 98201 44910",
		employeeEmail: "dr.maya@sailorsmedical.com",
		createdAt: "2026-10-05T10:00:00.000Z"
	},
	{
		id: "SLIP-2026-09-003",
		employeeId: "SMC-EMP-006",
		employeeName: "SANJAY VERMA",
		designation: "ECG & AUDIOMETRY TECHNICIAN",
		payPeriod: "SEP 2026",
		payDate: "05-10-2026",
		month: "SEP",
		year: 2026,
		grossSalary: 35e3,
		travellingAllowance: 1200,
		grossEarnings: 36200,
		totalLeaves: "NONE",
		deductionAmount: 0,
		totalDeductions: 0,
		netPay: 36200,
		amountInWords: "THIRTY SIX THOUSAND TWO HUNDRED RUPEES ONLY",
		formulaNote: "**Total Net Payable = Gross Earnings+ T.A.- Total Deductions",
		employeePhone: "+91 98209 11844",
		employeeEmail: "sanjay.v@sailorsmedical.com",
		createdAt: "2026-10-05T10:00:00.000Z"
	},
	{
		id: "SLIP-2026-08-001",
		employeeId: "SMC-EMP-008",
		employeeName: "YUKTA JADHAV",
		designation: "LAB TECHNICIAN",
		payPeriod: "AUG 2026",
		payDate: "05-09-2026",
		month: "AUG",
		year: 2026,
		grossSalary: 17e3,
		travellingAllowance: 350,
		grossEarnings: 17350,
		totalLeaves: "1 DAY",
		deductionAmount: 566,
		totalDeductions: 566,
		netPay: 16784,
		amountInWords: "SIXTEEN THOUSAND SEVEN HUNDRED EIGHTY FOUR RUPEES ONLY",
		formulaNote: "**Total Net Payable = Gross Earnings+ T.A.- Total Deductions",
		employeePhone: "+91 98205 61402",
		employeeEmail: "yukta.j@sailorsmedical.com",
		createdAt: "2026-09-05T10:00:00.000Z"
	}
];
//#endregion
export { clinicSections as a, formatINR as c, initialSalarySlips as d, initialStaffMembers as f, staffStatuses as h, canAccessSection as i, getVisibleSections as l, staffDepartments as m, amountToWordsINR as n, convertNumberToWordsIndian as o, invoiceRecords as p, appointmentRecords as r, documentTypes as s, activityRecords as t, initialPatients as u };
