Feature: Signup Screen

	As a user I want to signup
	in order to login to the app

	@focus
	Scenario: Users can signup to the app

		Given Steward does not have an account
		When Steward signs up with valid information
		Then Steward has access to their space
