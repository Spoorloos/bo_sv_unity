import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>SV Unity</title>
                <link rel="icon" type="image/svg+xml" href="/logo.svg"/>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" href="/logo.png"/>
            </head>
            <body className="antialiased font-sans bg-background text-black px-8 py-4">
                <Header/>
                {children}
            </body>
        </html>
    );
}
