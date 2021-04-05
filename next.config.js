const withPWA = require("next-pwa");
const { i18n } = require("./next-i18next.config");

module.exports = withPWA({
	i18n,
	pwa: {
		disable: process.env.NODE_ENV === "development",
		dest: "public",
	},
	future: {
		webpack5: true,
	},
	async redirects() {
		return [];
	},
	async rewrites() {
		return [
			{
				// does not handle locales automatically since locale: false is set
				source: "/de/erstellen/:projectId",
				destination: "/create/:projectId",
				locale: false,
			},
			{
				// does not handle locales automatically since locale: false is set
				source: "/de/erstellen",
				destination: "/create",
				locale: false,
			},
		];
	},
});
