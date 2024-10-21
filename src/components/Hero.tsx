import Image from "next/image";
import hero from "@/public/hero.webp";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-full overflow-auto flex flex-col justify-between items-center gap-3 md:flex-row lg:px-8 pt-8 md:pt-0">
            <div className="text-center md:text-left">
                <h1 className="text-7xl font-bold font-kinetika">S.V. Unity</h1>
                <p className="mt-1 text-xl font-thin">De leukste MBO studenten vereniging van Amsterdam!</p>
                <Link className="mt-3 inline-block bg-accent px-4 py-2 rounded-full font-bold transition-colors hocus:bg-opacity-80 text-white" href="/inschrijven">Schrijf je in</Link>
            </div>
            <div className="w-fit h-full overflow-auto">
                <Image className="x-shape w-auto max-w-full max-h-full aspect-square object-cover center-self" src={hero} alt="background"/>
            </div>
        </section>
    );
}