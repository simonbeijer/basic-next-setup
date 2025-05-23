"use client";
import Widget from "@/app/components/widget";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen p-8">
      <div className="flex flex-1 items-center justify-center bg-gray-100">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <Widget text="WIDGET"/>
        </div>
      </div>
    </div>
  );
}
