Feature: App Layout
	As a user I want to have an intuitive layout
	in order to navigate and work.

	@focus
	Scenario: The main layout of the screen

		Given I am on the "create" screen

		When the viewport is "at least" "1120px" wide
		Then I "can" see the "Header"
		And I "can" see the "Canvas"
		And I "can" see the "Left Sidebar"
		And I "can" see the "Right Sidebar"


		When the viewport is "less than" "1120px" wide
		Then I "can" see the "Header"
		And I "can" see the "Canvas"
		And I "cannot" see the "Left Sidebar"
		And I "cannot" see the "Right Sidebar"
