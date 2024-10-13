import Link from "next/link";
import Youtube from "@/public/youtube.svg";
import Facebook from "@/public/facebook.svg";
import Instagram from "@/public/instagram.svg";
import Twitter from "@/public/twitter.svg";

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
    instagram: "#",
    youtube: "#",
    facebook: "#",
    twitter: "#",
} as const;

export default function Footer() {
    return (
        <footer className="px-[10%]">
            <div className="px-[5%] pb-6 border-b-2 border-border grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(links).map(([title, items], index) =>
                    <section key={index}>
                        <h2 className="footer-column mb-2">{title}</h2>
                        <ul className="space-y-2">
                            {Object.entries(items).map(([name, url], index) =>
                                <li key={index}><Link className="accent-hover" href={url}>{name}</Link></li>
                            )}
                        </ul>
                    </section>
                )}
                <div className="grid sm:text-end lg:text-start">
                    <section className="space-y-2">
                        <h2 className="footer-column">Nieuwsbrief</h2>
                        <form className="flex news-letter" method="POST" action="/nieuwsbrief">
                            <input className="w-full p-2 border border-r-0 bg-transparent outline-none rounded-none transition-colors duration-100 border-[--color]" type="email" name="email" placeholder="Jouw e-mailadres" required/>
                            <button className="p-2 text-background font-kinetika uppercase transition-colors duration-100 bg-[--color]" type="submit" aria-label="Abonneer op nieuwsbrief">Sub</button>
                        </form>
                    </section>
                    <section className="space-y-2 pt-8 sm:pt-0 mt-auto">
                        <h2 className="footer-column">Socials</h2>
                        <div className="h-7 space-x-3">
                            <Link className="h-full inline-block accent-hover" href={socials.instagram} aria-label="Instagram"><Instagram className="inline h-full"/></Link>
                            <Link className="h-full inline-block accent-hover" href={socials.youtube} aria-label="Youtube"><Youtube className="inline h-full"/></Link>
                            <Link className="h-full inline-block accent-hover" href={socials.facebook} aria-label="Facebook"><Facebook className="inline h-full"/></Link>
                            <Link className="h-full inline-block accent-hover" href={socials.twitter} aria-label="Twitter"><Twitter className="inline h-full"/></Link>
                        </div>
                    </section>
                </div>
            </div>
            <p className="py-3 text-center text-gray-500">S.V. Unity &copy; 2024</p>
        </footer>
    );
}