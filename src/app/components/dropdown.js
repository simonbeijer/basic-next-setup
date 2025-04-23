"use client";
import { useState } from "react";

export default function Dropdown({user, logoutUser}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button onClick={toggleDropdown}>MENU</button>
      {isOpen && (
        <div className="absolute right-0 mt-2 p-4 border rounded-md shadow-md">
          <p>{user.name}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}
