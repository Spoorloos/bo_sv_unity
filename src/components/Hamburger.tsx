import { twMerge } from "tailwind-merge";
import { MouseEventHandler } from "react";

type Hamburger = Readonly<{
    toggled?: boolean;
    onToggle?: MouseEventHandler<HTMLButtonElement>,
}>;

export default function Hamburger({ toggled, onToggle }: Hamburger) {
    return (
        <button className="w-10 h-8 relative sm:hidden z-50" onClick={onToggle} aria-label="Menu button" aria-expanded={toggled}>
            <span className={twMerge("hamburger-line", toggled ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")}/>
            <span className={twMerge("hamburger-line top-1/2 -translate-y-1/2", toggled && "opacity-0")}/>
            <span className={twMerge("hamburger-line", toggled ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full")}/>
        </button>
    )
}