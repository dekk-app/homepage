Feature: Logout

	As a User, I want to logout of the system,
	so that I can keep my account secured.

	Background:
		Given the user is logged in
		And the user is on the root page

	Scenario: The user wants to logout

		When the user logs out
		Then the user sees "Submit" on the page
