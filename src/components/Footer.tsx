import Link from "next/link";
import Youtube from "@/public/youtube.svg";
import Facebook from "@/public/facebook.svg";
import Instagram from "@/public/instagram.svg";
import Twitter from "@/public/twitter.svg";

export default function Footer() {
    return (
        <footer className="px-[10%] pt-0 pb-3">
            <div className="mb-3 p-8 border-b-2 border-border grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <ul className="space-y-2 text-start sm:text-start">
                    <li className="font-bold font-kinetika uppercase text-lg mb-2">Column 1</li>
                    <li className="accent-hover"><a href="#">Lorem, ipsum dolor.</a></li>
                    <li className="accent-hover"><a href="#">Lorem.</a></li>
                    <li className="accent-hover"><a href="#">Lorem, ipsum.</a></li>
                    <li className="accent-hover"><a href="#">Lorem.</a></li>
                </ul>
                <ul className="space-y-2 text-start sm:text-end lg:text-start">
                    <li className="font-bold font-kinetika uppercase text-lg mb-2">Column 2</li>
                    <li className="accent-hover"><a href="#">Lorem, ipsum.</a></li>
                    <li className="accent-hover"><a href="#">Lorem, ipsum dolor.</a></li>
                    <li className="accent-hover"><a href="#">Lorem, ipsum.</a></li>
                    <li className="accent-hover"><a href="#">Lorem.</a></li>
                </ul>
                <ul className="space-y-2 text-start sm:text-start">
                    <li className="font-bold font-kinetika uppercase text-lg mb-2">Column 3</li>
                    <li className="accent-hover"><a href="#">Lorem.</a></li>
                    <li className="accent-hover"><a href="#">Lorem, ipsum.</a></li>
                    <li className="accent-hover"><a href="#">Lorem, ipsum.</a></li>
                    <li className="accent-hover"><a href="#">Lorem, ipsum dolor.</a></li>
                </ul>
                <div className="flex flex-col justify-between text-start sm:text-end lg:text-start gap-8 sm:gap-0">
                    <section className="flex flex-col justify-between gap-2">
                        <h2 className="font-bold font-kinetika uppercase text-1xl">Newsletter</h2>
                        <form className="flex" action="https://youtube.com">
                            <input className="w-full p-2 border border-border bg-transparent outline-none" type="email" name="email" placeholder="Email address" required/>
                            <button className="p-2 transition-colors text-background bg-gray-800 dark:bg-gray-400 hover:bg-accent font-kinetika uppercase" type="submit">Sub</button>
                        </form>
                    </section>
                    <section className="flex flex-col justify-between gap-2">
                        <h2 className="font-bold font-kinetika uppercase text-1xl">Connect With Us</h2>
                        <div className="h-8 flex gap-3 *:h-full *:*:h-full justify-start sm:justify-end lg:justify-start">
                            <Link className="accent-hover" href="#"><Instagram/></Link>
                            <Link className="accent-hover" href="#"><Youtube/></Link>
                            <Link className="accent-hover" href="#"><Facebook/></Link>
                            <Link className="accent-hover" href="#"><Twitter/></Link>
                        </div>
                    </section>
                </div>
            </div>
            <p className="text-center text-gray-500">Copyright &copy; 2024, SV-Unity</p>
        </footer>
    );
}