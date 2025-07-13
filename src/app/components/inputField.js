"use client"
export default function InputField({type, name, value, onChange, placeholder, error, label}) {

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
          error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
        }`}
      />
    </div>
  );
}