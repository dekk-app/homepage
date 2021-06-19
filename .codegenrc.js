const { config } = require("dotenv");
config();

module.exports = {
	generates: {
		"./src/types/backend-api.ts": {
			plugins: ["typescript", "typescript-operations"],
			schema: process.env.BACKEND_URI,
		},
		"./src/types/contentful-api.ts": {
			plugins: ["typescript", "typescript-operations"],
			schema: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}?access_token=${process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API_KEY}`,
		},
	},
};
