"use client";
import React from "react";

export default function TextAreaField({ name, value, onChange, placeholder, error, label }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-foreground placeholder-grey transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${error ? "border-red-500" : "border-grey"}`}
        rows={4}
      />
    </div>
  );
}
