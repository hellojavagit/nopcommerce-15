Feature: Register Test
  As a user I want to register successfully

  Background:User is in HomePage

@smoke,@sanity,@regression
Scenario: verify user should navigate to register page successfully
  Given Iam on homepage
  When I click on register link
  Then I should be able to navigate to the registration page
  And I should be able to see the "register" page title
@smoke,@regression
Scenario: User should not be able to register with any empty mandatory field
  Given I click on register button
  When I did not enter First name "FirstName"
  Then I should see message "First name is required"
  When I did not enter Last name "Lastname"
  Then I should see message "Last name is required"
  When I did not enter Email "Email"
  And I should see message "Email is required"
  When I did not enter Password "password"
  And I should see message "Password is required"
  When I did not enter confirm Password "Confirm password"
  And I should see the error message "Password is required"
@regression
Scenario: Verify user should create account successfully
  When I click on register link
  And I select gender "Female"
  And I enter first name "abcd"
  And I enter lastname "xyza"
  And I select day "4"
  And I select month "august"
  And I select year "1990"
  And I enter email "testing789@gmail.com"
  And I enter password "xyz123"
  And I enter confirm password "xyz123"
  And I click on Register button
  Then I should be able to verify message "Your registration completed"

