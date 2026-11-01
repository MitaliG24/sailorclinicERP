import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
import { t as getDatabase } from "./mongodb.server-DjK6AyEN.mjs";
import { f as initialStaffMembers, p as invoiceRecords, t as activityRecords, u as initialPatients } from "./staff-D45nO_Ee.mjs";
import { i as initialFeedbackRecords, t as createFeedbackSchema } from "./feedback-Clu2AqVp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clinic.server-C8mfcV_E.js
async function ensureCollectionsSeeded() {
	try {
		const db = await getDatabase();
		if (await db.collection("patients").countDocuments() === 0) {
			console.log("Seeding MongoDB patients collection with initial marine patients...");
			const patientsToInsert = initialPatients.map((p) => ({ ...p }));
			await db.collection("patients").insertMany(patientsToInsert);
		}
		if (await db.collection("invoices").countDocuments() === 0) {
			console.log("Seeding MongoDB invoices collection with initial marine invoices...");
			const invoicesToInsert = invoiceRecords.map((inv) => ({ ...inv }));
			await db.collection("invoices").insertMany(invoicesToInsert);
		}
		if (await db.collection("feedback").countDocuments({ timeTakenAtReception: { $exists: false } }) > 0) {
			console.log("Upgrading legacy feedback documents to Sailor's Medical Clinic format...");
			await db.collection("feedback").deleteMany({ timeTakenAtReception: { $exists: false } });
			if (await db.collection("feedback").countDocuments() === 0) {
				const feedbackToInsert = initialFeedbackRecords.map((f) => ({ ...f }));
				await db.collection("feedback").insertMany(feedbackToInsert);
			}
		} else if (await db.collection("feedback").countDocuments() === 0) {
			console.log("Seeding MongoDB feedback collection with initial compliance records...");
			const feedbackToInsert = initialFeedbackRecords.map((f) => ({ ...f }));
			await db.collection("feedback").insertMany(feedbackToInsert);
		}
		if (await db.collection("activity_logs").countDocuments() === 0) {
			const activitiesToInsert = activityRecords.map((act) => ({
				...act,
				id: `ACT-${crypto.randomUUID().slice(0, 8)}`,
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			}));
			await db.collection("activity_logs").insertMany(activitiesToInsert);
		}
		if (await db.collection("staff").countDocuments({ joiningDate: { $exists: false } }) > 0) {
			console.log("Upgrading legacy staff documents to full StaffMember schema...");
			await db.collection("staff").deleteMany({ joiningDate: { $exists: false } });
		}
		if (await db.collection("staff").countDocuments() === 0) {
			console.log("Seeding MongoDB staff collection with initial staff members...");
			const staffToInsert = initialStaffMembers.map((st) => ({ ...st }));
			await db.collection("staff").insertMany(staffToInsert);
		}
	} catch (err) {
		console.warn("MongoDB initial seed check failed:", err);
	}
}
var listPatientsServer_createServerFn_handler = createServerRpc({
	id: "6aa2acbfa0853307cd1e0ba6947965eaf18b9015c3a7181cc323c574b60b2632",
	name: "listPatientsServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => listPatientsServer.__executeServer(opts));
var listPatientsServer = createServerFn({ method: "GET" }).handler(listPatientsServer_createServerFn_handler, async () => {
	try {
		await ensureCollectionsSeeded();
		const raw = await (await getDatabase()).collection("patients").find({}, { projection: { _id: 0 } }).sort({ srNo: 1 }).toArray();
		if (!raw || raw.length === 0) return initialPatients;
		return JSON.parse(JSON.stringify(raw));
	} catch (error) {
		console.error("Failed to load patients from MongoDB:", error);
		return initialPatients;
	}
});
var savePatientServer_createServerFn_handler = createServerRpc({
	id: "f6a24e07320e555d610dfe11ceffab197e976f9735b7b11e2f530c20b0a35f2c",
	name: "savePatientServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => savePatientServer.__executeServer(opts));
var savePatientServer = createServerFn({ method: "POST" }).validator((input) => input).handler(savePatientServer_createServerFn_handler, async ({ data }) => {
	try {
		const db = await getDatabase();
		const cleanPatient = JSON.parse(JSON.stringify(data));
		await db.collection("patients").updateOne({ id: cleanPatient.id }, { $set: cleanPatient }, { upsert: true });
		try {
			await db.collection("activity_logs").insertOne({
				id: `ACT-${Date.now()}`,
				user: "Clinic Administration",
				action: "Updated seafarer record",
				subject: `${cleanPatient.name} · ${cleanPatient.id} (${cleanPatient.rank || "Marine"})`,
				time: "Just now",
				kind: "Patients",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch {}
		return {
			success: true,
			patient: cleanPatient
		};
	} catch (error) {
		console.error("Failed to save patient in MongoDB:", error);
		return {
			success: false,
			patient: data,
			message: error instanceof Error ? error.message : "Failed to save patient to MongoDB."
		};
	}
});
var deletePatientServer_createServerFn_handler = createServerRpc({
	id: "726bd9938ef67acc61c9e47bb5d2b1938b20a32abb2d44045bed741393c0339d",
	name: "deletePatientServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => deletePatientServer.__executeServer(opts));
var deletePatientServer = createServerFn({ method: "POST" }).validator((input) => input).handler(deletePatientServer_createServerFn_handler, async ({ data }) => {
	try {
		const db = await getDatabase();
		await db.collection("patients").deleteOne({ id: data.id });
		try {
			await db.collection("activity_logs").insertOne({
				id: `ACT-${Date.now()}`,
				user: "Clinic Administration",
				action: "Deleted seafarer record",
				subject: `${data.name || data.id} removed from register`,
				time: "Just now",
				kind: "Patients",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch {}
		return { success: true };
	} catch (error) {
		console.error("Failed to delete patient from MongoDB:", error);
		return {
			success: false,
			message: error instanceof Error ? error.message : "Failed to delete patient."
		};
	}
});
var listInvoicesServer_createServerFn_handler = createServerRpc({
	id: "201d8db7886d5af5f2613864d3dd05edb74b062558249efc873228f3ad9986b6",
	name: "listInvoicesServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => listInvoicesServer.__executeServer(opts));
var listInvoicesServer = createServerFn({ method: "GET" }).handler(listInvoicesServer_createServerFn_handler, async () => {
	try {
		await ensureCollectionsSeeded();
		const raw = await (await getDatabase()).collection("invoices").find({}, { projection: { _id: 0 } }).sort({ date: -1 }).toArray();
		if (!raw || raw.length === 0) return invoiceRecords;
		return JSON.parse(JSON.stringify(raw));
	} catch (error) {
		console.error("Failed to load invoices from MongoDB:", error);
		return invoiceRecords;
	}
});
var saveInvoiceServer_createServerFn_handler = createServerRpc({
	id: "21cd244a8321733f1ac84f1f218e1467b3d830a44b0efdba078e2abde2fe0cbe",
	name: "saveInvoiceServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => saveInvoiceServer.__executeServer(opts));
var saveInvoiceServer = createServerFn({ method: "POST" }).validator((input) => input).handler(saveInvoiceServer_createServerFn_handler, async ({ data }) => {
	try {
		const db = await getDatabase();
		const cleanInvoice = JSON.parse(JSON.stringify(data));
		await db.collection("invoices").updateOne({ id: cleanInvoice.id }, { $set: cleanInvoice }, { upsert: true });
		try {
			await db.collection("activity_logs").insertOne({
				id: `ACT-${Date.now()}`,
				user: "Billing Desk",
				action: "Saved invoice",
				subject: `${cleanInvoice.id} · ${cleanInvoice.amount} for ${cleanInvoice.patient}`,
				time: "Just now",
				kind: "Billing",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch {}
		return {
			success: true,
			invoice: cleanInvoice
		};
	} catch (error) {
		console.error("Failed to save invoice in MongoDB:", error);
		return {
			success: false,
			invoice: data,
			message: error instanceof Error ? error.message : "Failed to save invoice."
		};
	}
});
var deleteInvoiceServer_createServerFn_handler = createServerRpc({
	id: "ea04c8e1931f249a4cff60f17872b3530abb41d745eea1fa2005b994ce434349",
	name: "deleteInvoiceServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => deleteInvoiceServer.__executeServer(opts));
var deleteInvoiceServer = createServerFn({ method: "POST" }).validator((input) => input).handler(deleteInvoiceServer_createServerFn_handler, async ({ data }) => {
	try {
		await (await getDatabase()).collection("invoices").deleteOne({ id: data.id });
		return { success: true };
	} catch (error) {
		console.error("Failed to delete invoice from MongoDB:", error);
		return {
			success: false,
			message: error instanceof Error ? error.message : "Failed to delete invoice."
		};
	}
});
var listFeedbackServer_createServerFn_handler = createServerRpc({
	id: "52e45c48f23ee52c78c335b9e630f2c1f83f85ef64335d437120caeeb09da45e",
	name: "listFeedbackServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => listFeedbackServer.__executeServer(opts));
var listFeedbackServer = createServerFn({ method: "GET" }).handler(listFeedbackServer_createServerFn_handler, async () => {
	try {
		await ensureCollectionsSeeded();
		const raw = await (await getDatabase()).collection("feedback").find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).toArray();
		if (!raw || raw.length === 0) return initialFeedbackRecords;
		const sanitized = raw.map((item) => ({
			id: String(item.id || `SMC-FB-${Date.now()}`),
			date: String(item.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)),
			name: String(item.name || "Candidate"),
			companyName: item.companyName ? String(item.companyName) : "",
			rank: item.rank ? String(item.rank) : "",
			passportOrCdcNo: item.passportOrCdcNo ? String(item.passportOrCdcNo) : "",
			indosNo: item.indosNo ? String(item.indosNo) : "",
			mobileNo: String(item.mobileNo || item.phone || "+91 95614 50104"),
			email: item.email ? String(item.email) : "",
			timeTakenAtReception: item.timeTakenAtReception || "Good",
			skillAndFriendlinessTechnician: item.skillAndFriendlinessTechnician || "Good",
			ecgAudiometryTechnician: item.ecgAudiometryTechnician || "Good",
			guidanceByStaffDuringWait: item.guidanceByStaffDuringWait || "Good",
			hygieneCleanlinessClinics: item.hygieneCleanlinessClinics || "Good",
			friendlinessMedicalStaff: item.friendlinessMedicalStaff || "Good",
			interactionWithDoctor: item.interactionWithDoctor || "Good",
			turnaroundTimeReports: item.turnaroundTimeReports || "Good",
			suggestionsComments: item.suggestionsComments || item.message || "",
			candidateSignature: item.candidateSignature || item.name || "",
			status: item.status || "New",
			createdAt: String(item.createdAt || (/* @__PURE__ */ new Date()).toISOString()),
			resolutionRemarks: item.resolutionRemarks ? String(item.resolutionRemarks) : "",
			resolvedAt: item.resolvedAt ? String(item.resolvedAt) : ""
		}));
		return JSON.parse(JSON.stringify(sanitized));
	} catch (error) {
		console.error("Failed to load feedback from MongoDB:", error);
		return initialFeedbackRecords;
	}
});
var submitFeedbackServer_createServerFn_handler = createServerRpc({
	id: "e0c84b9878fd4df3c34594664b447751d53d9560555f3ad9820b57cfaa6e3f45",
	name: "submitFeedbackServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => submitFeedbackServer.__executeServer(opts));
var submitFeedbackServer = createServerFn({ method: "POST" }).validator((input) => input).handler(submitFeedbackServer_createServerFn_handler, async ({ data }) => {
	try {
		const parsed = createFeedbackSchema.safeParse(data);
		if (!parsed.success) return {
			success: false,
			message: parsed.error.issues[0]?.message || "Invalid submission details."
		};
		const valid = parsed.data;
		const db = await getDatabase();
		const randomNum = Math.floor(1e3 + Math.random() * 9e3);
		const recordId = `SMC-FB-${(/* @__PURE__ */ new Date()).getFullYear()}-${randomNum}`;
		const record = {
			id: recordId,
			date: valid.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			name: valid.name,
			...valid.companyName ? { companyName: valid.companyName } : {},
			...valid.rank ? { rank: valid.rank } : {},
			...valid.passportOrCdcNo ? { passportOrCdcNo: valid.passportOrCdcNo } : {},
			...valid.indosNo ? { indosNo: valid.indosNo } : {},
			mobileNo: valid.mobileNo,
			...valid.email ? { email: valid.email } : {},
			timeTakenAtReception: valid.timeTakenAtReception,
			skillAndFriendlinessTechnician: valid.skillAndFriendlinessTechnician,
			ecgAudiometryTechnician: valid.ecgAudiometryTechnician,
			guidanceByStaffDuringWait: valid.guidanceByStaffDuringWait,
			hygieneCleanlinessClinics: valid.hygieneCleanlinessClinics,
			friendlinessMedicalStaff: valid.friendlinessMedicalStaff,
			interactionWithDoctor: valid.interactionWithDoctor,
			turnaroundTimeReports: valid.turnaroundTimeReports,
			...valid.suggestionsComments ? { suggestionsComments: valid.suggestionsComments } : {},
			candidateSignature: valid.candidateSignature || valid.name,
			status: "New",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		await db.collection("feedback").insertOne({ ...record });
		try {
			await db.collection("activity_logs").insertOne({
				id: `ACT-${Date.now()}`,
				user: "Sailors Portal / Candidate",
				action: `Submitted candidate feedback`,
				subject: `${record.id} · ${record.name} (${record.rank || "Seafarer"})`,
				time: "Just now",
				kind: "Feedback",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch {}
		return {
			success: true,
			record: JSON.parse(JSON.stringify(record)),
			message: `Your feedback form has been registered under Token #${recordId}.`
		};
	} catch (error) {
		console.error("Failed to submit feedback to MongoDB:", error);
		return {
			success: false,
			message: "Could not save your submission to MongoDB Atlas. Please check connection and try again."
		};
	}
});
var updateFeedbackStatusServer_createServerFn_handler = createServerRpc({
	id: "b4e8fa6605ee12e31e9471aa101e35d001b6c868596accdf58d57443e23b1c1d",
	name: "updateFeedbackStatusServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => updateFeedbackStatusServer.__executeServer(opts));
var updateFeedbackStatusServer = createServerFn({ method: "POST" }).validator((input) => input).handler(updateFeedbackStatusServer_createServerFn_handler, async ({ data }) => {
	try {
		const db = await getDatabase();
		const updateDoc = { status: data.status };
		if (data.resolutionRemarks !== void 0) updateDoc.resolutionRemarks = data.resolutionRemarks;
		if (data.status === "Resolved") updateDoc.resolvedAt = (/* @__PURE__ */ new Date()).toISOString();
		await db.collection("feedback").updateOne({ id: data.id }, { $set: updateDoc });
		const updated = await db.collection("feedback").findOne({ id: data.id }, { projection: { _id: 0 } });
		try {
			await db.collection("activity_logs").insertOne({
				id: `ACT-${Date.now()}`,
				user: "Grievance Redressal Officer",
				action: `Marked grievance as ${data.status.toLowerCase()}`,
				subject: `${data.id} status updated`,
				time: "Just now",
				kind: "Grievance",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch {}
		return {
			success: true,
			record: updated ? JSON.parse(JSON.stringify(updated)) : void 0
		};
	} catch (error) {
		console.error("Failed to update feedback status in MongoDB:", error);
		return {
			success: false,
			message: error instanceof Error ? error.message : "Failed to update grievance record."
		};
	}
});
var deleteFeedbackServer_createServerFn_handler = createServerRpc({
	id: "52a8277f3de75b348f6749a151e31052817027db992ef5615be2464fd37ffb18",
	name: "deleteFeedbackServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => deleteFeedbackServer.__executeServer(opts));
var deleteFeedbackServer = createServerFn({ method: "POST" }).validator((input) => input).handler(deleteFeedbackServer_createServerFn_handler, async ({ data }) => {
	try {
		const db = await getDatabase();
		await db.collection("feedback").deleteOne({ id: data.id });
		try {
			await db.collection("activity_logs").insertOne({
				id: `ACT-${Date.now()}`,
				user: "Clinic Administrator",
				action: "Deleted grievance record",
				subject: `${data.id} permanently removed`,
				time: "Just now",
				kind: "Grievance",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch {}
		return { success: true };
	} catch (error) {
		console.error("Failed to delete feedback record from MongoDB:", error);
		return {
			success: false,
			message: error instanceof Error ? error.message : "Failed to delete record."
		};
	}
});
var listActivitiesServer_createServerFn_handler = createServerRpc({
	id: "50a6ce61e934d0b8a72d69231c3e2103e9c0cc08a7f2092fbf23c2b3011c99f9",
	name: "listActivitiesServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => listActivitiesServer.__executeServer(opts));
var listActivitiesServer = createServerFn({ method: "GET" }).handler(listActivitiesServer_createServerFn_handler, async () => {
	try {
		await ensureCollectionsSeeded();
		const raw = await (await getDatabase()).collection("activity_logs").find({}, { projection: { _id: 0 } }).sort({ timestamp: -1 }).limit(20).toArray();
		if (!raw || raw.length === 0) return activityRecords;
		return JSON.parse(JSON.stringify(raw));
	} catch {
		return activityRecords;
	}
});
var listStaffServer_createServerFn_handler = createServerRpc({
	id: "d9e3c80e681c33a5c282c9bee15213c8fc49bade77f608eb4311acf4fe7be400",
	name: "listStaffServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => listStaffServer.__executeServer(opts));
var listStaffServer = createServerFn({ method: "GET" }).handler(listStaffServer_createServerFn_handler, async () => {
	try {
		await ensureCollectionsSeeded();
		const raw = await (await getDatabase()).collection("staff").find({}, { projection: { _id: 0 } }).sort({ joiningDate: 1 }).toArray();
		if (!raw || raw.length === 0) return initialStaffMembers;
		const sanitized = raw.map((item) => ({
			id: String(item.id || `SMC-EMP-${Date.now().toString().slice(-3)}`),
			name: String(item.name || "Employee"),
			initials: String(item.initials || "EM"),
			gender: item.gender || "Male",
			dob: String(item.dob || "1990-01-01"),
			phone: String(item.phone || "+91 95614 50104"),
			email: String(item.email || "staff@sailorsmedical.com"),
			address: String(item.address || "Navi Mumbai, Maharashtra"),
			emergencyContactName: String(item.emergencyContactName || "Emergency Contact"),
			emergencyContactPhone: String(item.emergencyContactPhone || "+91 95614 50104"),
			role: String(item.role || "Staff Member"),
			department: item.department || "Clinic Administration",
			employmentType: item.employmentType || "Full-time",
			status: item.status || "Active / On duty",
			joiningDate: String(item.joiningDate || "2023-01-01"),
			schedule: String(item.schedule || "Mon – Fri, 9:00 AM – 5:00 PM"),
			resignationDate: item.resignationDate ? String(item.resignationDate) : void 0,
			relievingDate: item.relievingDate ? String(item.relievingDate) : void 0,
			resignationReason: item.resignationReason ? String(item.resignationReason) : void 0,
			noticePeriodDays: typeof item.noticePeriodDays === "number" ? item.noticePeriodDays : 30,
			basicSalary: Number(item.basicSalary) || 4e4,
			allowances: Number(item.allowances) || 8e3,
			deductions: Number(item.deductions) || 2e3,
			netSalary: Number(item.netSalary) || 46e3,
			payFrequency: item.payFrequency || "Monthly",
			panNo: item.panNo ? String(item.panNo) : void 0,
			bankName: item.bankName ? String(item.bankName) : void 0,
			bankAccountNo: item.bankAccountNo ? String(item.bankAccountNo) : void 0,
			ifscCode: item.ifscCode ? String(item.ifscCode) : void 0,
			documents: Array.isArray(item.documents) ? item.documents : [],
			notes: item.notes ? String(item.notes) : void 0,
			createdAt: String(item.createdAt || (/* @__PURE__ */ new Date()).toISOString()),
			updatedAt: item.updatedAt ? String(item.updatedAt) : void 0
		}));
		return JSON.parse(JSON.stringify(sanitized));
	} catch (error) {
		console.error("Failed to load staff members from MongoDB:", error);
		return initialStaffMembers;
	}
});
var saveStaffServer_createServerFn_handler = createServerRpc({
	id: "126cb06bb09c8851636148e68d9aba290eb699a7383b834f3c23b834815bdcb4",
	name: "saveStaffServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => saveStaffServer.__executeServer(opts));
var saveStaffServer = createServerFn({ method: "POST" }).validator((input) => input).handler(saveStaffServer_createServerFn_handler, async ({ data }) => {
	try {
		const db = await getDatabase();
		const clean = JSON.parse(JSON.stringify(data));
		clean.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
		await db.collection("staff").updateOne({ id: clean.id }, { $set: clean }, { upsert: true });
		try {
			await db.collection("activity_logs").insertOne({
				id: `ACT-${Date.now()}`,
				user: "Admin / HR",
				action: "Updated staff member record",
				subject: `${clean.name} · ${clean.role} (${clean.id})`,
				time: "Just now",
				kind: "Staff",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch {}
		return {
			success: true,
			staffMember: clean
		};
	} catch (error) {
		console.error("Failed to save staff member to MongoDB:", error);
		return {
			success: false,
			staffMember: data,
			message: error instanceof Error ? error.message : "Failed to save staff member."
		};
	}
});
var deleteStaffServer_createServerFn_handler = createServerRpc({
	id: "21dcaa57b04467f9e6399d3c88ab0d047b55abda2bfe897dc3d7e397c7315235",
	name: "deleteStaffServer",
	filename: "src/lib/clinic.server.ts"
}, (opts) => deleteStaffServer.__executeServer(opts));
var deleteStaffServer = createServerFn({ method: "POST" }).validator((input) => input).handler(deleteStaffServer_createServerFn_handler, async ({ data }) => {
	try {
		const db = await getDatabase();
		await db.collection("staff").deleteOne({ id: data.id });
		try {
			await db.collection("activity_logs").insertOne({
				id: `ACT-${Date.now()}`,
				user: "Admin / HR",
				action: "Removed staff record",
				subject: `${data.name} · ID ${data.id}`,
				time: "Just now",
				kind: "Staff",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch {}
		return { success: true };
	} catch (error) {
		console.error("Failed to delete staff member from MongoDB:", error);
		return {
			success: false,
			message: error instanceof Error ? error.message : "Failed to delete record."
		};
	}
});
//#endregion
export { deleteFeedbackServer_createServerFn_handler, deleteInvoiceServer_createServerFn_handler, deletePatientServer_createServerFn_handler, deleteStaffServer_createServerFn_handler, listActivitiesServer_createServerFn_handler, listFeedbackServer_createServerFn_handler, listInvoicesServer_createServerFn_handler, listPatientsServer_createServerFn_handler, listStaffServer_createServerFn_handler, saveInvoiceServer_createServerFn_handler, savePatientServer_createServerFn_handler, saveStaffServer_createServerFn_handler, submitFeedbackServer_createServerFn_handler, updateFeedbackStatusServer_createServerFn_handler };
