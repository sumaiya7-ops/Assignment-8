import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <figure className="px-4 pt-4">
        <img
          src={course.image}
          alt={course.title}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <span className="badge badge-secondary badge-sm">{course.category}</span>
          <span className="text-sm font-bold text-orange-500">⭐ {course.rating}</span>
        </div>
        <h2 className="card-title text-lg font-bold h-14 overflow-hidden">
          {course.title}
        </h2>
        <p className="text-gray-500 text-sm italic">By {course.instructor}</p>
        
        <div className="flex justify-between mt-4 items-center">
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded">{course.duration}</span>
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded">{course.level}</span>
        </div>

        <div className="card-actions mt-6">
          <Link href={`/courses/${course.id}`} className="btn btn-primary btn-block btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
