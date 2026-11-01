import { a as objectType, i as numberType, n as enumType, o as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payments-12q5ofvW.js
var paymentMethods = [
	"Cash",
	"UPI",
	"Bank Transfer",
	"Card",
	"Cheque"
];
var createPaymentSchema = objectType({
	patientId: stringType().trim().min(1).max(80),
	patientName: stringType().trim().min(1).max(160),
	invoiceId: stringType().trim().max(80).optional(),
	method: enumType(paymentMethods),
	amount: numberType().finite().positive().max(1e7),
	reference: stringType().trim().max(120).optional()
});
//#endregion
export { paymentMethods as n, createPaymentSchema as t };
