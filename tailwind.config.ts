import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background-color)",
                accent: "var(--accent-color)",
            },
            fontFamily: {
                shoika: [ "Shoika", "system-ui", "sans-serif" ],
                kinetika: [ "Kinetika", "system-ui", "sans-serif" ],
            }
        },
    },
    plugins: [],
};
export default config;
