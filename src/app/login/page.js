"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { useUserContext } from "../context/userContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        console.log("LOGIN REPONSE", response);
        router.push("/dashboard")
      } else {
        console.log("error login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <form
        onSubmit={handleSubmit}
        className="text-[var(--background)] flex items-center justify-center flex-col gap-8"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button
          type="submit"
          className="bg-[var(--foreground)] px-4 py-2 rounded"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
