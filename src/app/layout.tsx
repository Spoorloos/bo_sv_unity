"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

type RootLayout = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayout) {
    const [freeze, setFreeze] = useState(false);

    return (
        <html className={freeze ? "overflow-hidden" : ""} lang="nl">
            <head>
                <title>Studenten Vereniging Unity</title>
                <meta name="author" content="Mick Negenman"/>
                <meta name="keywords" content="MBO, Student, Studenten, Studenten Vereniging, SVUnity, Unity"/>
                <meta name="description" content="De eerste MBO studenten vereniging van Nederland"/>
                <meta property="og:title" content="SV Unity"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sv-unity.spoorloos.xyz"/>
                <meta property="og:description" content="De eerste studenten vereniging van Nederland!"/>
                <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="all"/>
            </head>
            <body className="antialiased font-sans bg-background text-text">
                <div className="min-h-screen flex flex-col">
                    <Header setFreeze={setFreeze}/>
                    <main className="px-8 py-4 flex-1">
                        {children}
                    </main>
                </div>
                <Footer/>
            </body>
        </html>
    );
}
