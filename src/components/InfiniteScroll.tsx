import { Children } from "react";
import { twMerge } from "tailwind-merge";

type InfiniteScroll = Readonly<{
    className?: string,
    children?: React.ReactNode;
}>;

export default function InfiniteScroll({ className, children }: InfiniteScroll) {
    const items = Children.map(children, (item) =>
        <li className="contents">{item}</li>
    );
    return (
        <div className={twMerge("relative whitespace-nowrap overflow-hidden", className)}>
            <ul className="relative inline-block h-full animate-infinite-scroll">{items}</ul>
            <ul className="absolute inline-block h-full animate-infinite-scroll">{items}</ul>
        </div>
    );
}