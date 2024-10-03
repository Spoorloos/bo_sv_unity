"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useState, Dispatch, SetStateAction } from "react";

const tabs = {
    "Home": "/",
    "Evenementen": "/events",
    "Aanmelden": "/signup",
    "Inloggen": "/login",
} satisfies Record<string, string>;

const kinetika = localFont({
    src: "../../public/fonts/kinetika-semi-bold.ttf"
});

type Header = Readonly<{
    setFreeze: Dispatch<SetStateAction<boolean>>;
}>;

export default function Header({ setFreeze }: Header) {
    const pathName = usePathname();
    const [navEnabled, setNavEnabled] = useState(false);
    const [animate, setAnimate] = useState(false);

    const toggleNavBar = (state = !navEnabled) => {
        setNavEnabled(state);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
        setFreeze(state);
    }

    return (
        <header className="mx-8 mt-4 pb-2 flex items-center justify-between border-b-2 border-border">
            <Link href="/">
                <Logo className="h-16 w-auto text-[#313131] dark:text-[#D1D5DB]"/>
            </Link>
            <nav className={`origin-top fixed sm:static inset-0 bg-background flex flex-col sm:flex-row gap-4 p-[10%] pt-24 sm:p-0 text-3xl sm:text-base ${kinetika.className} ${animate ? "transition-all duration-300" : ""} ${navEnabled ? "scale-y-100 opacity-100" : "scale-y-0 sm:transform-none opacity-0 sm:opacity-100"}`}>
                {Object.entries(tabs).map(([name, url], index) =>
                    <Link
                        className={`transition-opacity uppercase ${url !== pathName ? "opacity-50 hocus:opacity-100" : ""}`}
                        href={url}
                        key={index}
                        onClick={() => navEnabled && toggleNavBar(false)}
                    >
                        <span className={`transition-colors p-2 inline-block border-b-2 ${url === pathName ? "border-accent" : "border-transparent"}`}>{name}</span>
                    </Link>
                )}
            </nav>
            <button className="w-10 h-8 relative sm:hidden z-10" onClick={() => toggleNavBar()}>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute ${navEnabled ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}></div>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute top-1/2 -translate-y-1/2 ${navEnabled ? "opacity-0" : ""}`}></div>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute ${navEnabled ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full"}`}></div>
            </button>
        </header>
    );
}