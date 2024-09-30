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
                accent: "var(--accent-color)",
                background: "var(--background-color)",
                text: "var(--text-color)",
                border: "var(--border-color)"
            },
        },
    },
    plugins: [],
};
export default config;
