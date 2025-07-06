"use client"
export default function InputField({type, name, value, onChange, placeholder, error, label}) {

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 text-foreground placeholder-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
        }`}
      />
    </div>
  );
}