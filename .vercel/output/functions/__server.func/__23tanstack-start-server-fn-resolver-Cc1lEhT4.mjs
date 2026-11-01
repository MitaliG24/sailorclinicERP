//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Cc1lEhT4.js
var manifest = {
	"126cb06bb09c8851636148e68d9aba290eb699a7383b834f3c23b834815bdcb4": {
		functionName: "saveStaffServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"201d8db7886d5af5f2613864d3dd05edb74b062558249efc873228f3ad9986b6": {
		functionName: "listInvoicesServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"21cd244a8321733f1ac84f1f218e1467b3d830a44b0efdba078e2abde2fe0cbe": {
		functionName: "saveInvoiceServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"21dcaa57b04467f9e6399d3c88ab0d047b55abda2bfe897dc3d7e397c7315235": {
		functionName: "deleteStaffServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"2dbbd49a26aa7ad8ec44dcfa3f1334d5c4bd99175bc0fc762cb847a41191e192": {
		functionName: "testMongoConnection_createServerFn_handler",
		importer: () => import("./_ssr/db-test-ZwCpbhtS.mjs")
	},
	"46f0281588053a3ca9274ce9f96e6b22e966f129cc09a3f7df21f882fae21399": {
		functionName: "listPayments_createServerFn_handler",
		importer: () => import("./_ssr/payments.server-rxVFY1d5.mjs")
	},
	"50a6ce61e934d0b8a72d69231c3e2103e9c0cc08a7f2092fbf23c2b3011c99f9": {
		functionName: "listActivitiesServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"52a8277f3de75b348f6749a151e31052817027db992ef5615be2464fd37ffb18": {
		functionName: "deleteFeedbackServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"52e45c48f23ee52c78c335b9e630f2c1f83f85ef64335d437120caeeb09da45e": {
		functionName: "listFeedbackServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"6aa2acbfa0853307cd1e0ba6947965eaf18b9015c3a7181cc323c574b60b2632": {
		functionName: "listPatientsServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"726bd9938ef67acc61c9e47bb5d2b1938b20a32abb2d44045bed741393c0339d": {
		functionName: "deletePatientServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"7503df8020f8e06acfa6f12fe842bbda9596a2a258ad6847ba13b7271885b68b": {
		functionName: "recordPayment_createServerFn_handler",
		importer: () => import("./_ssr/payments.server-rxVFY1d5.mjs")
	},
	"b4e8fa6605ee12e31e9471aa101e35d001b6c868596accdf58d57443e23b1c1d": {
		functionName: "updateFeedbackStatusServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"d9e3c80e681c33a5c282c9bee15213c8fc49bade77f608eb4311acf4fe7be400": {
		functionName: "listStaffServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"e0c84b9878fd4df3c34594664b447751d53d9560555f3ad9820b57cfaa6e3f45": {
		functionName: "submitFeedbackServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"ea04c8e1931f249a4cff60f17872b3530abb41d745eea1fa2005b994ce434349": {
		functionName: "deleteInvoiceServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	},
	"f6a24e07320e555d610dfe11ceffab197e976f9735b7b11e2f530c20b0a35f2c": {
		functionName: "savePatientServer_createServerFn_handler",
		importer: () => import("./_ssr/clinic.server-C8mfcV_E.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
