"use client";
import { useState } from "react";
import WeatherWidget from "../../components/widget/weatherWidget";
import Sidebar from "@/app/components/widget/sidebar";
export default function Dashboard() {
  const [selectedWidget, setSelectedWidget] = useState("Weather");

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex min-h-screen p-8">
        <Sidebar
          selectedWidget={selectedWidget}
          setSelectedWidget={setSelectedWidget}
        />
        <div className="flex flex-1 items-center justify-center bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <WeatherWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
