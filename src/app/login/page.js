"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log(email, password);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        window.location.href = "/dashboard";
      } else {
        console.log("error login")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <form
        action={handleSubmit}
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
