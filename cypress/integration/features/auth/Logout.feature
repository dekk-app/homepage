Feature: Logout

	As a User, I want to logout of the system,
	so that I can keep my account secured.

	Background:

		Given the user is logged in
		And the user is on the root page

	@logged-in
	Scenario: The user wants to logout

		When the user clicks the link to the "logout" page
		Then the user sees the "logout" page
		And the user sees the "logout" button

		When the user clicks the "logout" button
		Then the user sees the "logged out" page

