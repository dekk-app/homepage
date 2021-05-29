const fs = require("fs");
const path = require("path");

const tpl = `scripts-prepend-node-path=true
@dekk-app:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${
	process.env.GITHUB_TOKEN_DEKK_PACKAGES || process.env.GITHUB_TOKEN
}
always-auth=true

`;

fs.writeFileSync(path.resolve(process.cwd(), ".npmrc"), tpl);

console.log("Wrote File: .npmrc");
