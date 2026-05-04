"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { User, Mail, ShieldCheck, Edit } from "lucide-react";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  if (!session) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Please login to view your profile.</h2>
        <Link href="/login" className="btn btn-primary mt-4">Go to Login</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-base-100 shadow-2xl rounded-3xl border border-gray-100 overflow-hidden">      
        <div className="h-32 bg-gradient-to-r from-primary to-secondary"></div>
        
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="avatar">
              <div className="w-32 h-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-4 overflow-hidden bg-gray-200">
                <img 
                  src={session.user.image || "https://ibb.co"} 
                  alt="Profile" 
                />
              </div>
            </div>
            <Link href="/my-profile/update" className="btn btn-outline btn-sm gap-2">
              <Edit size={16} /> Update Info
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{session.user.name}</h1>
              <p className="text-primary font-medium">Student at SkillSphere</p>
            </div>

            <div className="divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Full Name</p>
                  <p className="font-semibold">{session.user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email Address</p>
                  <p className="font-semibold">{session.user.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl flex items-center gap-3 border border-blue-100">
              <ShieldCheck className="text-blue-600" />
              <p className="text-sm text-blue-800">Your account is secured with SkillSphere Authentication.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
