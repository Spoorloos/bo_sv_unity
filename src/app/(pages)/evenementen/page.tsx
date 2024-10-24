import EventCard from "@/components/EventCard";
import type { Event } from "@/components/EventCard";

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

async function fetchEvents(): Promise<Event[] | Error> {
    try {
        const response = await fetch(process.env.apiURL!);
        const events = await response.json();
        if (isEvents(events)) {
            return events;
        }
    } catch (error) {
        return new Error("API encountered an error: " + error);
    }
    return new Error("API returned malformed data");
}

export default async function Events() {
    const events = await fetchEvents();
    if (events instanceof Error) {
        console.error(events);
        return <main>Failed to get events from database</main>
    }

    return (
        <main>
            <h1 className="my-8 text-5xl font-bold font-kinetika">Evenementen</h1>
            <div className="space-y-12">
                {events.map((event, index) =>
                    <EventCard event={event} key={index}/>
                )}
            </div>
        </main>
    );
}