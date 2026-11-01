import { o as __toESM } from "../_runtime.mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { h as createSsrRpc } from "./clinic.server-CScDC1af.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/db-test-B7gLTiGI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var testMongoConnection = createServerFn({ method: "GET" }).handler(createSsrRpc("2dbbd49a26aa7ad8ec44dcfa3f1334d5c4bd99175bc0fc762cb847a41191e192"));
function DbTestPage() {
	const [message, setMessage] = (0, import_react.useState)("Click the button to test MongoDB.");
	async function checkConnection() {
		setMessage("Connecting...");
		try {
			const result = await testMongoConnection();
			setMessage(`${result.message} Database: ${result.database}`);
		} catch (error) {
			console.error(error);
			setMessage("Connection failed. Check the VS Code terminal.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "MongoDB Connection Test"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: checkConnection,
				className: "mt-4 rounded bg-blue-600 px-4 py-2 text-white",
				children: "Test Connection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4",
				children: message
			})
		]
	});
}
//#endregion
export { DbTestPage as component };
