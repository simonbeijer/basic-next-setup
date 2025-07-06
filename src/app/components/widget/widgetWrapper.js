"use client"

export default function WidgetWrapper({children}) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-foreground border border-gray-200 dark:border-gray-700">{children}</div>
    );
};