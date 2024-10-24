"use client";

import useSWR from "swr";
import EventCard, { type Event } from "@/components/EventCard";

function isEvent(event: unknown): event is Event {
    return event !== null && typeof event === "object"
        && "title" in event
        && "content" in event
        && "image_url" in event
        && "date" in event;
}

function isEvents(events: unknown): events is Event[] {
    return Array.isArray(events)
        && events.every(event => isEvent(event));
}

async function fetcher(...args: Parameters<typeof fetch>) {
    const response = await fetch(...args);
    const parsed = await response.json();
    return parsed;
}

export default function Events() {
    const { data, error, isLoading } = useSWR(process.env.apiURL!, fetcher);
    const isError = error || !isEvents(data);

    return (
        <main>
            <h1 className="my-8 text-5xl font-bold font-kinetika">Evenementen</h1>
            {isLoading ? <>
                <em>Aan het laden...</em>
            </> : isError ? <>
                <strong>Er is een probleem opgetreden tijdens het ophalen van de evenementen.<br/>Reload de pagina.</strong>
            </> : <>
                <div className="space-y-12">
                    {data.map((event, index) =>
                        <EventCard event={event} key={index}/>
                    )}
                </div>
            </>}
        </main>
    );
}