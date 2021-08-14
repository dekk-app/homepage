/**
 * {@see https://eslint.org/docs/user-guide/configuring/rules}
 */
module.exports = {
	env: ["browser", "node"],
	extends: ["xo-react", "plugin:prettier/recommended", "./eslint-shared.json"],
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
	prettier: true,
};
