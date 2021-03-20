import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId, withBaseUrl } from "../../utils";

Given("I am on the {string} screen", screen => {
	cy.visit(`/${screen}`);
});

const operators = {
	"more than": size => size + 1,
	"less than": size => size - 1,
	"at least": size => size,
	"at most": size => size,
};

const testIds = {
	Canvas: "canvas",
	Header: "header",
	"Left Sidebar": "sidebar:left",
	"Right Sidebar": "sidebar:right",
	"Manu Button": "button:menu",
	"Settings Button": "button:settings",
};

const visibilities = {
	can: "be.visible",
	cannot: "not.be.visible",
};

When(`the viewport is {string} {string} wide`, (operator, size) => {
	const composer = operators[operator];
	cy.viewport(composer(parseFloat(size)), 1000);
});

Then(`I {string} see the {string}`, (visibility, element) => {
	cy.get(dataTestId(testIds[element])).should(visibilities[visibility]);
});

And(`I {string} see the {string}`, (visibility, element) => {
	cy.get(dataTestId(testIds[element])).should(visibilities[visibility]);
});
