import { class$ } from "@/lib/functions";

type Hamburger = Readonly<{
    toggled?: boolean;
    onToggle?: () => void
}>;

export default function Hamburger({ toggled, onToggle }: Hamburger) {
    return (
        <button className="w-10 h-8 relative sm:hidden z-10" onClick={onToggle} tabIndex={1}>
            <span className={class$("hamburger-line", toggled ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")}/>
            <span className={class$("hamburger-line top-1/2 -translate-y-1/2", toggled && "opacity-0")}/>
            <span className={class$("hamburger-line", toggled ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full")}/>
        </button>
    )
}