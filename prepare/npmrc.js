const { promises: fs } = require("fs");
const path = require("path");
const process = require("process");

async function exists(path) {
	try {
		await fs.access(path);
		return true;
	} catch {
		return false;
	}
}

const createContent = token => `@dekk-app:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${token}
always-auth=true
`;

(async () => {
	const npmrc = path.join(process.cwd(), ".npmrc");
	const fileExists = await exists(npmrc);
	if (fileExists) {
		console.log(`${npmrc} already exists`);
	} else if (process.env.NODE_AUTH_TOKEN === undefined) {
		console.log(`NODE_AUTH_TOKEN is not set`);
	} else {
		console.log(`creating: ${npmrc}`);
		// eslint-disable-next-line no-template-curly-in-string
		const content = createContent("${NODE_AUTH_TOKEN}");
		await fs.writeFile(npmrc, content);
		console.log(`created: ${npmrc}`);
	}
})();
