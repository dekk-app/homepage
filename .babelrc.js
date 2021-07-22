module.exports = {
	presets: ["next/babel"],
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
