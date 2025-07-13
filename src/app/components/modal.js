"use client";
import React from "react";

export default function Modal({ isOpen, onClose, children, showClose = true }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg min-w-[300px] shadow-xl">
        {showClose && (
          <button onClick={onClose} className="mb-4 text-right text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
            Close
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
