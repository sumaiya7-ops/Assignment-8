"use client";
import Link from "next/link";
import { motion } from "framer-motion"; 
import CourseCard from "@/components/CourseCard";
import coursesData from "@/data/courses.json";

export default function Home() {
  const popularCourses = coursesData.slice(0, 3);

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      
      {/* 🎥 ১. Hero Section */}
      <div className="w-full leading-none">
        <img 
          src="/hero.png" 
          alt="Hero Banner"
          className="w-full h-[300px] md:h-[500px] lg:h-[580px] object-cover block"
        />
      </div>

      {/* 🔥 ২. Popular Courses Section */}
      <section className="bg-cyan-900 w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Popular Courses</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/courses" className="btn btn-primary px-10 rounded-full shadow-lg hover:scale-105 transition-transform">
              See All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 🚀 ৩. SkillSphere Learning Tips Section */}
      <section className="py-20 bg-teal-950 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Master Your <span className="text-cyan-400">Skills_</span></h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative bg-[#030712] rounded-[2rem] p-3 border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" className="rounded-[1.5rem] w-full h-[400px] object-cover" alt="Learning" />
            </div>

            <div className="space-y-6">
              {/* Learning Cards */}
              <div className="p-8 rounded-2xl bg-[#020617] border border-white/10">
                <div className="flex gap-6 items-start">
                  <span className="text-3xl">📅</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Daily Practice</h3>
                    <p className="text-gray-400 text-sm">Build real-world skills step by step with consistency.</p>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-[#020617] border border-white/10">
                <div className="flex gap-6 items-start">
                  <span className="text-3xl">⏱️</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Time Management</h3>
                    <p className="text-gray-400 text-sm">Focus on deep work sessions to maximize learning.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button className="px-10 py-4 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* 📱 ৪. Mobile App Section (মোবাইল বামে, লিখা ডানে) */}
           <section className="py-24 bg-[#0F0721] relative overflow-hidden">
   {/* background glow effect */}
     <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
  
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
      
      {/* 📱 Left: Mobile Frame Animation */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex justify-center relative"
      >
        <div className="relative z-10 border-[10px] border-gray-900 rounded-[3.5rem] shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden w-[280px] h-[560px] md:w-[300px] md:h-[600px] bg-black">
           <img 
            src="https://images.unsplash.com/photo-1580910051074-3eb694886505" 
            className="w-full h-full object-cover" 
            alt="Mobile Preview" 
          />
        </div>
      </motion.div>

      {/* 📝 Right: Content & Stats */}
      <div className="w-full lg:w-1/2 text-white text-center lg:text-left z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Mobile App</span>
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h3 className="text-3xl font-bold text-purple-400 mb-1">1.5M+</h3>
            <p className="text-gray-400 text-xs">Worldwide Learners!</p>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h3 className="text-3xl font-bold text-yellow-400 mb-1">4.7★</h3>
            <p className="text-gray-400 text-xs">Positive Reviews</p>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h3 className="text-3xl font-bold text-cyan-400 mb-1">12+</h3>
            <p className="text-gray-400 text-xs">Skill based Courses</p>
          </div>
        </div>

        <p className="text-gray-300 text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          Learn programming the fun way with the SkillSphere app! 
          Download now on the App Store or Google Play.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="flex items-center gap-3 bg-black border border-white/20 px-6 py-3 rounded-2xl hover:bg-gray-900 transition shadow-lg">
            <img src="cdn-icons-png.flaticon.com/512/0/747.png" className="w-6 invert" alt="Apple" />
            <div className="text-left">
              <p className="text-[10px] uppercase text-gray-400">Download on the</p>
              <p className="text-lg font-semibold leading-none">App Store</p>
            </div>
          </button>

          <button className="flex items-center gap-3 bg-black border border-white/20 px-6 py-3 rounded-2xl hover:bg-gray-900 transition shadow-lg">
            <img src="https://cdn-icons-png.flaticon.com/512/300/300218.png" className="w-6" alt="Google Play" />
            <div className="text-left">
              <p className="text-[10px] uppercase text-gray-400">Get it on</p>
              <p className="text-lg font-semibold leading-none">Google Play</p>
            </div>
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

    </main>
  );
}



      

