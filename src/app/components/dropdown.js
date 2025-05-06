"use client";
import { useState, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Spinner from "./spinner";

export default function Dropdown({ user, logoutUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button className="flex items-center" onClick={toggleDropdown}>
        <UserCircleIcon className="h-8 w-8"></UserCircleIcon>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 p-4 border rounded-md shadow-md text-right">
          {user ? (
            <>
              <p>{user.name}</p>
              <button
                className="text-[var(--grey)] font-bold"
                onClick={logoutUser}
              >
                Logout
              </button>
            </>
          ) : (
            <div className="h-[82px] w-[88px]">
              <Spinner />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
