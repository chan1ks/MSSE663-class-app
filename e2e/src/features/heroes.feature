@FE @heroes
Feature: Heroes

  Scenario: As an authenticated user, I can see a budget and list of heroes on the home page
    Given I navigate to the login page
    When I enter my credentials
    And I see the authenticated home page
    Then I see a list of heroes

  Scenario: As an authenticated user, I can list of heroes on the heroes page
    Given I navigate to the login page
    When I enter my credentials
    Then I see the authenticated home page
    And I navigate to the heroes page
    Then I see a list of heroes

  Scenario: As an authenticated user, I can select a single hero
    Given I navigate to the login page
    When I enter my credentials
    Then I see the authenticated home page
    And I navigate to the heroes page
    Then I see a list of heroes
    When I select a single hero
    Then I see that heroes details
