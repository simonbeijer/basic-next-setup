"use client"
export default function CustomButton({text, callBack}){
    return (
        <button onClick={callBack} >
                {text}
        </button>

    );
};