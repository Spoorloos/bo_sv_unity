type Hamburger = Readonly<{
    toggled?: boolean;
    onToggle?: () => void
}>;

export default function Hamburger({ toggled, onToggle }: Hamburger) {
    return (
        <button className="w-10 h-8 relative sm:hidden z-10 *:transition-all *:duration-300 *:w-full *:h-1 *:rounded *:bg-current *:absolute" onClick={onToggle} tabIndex={1}>
            <div className={toggled ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}></div>
            <div className={`top-1/2 -translate-y-1/2 ${toggled ? "opacity-0" : ""}`}></div>
            <div className={toggled ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full"}></div>
        </button>
    )
}