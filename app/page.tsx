import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import coursesData from "@/data/courses.json";

export default function Home() {
  // ১. ডাটা থেকে শুধু প্রথম ৩টি কোর্স নেওয়া হয়েছে (Popular Courses)
  const popularCourses = coursesData.slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* 🎥 Hero Section */}
      <div className="w-full">
        <img 
          src="/hero.png" 
          alt="Hero Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* 🔥 Popular Courses Section */}
      <section className="bg-cyan-900 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Popular Courses
          </h2>
          <div className="w-24 h-1 bg-cyan-950 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* কোর্সের গ্রিড (৩টি কার্ড দেখাবে) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* ➕ "All Courses" বাটন */}
        <div className="text-center mt-12">
          <Link 
            href="/courses" 
            className="btn btn-primary btn-lg px-10 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            See All Courses
          </Link>
        </div>
    </section>
{/* 🚀 SkillSphere Premium: Learning Tips Section */}
{/* 🚀 SkillSphere Deep Dark: Learning Tips Section */}
<section className="py-24 bg-teal-950 text-gray-300 overflow-hidden relative">

  <div className="container mx-auto px-4">
    
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        Master Your 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400">
          {" "}Skills_
        </span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      
      {/* Left Image */}
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-1 bg-blue-700/10 rounded-[2rem] blur-2xl group-hover:bg-cyan-500/20 transition duration-700"></div>
        
        <div className="relative bg-[#030712] rounded-[2rem] p-3 border border-white/10 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Learning"
            className="rounded-[1.5rem] w-full h-[380px] object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500 opacity-90"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="space-y-6">
        
        {/* Card 1 */}
        <div className="group p-8 rounded-2xl bg-[#020617] border border-white/10 hover:border-blue-500/40 hover:bg-[#030a1a] transition-all duration-500">
          <div className="flex gap-6 items-start">
            <div className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">📅</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Daily Practice
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Consistency is the key to mastery. Practice daily and build real-world skills step by step.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group p-8 rounded-2xl bg-[#020617] border border-white/10 hover:border-cyan-500/40 hover:bg-[#030a1a] transition-all duration-500">
          <div className="flex gap-6 items-start">
            <div className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">⏱️</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Time Management
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Focus on deep work sessions. One hour of focus beats a whole day of distractions.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="pt-6">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </div>

      </div>
    </div>
  </div>
</section>


      

    </main>
  );
}
