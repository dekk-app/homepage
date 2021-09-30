/**
 * {@see https://eslint.org/docs/user-guide/configuring/rules}
 */
module.exports = {
	extends: ["xo-react", "prettier"],
	ignores: [
		"cypress",
		"public",
		"migrations",
		"*.config.js",
		"next-env.d.ts",
		"types/*.d.ts",
		"src/types/contentful-api.ts",
		"src/types/backend-api.ts",
		"src/types/units.ts",
		"server.js",
	],
	plugins: ["prettier"],
	env: ["browser", "node"],
	overrides: [
		{
			files: "**/*.stories.{ts,tsx}",
			rules: {
				"import/no-extraneous-dependencies": 0,
			},
		},
		{
			files: "**/*.{ts,tsx}",
			rules: {
				"@typescript-eslint/consistent-type-assertions": [
					1,
					{
						assertionStyle: "as",
						objectLiteralTypeAssertions: "allow-as-parameter",
					},
				],
				"react/prop-types": 0,
				"react/display-name": 0,
				"arrow-body-style": 0,
				"import/extensions": [
					1,
					{
						js: "never",
						jsx: "never",
						ts: "never",
						tsx: "never",
						css: "always",
						json: "always",
					},
				],
			},
		},
		{
			files: "prepare/*.js",
			rules: {
				"unicorn/prefer-module": 0,
			},
		},
	],
	prettier: true,
	rules: {
		"unicorn/prefer-node-protocol": 0,
		"import/order": 0,
	},
};
