import Logo from "@/components/Logo";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-[10%] py-3">
            <div className="mb-3 pb-3 border-b-2 border-border flex gap-3">
                {/* Logo */}
                <section className="flex-1 flex justify-center items-center">
                    <Logo className="h-12"/>
                </section>
                {/* Links */}
                <section className="flex-1 grid grid-cols-2 grid-rows-2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                {/* Info */}
                <section className="flex-1 flex flex-col">
                    {/* Socials */}
                    <section className="flex flex-col gap-3 justify-center">
                        <h2 className="font-bold">Follow us</h2>
                        <div className="flex gap-3 h-8">
                            <Link href="#"><svg className="h-full" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18" fill="currentColor"><path d="M9,4.4c-2.6,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6,4.6-2.1,4.6-4.6-2.1-4.6-4.6-4.6ZM9,12c-1.7,0-3-1.3-3-3,0-1.7,1.3-3,3-3h0c1.7,0,3,1.3,3,3,0,1.7-1.3,3-3,3Z"/><circle cx="13.8" cy="4.2" r="1.1"/><path d="M17.5,3.1c-.5-1.2-1.4-2.2-2.6-2.6-.7-.3-1.4-.4-2.2-.4-1,0-1.3,0-3.7,0s-2.8,0-3.7,0c-.7,0-1.5.2-2.2.4C1.9.9.9,1.9.5,3.1.2,3.8,0,4.5,0,5.3c0,1,0,1.3,0,3.7s0,2.8,0,3.7c0,.7.2,1.5.4,2.2.5,1.2,1.4,2.2,2.6,2.6.7.3,1.4.4,2.2.5,1,0,1.3,0,3.7,0s2.8,0,3.7,0c.7,0,1.5-.2,2.2-.4,1.2-.5,2.2-1.4,2.6-2.6.3-.7.4-1.4.4-2.2,0-1,0-1.3,0-3.7s0-2.8,0-3.7c0-.8-.2-1.5-.4-2.2ZM16.3,12.6c0,.6-.1,1.1-.3,1.7-.3.8-.9,1.4-1.7,1.7-.5.2-1.1.3-1.7.3-.9,0-1.2,0-3.7,0s-2.7,0-3.7,0c-.6,0-1.1-.1-1.7-.3-.8-.3-1.4-.9-1.7-1.7-.2-.5-.3-1.1-.3-1.7,0-.9,0-1.2,0-3.7s0-2.7,0-3.7c0-.6.1-1.1.3-1.7.3-.8.9-1.4,1.7-1.7.5-.2,1.1-.3,1.7-.3,1,0,1.2,0,3.7,0s2.7,0,3.7,0c.6,0,1.1.1,1.7.3.8.3,1.4.9,1.7,1.7.2.5.3,1.1.3,1.7,0,1,0,1.2,0,3.7s0,2.7,0,3.7h0Z"/></svg></Link>
                        </div>
                    </section>
                    {/* Newsletter */}
                    <section>

                    </section>
                </section>
            </div>
            <p className="text-center text-gray-500">Copyright &copy; 2024, SV-Unity</p>
        </footer>
    );
}