/**
 * {@see https://eslint.org/docs/user-guide/configuring/rules}
 */
module.exports = {
	extends: ["xo-react", "plugin:prettier/recommended"],
	ignores: [
		"lib",
		"cypress",
		"public",
		"migrations",
		"*.config.js",
		"node_modules",
		"mockServiceWorker.js",
		"types/*.d.ts",
	],
	plugins: ["prettier"],
	env: ["browser", "node"],
	overrides: [
		{
			files: "**/__tests__/*.{ts,tsx}",
			globals: ["test", "expect"],
			rules: {
				"import/no-extraneous-dependencies": 0,
				"unicorn/no-fn-reference-in-iterator": 0,
			},
		},
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
					"warn",
					{
						assertionStyle: "as",
						objectLiteralTypeAssertions: "allow-as-parameter",
					},
				],
			},
		},
	],
	prettier: true,
	rules: {
		"react/prop-types": 0,
		"unicorn/no-array-reduce": 0,
		"prettier/prettier": 0,
		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": 1,
		"no-unused-vars": 2,
	},
};
