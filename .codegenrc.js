const { config } = require("dotenv");
config();
const { BACKEND_URI } = process.env;

module.exports = {
	schema: BACKEND_URI,
	generates: {
		"./src/types/backend-api.ts": {
			plugins: ["typescript", "typescript-operations"],
		},
	},
};
