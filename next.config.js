const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const { i18n } = require("./next-i18next.config");

module.exports = withPWA({
	i18n,
	pwa: {
		dest: "public",
		runtimeCaching,
	},
	future: {
		webpack5: true,
	},
	async redirects() {
		return [
			//{
			//	source: "/",
			//	destination: "/create",
			//	permanent: true,
			//},
		];
	},
});
