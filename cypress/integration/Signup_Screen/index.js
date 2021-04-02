import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { dataTestId, withBaseUrl } from "../../utils";

beforeEach(() => {
	cy.readFile("./schema.graphql").then(schema => {
		cy.mockNetwork({ schema });
	});
});

const steward = {
	id: "steward",
	firstName: "Steward",
	lastName: "Rogers",
	name: "Steward Rogers",
	email: "steward.rogers@dekk.app",
};

const password = "password";

Given("Steward does not have an account", function () {
	cy.mockNetworkAdd({
		Query: () => ({
			getUsers: () => ({
				data: [],
			}),
		}),
	});
});

When("Steward signs up with valid information", function () {
	cy.visit("/");
	cy.mockNetworkAdd({
		Mutation: () => ({
			createUser: () => steward,
		}),
	});
	cy.get(dataTestId("form:to-register")).first().click();
	cy.get(dataTestId("form:to-register")).should("not.exist");
	cy.get(dataTestId("form:to-login")).should("be.visible");
	cy.get(dataTestId("form:firstName")).first().type(steward.firstName);
	cy.get(dataTestId("form:lastName")).first().type(steward.lastName);
	cy.get(dataTestId("form:email")).first().type(steward.email);
	cy.get(dataTestId("form:password")).first().type(password);
	cy.get(dataTestId("form:confirmPassword")).first().type(password);
	cy.get(dataTestId("form:register")).first().click();
});

Then("Steward has access to their space", function () {
	cy.contains(steward.name);
});
