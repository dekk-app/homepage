module.exports = {
	presets: [
		"next/babel",
		[
			"@babel/preset-env",
			{
				useBuiltIns: "usage",
				corejs: "3.14.0",
			},
		],
		"@babel/preset-typescript",
		"@babel/preset-react",
	],
	plugins: [
		[
			"@emotion/babel-plugin",
			{
				sourceMap: true,
				autoLabel: "dev-only",
				labelFormat: "[local]",
				cssPropOptimization: true,
			},
		],
	],
};
