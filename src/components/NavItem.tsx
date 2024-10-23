import Link from "next/link";

type NavItem = Readonly<{
    name: string;
    href: string;
    selected?: boolean;
    onClick?: () => void;
}>;

export default function NavItem({ name, href, selected, onClick }: NavItem) {
    return (
        <Link className="uppercase block sm:inline" href={href} onClick={onClick} aria-label={`${name} pagina`} scroll={false}>
            <span className={`transition-colors p-2 inline-block border-b-2 text-text text-3xl sm:text-base font-kinetika ${selected ? "border-accent" : "border-transparent text-opacity-50 hocus:text-opacity-100"}`}>{name}</span>
        </Link>
    )
}