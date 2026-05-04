"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // ১. আপনার দেওয়া অনলাইন লিঙ্কটি এখানে ডিফল্ট হিসেবে সেট করা হয়েছে
  const [image, setImage] = useState("https://i.postimg.cc/wTPTDgKs/bunny.jpg");
         
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await authClient.signUp.email({ 
      email, 
      password, 
      name, 
      // ইউজার লিঙ্ক না দিলে ডিফল্ট এই অনলাইন লিঙ্কটি যাবে
      image: image || "https://i.postimg.cc/wTPTDgKs/bunny.jpg", 
      callbackURL: "/login" 
    });

    if (error) {
      toast.error(error.message || "Registration failed!");
      setLoading(false);
    } else {
      toast.success("Registration Successful! Please login.");
      router.push("/login");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-indigo-50/30 px-4 py-8">
      <div className="card w-full max-w-[450px] shadow-xl bg-white p-6 md:p-8 border border-indigo-100 rounded-2xl">
        
        {/* আপনার কিউট Bunny লোগো (অনলাইন লিঙ্ক সহ) */}
        <div className="flex flex-col items-center mb-4">
          <div className="avatar mb-2">
            <div className="w-16 rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-2">
               <img 
             src="https://i.postimg.cc/wTPTDgKs/bunny.jpg" 
             alt="SkillSphere Logo" 
                />
            </div>
          </div>
          <h1 className="text-xl font-bold text-cyan-900">SkillSphere</h1>
        </div>

        <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">Create Account</h2>
        <p className="text-center text-gray-500 text-sm mb-6">Join our community today</p>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control w-full">
            <label className="label py-1"><span className="label-text font-bold text-gray-700 text-xs">Full Name</span></label>
            <input type="text" placeholder="Enter your name" className="input input-bordered h-10 w-full outline-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-indigo-50/20 transition-all" required onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="form-control w-full">
            <label className="label py-1"><span className="label-text font-bold text-gray-700 text-xs">Email Address</span></label>
            <input type="email" placeholder="Your Email" className="input input-bordered h-10 w-full outline-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-indigo-50/20 transition-all" required onChange={(e)=>setEmail(e.target.value)} />
          </div>

          {/* Photo URL Field */}
          <div className="form-control w-full">
            <label className="label py-1"><span className="label-text font-bold text-gray-700 text-xs">Photo URL (Link)</span></label>
            <input type="url" placeholder="https://example.com" className="input input-bordered h-10 w-full outline-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-indigo-50/20 transition-all" onChange={(e)=>setImage(e.target.value)} />
          </div>

          <div className="form-control w-full relative">
            <label className="label py-1"><span className="label-text font-bold text-gray-700 text-xs">Password</span></label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="input input-bordered w-full h-10 outline-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-indigo-50/20 pr-12 transition-all" required onChange={(e)=>setPassword(e.target.value)} />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>
          
          <button className={`btn btn-primary w-full mt-2 text-white font-bold h-11 border-none bg-indigo-600 hover:bg-indigo-700 ${loading ? 'loading' : ''}`} disabled={loading}>
            {loading ? "Registering..." : "Register Now"}
          </button>
        </form>

        <div className="divider text-gray-400 text-[10px] my-4 uppercase tracking-widest">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full border-gray-300 font-medium flex items-center justify-center gap-2 hover:bg-gray-50 rounded-lg h-10 min-h-0">
          <FcGoogle size={20} />
          <span className="text-gray-600 text-sm">Register with Google</span>
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account? <Link href="/login" className="text-indigo-600 font-bold hover:underline">Login Here</Link>
        </p>
      </div>
    </div>
  );
}
