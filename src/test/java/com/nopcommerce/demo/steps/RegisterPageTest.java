package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class RegisterPageTest {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should be able to navigate to the registration page$")
    public void iShouldBeAbleToNavigateToTheRegistrationPage() {
        System.out.println("IAm on Regsitration page");
    }

    @And("^I should be able to see the \"([^\"]*)\" page title$")
    public void iShouldBeAbleToSeeThePageTitle(String expected)  {
        Assert.assertEquals(expected, new RegisterPage().verifyRegisterLinkTxt());
    }

    @When("^I did not enter First name \"([^\"]*)\"$")
    public void iDidNotEnterFirstName(String arg0)  {

    }

    @Then("^I should see message \"([^\"]*)\"$")
    public void iShouldSeeMessage(String arg0)  {

    }

    @When("^I did not enter Last name \"([^\"]*)\"$")
    public void iDidNotEnterLastName(String errorMessage)  {
        new RegisterPage().verifyRequiredMessage(errorMessage);

    }

    @When("^I did not enter Email \"([^\"]*)\"$")
    public void iDidNotEnterEmail(String errorMessage)  {
        new RegisterPage().verifyRequiredMessage(errorMessage);

    }

    @When("^I did not enter Password \"([^\"]*)\"$")
    public void iDidNotEnterPassword(String errorMessage)  {
        new RegisterPage().verifyRequiredMessage(errorMessage);

    }

    @When("^I did not enter confirm Password \"([^\"]*)\"$")
    public void iDidNotEnterConfirmPassword(String errorMessage)  {
        new RegisterPage().verifyRequiredMessage(errorMessage);

    }

    @And("^I select gender \"([^\"]*)\"$")
    public void iSelectGender()  {
        new RegisterPage().setFemale();
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstName)  {
        new RegisterPage().setFirstname(firstName);

    }

    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String lastName)  {
        new RegisterPage().setLastname(lastName);

    }

    @And("^I select day \"([^\"]*)\"$")
    public void iSelectDay(String dob)  {
        new RegisterPage().setDateOfBirth(dob);

    }

    @And("^I select month \"([^\"]*)\"$")
    public void iSelectMonth(String dom)  {
        new RegisterPage().setMonthOfBirth(dom);

    }

    @And("^I select year \"([^\"]*)\"$")
    public void iSelectYear(String doy)  {
        new RegisterPage().setYearOfBirth(doy);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String conPass) {
        new RegisterPage().setPassword(conPass);
    }

    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().setRegisterButton();
    }
}
