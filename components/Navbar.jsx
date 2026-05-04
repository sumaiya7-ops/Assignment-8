"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; 
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div className="navbar bg-indigo-50 shadow-md px-4 md:px-12 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      
      {/* ১. বাম পাশ: শুধু লোগো এবং মোবাইল মেনু */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            {!session && (
              <>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
              </>
            )}
          </ul>
        </div>
        
        {/* লোগো ও আপনার ছবি */}
        <div className="flex items-center gap-2">
          <div className="avatar hidden sm:block">
            <div className="w-10 rounded-full ring ring-indigo-500 ring-offset-2">
            <img 
             src="https://i.postimg.cc/wTPTDgKs/bunny.jpg" 
             alt="SkillSphere Logo" 
/>


            </div>
          </div>
          <Link href="/" className="text-xl md:text-2xl font-bold text-cyan-900 tracking-tight">SkillSphere</Link>
        </div>
      </div>

      {/* ২. মাঝখানে: Home এবং Courses (Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-bold text-gray-700">
          <li><Link href="/" className="hover:text-indigo-600 transition-all">Home</Link></li>
          <li><Link href="/courses" className="hover:text-indigo-600 transition-all">Courses</Link></li>
        </ul>
      </div>

      {/* ৩. ডান পাশে: Login এবং Register অথবা প্রোফাইল ড্রপডাউন */}
      <div className="navbar-end gap-6">
        {!session ? (
          <div className="hidden lg:flex gap-6 font-bold text-gray-700">
            <Link href="/login" className="hover:text-indigo-600 transition-all">Login</Link>
            <Link href="/register" className="hover:text-indigo-600 transition-all">Register</Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-indigo-500">
                <img src={session.user.image || "/bunny.jpg"} alt="User" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className="px-4 py-2 font-bold text-indigo-600 bg-indigo-50 rounded-t-lg">{session.user.name}</li>
              <div className="divider my-0"></div>
              <li><Link href="/profile">My Profile</Link></li>
              <li><button onClick={handleLogout} className="text-red-500 font-semibold">Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;



