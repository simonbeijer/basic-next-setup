"use client";
import { useState } from "react";
import { UserCircleIcon } from '@heroicons/react/24/outline'


export default function Dropdown({ user, logoutUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button className="flex items-center" onClick={toggleDropdown}><UserCircleIcon className="h-8 w-8"></UserCircleIcon></button>
      {isOpen && (
        <div className="absolute right-0 mt-2 p-4 border rounded-md shadow-md">
          <p>{user.name}</p>
          <button className="text-[var(--grey)] font-bold" onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
