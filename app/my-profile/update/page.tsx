"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function UpdateInfo() {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await authClient.updateUser({
      name: name,
      image: image,
    }, {
      onSuccess: () => {
        alert("Information Updated!");
        router.push("/my-profile");
      }
    });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-2xl rounded-2xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Update Info</h2>
      <form onSubmit={handleUpdate} className="space-y-6">
        <div className="form-control">
          <label className="label font-bold">Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered focus:border-primary" required />
        </div>
        <div className="form-control">
          <label className="label font-bold">Image URL</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="input input-bordered focus:border-primary" />
        </div>
        <button type="submit" className="btn btn-primary w-full text-lg">Update Now</button>
      </form>
    </div>
  );
}
