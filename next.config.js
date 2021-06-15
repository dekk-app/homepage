const { withSentryConfig } = require("@sentry/nextjs");
const withPWA = require("next-pwa");
const { i18n } = require("./next-i18next.config");

const config = {
	i18n,
	pwa: {
		disable: process.env.NODE_ENV === "development",
		dest: "public",
	},
	webpack5: true,
	async redirects() {
		return [];
	},
	async rewrites() {
		return [
			{
				source: "/de/wunschliste",
				destination: "/de/wishlist",
				locale: false,
			},
			{
				source: "/de/rechtliches",
				destination: "/de/legal",
				locale: false,
			},
			{
				source: "/de/rechtliches/datenschutz",
				destination: "/de/legal/privacy-policy",
				locale: false,
			},
			{
				source: "/de/rechtliches/geschaeftsbedingungen",
				destination: "/de/legal/terms-of-service",
				locale: false,
			},
		];
	},
};

const pwa = withPWA(config);

const SentryWebpackPluginOptions = {
	// Additional config options for the Sentry Webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, org, project, authToken, configFile, stripPrefix,
	//   urlPrefix, include, ignore
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
const sentry = withSentryConfig(pwa, SentryWebpackPluginOptions);

const configWith = sentry;

module.exports = configWith;
