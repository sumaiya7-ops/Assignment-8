import courses from "@/data/courses.json";
import { notFound } from "next/navigation";

export default function CourseDetails({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === parseInt(params.id));

  if (!course) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg" 
      />
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <span className="badge badge-primary p-4">{course.level}</span>
        <span className="badge badge-outline p-4">⭐ {course.rating}</span>
        <span className="badge badge-ghost p-4">{course.duration}</span>
      </div>
      <p className="text-lg text-gray-700 mb-8">{course.description}</p>
      
      <div className="bg-base-200 p-6 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Course Curriculum</h3>
        <ul className="steps steps-vertical">
          <li className="step step-primary">Introduction</li>
          <li className="step step-primary">Fundamentals</li>
          <li className="step">Advanced Topics</li>
        </ul>
      </div>
    </div>
  );
}


