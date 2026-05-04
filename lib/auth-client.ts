import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL // আপনার .env ফাইলে এটি থাকতে হবে (যেমন: http://localhost:3000)
});
