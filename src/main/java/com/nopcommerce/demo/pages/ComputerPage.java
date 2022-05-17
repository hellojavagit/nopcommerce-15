package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath = "//h1[text()='Computers']")
    WebElement computerTxt;
    @FindBy(id = "Computers")
    WebElement computerLink;
    @FindBy(id = "Desktops")
    WebElement desktopLink;
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Notebooks')]")
    WebElement notebookLink;
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Software')]")
    WebElement softwareLink;

    public String getComputerTxt() {
        getTextFromElement(computerTxt);
        log.info("verify computer text " + computerTxt.toString());
        return computerTxt.getText();
    }

    public void clickOnComputer() {
        mouseHoverToElement(computerLink);
        log.info("click on computer loginLink " + computerLink.toString());
    }

    public void clickOnDesktopLink() {
        clickOnElement(desktopLink);
        log.info("click on desktopLink " + desktopLink.toString());
    }

    public void clickOnNoteBooklink() {
        clickOnElement(notebookLink);
        log.info("click on notebook link " + notebookLink.toString());
    }

    public void ClickOnSoftwareLink() {
        clickOnElement(softwareLink);
        log.info("click on softwareLink" + softwareLink.toString());
    }
}
