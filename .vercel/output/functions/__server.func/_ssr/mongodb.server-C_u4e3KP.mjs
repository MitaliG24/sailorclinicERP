import { t as require_lib } from "../_libs/mongodb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mongodb.server-C_u4e3KP.js
var import_lib = require_lib();
var dbName = process.env.MONGODB_DB_NAME || "marine_clinic_care";
var globalForMongo = globalThis;
var DEFAULT_MONGO_URI = "mongodb+srv://gadgemitali2001_db_user:Mitali241@cluster0.bzbeme1.mongodb.net/?retryWrites=true&w=majority";
function getMongoClientPromise() {
	const uri = process.env.MONGODB_URI || DEFAULT_MONGO_URI;
	if (!uri) throw new Error("Missing MONGODB_URI. Set it in your local environment.");
	const timeoutMs = 8e3;
	if (!globalForMongo.mongoClientPromise) globalForMongo.mongoClientPromise = new import_lib.MongoClient(uri, {
		serverSelectionTimeoutMS: timeoutMs,
		connectTimeoutMS: timeoutMs
	}).connect().catch((err) => {
		globalForMongo.mongoClientPromise = void 0;
		throw err;
	});
	return globalForMongo.mongoClientPromise;
}
async function getDatabase() {
	return (await getMongoClientPromise()).db(dbName);
}
//#endregion
export { getDatabase as t };
