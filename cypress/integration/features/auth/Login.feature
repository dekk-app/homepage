Feature: Login

	As a User, I want to login,
	so that I can use features that require authentication.

	Background:
		Given the user is not logged in

	Scenario: The user wants to login

		When the user logs in
		Then the user sees "Sign out" on the page
