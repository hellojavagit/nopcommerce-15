package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//h1[text()='Register']")
    WebElement registerTextLink;

    @FindBy(id = "gender-female")
    WebElement female;

    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstname;

    @FindBy(id = "LastName")
    WebElement lastName;
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dateOfBirth;

    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement monthOfBirth;

    @FindBy(name = "DateOfBirthYear" )
    WebElement yearOfBirth;

    @FindBy(xpath ="//input[@id='Email']")
    WebElement Email;

    @FindBy(id ="Password")
    WebElement Password;

    @FindBy(id = "ConfirmPassword")
    WebElement confirmPassword;

    @FindBy(id = "register-button")
    WebElement registerButton;

    @FindBy(xpath="//span[@id='FirstName-error']")
    WebElement FirstNameIsRequiredLink;

    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement LastNameIsRequiredLink;

    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement EmailIsRequiredLink;
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement PasswordISRequiredLink;

    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement ConfirmPasswordISRequiredLink;

    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement yourRegisterCompleteMessageLink;

    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueButtonLink;
    @FindBy(xpath = "//h1[text()='Register']")
    WebElement registerTxt;
    @FindBy(xpath = "//span[contains(@class,'field-validation-error')]//span")
    List<WebElement> verifyRequired;
    @FindBy(className = "field-validation-error")
    List<WebElement> fieldValidationErrors;

    public String verifyRequiredMessage(String fieldName){
        String validationMessage = null;
        for (WebElement message : fieldValidationErrors) {
            if (message.getAttribute("data-valmsg-for").equals(fieldName)) {
                validationMessage = message.getText();
                break;
            }
            log.info("verify Required Message" + fieldValidationErrors.toString());

        }
        return validationMessage;
    }
    public String verifyRegisterLinkTxt(){
        log.info("verify register link" + registerTxt.toString());
        return registerTxt.getText();
    }
    public void setFemale(){
        clickOnElement(female);
        log.info("Select Female " + female.toString());
    }
    public void setFirstname(String name){
        sendTextToElement(firstname,name);
        log.info("Enter firstname" + firstname.toString());
    }
    public void setLastname(String lstname){
        sendTextToElement(lastName,lstname);
        log.info("Enter lastname " + lastName.toString());

    }
    public void setDateOfBirth(String dob){
        selectByVisibleTextFromDropDown(dateOfBirth,dob);
        log.info("Select date of birth" + dateOfBirth.toString());

    }
    public void setMonthOfBirth(String mob){
        selectByVisibleTextFromDropDown(monthOfBirth,mob);
        log.info("Select month of birth" + monthOfBirth.toString());

    }
    public void setYearOfBirth(String yob){
        selectByVisibleTextFromDropDown(yearOfBirth,yob);
        log.info("Select year of birth" + yearOfBirth.toString());

    }
    public void setEmail(String email){
        sendTextToElement(Email,email);
        log.info("Send Email " + Email.toString());

    }
    public void setPassword(String psw){
        sendTextToElement(Password,psw);
        log.info("Send password" + Password.toString());

    }
    public void setConfirmPassword(String conpsw){
        sendTextToElement(confirmPassword,conpsw);
        log.info("send confirm password" + confirmPassword.toString());

    }
    public void setRegisterButton()
    {
        clickOnElement(registerButton);
        log.info("click on register" + registerButton.toString());

    }
    public String verifyYourRegisterCompleteMessage(){
        getTextFromElement(yourRegisterCompleteMessageLink);
        log.info("verify Your registration completed "+yourRegisterCompleteMessageLink.toString());
        return yourRegisterCompleteMessageLink .getText();
    }

    public void setContinueButtonLink()
    {
        Reporter.log("click on continue button." +continueButtonLink + "<br>");
        clickOnElement(continueButtonLink);
        log.info("CLlick On Continue Button: " +continueButtonLink.toString());
    }
}
