
import { MongoClient, type Db } from "mongodb";

const dbName = process.env.MONGODB_DB_NAME || "marine_clinic_care";

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

const DEFAULT_MONGO_URI = "mongodb+srv://gadgemitali2001_db_user:Mitali241@cluster0.bzbeme1.mongodb.net/?retryWrites=true&w=majority";

function getMongoClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI || DEFAULT_MONGO_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI. Set it in your local environment.");
  }

  const timeoutMs = process.env.NODE_ENV === "test" ? 300 : 8000;

  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri, {
      serverSelectionTimeoutMS: timeoutMs,
      connectTimeoutMS: timeoutMs,
    }).connect().catch((err) => {
      globalForMongo.mongoClientPromise = undefined;
      throw err;
    });
  }
  return globalForMongo.mongoClientPromise;
}

export async function getDatabase(): Promise<Db> {
  const client = await getMongoClientPromise();
  return client.db(dbName);
}
