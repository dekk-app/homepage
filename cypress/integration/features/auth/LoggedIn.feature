Feature: Logged In

	As a User, I want to remain logged in,
	so that I can continue without having to log in again.

	Background:

		Given the user is logged in

	@logged-in
	Scenario: The user wants to remain logged in

		When the user visits the root page
		Then the user sees the "logged in" page
		And the user sees the link to the "logout" page
		And the user sees "Sign out" on the page
