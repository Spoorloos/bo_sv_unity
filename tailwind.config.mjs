import plugin from "tailwindcss/plugin";

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
                accent: "var(--accent-color)",
                background: "var(--background-color)",
                text: "var(--text-color)",
                border: "var(--border-color)",
            },
            fontFamily: {
                kinetika: ["var(--font-kinetika)"],
            },
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            addVariant("hocus", ["&:hover", "&:focus"])
        }),
    ],
}