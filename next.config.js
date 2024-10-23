const isExported =
    process.env.NODE_ENV === "production" &&
    process.env.VERCEL_ENV === undefined;

/** @type {import("next").NextConfig} */
export default {
    output: "export",
    basePath: isExported ? "/bo/m5svunity" : undefined,
    images: { unoptimized: true },
    env: {
        apiURL: "http://localhost:88/",
    },
    webpack(config) {
        const fileLoaderRule = config.module.rules.find(
            (rule) => rule.test?.test?.(".svg")
        );

        config.module.rules.push({
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/,
        }, {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: {
                not: [...fileLoaderRule.resourceQuery.not, /url/]
            },
            use: ["@svgr/webpack"],
        });

        fileLoaderRule.exclude = /\.svg$/i;
        return config;
    },
}