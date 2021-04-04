const withPWA = require("next-pwa");
const { i18n } = require("./next-i18next.config");

module.exports = withPWA({
	i18n,
	pwa: {
		dest: "public",
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
