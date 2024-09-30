import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>SV Unity</title>
                <meta name="author" content="Mick Negenman"/>
                <meta name="keywords" content="MBO, Student, Studenten, Vereniging, SVUnity, Unity"/>
                <meta name="description" content="De eerste MBO studenten vereniging van Nederland"/>
                <meta property="og:title" content="SV Unity"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sv-unity.spoorloos.xyz"/>
                <meta property="og:description" content="The eerste studenten vereniging van Nederland!"/>
                <meta name="theme-color" content="#488286"/>
                <link rel="icon" type="image/svg+xml" href="/logo.svg"/>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" href="/logo.png"/>
            </head>
            <body className="antialiased font-sans bg-background text-black px-8 py-4">
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
