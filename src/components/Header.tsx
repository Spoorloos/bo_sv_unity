"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { clnms } from "@spoorloos/clnms";

import Logo from "@/components/Logo";
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
        <header className="pb-3 flex items-center justify-between border-b-2 border-border">
            <Logo className="h-16 w-auto text-[#313131] dark:text-[#D1D5DB]"/>
            <nav className={clnms(
                "origin-top fixed sm:static inset-0 bg-background space-y-4 sm:space-y-0 sm:space-x-4 p-[10%] pt-24 sm:p-0 z-40",
                navEnabled ? "scale-y-100 opacity-100 open" : "scale-y-0 sm:transform-none opacity-0 sm:opacity-100 invisible sm:visible",
                animate && "transition-all duration-300",
            )}>
                {Object.entries(tabs).map(([name, url], index) =>
                    <NavItem
                        key={index}
                        name={name}
                        href={url}
                        selected={url === pathName}
                        onClick={() => void (navEnabled && toggleNavBar(false))}/>
                )}
            </nav>
            <Hamburger toggled={navEnabled} onToggle={() => toggleNavBar()}/>
        </header>
    );
}