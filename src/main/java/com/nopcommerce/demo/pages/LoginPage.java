package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage(){
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;

    @FindBy(id = "Email")
    WebElement emailField;

    @FindBy(name = "Password")
    WebElement passwordField;

    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;

    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;

    public String verifyWelcomeText(){
        log.info("Welcome Sign IN Text" + welcomeText.toString());
        return welcomeText.getText();
    }

    public void enterEmailId(String email){
        sendTextToElement(emailField, email);
        log.info("Enter email to email field  " + emailField.toString());
    }

    public void enterPassword(String password){
        sendTextToElement(passwordField, password);
        log.info("Enter password" + passwordField.toString());
    }

    public void clickOnLoginButton(){
        clickOnElement(loginButton);
        log.info("click on" + loginButton.toString());
    }
    public String getErrorMessage(){
        log.info("verify error message  " + errorMessage.toString());
        return getTextFromElement(errorMessage);
    }
}

