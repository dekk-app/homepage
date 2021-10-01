/**
 * A server that can be used for local SSL testing
 */
const https = require("https");
const fs = require("fs");
const { parse } = require("url");

const next = require("next");
const port = parseInt(process.env.PORT) || 3001;
const dev = true;
const app = next({
	dev,
	dir: __dirname,
});
const handle = app.getRequestHandler();

var options = {
	key: fs.readFileSync(`./ssl/localhost.key`),
	cert: fs.readFileSync(`./ssl/localhost.crt`),
};

app.prepare().then(() => {
	https
		.createServer(options, (req, res) => {
			const parsedUrl = parse(req.url, true);
			handle(req, res, parsedUrl);
		})
		.listen(port, err => {
			if (err) throw err;
			console.log(`> Ready on localhost:${port}`);
		});
});
