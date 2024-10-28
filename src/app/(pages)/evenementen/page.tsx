"use client";

import useSWR from "swr";
import EventCard, { type Event } from "@/components/EventCard";
import { useClosest } from "@/lib/hooks";
import { jsonFetcher } from "@/lib/functions";

function isEvent(event: unknown): event is Event {
    return event !== null && typeof event === "object"
        && typeof (event as Event).title === "string"
        && typeof (event as Event).content === "string"
        && typeof (event as Event).image_url === "string"
        && typeof (event as Event).date === "string";
}

function getEvents(events: unknown): Event[] {
    return Array.isArray(events) ? events.filter(isEvent) : [];
}

export default function Events() {
    const { data, error, isLoading } = useSWR(process.env.apiURL!, jsonFetcher);
    const [ ref, closest ] = useClosest();

    if (error) {
        console.error(error);
    }

    return (
        <main>
            <h1 className="my-8 text-5xl font-bold font-kinetika">Evenementen</h1>
            {isLoading ? <>
                <em>Aan het laden...</em>
            </> : error ? <>
                <em>Er is een probleem opgetreden tijdens het ophalen van de evenementen. Herlaad de pagina.</em>
            </> : <>
                <ul className="space-y-12 empty:after:content-['Er_zijn_momenteel_geen_evenementen.']" ref={ref}>
                    {getEvents(data).map((event, index) =>
                        <li className={`transition-opacity ${closest === index ? "" : "opacity-40"}`} key={index}><EventCard {...event}/></li>
                    )}
                </ul>
            </>}
        </main>
    );
}