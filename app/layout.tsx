// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillSphere | Modern Learning Platform",
  description: "Learn Web Development, Design, Marketing and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Toast Notifications */}
        <Toaster position="top-center" reverseOrder={false} />
        
        {/* Persistent Navbar */}
        <Navbar />

        {/* Dynamic Content (Routes) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}
