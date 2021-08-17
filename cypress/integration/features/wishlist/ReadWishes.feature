Feature: Read Wishes
	As a User, I want to see wishes,
	so that I can read what others wish for.

	Background:
		Given the wishlist has the following wishes:
			| id | subject   | body   | votes |
			|  1 | Subject 1 | Body 1 |     0 |
			|  2 | Subject 2 | Body 2 |     2 |
			|  3 | Subject 3 | Body 3 |    10 |
			|  4 | Subject 4 | Body 4 |    99 |

	@wishlist @logged-out
	Scenario: User wants to view all wishes of others

		When the user is on the wishlist page
		Then the user sees all wishes

	@wishlist @logged-out
	Scenario Outline: User wants to read a wish

		When the user is on the wishlist page
		Then the wish with id <id> has "subject" "<subject>"
		And the wish with id <id> has "body" "<body>"
		And the wish with id <id> has "votes" "<votes>"

		Examples:
			| id | subject   | body   | votes |
			|  1 | Subject 1 | Body 1 |     0 |
			|  2 | Subject 2 | Body 2 |     2 |
			|  3 | Subject 3 | Body 3 |    10 |
			|  4 | Subject 4 | Body 4 |    99 |
