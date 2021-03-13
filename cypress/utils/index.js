export const dataTestId = id => `[data-test-id='${id}']`;
export const withBaseUrl = urlPath => `${Cypress.config().baseUrl}${urlPath}`;
