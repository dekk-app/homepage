const { promises: fs } = require("fs");
const path = require("path");
const process = require("process");
const { config } = require("dotenv");

config();

const { writeFile } = fs;

const getContentfulUrl = environment =>
	`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${environment}?access_token=${process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API_KEY}`;

const graphQlConfigTpl = `{
  "name": "Graphql Schema",
  "projects": {
    "Contentful": {
      "schemaPath": "contentful.graphql",
      "extensions": {
        "endpoints": {
          "master": {
            "url": "${getContentfulUrl("master")}",
            "headers": {
              "user-agent": "JS GraphQL"
            },
            "introspect": true
          },
          "development": {
            "url": "${getContentfulUrl("development")}",
            "headers": {
              "user-agent": "JS GraphQL"
            },
            "introspect": true
          }
        }
      }
    },
    "Dekk Backend": {
      "schemaPath": "api.graphql",
      "extensions": {
        "endpoints": {
          "local": {
            "url": "${process.env.BACKEND_URI}",
            "headers": {
              "user-agent": "JS GraphQL"
            },
            "introspect": true
          }
        }
      }
    }
  }
}
`;

async function generate() {
	await writeFile(path.resolve(process.cwd(), ".graphqlconfig"), graphQlConfigTpl);
	return `Wrote file .graphqlconfig`;
}

generate()
	.then(message => {
		console.log(message);
	})
	.catch(error => {
		console.error(error);
	});
