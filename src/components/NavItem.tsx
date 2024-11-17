import Link from "next/link";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

type NavItem = Readonly<{
    name: string;
    href: string;
    selected?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}>;

export default function NavItem({ name, href, selected, onClick }: NavItem) {
    return (
        <Link className={twMerge("uppercase block sm:inline-block text-text text-3xl sm:text-base font-kinetika transition-colors", !selected && "text-opacity-50 hocus:text-opacity-100")} href={href} onClick={onClick} aria-label={`${name} pagina`} aria-current={selected} scroll={false}>
            <span className={twMerge("p-2 inline-block border-b-2", selected ? "border-accent" : "border-transparent")}>{name}</span>
        </Link>
    )
}