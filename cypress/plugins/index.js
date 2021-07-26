const cucumber = require("cypress-cucumber-preprocessor").default;

const config = on => {
	on("file:preprocessor", cucumber());
};

module.exports = config;
