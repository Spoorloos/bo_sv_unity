import "@/app/styles.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Studenten Vereniging Unity",
    authors: [{ name: "Mick Negenman" }],
    keywords: "MBO, Student, Studenten, Studenten Vereniging, SVUnity, Unity",
    description: "De eerste MBO studenten vereniging van Nederland",
    openGraph: {
        title: "SV Unity",
        type: "website",
        url: "https://sv-unity.spoorloos.xyz",
        description: "De eerste studenten vereniging van Nederland!"
    },
}

type RootLayout = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayout) {
    return (
        <html lang="nl">
            <body className="antialiased font-sans bg-background text-text">
                <div className="min-h-screen flex flex-col">
                    <Header tabs={{
                        "Home": "/",
                        "Evenementen": "/events",
                        "Aanmelden": "/signup",
                        "Inloggen": "/login",
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
