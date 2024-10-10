declare module "@/public/*.svg" {
    import { FC, SVGProps } from "react";
    const content: FC<SVGProps<SVGElement>>;
    export default content;
}

declare module "@/public/*.svg?url" {
    const content: any;
    export default content;
}