import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// লিঙ্কটি ঠিকমতো পাচ্ছে কি না তা নিশ্চিত করতে
if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env.local");
}

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db),
    emailAndPassword: {
        enabled: true,
    },
});



