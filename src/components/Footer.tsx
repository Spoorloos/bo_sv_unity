import Link from "next/link";
import Logo from "@/components/Logo";

import Youtube from "@/public/youtube.svg";
import Facebook from "@/public/facebook.svg";
import Instagram from "@/public/instagram.svg";

export default function Footer() {
    return (
        <footer className="px-[10%] py-3">
            <div className="mb-3 pb-3 border-b-2 border-border flex gap-3">
                <section className="flex-1 flex justify-center items-center">
                    <Logo className="h-12"/>
                </section>
                <section className="flex-1 grid grid-cols-2 grid-rows-2">
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                </section>
                <section className="flex-1 flex flex-col">
                    <section className="flex flex-col gap-3 justify-center items-center">
                        <h2 className="font-bold">Follow us</h2>
                        <div className="h-8 flex gap-3 *:h-full *:*:h-full">
                            <Link href="#"><Instagram/></Link>
                            <Link href="#"><Youtube/></Link>
                            <Link href="#"><Facebook/></Link>
                        </div>
                    </section>
                    <section>

                    </section>
                </section>
            </div>
            <p className="text-center text-gray-500">Copyright &copy; 2024, SV-Unity</p>
        </footer>
    );
}