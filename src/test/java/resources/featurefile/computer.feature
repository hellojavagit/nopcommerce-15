Feature: computer Page Test
  As  a user I should choose to build my own computer

  Background:User is in homepage
@smoke,@sanity,@regression
  Scenario:  As a user I should navigate to computer page successfully
  Given Iam on homepage
  When I click on computer tab
  And I am in Computers Page
  Then I should able to verify "Computers" text
@smoke,@regression
Scenario:  As a user I should navigate to desktops page successfully

  When I click on Desktop tab
  Then I should able to verify the "Desktops" text
@regression
Scenario Outline:  As a user I should be able to build my own computer
  When I click on Desktop tab
  And I click on "build your own computer"
  And I select processor "<processor>"
  And I select RAM "<ram>"
  And I select HDD "<hdd>"
  And I select OS "<os>"
  And I select Software "<software>"
  And I click on ADD TO CART Butoon
  Then I should be able to verify message "The product has been added to your shopping cart"

  Examples:
  |processor                                      |ram           |hdd                |os                        | software                |
  |2.2 GHz Intel Pentium Dual-Core E2200          | 2GB          | 320Gb             |Vista Home [+$50.00       |Microsoft Office [+$50.00]|
  |2.5GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00]|400 GB [+$100.00]  |Vista Premium [+$60.00]   |Vista Premium [+$60.00]  |
  |2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]| 8GB [+$60.00]| 320 GB            |Vista Home [+$50.00]    | Total Commander [+$5.00] |
