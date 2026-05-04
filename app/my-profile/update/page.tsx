"use client";
import { authClient } from "@/lib/auth-client"; // BetterAuth client
import { useState } from "react";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async () => {
    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) toast.error(error.message);
    else toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h2 className="text-2xl mb-4">Update Information</h2>
      <input 
        className="input input-bordered w-full mb-3" 
        placeholder="New Name" 
        onChange={e => setName(e.target.value)} 
      />
      <input 
        className="input input-bordered w-full mb-3" 
        placeholder="New Photo URL" 
        onChange={e => setImage(e.target.value)} 
      />
      <button onClick={handleUpdate} className="btn btn-primary w-full">
        Update Information
      </button>
    </div>
  );
}
