"use client"
export default function CustomButton({text, callBack}){
    return (
        <button onClick={callBack} className="px-4 py-2 rounded bg-[var(--foreground)] text-[var(--background)]">
                {text}
        </button>

    );
};