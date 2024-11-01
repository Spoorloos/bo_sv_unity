"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import Logo from "@/app/icon3.svg";
import Hamburger from "@/components/Hamburger";
import NavItem from "@/components/NavItem";

const tabs = {
    "Home": "/",
    "Evenementen": "/evenementen",
    "Contact": "/contact",
    "Inschrijven": "/inschrijven",
} satisfies Record<string, string>;

export default function Header() {
    const pathName = usePathname();
    const [navEnabled, setNavEnabled] = useState(false);
    const [animate, setAnimate] = useState(false);

    const toggleNavBar = (state?: boolean) => {
        setAnimate(true);
        setNavEnabled(prev => state ?? !prev);
        setTimeout(() => setAnimate(false), 300);
    }

    return (
        <header className="pb-3 flex items-center justify-between border-b-2 border-border z-10">
            <Link href="/" aria-label="Home pagina" scroll={false}>
                <Logo className="h-16 w-auto"/>
            </Link>
            <nav className={twMerge(
                "bg-background z-40 fixed sm:static inset-0 space-y-4 sm:space-y-0 sm:space-x-4 p-[10%] pt-24 sm:p-0 origin-top",
                animate && "transition-all duration-300",
                navEnabled ? "open scale-y-100 opacity-100" : "scale-y-0 sm:scale-y-100 opacity-0 sm:opacity-100 invisible sm:visible"
            )}>
                {Object.entries(tabs).map(([name, url], index) =>
                    <NavItem
                        key={index}
                        name={name}
                        href={url}
                        selected={url === "/" ? pathName === "/" : pathName.startsWith(url)}
                        onClick={() => void (navEnabled && toggleNavBar(false))}/>
                )}
            </nav>
            <Hamburger toggled={navEnabled} onToggle={() => toggleNavBar()}/>
        </header>
    );
}