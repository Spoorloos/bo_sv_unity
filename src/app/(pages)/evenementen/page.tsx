"use client";

import useSWR from "swr";
import EventCard, { type Event } from "@/components/EventCard";
import { useClosest } from "@/lib/hooks";

function isEvent(event: unknown): event is Event {
    return event !== null && typeof event === "object"
        && typeof (event as Event).title === "string"
        && typeof (event as Event).content === "string"
        && typeof (event as Event).image_url === "string"
        && typeof (event as Event).date === "string";
}

function getEvents(events: unknown[]): Event[] {
    return events.filter(isEvent);
}

async function fetcher(...args: Parameters<typeof fetch>) {
    const response = await fetch(...args);
    const parsed = await response.json();
    return parsed;
}

export default function Events() {
    const { data, error, isLoading } = useSWR(process.env.apiURL!, fetcher);
    const [ ref, closest ] = useClosest();

    return (
        <main>
            <h1 className="my-8 text-5xl font-bold font-kinetika">Evenementen</h1>
            {isLoading ? <>
                <em>Aan het laden...</em>
            </> : error ? <>
                <strong>Er is een probleem opgetreden tijdens het ophalen van de evenementen. Herlaad de pagina.</strong>
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