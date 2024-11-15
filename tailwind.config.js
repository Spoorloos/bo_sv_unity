import hocusPlugin from "tailwindcss-hocus";

/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: "hsl(185 30% 40% / <alpha-value>)",
                brightAccent: "hsl(185 30% 60% / <alpha-value>)",
                background: "hsl(200 15% 15% / <alpha-value>)",
                text: "hsl(0 0% 90% / <alpha-value>)",
                border: "hsl(200 10% 25% / <alpha-value>)",
                footerContent: "hsl(220 10% 65% / <alpha-value>)",
            },
            fontFamily: {
                kinetika: [ "var(--font-kinetika)", "system-ui", "sans-serif" ],
            },
            animation: {
                "infinite-scroll": "infinite-scroll 20s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [
        hocusPlugin,
    ],
}