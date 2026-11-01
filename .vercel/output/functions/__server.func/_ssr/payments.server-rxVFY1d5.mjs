import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
import { t as getDatabase } from "./mongodb.server-DjK6AyEN.mjs";
import { t as createPaymentSchema } from "./payments-12q5ofvW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payments.server-rxVFY1d5.js
var listPayments_createServerFn_handler = createServerRpc({
	id: "46f0281588053a3ca9274ce9f96e6b22e966f129cc09a3f7df21f882fae21399",
	name: "listPayments",
	filename: "src/lib/payments.server.ts"
}, (opts) => listPayments.__executeServer(opts));
var listPayments = createServerFn({ method: "GET" }).handler(listPayments_createServerFn_handler, async () => {
	try {
		return (await (await getDatabase()).collection("payments").find({}, { projection: { _id: 0 } }).sort({ date: -1 }).limit(500).toArray()).map((p) => ({
			id: String(p.id || ""),
			patientId: String(p.patientId || ""),
			patientName: String(p.patientName || ""),
			...p.invoiceId ? { invoiceId: String(p.invoiceId) } : {},
			method: p.method,
			amount: Number(p.amount || 0),
			...p.reference ? { reference: String(p.reference) } : {},
			date: String(p.date || (/* @__PURE__ */ new Date()).toISOString()),
			status: p.status || "Completed"
		}));
	} catch (error) {
		console.error("Failed to fetch payments from MongoDB:", error);
		return [];
	}
});
var recordPayment_createServerFn_handler = createServerRpc({
	id: "7503df8020f8e06acfa6f12fe842bbda9596a2a258ad6847ba13b7271885b68b",
	name: "recordPayment",
	filename: "src/lib/payments.server.ts"
}, (opts) => recordPayment.__executeServer(opts));
var recordPayment = createServerFn({ method: "POST" }).validator((input) => input).handler(recordPayment_createServerFn_handler, async ({ data }) => {
	try {
		const parsed = createPaymentSchema.safeParse(data);
		if (!parsed.success) return {
			success: false,
			message: "Payment details are invalid. Check the selected patient, payment method, and amount."
		};
		const validatedData = parsed.data;
		const db = await getDatabase();
		const payment = {
			...validatedData,
			id: `TXN-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
			date: (/* @__PURE__ */ new Date()).toISOString(),
			status: "Completed"
		};
		await db.collection("payments").insertOne({ ...payment });
		if (payment.invoiceId) try {
			await db.collection("invoices").updateOne({ id: payment.invoiceId }, { $set: {
				status: "Paid",
				paymentMethod: payment.method,
				transactionRef: payment.id,
				paidDate: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
					month: "short",
					day: "numeric",
					year: "numeric"
				})
			} });
		} catch (invoiceErr) {
			console.warn("Could not auto-update invoice status in MongoDB:", invoiceErr);
		}
		try {
			await db.collection("activity_logs").insertOne({
				user: "Clinic Reception",
				action: "Recorded payment",
				subject: `${payment.id} · ₹${payment.amount.toLocaleString("en-IN")} (${payment.patientName})`,
				time: "Just now",
				kind: "Payments",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch (actErr) {
			console.warn("Could not log payment activity in MongoDB:", actErr);
		}
		return {
			success: true,
			payment: {
				id: payment.id,
				patientId: payment.patientId,
				patientName: payment.patientName,
				...payment.invoiceId ? { invoiceId: payment.invoiceId } : {},
				method: payment.method,
				amount: payment.amount,
				...payment.reference ? { reference: payment.reference } : {},
				date: payment.date,
				status: payment.status
			}
		};
	} catch (error) {
		console.error("MongoDB failed to record clinic payment.", error);
		return {
			success: false,
			message: getPaymentSaveErrorMessage(error)
		};
	}
});
function getPaymentSaveErrorMessage(error) {
	const message = error instanceof Error ? error.message : "";
	const code = error?.code;
	if (error && typeof error === "object" && "issues" in error) return "Payment details are invalid. Check the selected patient, payment method, and amount.";
	if (/Missing MONGODB_URI/.test(message)) return "Payment storage is not configured. Set MONGODB_URI on the server and restart the app.";
	if (code === 13 || code === 18 || /authentication failed|not authorized/i.test(message)) return "MongoDB rejected the connection. Check the Atlas database username, password, and permissions.";
	if (/ENOTFOUND|ECONNREFUSED|ETIMEDOUT|Server selection timed out|network|TLS/i.test(message)) return "MongoDB could not be reached. Check the Atlas network access list and server connection.";
	return "MongoDB could not save this payment. Check the server log for the database error.";
}
//#endregion
export { listPayments_createServerFn_handler, recordPayment_createServerFn_handler };
