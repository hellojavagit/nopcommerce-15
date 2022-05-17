package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginTest {

    @Given("^Iam on homepage$")
    public void iamOnHomepage() {
        System.out.println("I am on HomePage");
    }


    @Then("^I should be able to see \"([^\"]*)\"$")
    public void iShouldBeAbleToSee(String expected){
            String expected1 = "Welcome, Please Sign In!";
            Assert.assertEquals(expected1, new LoginPage().verifyWelcomeText());
    }


    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    //@Then("^I should see the error message \"([^\"]*)\"$")
    //public void iShouldSeeTheErrorMessage(String expectedText) {
       // Assert.assertEquals(expectedText,new HomePage().verifyLogoutLink());

   // }


    @Then("^I should see log out link display$")
    public void iShouldSeeLogOutLinkDisplay() {
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
    }

    @And("^I should see log out option$")
    public void iShouldSeeLogOutOption() {
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String expectedText) {
        Assert.assertEquals(expectedText,new LoginPage().getErrorMessage());
    }


    @When("^I click On login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();

    }
}
