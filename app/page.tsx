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
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Popular Courses
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
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

        {/* 💡 Quick Learning Tips Section */}
<section className="py-20 relative overflow-hidden">
  {/* ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট এবং ডেকোরেশন */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 -z-10"></div>
  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
        Quick Learning Tips <span className="animate-pulse">💡</span>
      </h2>
      <p className="text-gray-500 max-w-lg mx-auto">
        Boost your productivity and master new skills faster with these expert-proven techniques.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* কার্ড ১ */}
      <div className="group p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-14 h-14 bg-gradient-to-tr from-primary to-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 text-white">
          <svg xmlns="http://w3.org" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">Daily Practice</h3>
        <p className="text-gray-600 leading-relaxed">
          Consistency is the key to mastering any new skill. Dedicate at least 30 minutes every day to stay ahead of the curve.
        </p>
      </div>

      {/* কার্ড ২ */}
      <div className="group p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-14 h-14 bg-gradient-to-tr from-secondary to-purple-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-secondary/20 text-white">
          <svg xmlns="http://w3.org" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-secondary transition-colors">Time Management</h3>
        <p className="text-gray-600 leading-relaxed">
          Set specific, distraction-free hours for learning. Use techniques like Pomodoro to stay focused and avoid burnout.
        </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
