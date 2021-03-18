Feature: Header Navigation

	As a user I want to see a localized Header
	in order navigate the page.

	@focus
	Scenario: Navigating via the header

		Given I am on the "en" page

		When I click "Home"
		Then I see "/" in the url

		When I click "Dashboard"
		Then I see "/dashboard" in the url

		When I click "Create"
		Then I see "/create" in the url


		Given I am on the "de" page

		When I click "Home"
		Then I see "/de" in the url

		When I click "Dashboard"
		Then I see "/de/dashboard" in the url

		When I click "Erstellen"
		Then I see "/de/erstellen" in the url
