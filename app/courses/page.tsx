"use client";
import { useState } from "react";
import coursesData from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function AllCourses() {
  const [searchTerm, setSearchTerm] = useState("");

  // সার্চ লজিক: টাইটেল অনুযায়ী ফিল্টার হবে
  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">All Courses</h1>

      {/* 🔍 Search Input (Challenge 1) */}
      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="Search courses by title..."
          className="input input-bordered w-full shadow-md"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* কোর্সের গ্রিড */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No courses found matching your search.</p>
        </div>
      )}
    </div>
  );
}
