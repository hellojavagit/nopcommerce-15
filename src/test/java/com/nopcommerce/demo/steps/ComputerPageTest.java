package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DeskTopPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class ComputerPageTest {

    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new ComputerPage().clickOnComputer();
    }
    @Then("^I should able to verify \"([^\"]*)\" text$")
    public void iShouldAbleToVerifyText(String name) {
        new ComputerPage().getComputerTxt();
        Assert.assertEquals(name, new ComputerPage().getComputerTxt());
    }
    @When("^I click on Desktop tab$")
    public void iClickOnDesktopTab() {
        new ComputerPage().clickOnDesktopLink();
    }
    @And("^I click on \"([^\"]*)\"$")
    public void iClickOn(String arg0)  {
        new DeskTopPage().clickOnBuildYourOwnCom();

    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor)  {
        new BuildYourOwnComputerPage().setProcessor(processor);

    }

    @And("^I select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram)  {
        new BuildYourOwnComputerPage().setRam(ram);
    }
    @And("^I select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hdd)  {
        new BuildYourOwnComputerPage().setHDD(hdd);
    }
    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os)  {
        new BuildYourOwnComputerPage().setOs(os);
    }
    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software)  {
        new BuildYourOwnComputerPage().setSoftwareCheckBox(software);
    }
    @And("^I click on ADD TO CART Butoon$")
    public void iClickOnADDTOCARTButoon() {
        new BuildYourOwnComputerPage().setCartBtn();}
    @Then("^I should be able to verify message \"([^\"]*)\"$")
    public void iShouldBeAbleToVerifyMessage(String expected)  {
        Assert.assertEquals(expected, new BuildYourOwnComputerPage().setTextMsg());
    }

    @Then("^I should able to verify the \"([^\"]*)\" text$")
    public void iShouldAbleToVerifyTheText(String dName)  {
        System.out.println(new DeskTopPage().getDesktopTxt());
        Assert.assertEquals(dName,new DeskTopPage().getDesktopTxt());
    }

    @And("^I am in Computers Page$")
    public void iAmInComputersPage() {
    }
}

