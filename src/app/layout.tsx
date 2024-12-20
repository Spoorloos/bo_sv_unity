import "@/app/styles.css";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import { twMerge } from "tailwind-merge";

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

export const viewport: Viewport = {
    colorScheme: "dark",
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
            <body className={twMerge("antialiased font-sans bg-background text-text has-[nav.open]:fixed inset-0", kinetika.variable)}>
                {children}
            </body>
        </html>
    );
}
