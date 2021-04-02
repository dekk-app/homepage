import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

Given("I am on the create screen with one artboard", function () {
	cy.viewport(1600, 900);
	cy.visit("/create");
});

When("I add an artboard", function () {
	cy.get(dataTestId("sidebar:add-artboard")).first().click();
});

Then("I see two artboards in the sidebar", function () {
	cy.get(dataTestId("sidebar:left")).find(dataTestId("artboard")).should("have.length", 2);
});
