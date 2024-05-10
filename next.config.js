/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.mdx/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: '@mdx-js/loader',
                    options: {},
                },
            ],
        })

        return config
    },
    experimental: {
        esmExternals: 'loose',
    },
}

module.exports = nextConfig
