import { useState, useCallback } from "react";

export function useClosest() {
    const [ closest, setClosest ] = useState<number | null>(null);

    const ref = useCallback((element: Element | null) => {
        if (element === null) return;
        const children = element.children;

        const onScroll = () => {
            let closestIndex = null;
            let closestDistance = Infinity;
            const screenCenter = window.outerHeight/2;

            for (let index = 0; index < children.length; index++) {
                const child = children[index];
                const { y, height } = child.getBoundingClientRect();
                const distance = Math.abs(y + height/2 - screenCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            }

            if (closestIndex !== null && closestIndex !== closest) {
                setClosest(closestIndex);
            }
        }

        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return [ ref, closest ] as const;
}