import { t as require_lib } from "../_libs/mongodb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mongodb.server-DjK6AyEN.js
var import_lib = require_lib();
var dbName = process.env.MONGODB_DB_NAME || "marine_clinic_care";
var globalForMongo = globalThis;
function getMongoClientPromise() {
	const uri = process.env.MONGODB_URI;
	if (!uri) throw new Error("Missing MONGODB_URI. Set it in your local environment.");
	globalForMongo.mongoClientPromise ??= new import_lib.MongoClient(uri).connect();
	return globalForMongo.mongoClientPromise;
}
async function getDatabase() {
	return (await getMongoClientPromise()).db(dbName);
}
//#endregion
export { getDatabase as t };
