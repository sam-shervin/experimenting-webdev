"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    genre: "",
  });

  // WRITE ME A FORM DATA THAT TAkes in name, email and genre and posts it to the server api/users

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newMember),
    });

    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleAddMember} className="text-center text-black">
        <section className="text-white">name</section>
        <input
          type="text"
          name="name"
          value={newMember.name || ""}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <section className="text-white">email</section>
        <input
          type="email"
          name="email"
          value={newMember.email || ""}
          onChange={(e) =>
            setNewMember({ ...newMember, email: e.target.value })
          }
        />
        <section className="text-white">genre</section>
        <input
          type="text"
          name="genre"
          value={newMember.genre || ""}
          onChange={(e) =>
            setNewMember({ ...newMember, genre: e.target.value })
          }
        />
        <section></section>
        <button
          type="submit"
          className="border rounded-3xl p-4 text-white mt-4 border-white/[0.2]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// GET POST PATCH DELETE PUT
