Feature: Signup Screen

	As a user I want to signup
	in order to login to the app

	@focus
	Scenario: Users can signup to the app

		Given the user does not have an account
		When the user signs up with valid information
		Then the user has access to their space
