import Link from "next/link";
import Youtube from "@/public/youtube.svg";
import Facebook from "@/public/facebook.svg";
import Instagram from "@/public/instagram.svg";
import Twitter from "@/public/twitter.svg";

export default function Footer() {
    return (
        <footer className="px-[10%] pb-3">
            <div className="mb-3 p-8 border-b-2 border-border grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <ul className="space-y-2 text-start sm:text-start">
                    <li className="footer-column">Column 1</li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum dolor.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem.</Link></li>
                </ul>
                <ul className="space-y-2 text-start sm:text-end lg:text-start">
                    <li className="footer-column">Column 2</li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum dolor.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem.</Link></li>
                </ul>
                <ul className="space-y-2 text-start sm:text-start">
                    <li className="footer-column">Column 3</li>
                    <li><Link className="accent-hover" href="#">Lorem.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum dolor.</Link></li>
                </ul>
                <div className="flex flex-col justify-between text-start sm:text-end lg:text-start gap-8 sm:gap-0">
                    <section className="flex flex-col justify-between gap-2">
                        <h2 className="footer-column">Nieuwsbrief</h2>
                        <form className="flex" action="https://youtube.com">
                            <input className="w-full p-2 border border-border bg-transparent outline-none" type="email" name="email" placeholder="E-mailadres" required/>
                            <button className="p-2 transition-colors duration-100 text-background bg-gray-800 dark:bg-gray-400 hover:bg-accent font-kinetika uppercase" type="submit">Sub</button>
                        </form>
                    </section>
                    <section className="flex flex-col justify-between gap-2">
                        <h2 className="footer-column">Socials</h2>
                        <div className="h-7 flex gap-3 *:h-full *:*:h-full justify-start sm:justify-end lg:justify-start">
                            <Link href="#"><Instagram className="accent-hover"/></Link>
                            <Link href="#"><Youtube className="accent-hover"/></Link>
                            <Link href="#"><Facebook className="accent-hover"/></Link>
                            <Link href="#"><Twitter className="accent-hover"/></Link>
                        </div>
                    </section>
                </div>
            </div>
            <p className="text-center text-gray-500">S.V. Unity &copy; 2024</p>
        </footer>
    );
}