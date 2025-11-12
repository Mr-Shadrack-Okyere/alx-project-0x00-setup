import { ButtonProps } from "@/interfaces";

export default function Button({title, size, shape, styles}: ButtonProps){
    return(
        <button className={`px-4 py-2 text-white
            ${styles}
            ${size==="small"
                ? "text-sm"
                : size==="Large"
                ? "text-lg"
                : "text-base"
            }
            ${shape==="rounded-sm"
                ? "rounded-sm"
                : shape==="rounded-md"
                ? "rounded-md"
                : shape==="rounded-lg"
                ? "rounded-lg"
                : "rounded-full"
            }`}
        >
            {title}

        </button>
    );
}