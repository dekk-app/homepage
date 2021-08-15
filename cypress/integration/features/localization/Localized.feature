Feature: Localized UI

	As a User, I want to see the UI in my preferred language,
	so that I can understand it.

	Scenario Outline: The user's operation system language

		Given the user prefers <locale>
		Then the page is delivered in <locale>
		And the user sees <text> on the page

		Examples:
			| locale | text             |
			|   "en" |         "Submit" |
			|   "de" |     "Abschicken" |
