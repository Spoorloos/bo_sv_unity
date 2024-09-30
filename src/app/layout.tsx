import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-sans bg-background text-black antialiased">
                <Header/>
                {children}
            </body>
        </html>
    );
}
