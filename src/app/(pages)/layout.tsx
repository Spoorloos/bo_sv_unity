import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PagesLayout = Readonly<{
    children: React.ReactNode;
}>;

export default function Layout({ children }: PagesLayout) {
    return (
        <>
            <div className="min-h-svh px-8 py-3">
                <Header/>
                {children}
            </div>
            <Footer/>
        </>
    )
}