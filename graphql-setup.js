const { config } = require("dotenv");
const fs = require("fs");
const path = require("path");
const pify = require("pify");
config();

const { writeFile } = pify(fs);

const { BACKEND_API_KEY: ACCESS_TOKEN } = process.env;

const GRAPHQLCONFIG_FILE = ".graphqlconfig";

const graphQlConfigTpl = schemaPath => `{
  "name": "Contentful Schema",
  "schemaPath": "${schemaPath}",
  "extensions": {
    "endpoints": {
      "master": {
        "url": "https://graphql.dekk.app/?accessToken=${ACCESS_TOKEN}",
        "headers": {
          "user-agent": "JS GraphQL"
        },
        "introspect": true
      }
    }
  }
}
`;

const CWD = process.cwd();

async function generate() {
	await writeFile(path.resolve(CWD, GRAPHQLCONFIG_FILE), graphQlConfigTpl("schema.graphql"));
	return `Wrote file ${GRAPHQLCONFIG_FILE}`;
}

generate()
	.then(message => {
		console.log(message);
	})
	.catch(error => {
		console.error(error);
	});
