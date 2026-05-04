"use client";
import { useState } from 'react';
import courses from '@/data/courses.json';
import CourseCard from '@/components/CourseCard';

export default function AllCourses() {
  const [search, setSearch] = useState("");

  const filtered = courses.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      
      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search courses by title..." 
        className="input input-bordered w-full max-w-md mb-8"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
