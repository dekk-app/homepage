# Behavior Driven Development

[Behavior Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development) (abbr. BDD)
encourages teams to use conversation and concrete examples to formalize a shared understanding of
how the application should behave. BDD is largely facilitated through the use of a simple
[domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language) (DSL) using
natural-language constructs (e.g., English-like sentences) that can express the behaviour and the
expected outcomes.

## Gherkin

[Cucumber](https://cucumber.io/) uses
[Gherkin](<https://en.wikipedia.org/wiki/Cucumber_(software)#Gherkin_language>) to define test cases.
Its syntax centers around a line-oriented design, similar to that of Python.

### Example

```gherkin
Scenario: Eric wants to withdraw money from his bank account at an ATM
	Given Eric has a valid Credit or Debit card
	And his account balance is $100
	When he inserts his card
	And withdraws $45
	Then the ATM should return $45
	And his account balance is $55
```

## Best practices

### Common steps

We define common steps in namespaced files of the `common` folder i.e.
`/cypress/integration/common/navigation.js`. These files contain steps that we want to repeat in
various tests.

**Example:** `/cypress/integration/common/navigation.js`

```js
Given("I am on the root page", function () {
  cy.visit("/");
});

Given("I am on the wishlist page", function () {
  cy.visit("/wishist");
});
```

### Writing tests

We write easy to understand, testable features.

1. Define a `Background` if given
1. Define a `Scenario` as often as given
1. Describe the expected behavior

**Example:** `/cypress/integration/CollapsableNavigationMenu.feature`

```gherkin
Feature: Collapsable Navigation Menu

	As a user, I want to collapse and expand the menu,
	so that I have more screen space when I need it.

	Background:

		Given I am logged in
		And the menu has at least one item
		And there should be at least one title

	Scenario: menu drawer is closed

		Given the menu drawer is closed
		Then the menu titles should not be visible
		And the icons should be visible

	Scenario: menu drawer is open

		Given the menu drawer is open
		Then the menu titles should be visible
		And the icons should be visible
```

The keywords `And` and `But` are syntactic sugar for `Given`, `When` and `Then`. They should not be
used in step definitions, use the corresponding keyword instead.

We separate steps and assertions:

**Example:** `/cypress/integration/common/steps.js`

```js
const { dataTestId } = require("../../utils");

Given("the menu drawer is closed", function () {
  cy.get(dataTestId("drawer-closed")).should("exist");
});

Given("there should be at least one title", function () {
  cy.get(dataTestId("drawer-menu-title")).should("have.length.greaterThan", 0);
});

Given("the menu has at least one item", function () {
  cy.get(dataTestId("drawer-menu-item")).should("have.length.greaterThan", 0);
});

When("the menu drawer is open", function () {
  cy.get(dataTestId("open-drawer-button")).click();
  cy.get(dataTestId("drawer-open")).should("exist");
});

Then("the menu titles should not be visible", function () {
  cy.get(dataTestId("drawer-menu-title")).each(element => {
    cy.wrap(element).should("not.be.visible");
  });
});
```

**Example:** `/cypress/integration/common/assert.js`

```js
const { dataTestId } = require("../../utils");

Then("the menu titles should not be visible", function () {
  cy.get(dataTestId("drawer-menu-title")).each(element => {
    cy.wrap(element).should("not.be.visible");
  });
});

Then("the icons should be visible", function () {
  cy.get(dataTestId("drawer-menu-item")).find("svg").should("be.visible");
});

Then("the menu titles should be visible", function () {
  cy.get(dataTestId("drawer-menu-title")).each(element => {
    cy.wrap(element).should("be.visible");
  });
});
```

### Test selectors

To ensure that tested elements can be selected we add
[`data-attributes`](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
to our target elements.

| Usage  | Pattern           | example                     | description                  |
| ------ | ----------------- | --------------------------- | ---------------------------- |
| ID     | `data-test-id`    | `data-test-id="my-element"` | Find element in the DOM      |
| State  | `data-test-state` | `data-test-state="active"`  | Detect element state         |
| Custom | `data-test-*`     | `data-test-wish-id="1"`     | Iterable name or comparisons |

### Process

To ensure a flawless development process we decided to follow some simple steps.

### Readiness of tickets

1. As developers, we meet and groom tickets as a group.
1. We discuss the requested feature
1. We add the label `BDD_Feature` (this is needed to enable cucumber in
   [Jira](https://dekk.atlassian.net/secure/RapidBoard.jspa?rapidView=2&projectKey=DEKK))
1. We define the feature in Gherkin
1. The ticket is now ready for development

### Developing a BDD Feature

1. Copy the Gherkin description into a feature file (i.e. `cypress/integration/MyFeature.feature`)
1. Write the test for your feature in a javascript file
   (i.e. `cypress/integration/MyFeature/index.js`)
1. Implement the feature until all assertions are satisfied
1. Push your feature
1. Request a review
