import { type Metadata } from "next";
import localFont from "next/font/local";

import "@/app/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "S.V. Unity",
    authors: [{ name: "Mick Negenman" }],
    keywords: "MBO, Student, Studenten, Studenten Vereniging, Studenten Vereniging Unity, SVUnity, Unity",
    description: "De eerste MBO studenten vereniging van Nederland",
    openGraph: {
        title: "S.V. Unity",
        type: "website",
        url: "https://sv-unity.spoorloos.xyz",
        description: "De eerste studenten vereniging van Nederland!"
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
        <html lang="nl">
            <body className={"antialiased font-sans bg-background text-text " + kinetika.variable}>
                <div className="min-h-screen flex flex-col">
                    <Header/>
                    <main className="px-8 py-4 flex-1">
                        {children}
                    </main>
                </div>
                <Footer/>
            </body>
        </html>
    );
}
