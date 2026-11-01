import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
import { t as getDatabase } from "./mongodb.server-DjK6AyEN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/db-test-ZwCpbhtS.js
var testMongoConnection_createServerFn_handler = createServerRpc({
	id: "2dbbd49a26aa7ad8ec44dcfa3f1334d5c4bd99175bc0fc762cb847a41191e192",
	name: "testMongoConnection",
	filename: "src/routes/db-test.tsx"
}, (opts) => testMongoConnection.__executeServer(opts));
var testMongoConnection = createServerFn({ method: "GET" }).handler(testMongoConnection_createServerFn_handler, async () => {
	const db = await getDatabase();
	await db.command({ ping: 1 });
	return {
		success: true,
		database: db.databaseName,
		message: "MongoDB connected successfully!"
	};
});
//#endregion
export { testMongoConnection_createServerFn_handler };
