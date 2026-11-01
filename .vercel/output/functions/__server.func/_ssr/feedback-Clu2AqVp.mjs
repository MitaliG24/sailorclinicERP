import { a as objectType, n as enumType, o as stringType, r as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feedback-Clu2AqVp.js
var ratingOptions = [
	"Excellent",
	"Good",
	"Avg",
	"Below Avg"
];
var feedbackQuestions = [
	{
		id: "timeTakenAtReception",
		number: 1,
		label: "Time taken at reception"
	},
	{
		id: "skillAndFriendlinessTechnician",
		number: 2,
		label: "Skill & Friendliness of technician collecting blood"
	},
	{
		id: "ecgAudiometryTechnician",
		number: 3,
		label: "ECG - Audiometry Technician"
	},
	{
		id: "guidanceByStaffDuringWait",
		number: 4,
		label: "Guidance by staff during your wait"
	},
	{
		id: "hygieneCleanlinessClinics",
		number: 5,
		label: "Hygiene / Cleanliness of Clinics"
	},
	{
		id: "friendlinessMedicalStaff",
		number: 6,
		label: "Friendliness of the Medical Centre Staff"
	},
	{
		id: "interactionWithDoctor",
		number: 7,
		label: "Interaction with the Doctor"
	},
	{
		id: "turnaroundTimeReports",
		number: 8,
		label: "Turnaround time for reports"
	}
];
var feedbackStatuses = [
	"New",
	"Under Review",
	"Resolved",
	"Archived"
];
var createFeedbackSchema = objectType({
	name: stringType().trim().min(2, "Name must be at least 2 characters").max(100),
	date: stringType().trim().min(1, "Date is required"),
	companyName: stringType().trim().max(100).optional().or(literalType("")),
	vessel: stringType().trim().max(100).optional().or(literalType("")),
	rank: stringType().trim().max(50).optional().or(literalType("")),
	passportOrCdcNo: stringType().trim().max(50).optional().or(literalType("")),
	indosNo: stringType().trim().max(50).optional().or(literalType("")),
	mobileNo: stringType().trim().min(8, "Mobile number must be at least 8 digits").max(20),
	email: stringType().trim().email("Invalid email address").optional().or(literalType("")),
	timeTakenAtReception: enumType(ratingOptions).default("Good"),
	skillAndFriendlinessTechnician: enumType(ratingOptions).default("Good"),
	ecgAudiometryTechnician: enumType(ratingOptions).default("Good"),
	guidanceByStaffDuringWait: enumType(ratingOptions).default("Good"),
	hygieneCleanlinessClinics: enumType(ratingOptions).default("Good"),
	friendlinessMedicalStaff: enumType(ratingOptions).default("Good"),
	interactionWithDoctor: enumType(ratingOptions).default("Good"),
	turnaroundTimeReports: enumType(ratingOptions).default("Good"),
	suggestionsComments: stringType().trim().max(3e3).optional().or(literalType("")),
	candidateSignature: stringType().trim().max(100).optional().or(literalType(""))
});
var initialFeedbackRecords = [
	{
		id: "SMC-FB-2026-8812",
		date: "2026-10-24",
		name: "Capt. Rajesh Nair",
		companyName: "Maersk Marine Services",
		vessel: "MV Maersk Mc-Kinney",
		rank: "Master / Captain",
		passportOrCdcNo: "MUM 248910",
		indosNo: "02NL1844",
		mobileNo: "+91 95614 50104",
		email: "rajesh.nair@maritime.demo",
		timeTakenAtReception: "Good",
		skillAndFriendlinessTechnician: "Excellent",
		ecgAudiometryTechnician: "Excellent",
		guidanceByStaffDuringWait: "Good",
		hygieneCleanlinessClinics: "Excellent",
		friendlinessMedicalStaff: "Excellent",
		interactionWithDoctor: "Excellent",
		turnaroundTimeReports: "Good",
		suggestionsComments: "Very professional marine examination centre. Staff was cooperative and clinical procedures were swift.",
		candidateSignature: "Capt. Rajesh Nair",
		status: "Resolved",
		createdAt: "2026-10-24T05:30:00.000Z",
		resolutionRemarks: "Feedback reviewed and filed under DG Shipping annual quality register.",
		resolvedAt: "2026-10-24T08:15:00.000Z"
	},
	{
		id: "SMC-FB-2026-8815",
		date: "2026-10-25",
		name: "Pooja Sharma",
		companyName: "Synergy Maritime",
		vessel: "MT Synergy Tide",
		rank: "2nd Officer",
		passportOrCdcNo: "CHE 192844",
		indosNo: "18NL7714",
		mobileNo: "+91 98402 11963",
		email: "pooja.s@seafarer.demo",
		timeTakenAtReception: "Excellent",
		skillAndFriendlinessTechnician: "Excellent",
		ecgAudiometryTechnician: "Excellent",
		guidanceByStaffDuringWait: "Excellent",
		hygieneCleanlinessClinics: "Excellent",
		friendlinessMedicalStaff: "Excellent",
		interactionWithDoctor: "Excellent",
		turnaroundTimeReports: "Excellent",
		suggestionsComments: "Blood collection was completely painless. Dr. Maya Bennett explained the fitness criteria thoroughly.",
		candidateSignature: "Pooja Sharma",
		status: "Resolved",
		createdAt: "2026-10-25T07:10:00.000Z",
		resolutionRemarks: "Commendation acknowledged and shared with clinical team.",
		resolvedAt: "2026-10-25T09:00:00.000Z"
	},
	{
		id: "SMC-FB-2026-8820",
		date: "2026-10-26",
		name: "Ethan Chen",
		companyName: "Anglo-Eastern Shipping",
		rank: "Chief Engineer",
		passportOrCdcNo: "GOA 154890",
		indosNo: "11NL4562",
		mobileNo: "+91 98334 50177",
		email: "ethan.c@seafarer.demo",
		timeTakenAtReception: "Good",
		skillAndFriendlinessTechnician: "Good",
		ecgAudiometryTechnician: "Good",
		guidanceByStaffDuringWait: "Avg",
		hygieneCleanlinessClinics: "Excellent",
		friendlinessMedicalStaff: "Good",
		interactionWithDoctor: "Excellent",
		turnaroundTimeReports: "Good",
		suggestionsComments: "Waiting area seating during morning rush hours could have an additional drinking water dispenser.",
		candidateSignature: "Ethan Chen",
		status: "Under Review",
		createdAt: "2026-10-26T11:45:00.000Z",
		resolutionRemarks: "Clinic supervisor notified to install secondary water dispenser in waiting lobby."
	},
	{
		id: "SMC-FB-2026-8824",
		date: "2026-10-27",
		name: "Liam Thompson",
		companyName: "Teekay Tankers",
		rank: "Bosun",
		passportOrCdcNo: "CHE 087221",
		indosNo: "98NL0123",
		mobileNo: "+91 98401 55182",
		email: "liam.t@seafarer.demo",
		timeTakenAtReception: "Excellent",
		skillAndFriendlinessTechnician: "Excellent",
		ecgAudiometryTechnician: "Good",
		guidanceByStaffDuringWait: "Excellent",
		hygieneCleanlinessClinics: "Excellent",
		friendlinessMedicalStaff: "Excellent",
		interactionWithDoctor: "Excellent",
		turnaroundTimeReports: "Excellent",
		suggestionsComments: "Digital audiometry and vision test was organized very smoothly without any delay.",
		candidateSignature: "Liam Thompson",
		status: "New",
		createdAt: "2026-10-27T03:15:00.000Z"
	}
];
//#endregion
export { ratingOptions as a, initialFeedbackRecords as i, feedbackQuestions as n, feedbackStatuses as r, createFeedbackSchema as t };
