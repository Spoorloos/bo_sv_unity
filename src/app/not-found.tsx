export default function NotFound() {
    return (
        <div className="flex justify-center items-center gap-4 absolute inset-0 -z-10">
            <span className="text-3xl pe-4 border-e border-border">404</span>
            <span className="text-xl font-thin">This page could not be found</span>
        </div>
    );
}