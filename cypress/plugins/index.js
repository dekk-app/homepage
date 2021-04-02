const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
	on("file:preprocessor", cucumber());
	on("before:browser:launch", (browser = {}, args) => {
		if (browser.name === "chrome") {
			args.push("--disable-site-isolation-trials");
			return args;
		}
	});
};
