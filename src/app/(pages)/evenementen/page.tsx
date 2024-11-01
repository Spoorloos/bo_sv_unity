"use client";

import useSWR from "swr";
import { twMerge } from "tailwind-merge";
import { useClosest } from "@/lib/hooks";
import { jsonFetcher } from "@/lib/functions";
import EventCard, { type Event } from "@/components/EventCard";

function isEvent(event: unknown): event is Event {
    return event !== null && typeof event === "object"
        && "title" in event
        && "content" in event
        && "image_url" in event
        && "date" in event;
}

function getEvents(events: unknown) {
    return Array.isArray(events) ? events.filter(isEvent) : [];
}

export default function Events() {
    const { data, error, isLoading } = useSWR(process.env.apiURL!, jsonFetcher);
    const [ ref, closest ] = useClosest();

    if (error) console.error(error);

    return (
        <main>
            <h1 className="py-8 text-5xl font-bold font-kinetika">Evenementen</h1>
            {isLoading ? <>
                <em>Aan het laden...</em>
            </> : error ? <>
                <strong className="font-normal">Er is een probleem opgetreden tijdens het ophalen van de evenementen. Herlaad de pagina.</strong>
            </> : <>
                <ul className="space-y-12 empty:after:content-['Er_zijn_momenteel_geen_evenementen.']" ref={ref}>
                    {getEvents(data).map((event, index) =>
                        <li className={twMerge("transition-opacity", closest !== index && "opacity-40")} key={index}><EventCard {...event}/></li>
                    )}
                </ul>
            </>}
        </main>
    );
}