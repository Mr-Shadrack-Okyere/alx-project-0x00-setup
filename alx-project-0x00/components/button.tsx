import {ButtonProps} from "@/interfaces";
// import { text } from "stream/consumers";

export default function Button({title, size, shape}: ButtonProps) {
    return(
        <button 
        className={
             `px-4 py-4 bg-blue-500 text-white 
             ${size==="small" 
                ? "text-sm"
                :size === "Large" 
                ? "text-lg"
                : "text-base"
            } 
            ${shape==="rounded-sm" 
                ? "rounded-sm" 
                :shape==="rounded-md" 
                ? "rounde-md"
                :shape==="rounded-lg"
                ? "rounded-lg"
                : "rounded-full"
            }`
        }>
            {title}
        </button>
        );
};