"use client"
export default function CustomButton({text, callBack}){
    return (
        <button onClick={callBack} className="px-4 py-2 rounded bg-foreground text-background">
                {text}
        </button>

    );
};

// Add size, type(rounded)
// Set default