exports.dataTestId = id => `[data-test-id='${id}']`;

exports.dataTestState = state => `[data-test-state='${state}']`;

exports.dataTestSelector = (selector, value) => `[data-test-${selector}='${value}']`;

exports.withBaseUrl = urlPath => `${Cypress.config().baseUrl}${urlPath}`;

exports.setUserLocale = function (languages) {
	const value = languages.split(",").map(lang => lang.trim());
	cy.visit("/", {
		headers: {
			"Accept-Language": `${languages.replace(/\s/, "")};q=0.9`,
		},
		onBeforeLoad: win => {
			Object.defineProperty(win.navigator, "languages", { value });
		},
	});
};
