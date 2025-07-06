"use client";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/userContext";
import Dropdown from "./dropdown";

export default function Header() {
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const logoutUser = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ User logged out successfully');
        setUser(null);
        router.push("/login");
      } else {
        console.error('❌ Logout failed:', response.status);
      }
    } catch (error) {
      console.error('❌ Logout error:', error.message);
    }
  };
  return (
    <header className="relative flex justify-between items-center h-16 px-6 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div />
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-xl font-semibold text-foreground">Template App</h1>
      </nav>
      <div>
          <Dropdown logoutUser={logoutUser} user={user} />
      </div>
    </header>
  );
}
