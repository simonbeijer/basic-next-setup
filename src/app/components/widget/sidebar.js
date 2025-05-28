"use client";

export default function Sidebar() {
  const widgetItems = ["Weater", "Stonks", "Cool shit"];
  return(
  <aside className="w-64 bg-white shadow p-4 text-[var(--background)]">
  <ul>
    {widgetItems.map((item, index) => (
        <li key={index}>
            {item}
        </li>
    ))}
  </ul>
  </aside>
  );
}
