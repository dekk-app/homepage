import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

Given("I am on the create screen", function () {
	cy.viewport(1600, 900);
	cy.visit("/create");
	cy.get(dataTestId("inner-frame")).should("be.visible");
});

When(`I click a link in the header menu`, function () {
	cy.window().reload();
	cy.get(dataTestId("header:text-dropdown-button")).first().click();
});

Then(`I see a dropdown`, function () {
	cy.get(dataTestId("dropdown")).should("be.visible");
});

When(`I click outside the dropdown`, function () {
	cy.get(dataTestId("sidebar:left")).first().click();
});

Then(`the dropdown closes`, function () {
	cy.get(dataTestId("dropdown")).should("not.exist");
});
