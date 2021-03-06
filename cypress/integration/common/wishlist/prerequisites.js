import { Given } from "cypress-cucumber-preprocessor/steps";
import take from "lodash.take";

Given("the wishlist has {int} wishes", function (count) {
	cy.fixture("wishes.json").then(function (data) {
		cy.gql("wishes", { wishes: take(data.wishes, count) }, { alias: "gql_wishes" });
	});
});

Given("the wishlist has the following wishes:", function (table) {
	const hashes = table.hashes();
	const wishes = hashes.map(({ body, id, subject, votes }) => {
		return {
			authorId: 1,
			body,
			id,
			subject,
			voted: false,
			moderate: "accepted",
			votes,
			__typename: "Wish",
		};
	});
	this.count = wishes.length;
	cy.gql([
		{
			operationName: "wishes",
			data: { wishes },
			alias: "gql_wishes",
		},
		// For aggregated Wishes
		{
			operationName: "wishesCount",
			data: {
				aggregateWish: {
					count: {
						_all: hashes.length,
					},
				},
			},
			alias: "gql_wishesCount",
		},
	]);
});
