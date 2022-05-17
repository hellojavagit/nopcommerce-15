Feature:Login Test
  As aUser I want to login into nopcommerce website
@sanity,@smoke,@regression
    Scenario: User should navigate to login page successfully
    Given Iam on homepage
    When I click On login link
    Then I should be able to see "Welcome, Please sign In!"
@smoke,@regression
  Scenario: verify the error message with invalid credentials
  Given Iam on homepage
  When I click On login link
  And I enter email "prime123gmail.com"
  And I enter password "xyz123"
  And I click on login button
  Then I should see the error message "Login was unsuccessful"
@regression
Scenario: verify user should successfully login with valid credentials
  Given Iam on homepage
  When I click On login link
  And I enter email "testing789@gmail.com"
  And I enter password "xyz123"
  And I click on login button
  Then I should see log out link display

  @regression
  Scenario: verify user should logout successfully
    Given Iam on homepage
    When I click On login link
    And I enter email "testing789@gmail.com"
    And I enter password "xyz123"
    And I click on login button
    Then I should login successfully
    And I should see log out option