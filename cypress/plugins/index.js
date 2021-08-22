import cucumber from "cypress-cucumber-preprocessor";
import dotenv from "dotenv";

dotenv.config();

const setupPlugins = (on, config) => {
	// We cannot use `cucumber()`. Instead we have to use `cucumber.default()`
	// @see {@link https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/issues/614}
	on("file:preprocessor", cucumber.default());
	config.env.nextAuthSessionToken = process.env.CYPRESS_NEXT_AUTH_SESSION_TOKEN;
	config.env.backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;
	return config;
};

export default setupPlugins;
