import { auth } from "@/lib/auth"; // আপনার lib ফোল্ডারের auth.ts ফাইল থেকে ইমপোর্ট হচ্ছে
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
