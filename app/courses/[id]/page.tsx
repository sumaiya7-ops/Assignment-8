"use client";
import { use, useEffect } from "react";
import coursesData from "@/data/courses.json";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function CourseDetails({ params }: { params: { id: string } }){
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const { id } = use(params);

  const course = coursesData.find((c) => c.id === parseInt(id));

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) return <div className="flex justify-center mt-20"><span className="loading loading-spinner loading-lg"></span></div>;
  if (!session) return null;
  if (!course) return <div className="text-center mt-20 text-2xl font-bold">Course not found!</div>;

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-100">
        <figure className="lg:w-1/2">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body lg:w-1/2">
          <div className="badge badge-secondary mb-2">{course.category}</div>
          <h2 className="card-title text-4xl font-extrabold mb-4">{course.title}</h2>
          <p className="text-lg text-gray-600 mb-6">{course.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-600 font-bold">INSTRUCTOR</p>
              <p className="font-semibold">{course.instructor}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-600 font-bold">PRICE</p>
              <p className="font-semibold text-lg">{course.price}</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 underline">What you will learn:</h3>
          <ul className="list-disc list-inside space-y-2 mb-8">
            {course.curriculum.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ul>

          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-block text-lg">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

