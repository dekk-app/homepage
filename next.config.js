const { withSentryConfig } = require("@sentry/nextjs");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const withPWA = require("next-pwa");
const path = require("path");
const { i18n } = require("./next-i18next.config");

const config = {
	i18n,
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
	},
	webpack: config => {
		config.plugins.push(new DuplicatePackageCheckerPlugin());
		config.resolve.alias["tslib"] = path.resolve(__dirname, "node_modules", "tslib");

		return config;
	},
	async redirects() {
		return [
			{
				destination: "/de/wunschliste",
				locale: false,
				permanent: true,
				source: "/de/wishlist",
			},
			{
				destination: "/de/rechtliches",
				locale: false,
				permanent: true,
				source: "/de/legal",
			},
			{
				destination: "/de/rechtliches/datenschutz",
				locale: false,
				permanent: true,
				source: "/de/legal/privacy-policy",
			},
			{
				destination: "/de/rechtliches/geschaeftsbedingungen",
				locale: false,
				permanent: true,
				source: "/de/legal/terms-of-service",
			},
		];
	},
	async rewrites() {
		return [
			{
				destination: "/de/wishlist",
				locale: false,
				source: "/de/wunschliste",
			},
			{
				destination: "/de/legal",
				locale: false,
				source: "/de/rechtliches",
			},
			{
				destination: "/de/legal/privacy-policy",
				locale: false,
				source: "/de/rechtliches/datenschutz",
			},
			{
				destination: "/de/legal/terms-of-service",
				locale: false,
				source: "/de/rechtliches/geschaeftsbedingungen",
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
