exports.dataTestId = id => `[data-test-id='${id}']`;

exports.dataTestState = state => `[data-test-state='${state}']`;

exports.dataTestSelector = (selector, value) => `[data-test-${selector}='${value}']`;

exports.withBaseUrl = urlPath => `${Cypress.config().baseUrl}${urlPath}`;
