import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Cc1lEhT4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clinic.server-gt5nfFoT.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var clinic_server_exports = /* @__PURE__ */ __exportAll({
	deleteFeedbackServer: () => deleteFeedbackServer,
	deleteInvoiceServer: () => deleteInvoiceServer,
	deletePatientServer: () => deletePatientServer,
	deleteStaffServer: () => deleteStaffServer,
	listFeedbackServer: () => listFeedbackServer,
	listInvoicesServer: () => listInvoicesServer,
	listPatientsServer: () => listPatientsServer,
	listStaffServer: () => listStaffServer,
	saveInvoiceServer: () => saveInvoiceServer,
	savePatientServer: () => savePatientServer,
	saveStaffServer: () => saveStaffServer,
	submitFeedbackServer: () => submitFeedbackServer,
	updateFeedbackStatusServer: () => updateFeedbackStatusServer
});
var listPatientsServer = createServerFn({ method: "GET" }).handler(createSsrRpc("6aa2acbfa0853307cd1e0ba6947965eaf18b9015c3a7181cc323c574b60b2632"));
var savePatientServer = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("f6a24e07320e555d610dfe11ceffab197e976f9735b7b11e2f530c20b0a35f2c"));
var deletePatientServer = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("726bd9938ef67acc61c9e47bb5d2b1938b20a32abb2d44045bed741393c0339d"));
var listInvoicesServer = createServerFn({ method: "GET" }).handler(createSsrRpc("201d8db7886d5af5f2613864d3dd05edb74b062558249efc873228f3ad9986b6"));
var saveInvoiceServer = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("21cd244a8321733f1ac84f1f218e1467b3d830a44b0efdba078e2abde2fe0cbe"));
var deleteInvoiceServer = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("ea04c8e1931f249a4cff60f17872b3530abb41d745eea1fa2005b994ce434349"));
var listFeedbackServer = createServerFn({ method: "GET" }).handler(createSsrRpc("52e45c48f23ee52c78c335b9e630f2c1f83f85ef64335d437120caeeb09da45e"));
var submitFeedbackServer = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("e0c84b9878fd4df3c34594664b447751d53d9560555f3ad9820b57cfaa6e3f45"));
var updateFeedbackStatusServer = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("b4e8fa6605ee12e31e9471aa101e35d001b6c868596accdf58d57443e23b1c1d"));
var deleteFeedbackServer = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("52a8277f3de75b348f6749a151e31052817027db992ef5615be2464fd37ffb18"));
createServerFn({ method: "GET" }).handler(createSsrRpc("50a6ce61e934d0b8a72d69231c3e2103e9c0cc08a7f2092fbf23c2b3011c99f9"));
var listStaffServer = createServerFn({ method: "GET" }).handler(createSsrRpc("d9e3c80e681c33a5c282c9bee15213c8fc49bade77f608eb4311acf4fe7be400"));
var saveStaffServer = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("126cb06bb09c8851636148e68d9aba290eb699a7383b834f3c23b834815bdcb4"));
var deleteStaffServer = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("21dcaa57b04467f9e6399d3c88ab0d047b55abda2bfe897dc3d7e397c7315235"));
//#endregion
export { deleteStaffServer as a, listPatientsServer as c, savePatientServer as d, saveStaffServer as f, createSsrRpc as h, deletePatientServer as i, listStaffServer as l, updateFeedbackStatusServer as m, deleteFeedbackServer as n, listFeedbackServer as o, submitFeedbackServer as p, deleteInvoiceServer as r, listInvoicesServer as s, clinic_server_exports as t, saveInvoiceServer as u };
