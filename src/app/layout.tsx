import "@/app/styles.css";
import { type Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";

export const metadata: Metadata = {
    title: "S.V. Unity",
    authors: [{ name: "Mick Negenman" }],
    keywords: "MBO, Student, Studenten, Studenten Vereniging, Studenten Vereniging Unity, SVUnity, Unity",
    description: "De eerste MBO studenten vereniging van Nederland",
    openGraph: {
        title: "S.V. Unity",
        type: "website",
        url: "https://sv-unity.spoorloos.xyz",
        description: "De eerste MBO studenten vereniging van Nederland"
    },
}

const kinetika = localFont({
    src: "../../public/fonts/kinetika-semi-bold.ttf",
    variable: "--font-kinetika"
});

type RootLayout = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayout) {
    return (
        <html className="has-[nav.open]:overflow-hidden" lang="nl">
            <body className={"antialiased font-sans bg-background text-text " + kinetika.variable}>
                {children}
                <SpeedInsights/>
            </body>
        </html>
    );
}
