Feature: Language Switcher

	As a user I want to see a language switcher
	in order to quickly navigate to a different language for the current page.

	@focus
	Scenario: Navigating via the language switcher

		Given I am on the "en" page

		When I click "Deutsch"
		Then I see "/de" in the url

		Given I am on the "de" page

		When I click "English"
		Then I see "/" in the url

		Given I am on the "create" page

		When I click "Deutsch"
		Then I see "/de/erstellen" in the url

		Given I am on the "de/erstellen" page

		When I click "English"
		Then I see "/create" in the url

