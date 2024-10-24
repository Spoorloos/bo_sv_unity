import Image from "next/image";
import hero from "@/public/hero.webp";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-full overflow-auto flex flex-col justify-between items-center gap-3 md:flex-row lg:px-8 pt-8 md:pt-0">
            <div className="text-center md:text-left max-w-md">
                <h1 className="text-7xl font-bold font-kinetika text-drop after:content-['S.V._Unity'] after:text-accent">S.V. Unity</h1>
                <p className="mt-2 text-xl font-thin">De MBO studentenvereniging van Amsterdam, waar vriendschap, groei en onvergetelijke ervaringen samenkomen!</p>
                <Link className="accent-button mt-3" href="/inschrijven" scroll={false}>Schrijf je in</Link>
            </div>
            <div className="inline-block overflow-hidden max-h-[85%] aspect-[4/3]">
                <Image className="x-shape size-full object-cover" src={hero} alt="background"/>
            </div>
        </section>
    );
}