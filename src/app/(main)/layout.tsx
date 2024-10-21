import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

type MainLayout = Readonly<{
    children: React.ReactNode;
}>;

export default function MainLayout({ children }: MainLayout) {
    return (
        <>
            <div className="px-8 py-3 h-svh flex flex-col gap-3">
                <Header/>
                <Hero/>
            </div>
            <main className="px-8 py-3">{children}</main>
            <Footer/>
        </>
    )
}