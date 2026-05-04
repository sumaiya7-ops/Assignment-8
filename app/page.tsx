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

      {/* 📌 Learning Tips Section (Extra Section 1) */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Quick Learning Tips 💡</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-primary mb-2">Practice Daily</h3>
              <p className="text-sm text-gray-600">Consistency is the key to mastering any new skill.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-primary mb-2">Time Management</h3>
              <p className="text-sm text-gray-600">Set specific hours for learning to stay organized.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
