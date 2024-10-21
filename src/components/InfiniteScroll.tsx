import { Children } from "react";

type InfiniteScroll = Readonly<{
    className?: string,
    children?: React.ReactNode;
}>;

export default function InfiniteScroll({ className, children }: InfiniteScroll) {
    const items = Children.map(children, item =>
        <li className="h-full inline-block">{item}</li>
    );
    return (
        <ul className={"max-w-fit relative overflow-hidden " + className}>
            <div className="w-max h-full inline-block relative animate-infinite-scroll">{items}</div>
            <div className="w-max h-full inline-block absolute animate-infinite-scroll">{items}</div>
        </ul>
    );
}