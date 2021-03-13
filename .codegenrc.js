const { config } = require("dotenv");
config();
const {
	BACKEND_API_KEY: ACCESS_TOKEN,
} = process.env;

module.exports = {
	schema: `https://graphql.dekk.app/?accessToken=${ACCESS_TOKEN}`,
	generates: {
		"./src/types/backend-api.ts": {
			plugins: ["typescript", "typescript-operations"],
		},
	},
};
