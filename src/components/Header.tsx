"use client";

import logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", navEnabled);
    }, [ navEnabled ]);

    return (
        <header className="mb-4 pb-2 flex items-center justify-between border-b-2 border-gray-300">
            <Link href="/">
                <Image className="h-16 w-auto" src={logo} alt="logo" priority/>
            </Link>
            <nav className={`gap-4 ${kinetika.className} ${navEnabled ? "flex bg-white fixed inset-0 flex-col items-start pt-24 p-[10%] text-3xl" : "hidden sm:flex"}`}>
                {Object.entries(tabs).map(([name, url], index) =>
                    <Link
                        className={`transition-colors border-b-2 p-2 uppercase ${url === pathName ? "border-accent text-black" : "border-transparent text-gray-500 hover:text-black"}`}
                        href={url}
                        key={index}
                        onClick={() => setNavEnabled(false)}
                    >{name}</Link>
                )}
            </nav>
            <button className="w-10 h-8 relative sm:hidden z-10" onClick={() => setNavEnabled(!navEnabled)}>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute ${navEnabled ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}></div>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute top-1/2 -translate-y-1/2 ${navEnabled ? "opacity-0" : ""}`}></div>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute ${navEnabled ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full"}`}></div>
            </button>
        </header>
    );
}