import InfiniteScroll from "@/components/InfiniteScroll";
import AppleIcon from "@/public/apple.svg";
import MicrosoftIcon from "@/public/microsoft.svg";

export default function Home() {
    return (
        <div className="px-[10%] flex flex-col items-center gap-9">
            <section className="text-center sm:self-start sm:text-start max-w-2xl">
                <h2 className="text-4xl font-bold font-kinetika text-brightAccent">Onze Missie</h2>
                <p className="text-lg font-thin">Onze missie is om een plek te creëren waar studenten zich thuis voelen en waar zij elkaar beter leren kennen, om zo de band met andere studenten van andere MBO's te bevorderen. Ook bouwen wij deze vereniging op met als doel om zo veel als mogelijk studenten van het MBO bij elkaar te brengen om zo het mbo gelijk te trekken met het HBO en WO.</p>
            </section>
            <section className="text-center sm:self-end sm:text-end max-w-2xl">
                <h2 className="text-4xl font-bold font-kinetika text-brightAccent">Gelijkheid</h2>
                <p className="text-lg font-thin">S.V. Unity streeft ernaar om de positie van MBO-studenten te versterken door te pleiten voor gelijke rechten en kansen, vergelijkbaar met die van studenten in het hoger onderwijs. Dit omvat toegang tot dezelfde faciliteiten, kortingen en mogelijkheden. Dit wordt behaald door connecties op te bouwen met de diverse gemeentes en de overheid om zo de belangen van de studenten te bevorderen.</p>
            </section>
            <section className="text-center sm:self-start sm:text-start max-w-2xl">
                <h2 className="text-4xl font-bold font-kinetika text-brightAccent">Evenementen</h2>
                <p className="text-lg font-thin">Het hoofddoel van S.V. Unity is om een gezellige sfeer te creëren voor alle leden. Dit doen we door het organiseren van diverse evenementen zoals feesten, borrels, sportactiviteiten en culturele uitjes. Hierdoor willen we zorgen dat studenten zich thuis voelen en genieten van hun studietijd.</p>
            </section>
            <section className="max-w-full text-center">
                <h2 className="text-4xl font-bold font-kinetika text-brightAccent">Onze Partners</h2>
                <InfiniteScroll className="max-w-full h-32">
                    <AppleIcon className="inline h-full accent-hover"/>
                    <MicrosoftIcon className="inline h-full accent-hover"/>
                    <AppleIcon className="inline h-full accent-hover"/>
                    <MicrosoftIcon className="inline h-full accent-hover"/>
                    <AppleIcon className="inline h-full accent-hover"/>
                    <MicrosoftIcon className="inline h-full accent-hover"/>
                </InfiniteScroll>
            </section>
        </div>
    );
}
