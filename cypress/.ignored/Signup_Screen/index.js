import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";
import faker from "faker";
import { v4 as uuid } from "uuid";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const fakeUser = {
	id: uuid(),
	firstName,
	lastName,
	name: faker.name.findName(firstName, lastName),
	email: faker.internet.email(firstName, lastName),
};

const password = faker.internet.password(8);

beforeEach(function () {
	cy.readFile("./schema.graphql").then(schema => {
		cy.mockNetwork({ schema });
	});
});

Given("the user does not have an account", function () {});

When("the user signs up with valid information", function () {
	cy.visit("/");
	cy.mockNetworkAdd({
		Mutation: () => ({
			createUser: () => fakeUser,
		}),
	});
	cy.get(dataTestId("form:to-register")).first().click();
	cy.get(dataTestId("form:to-register")).should("not.exist");
	cy.get(dataTestId("form:to-login")).should("be.visible");
	cy.get(dataTestId("form:firstName")).first().type(fakeUser.firstName);
	cy.get(dataTestId("form:lastName")).first().type(fakeUser.lastName);
	cy.get(dataTestId("form:email")).first().type(fakeUser.email);
	cy.get(dataTestId("form:password")).first().type(password);
	cy.get(dataTestId("form:confirmPassword")).first().type(password);
	cy.get(dataTestId("form:register")).first().click();
});

Then("the user has access to their space", function () {
	cy.contains(fakeUser.name);
});
