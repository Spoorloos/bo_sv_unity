import Link from "next/link";
import { FC, SVGProps } from "react";

const links = {
    "Column 1": {
        "Lorem, ipsum dolor.": "#",
        "Lorem.": "#",
        "Lorem, ipsum.": "#",
        "Lorem 2.": "#",
    },
    "Column 2": {
        "Lorem, ipsum.": "#",
        "Lorem, ipsum dolor.": "#",
        "Lorem, ipsum 2.": "#",
        "Lorem.": "#",
    },
    "Column 3": {
        "Lorem.": "#",
        "Lorem, ipsum.": "#",
        "Lorem, ipsum 2.": "#",
        "Lorem, ipsum dolor.": "#",
    },
} satisfies Record<string, Record<string, string>>;

const socials = {
    "Instagram": {
        link: "https://instagram.com",
        icon: (await import("@/public/instagram.svg")).default,
    },
    "Youtube": {
        link: "https://youtube.com",
        icon: (await import("@/public/youtube.svg")).default,
    },
    "Facebook": {
        link: "https://facebook.com",
        icon: (await import("@/public/facebook.svg")).default,
    },
    "Twitter": {
        link: "https://twitter.com",
        icon: (await import("@/public/twitter.svg")).default,
    }
} satisfies Record<string, {
    link: string,
    icon: FC<SVGProps<SVGElement>>,
}>;

export default function Footer() {
    return (
        <footer className="px-[10%] pb-3 pt-12">
            <nav className="px-[5%] pb-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(links).map(([ title, items ], index) =>
                    <section key={index} className={index % 2 === 1 ? "sm:text-end lg:text-start" : undefined}>
                        <h2 className="footer-column">{title}</h2>
                        <ul className="space-y-2">
                            {Object.entries(items).map(([ name, url ], index) =>
                                <li key={index}>
                                    <Link className="accent-hover" href={url}>{name}</Link>
                                </li>
                            )}
                        </ul>
                    </section>
                )}
                <div className="flex flex-col justify-between gap-6 sm:text-end lg:text-start sm:gap-0">
                    <section>
                        <h2 className="footer-column">Nieuwsbrief</h2>
                        <form className="inline-flex w-full max-w-72 group" method="POST" action="/nieuwsbrief">
                            <input
                                className="w-full p-2 transition-colors duration-100 bg-transparent border border-r-0 rounded-none outline-none border-footerContent group-hocus-within:border-accent"
                                type="email"
                                name="email"
                                placeholder="Jouw e-mailadres"
                                required/>
                            <button
                                className="p-2 uppercase transition-colors duration-100 bg-footerContent text-background font-kinetika group-hocus-within:bg-accent"
                                type="submit"
                                aria-label="Abonneer op nieuwsbrief knop"
                                title="Abonneer op onze nieuwsbrief"
                            >Sub</button>
                        </form>
                    </section>
                    <section>
                        <h2 className="footer-column">Socials</h2>
                        <ul className="h-8 space-x-3">
                            {Object.entries(socials).map(([ name, { link, icon: Icon } ], index) =>
                                <li className="inline" key={index}>
                                    <Link
                                        className="inline-block h-full accent-hover"
                                        target="_blank"
                                        href={link}
                                        aria-label={name}
                                        title={name}
                                    >
                                        <Icon className="h-full"/>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </section>
                </div>
            </nav>
            <p className="pt-3 font-thin text-center border-t-2 border-border text-footerContent">S.V. Unity &copy; 2024</p>
        </footer>
    );
}