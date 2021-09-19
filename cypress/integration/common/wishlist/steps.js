import { When } from "cypress-cucumber-preprocessor/steps";

When("the user is on the wishlist page", function () {
	cy.visit("/wishlist");
	cy.wait("@gql_wishes");
	// Wait for aggregated Wishes
	// cy.wait("@gql_aggregateWishes");
});
