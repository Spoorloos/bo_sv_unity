import Link from "next/link";
import Youtube from "@/public/youtube.svg";
import Facebook from "@/public/facebook.svg";
import Instagram from "@/public/instagram.svg";
import Twitter from "@/public/twitter.svg";

export default function Footer() {
    return (
        <footer className="px-[10%]">
            <div className="px-[5%] pb-6 border-b-2 border-border grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <ul className="space-y-2">
                    <li className="footer-column">Column 1</li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum dolor.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem.</Link></li>
                </ul>
                <ul className="space-y-2 sm:text-end lg:text-start">
                    <li className="footer-column">Column 2</li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum dolor.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem.</Link></li>
                </ul>
                <ul className="space-y-2">
                    <li className="footer-column">Column 3</li>
                    <li><Link className="accent-hover" href="#">Lorem.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum.</Link></li>
                    <li><Link className="accent-hover" href="#">Lorem, ipsum dolor.</Link></li>
                </ul>
                <div className="grid sm:text-end lg:text-start">
                    <section className="space-y-2">
                        <h2 className="footer-column">Nieuwsbrief</h2>
                        <form className="flex news-letter" action="https://youtube.com">
                            <input className="w-full p-2 border border-r-0 bg-transparent outline-none rounded-none transition-colors duration-100 border-[--color]" type="email" name="email" placeholder="E-mailadres" required/>
                            <button className="p-2 text-background font-kinetika uppercase transition-colors duration-100 bg-[--color]" type="submit">Sub</button>
                        </form>
                    </section>
                    <section className="space-y-2 pt-8 sm:pt-0 mt-auto">
                        <h2 className="footer-column">Socials</h2>
                        <div className="h-7 space-x-3">
                            <Link className="h-full inline-block accent-hover" href="#"><Instagram className="inline h-full"/></Link>
                            <Link className="h-full inline-block accent-hover" href="#"><Youtube className="inline h-full"/></Link>
                            <Link className="h-full inline-block accent-hover" href="#"><Facebook className="inline h-full"/></Link>
                            <Link className="h-full inline-block accent-hover" href="#"><Twitter className="inline h-full"/></Link>
                        </div>
                    </section>
                </div>
            </div>
            <p className="py-3 text-center text-gray-500">S.V. Unity &copy; 2024</p>
        </footer>
    );
}