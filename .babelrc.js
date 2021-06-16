module.exports = {
	presets: [
		[
			"next/babel",
			{
				"preset-env": {
					useBuiltIns: "usage",
					corejs: "3.14.0",
				},
			},
		],
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
