"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../context/userContext";
import Spinner from "../../components/spinner";
import InputField from "@/app/components/inputField";
import CustomButton from "@/app/components/button";

export default function Login() {
  const [test, setTest] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setUser } = useUserContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
        console.log('✅ Login successful for user:', data.user.email);
        setUser(data.user);
        router.push("/dashboard");
      } else {
        console.error('❌ Login failed:', response.status);
        setError(true);
      }
    } catch (error) {
      console.error('❌ Login error:', error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">Sign In</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {loading ? (
            <div className="flex justify-center py-8">
              <Spinner />
            </div>
          ) : (
            <>
              <InputField
                name="email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="Enter your email"
                error={error}
                label="Email"
              />
              <InputField
                name="password"
                type="password"
                value={password}
                onChange={setPassword}
                placeholder="Enter your password"
                error={error}
                label="Password"
              />
              {error && (
                <p className="text-red-500 text-sm text-center">
                  Login failed. Please check your email and password.
                </p>
              )}
              <CustomButton 
                callBack={handleSubmit} 
                text="Sign In" 
                disabled={loading} 
                type="submit"
              />
            </>
          )}
        </form>
      </div>
    </div>
  );
}
