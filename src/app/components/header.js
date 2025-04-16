"use client";
export default function Header() {
  const logoutUser = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });

      if (response.ok) {
        window.location.href = "/login";
      } else {
        console.log("response logout error", response);
      }
    } catch (error) {
      console.log("logout catch error", error);
    }
  };
  return (
    <header className="relative flex justify-between items-center h-10 px-4">
      <div />
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        My navbar
      </nav>
      <button onClick={logoutUser}>LOGOUT</button>
    </header>
  );
}
