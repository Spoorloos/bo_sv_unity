"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs: Record<string, string> = {
    "Home": "/",
    "Evenementen": "/evenementen",
    "Aanmelden": "/aanmelden",
    "Inloggen": "/inloggen",
}

function isSelected(name: string) {
    return tabs[name] === usePathname();
}

export default function Header() {
    return (
        <header className="mx-8 my-4 pb-4 h-20 flex items-center justify-between border-b-2 border-gray-300">
            <a className="h-full" href="/">
                <img className="h-full" src="/logo.svg" alt="logo" width="67" height="62"/>
            </a>
            <nav className="flex gap-4 font-kinetika">
                {Object.entries(tabs).map(([ name, url ], index) =>
                    <Link className={`transition-colors border-b-2 ${ isSelected(name) ? "border-accent text-black" : "border-transparent text-gray-500 hover:text-black" } p-2 uppercase`} href={url} key={index}>{name}</Link>
                )}
            </nav>
        </header>
    );
}