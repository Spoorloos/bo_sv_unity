import Link from "next/link";
import { class$ } from "@/lib/functions";

type NavItem = Readonly<{
    name: string;
    href: string;
    selected?: boolean;
    onClick?: () => void;
}>;

export default function NavItem({ name, href, selected, onClick }: NavItem) {
    return (
        <Link className={class$("transition-opacity uppercase", !selected && "opacity-50 hocus:opacity-100")} href={href} onClick={onClick}>
            <span className={class$("transition-colors p-2 inline-block border-b-2 text-3xl sm:text-base font-kinetika", selected ? "border-accent" : "border-transparent")}>{name}</span>
        </Link>
    )
}