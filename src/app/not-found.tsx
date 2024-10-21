"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="absolute inset-0 -z-10 flex flex-col gap-3 justify-center items-center">
            <div>
                <span className="text-3xl pe-4 border-e border-border">404</span>
                <span className="text-xl ps-4 font-thin">This page could not be found</span>
            </div>
            <button className="text-text hocus:text-opacity-80" type="button" onClick={() => router.back()}>&larr; Go back</button>
        </div>
    );
}