import "@/app/styles.css";
import { type Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Studenten Vereniging Unity",
    authors: [{ name: "Mick Negenman" }],
    keywords: "MBO, Student, Studenten, Studenten Vereniging, SVUnity, Unity",
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
        <html lang="nl" className={kinetika.variable}>
            <body className="antialiased font-sans bg-background text-text">
                <div className="min-h-screen flex flex-col">
                    <Header tabs={{
                        "Home": "/",
                        "Blog": "/blog",
                        "Evenementen": "/evenementen",
                        "Inschrijven": "/inschrijven",
                    }}/>
                    <main className="px-8 py-4 flex-1">
                        {children}
                    </main>
                </div>
                <Footer/>
            </body>
        </html>
    );
}
