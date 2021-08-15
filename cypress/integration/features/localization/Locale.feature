Feature: Locale redirects

	As a User, I want to see the page with my preferred language,
	so that I can understand it.

	Scenario Outline: The user's operation system language

		Given the user prefers <locale>
		Then the user sees <url> in the url

		Examples:
			| locale             | url     |
			|               "en" |     "/" |
			|        "en-US, en" |     "/" |
			|               "de" |   "/de" |
			|        "de-DE, de" |   "/de" |
			|        "fr-FR, fr" |     "/" |
			|    "fr-FR, fr, de" |   "/de" |

