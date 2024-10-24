const isBuild = process.env.NODE_ENV === "production";
const isStatic = isBuild && process.env.VERCEL_ENV === undefined;

/** @type {import("next").NextConfig} */
export default {
    output: isStatic ? "export" : undefined,
    basePath: isStatic ? "/bo/m5svunity" : undefined,
    images: {
        unoptimized: isStatic || undefined,
    },
    env: {
        apiURL: "https://spoorloos.xyz/bo/m5svunityapi",
    },
    webpack: (config) => {
        const fileLoaderRule = config.module.rules.find(
            rule => rule.test?.test?.(".svg")
        );

        config.module.rules.push({
            ...fileLoaderRule,
            test: /\.svg$/i,
            loader: "@svgr/webpack",
        });

        fileLoaderRule.exclude = /\.svg$/i;
        return config;
    },
}