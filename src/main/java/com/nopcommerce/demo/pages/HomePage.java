package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(linkText = "Log in")
    WebElement loginLink;

    @FindBy(linkText = "Register")
    WebElement registerLink;

    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement logoLink;
    @FindBy(xpath = "//a[@class='ico-account']")
    WebElement myAccount;
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logOut;

    public void clickOnLoginLink(){
        clickOnElement(loginLink);
        log.info("click on cartButton " + loginLink.toString());
    }
    public void clickOnRegisterLink(){
        clickOnElement(registerLink);
        log.info("click on registerlink " + registerLink.toString());
    }
    public void clickOnMyAccount(){
        clickOnElement(myAccount);
        log.info("click on myAccount " + myAccount.toString());
    }
    public void clickOnLogOut(){
        Reporter.log("click on logout" +logOut + "<br>");
        clickOnElement(logOut);
        log.info("click on logout" + logOut.toString());
    }

    public String verifyLoginLink(){
        getTextFromElement(loginLink);
        log.info("click on loginlink" + loginLink.toString());
        return loginLink.getText();
    }


}
