import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased font-sans bg-background text-black px-8 py-4">
                <Header/>
                {children}
            </body>
        </html>
    );
}
