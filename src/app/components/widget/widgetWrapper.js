"use client"

export default function WidgetWrapper({children}) {
    return (
        <div class="bg-white shadow rounded p-4 text-black">{children}</div>
    );
};