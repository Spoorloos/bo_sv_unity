import Link from "next/link";
import YoutubeIcon from "@/public/youtube.svg";
import FacebookIcon from "@/public/facebook.svg";
import InstagramIcon from "@/public/instagram.svg";
import TwitterIcon from "@/public/twitter.svg";

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

export default function Footer() {
    return (
        <footer className="px-[10%] pb-3 pt-12">
            <nav className="px-[5%] pb-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(links).map(([title, items], index) =>
                    <section key={index} className={index % 2 === 1 ? "sm:text-end lg:text-start" : undefined}>
                        <h2 className="footer-column">{title}</h2>
                        <ul className="space-y-2">
                            {Object.entries(items).map(([name, url], index) =>
                                <li key={index}><Link className="accent-hover" href={url}>{name}</Link></li>
                            )}
                        </ul>
                    </section>
                )}
                <div className="sm:text-end lg:text-start flex flex-col justify-between gap-6 sm:gap-0">
                    <section>
                        <h2 className="footer-column">Nieuwsbrief</h2>
                        <form className="inline-flex max-w-72 group" method="POST" action="/nieuwsbrief">
                            <input className="w-full p-2 border border-r-0 border-footerContent bg-transparent outline-none rounded-none transition-colors duration-100 group-hocus-within:border-accent" type="email" name="email" placeholder="Jouw e-mailadres" required/>
                            <button className="p-2 bg-footerContent text-background font-kinetika uppercase transition-colors duration-100 group-hocus-within:bg-accent" type="submit" aria-label="Abonneer op nieuwsbrief knop" title="Abonneer op onze nieuwsbrief">Sub</button>
                        </form>
                    </section>
                    <section>
                        <h2 className="footer-column">Socials</h2>
                        <ul className="h-8 space-x-3 *:inline">
                            <li><Link className="h-full inline-block accent-hover *:h-full" href="https://instagram.com/" target="_blank" aria-label="Instagram" title="Instagram"><InstagramIcon/></Link></li>
                            <li><Link className="h-full inline-block accent-hover *:h-full" href="https://youtube.com/" target="_blank" aria-label="Youtube" title="Youtube"><YoutubeIcon/></Link></li>
                            <li><Link className="h-full inline-block accent-hover *:h-full" href="https://twitter.com/" target="_blank" aria-label="Twitter" title="Twitter"><TwitterIcon/></Link></li>
                            <li><Link className="h-full inline-block accent-hover *:h-full" href="https://facebook.com/" target="_blank" aria-label="Facebook" title="Facebook"><FacebookIcon/></Link></li>
                        </ul>
                    </section>
                </div>
            </nav>
            <p className="pt-3 text-center border-t-2 border-border text-footerContent font-thin">S.V. Unity &copy; 2024</p>
        </footer>
    );
}