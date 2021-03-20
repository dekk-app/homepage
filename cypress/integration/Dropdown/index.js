import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

Given("I am on the create screen", function () {
	cy.visit("/create");
	cy.get(dataTestId("inner-frame")).should("be.visible");
});

When(`I click a link in the header menu`, label => {
	cy.window().reload();
	cy.get(dataTestId("header-menu-link")).click();
});

Then(`I see a dropdown`, locale => {
	cy.get(dataTestId("dropdown")).should("be.visible");
});

When(`I click outside the dropdown`, label => {
	cy.window().reload();
	cy.get(dataTestId("sidebar:left")).contains(label).click();
});

Then(`the dropdown closes`, locale => {
	cy.get(dataTestId("dropdown")).should("not.be.visible");
});
