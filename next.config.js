/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [{ loader: "@svgr/webpack", options: { dimensions: false } }],
		});

		return config;
	},
	images: {
		domains: ["localhost", "media-server.sahandmasoleh.com"],
	},
};

module.exports = nextConfig;
