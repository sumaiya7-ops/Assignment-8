"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.signIn.email({ 
      email, 
      password,
      callbackURL: "/" 
    });

    if (error) {
      toast.error(error.message || "Login failed!");
      setLoading(false);
    } else {
      toast.success("Login Successful!");
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-indigo-50/30 px-4 py-10">
      <div className="card w-full max-w-[450px] shadow-xl bg-white p-6 md:p-10 border border-indigo-100 rounded-2xl">
        
        {/* --- আপনার কিউট Bunny লোগো এখানে (রেজিস্ট্রেশন পেজের মতো) --- */}
        <div className="flex flex-col items-center mb-4">
          <div className="avatar mb-2">
            <div className="w-16 h-16 rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-2 overflow-hidden">
              {/* আপনার ডাইরেক্ট লিঙ্কটি ব্যবহার করা হয়েছে */}
              <img  src="https://i.postimg.cc/wTPTDgKs/bunny.jpg"
                alt="SkillSphere Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-xl font-bold text-cyan-900 ">SkillSphere</h1>
        </div>
        {/* --------------------------------------------------- */}

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500 text-sm mb-8">Login to continue your learning journey</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text font-bold text-gray-700">Email Address</span>
            </label>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="input input-bordered focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full bg-indigo-50/20 h-11" 
              required 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="form-control w-full relative">
            <label className="label py-1">
              <span className="label-text font-bold text-gray-700">Password</span>
            </label>
            <div className="relative w-full">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="input input-bordered focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full bg-indigo-50/20 pr-12 h-11" 
                required 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <button 
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>
          
          <button 
            type="submit" 
            className={`btn btn-primary w-full mt-2 text-white font-bold text-lg normal-case border-none bg-indigo-600 hover:bg-indigo-700 h-11 ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="divider text-gray-400 text-xs my-6 uppercase tracking-widest">OR</div>
        
        <button 
          onClick={handleGoogleLogin} 
          className="btn btn-outline w-full border-gray-300 font-medium normal-case flex items-center justify-center gap-2 hover:bg-gray-50 mb-2 rounded-lg h-11"
        >
          <FcGoogle size={24} /> 
          <span className="text-gray-600">Continue with Google</span>
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-indigo-600 font-bold hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
