package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DeskTopPage extends Utility {
    private static final Logger log = LogManager.getLogger(DeskTopPage.class.getName());

    public DeskTopPage(){
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//h1[normalize-space()='Desktops']")
    WebElement desktopTxt;
    @FindBy(xpath = "//span[contains(text(),'Sort by')]")
    WebElement sortBy;
    @FindBy(xpath = "//span[contains(text(),'Display')]")
    WebElement display;
    @FindBy(xpath = "//a[contains(text(),'List')]")
    WebElement productList;
    @FindBy(linkText = "Build your own computer")
    WebElement BldComputerLnk;


    public String getDesktopTxt(){
        getTextFromElement(desktopTxt);
        log.info("verify Desktop Text " + desktopTxt.toString());
        return desktopTxt.getText();
    }
    public void clickOnSortBy(){
        clickOnElement(sortBy);
        log.info("click on sortBy " + sortBy.toString());
    }
    public void clickOnDisplay(){
        clickOnElement(display);
        log.info("click on display " + display.toString());

    }
    public void setProductList(){
        clickOnElement(productList);
        log.info("click on productList" + productList.toString());
    }
    public void clickOnBuildYourOwnCom() {
        clickOnElement(BldComputerLnk);
        log.info("click on Build On Your Own Computer: "+BldComputerLnk.toString());
    }
}
