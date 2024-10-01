"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tabs = {
    "Home": "/",
    "Evenementen": "/events",
    "Aanmelden": "/signup",
    "Inloggen": "/login",
} satisfies Record<string, string>;

const kinetika = localFont({
    src: "../../public/fonts/kinetika-semi-bold.ttf"
});

export default function Header() {
    const pathName = usePathname();
    const [navEnabled, setNavEnabled] = useState(false);
    const [animate, setAnimate] = useState(false);

    function toggleNavBar() {
        setNavEnabled(!navEnabled);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
        document.body.classList.toggle("overflow-hidden", navEnabled);
    }

    return (
        <header className="mb-4 pb-2 flex items-center justify-between border-b-2 border-border">
            <Link href="/">
                <Logo className="h-16 w-auto text-[#313131] dark:text-gray-300" textColor="currentColor"/>
            </Link>
            <nav className={`origin-top fixed sm:static inset-0 bg-background flex flex-col sm:flex-row items-start gap-4 p-[10%] pt-24 sm:p-0 text-3xl sm:text-base sm:transform-none ${kinetika.className} ${animate ? "transition-transform duration-300" : ""} ${navEnabled ? "scale-y-100" : "scale-y-0"}`}>
                {Object.entries(tabs).map(([name, url], index) =>
                    <Link
                        className={`transition-opacity border-b-2 p-2 uppercase ${url === pathName ? "border-accent" : "border-transparent opacity-50 hover:opacity-100"}`}
                        href={url}
                        key={index}
                        onClick={toggleNavBar}
                    >{name}</Link>
                )}
            </nav>
            <button className="w-10 h-8 relative sm:hidden z-10" onClick={toggleNavBar}>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute ${navEnabled ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}></div>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute top-1/2 -translate-y-1/2 ${navEnabled ? "opacity-0" : ""}`}></div>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute ${navEnabled ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full"}`}></div>
            </button>
        </header>
    );
}