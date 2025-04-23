"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/userContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setUser } = useUserContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email, password);

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setLoading(false);
      setError(true);
      return;
    }
    if (!password) {
      setLoading(false);
      setError(true);
      return;
    }
    setTimeout( async () =>{

    
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
        router.push("/dashboard");
      } else {
        setError(true);
        console.log("error login");
      }
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, 5000)
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      {loading}
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
        {error && (
          <p className="text-red-400">
            Login failed. Please check your email and password.
          </p>
        )}
        <button
          disabled={loading}
          type="submit"
          className="bg-[var(--foreground)] px-4 py-2 rounded"
        >
          LOGIN
          {loading && (
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin"></div>
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
