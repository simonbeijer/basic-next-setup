"use client";
export default function Sidebar({ selectedWidget, setSelectedWidget }) {
  const widgetItems = ["Weather", "Stonks", "Cool shit"];

  const setWidgetItem = (index) => {
    let newItem = widgetItems[index];
    setSelectedWidget(newItem);
    console.log(selectedWidget);
  };

  return (
    <aside className="w-64 bg-white shadow p-4 text-[var(--background)]">
      <ul>
        {widgetItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => setWidgetItem(index)}
              className={item === selectedWidget ? "font-bold" : ""}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
