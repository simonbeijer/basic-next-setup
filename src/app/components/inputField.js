"use client"
export default function InputField({type, name, value, onChange, placeholder, error, label}) {

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-foreground pl-[2px]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mb-4 bg-foreground ${error && "border-red-500"}`}
      />
    </div>
  );
}