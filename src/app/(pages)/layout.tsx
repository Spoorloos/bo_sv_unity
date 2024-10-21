import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PagesLayout = Readonly<{
    children: React.ReactNode;
}>;

export default function Layout({ children }: PagesLayout) {
    return (
        <>
            <div className="min-h-svh px-8 py-3 flex flex-col gap-3">
                <Header/>
                <main>{children}</main>
            </div>
            <Footer/>
        </>
    )
}