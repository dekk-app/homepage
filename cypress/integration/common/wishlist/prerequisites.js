import { Given } from "cypress-cucumber-preprocessor/steps";
import take from "lodash.take";

Given("the wishlist has {int} wishes", function (count) {
	cy.fixture("wishes.json").then(function (data) {
		cy.gql("wishes", { wishes: take(data.wishes, count) }, { alias: "gql_wishes" });
	});
});

Given("the wishlist has the following wishes:", function (table) {
	const wishes = table.hashes().map(({ body, id, subject, votes }) => {
		return {
			authorId: 1,
			body,
			id,
			subject,
			voted: false,
			votes,
			__typename: "Wish",
		};
	});
	this.count = wishes.length;
	cy.gql("wishes", { wishes }, { alias: "gql_wishes" });
});
