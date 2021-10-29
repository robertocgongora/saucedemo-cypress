Feature: User Login
  Scenario: Login using valid credentials
    Given I navigate to Login page
      And I put a username "standard_user"
      And I put a password "secret_sauce"
      And I click on Login button
    Then I verify I was logged in
