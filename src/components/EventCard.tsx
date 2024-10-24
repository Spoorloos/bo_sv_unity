"use client";

import Image from "next/image";
import { useIntersectionObserver } from "react-intersection-observer-hook";

export type Event = Readonly<{
    title: string;
    content: string;
    image_url: string;
    date: string;
}>;

type EventCard = Readonly<{
    event: Event;
}>;

export default function EventCard({ event }: EventCard) {
    const [ref, { entry }] = useIntersectionObserver({
        threshold: 0.65,
    });
    const isVisible = entry && entry.isIntersecting;

    return (
        <article className={"flex flex-col items-stretch gap-8 lg:flex-row transition-opacity " + (isVisible ? "" : "lg:opacity-40")} ref={ref}>
            <div className="[flex:_3_0_0]">
                <h2 className="text-4xl font-bold text-brightAccent">{event.title}</h2>
                <time className="font-thin text-text/50" dateTime={event.date}>{new Date(event.date).toDateString()}</time>
                <p className="text-lg font-thin">{event.content}</p>
            </div>
            <div className="[flex:_2_0_0] relative">
                <Image className="object-cover" src={event.image_url} alt="event" fill/>
            </div>
        </article>
    )
}