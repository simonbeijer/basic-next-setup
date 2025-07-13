"use client";
import React from "react";

export default function Modal({ isOpen, onClose, children, showClose = true }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-lg min-w-[300px] shadow-xl border border-grey">
        {showClose && (
          <button onClick={onClose} className="mb-4 text-right text-sm text-grey hover:text-foreground transition-colors">
            Close
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
