/**
 * {@see https://eslint.org/docs/user-guide/configuring/rules}
 */
module.exports = {
	extends: ["xo-react", "plugin:prettier/recommended"],
	ignores: [
		"cypress",
		"public",
		"migrations",
		"*.config.js",
		"next-env.d.ts",
		"types/*.d.ts",
		"src/types/contentful-api.ts",
		"src/types/backend-api.ts",
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
