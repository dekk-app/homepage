import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

Given("I am on the create screen", function () {
	cy.visit("/create");
	cy.get(dataTestId("inner-frame")).should("be.visible");
});

When(`I click a link in the header menu`, function () {
	cy.window().reload();
	cy.get(dataTestId("header-menu-link")).click();
});

Then(`I see a dropdown`, function () {
	cy.get(dataTestId("dropdown")).should("be.visible");
});

When(`I click outside the dropdown`, function () {
	cy.window().reload();
	cy.get(dataTestId("sidebar:left")).click();
});

Then(`the dropdown closes`, function () {
	cy.get(dataTestId("dropdown")).should("not.exist");
});
