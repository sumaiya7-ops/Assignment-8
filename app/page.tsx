"use client";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import coursesData from "@/data/courses.json";

export default function Home() {
  const popularCourses = coursesData.slice(0, 3);

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      
      {/* 🎥 1. Hero Section */}
      <div className="w-full leading-none">
        <img 
          src="/hero.png" 
          alt="Hero Banner"
          className="w-full h-[300px] md:h-[500px] lg:h-[580px] object-cover block"
        />
      </div>

      {/* 🔥 2. Popular Courses Section */}
      <section className="bg-cyan-900 w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our Popular Courses
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="btn btn-primary px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              See All Courses
            </Link>
          </div>

        </div>
      </section>

      {/* 🔥 3. Trending Courses Section */}
      <section className="py-16 bg-[#0B0F1A]">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              🔥 Trending Courses
            </h2>
            <p className="text-gray-400 mt-2">
              Highly rated courses by students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData
              .filter(course => course.rating >= 4.7)
              .slice(0, 3)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>

        </div>
      </section>

      {/* 🚀 4. Learning Tips Section */}
      <section className="py-20 bg-teal-950 text-gray-300">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master Your <span className="text-cyan-400">Skills_</span>
            </h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            <div className="relative bg-[#030712] rounded-[2rem] p-3 border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                className="rounded-[1.5rem] w-full h-[400px] object-cover"
                alt="Learning"
              />
            </div>

            <div className="space-y-6">

              <div className="p-8 rounded-2xl bg-[#020617] border border-white/10">
                <div className="flex gap-6 items-start">
                  <span className="text-3xl">📅</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Daily Practice
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Build real-world skills step by step with consistency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#020617] border border-white/10">
                <div className="flex gap-6 items-start">
                  <span className="text-3xl">⏱️</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Time Management
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Focus on deep work sessions to maximize learning.
                    </p>
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

      {/* 🚀 5. Why Section */}
      <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">

        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="text-cyan-400">SkillSphere?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A modern learning platform designed to help you grow skills faster and smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-8 bg-[#0F172A] border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">
                🎯 Skill Based Learning
              </h3>
              <p className="text-gray-400 text-sm">
                Learn real-world skills with structured courses and hands-on projects.
              </p>
            </div>

            <div className="p-8 bg-[#0F172A] border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">
                ⚡ Fast Progress
              </h3>
              <p className="text-gray-400 text-sm">
                Designed to help you learn faster with focused and practical content.
              </p>
            </div>

            <div className="p-8 bg-[#0F172A] border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">
                🚀 Career Growth
              </h3>
              <p className="text-gray-400 text-sm">
                Build job-ready skills and boost your career opportunities.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}


      

