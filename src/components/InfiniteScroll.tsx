import { Children } from "react";

type InfiniteScroll = Readonly<{
    className?: string,
    children?: React.ReactNode;
}>;

export default function InfiniteScroll({ className, children }: InfiniteScroll) {
    const items = Children.map(children, item =>
        <li className="contents">{item}</li>
    );
    return (
        <div className={`relative whitespace-nowrap overflow-hidden ${className ?? ""}`}>
            <ul className="h-full inline-block relative animate-infinite-scroll">{items}</ul>
            <ul className="h-full inline-block absolute animate-infinite-scroll">{items}</ul>
        </div>
    );
}