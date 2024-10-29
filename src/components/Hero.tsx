import Image from "next/image";
import hero from "@/public/hero.webp";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-full overflow-auto flex flex-col justify-around items-center gap-8 md:flex-row">
            <div className="text-center sm:text-left max-w-md space-y-3">
                <h1 className="text-[min(17vw,5rem)] font-bold font-kinetika leading-none text-drop-accent">S.V. Unity</h1>
                <p className="text-[min(7vw,1.25rem)] font-thin">Gezelligheid, verbinding en belangen MBO studenten</p>
                <Link className="accent-button" href="/inschrijven" scroll={false}>Schrijf je in</Link>
            </div>
            <div className="inline-block overflow-hidden max-h-[85%] aspect-[4/3]">
                <Image className="x-shape size-full object-cover" src={hero} alt="background"/>
            </div>
        </section>
    );
}