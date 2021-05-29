const fs = require("fs");
const path = require("path");
const { config } = require("dotenv");
const pify = require("pify");
config();

const { writeFile } = pify(fs);

const { BACKEND_URI } = process.env;

const GRAPHQLCONFIG_FILE = ".graphqlconfig";

const graphQlConfigTpl = schemaPath => `{
  "name": "Backend Schema",
  "schemaPath": "${schemaPath}",
  "extensions": {
    "endpoints": {
      "local": {
        "url": "${BACKEND_URI}",
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
