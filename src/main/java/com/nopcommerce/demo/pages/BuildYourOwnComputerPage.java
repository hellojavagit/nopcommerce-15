package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement buildComPTxt;
    @CacheLookup
    @FindBy(xpath = "//select[@name='product_attribute_1']")
    WebElement processor;
    @CacheLookup
    @FindBy(id = "product_attribute_2")
    WebElement ram;
    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_3']//li/label")
    List<WebElement> hDD;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_4']//li/label")
    List<WebElement> oS;
    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_5']//li/label")
    List<WebElement> software;
    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Add to cart')]")
    WebElement cartBtn;
    @CacheLookup
    @FindBy(xpath = "//p[contains(text(),'The product has been added to your')]")
    WebElement textMsg;

    public void setBuildComPTxt() {
        clickOnElement(buildComPTxt);
        log.info("Click on Build Your Own Button" + buildComPTxt.toString());
    }

    public void setProcessor(String processors) {
        clickOnElement(processor);
        log.info("set Processor " + processor.toString());
    }

    public void setRam(String rams) {
        selectByVisibleTextFromDropDown(ram, rams);
        log.info("set Ram " + ram.toString());
    }
    public void setHDD(String hdd) {
        for (WebElement h : hDD) {
            System.out.println(h.getText());
            if (h.getText().equalsIgnoreCase(hdd)) {
                clickOnElement(h);
                h.click();
            }
            log.info("set HDD " + h.toString());
        }

    }

    public void setOs(String oSP) {
        for (WebElement o : oS) {
            if (o.getText().equalsIgnoreCase(oSP)) {
                o.click();
            }
            log.info("select Os" + o.toString());
        }

    }

    public void setSoftwareCheckBox(String s) {
        for (WebElement soft : software) {
            if (soft.getText().equalsIgnoreCase(s)) {
                soft.click();
            }
            log.info("select software check box" + soft.toString());
        }

    }

    public void setCartBtn() {
        clickOnElement(cartBtn);
        log.info("click on cartButton " + cartBtn.toString());
    }
    public String setTextMsg() {
        log.info("The product has been added to your shopping cart" + textMsg.toString());
        return textMsg.getText();
    }
    public void setDesktopFeatures(String processor, String ram, String HDD, String Os, String softwareCheckBox) throws InterruptedException {
        setProcessor(processor);
        setRam(ram);
        setHDD(HDD);
        setOs(Os);
        setSoftwareCheckBox(softwareCheckBox);
    }

}

