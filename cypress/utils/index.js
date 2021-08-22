export const dataTestId = id => `[data-test-id="${id}"]`;

export const dataTestState = state => `[data-test-state="${state}"]`;

export const dataTestSelector = selector => `[data-test-selector="${selector}"]`;

export const withBaseUrl = urlPath => `${Cypress.config().baseUrl}${urlPath}`;
