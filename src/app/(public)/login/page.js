"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../context/userContext";
import Spinner from "../../components/spinner";

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
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      {loading}
      <form
        onSubmit={handleSubmit}
        className="text-[var(--background)] flex items-center justify-center flex-col"
      >
        {loading ? (
          <div className="h-[168px]">
            <Spinner />
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[var(--foreground)] pl-[2px]">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="mb-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-[var(--foreground)] pl-[2px]">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="mb-4"
              />
            </div>
            <p
              className={`text-red-400 mb-4 ${
                error ? "visable" : "invisible"
              } `}
            >
              Login failed. Please check your email and password.
            </p>
          </div>
        )}
        <button
          disabled={loading}
          type="submit"
          className="bg-[var(--foreground)] px-6 py-2 rounded flex justify-center items-center"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
