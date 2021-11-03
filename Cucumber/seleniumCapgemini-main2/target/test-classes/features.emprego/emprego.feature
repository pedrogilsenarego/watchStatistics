Feature: emprego

  Scenario: logging in sucess
    Given I have a login screen
    When I write NISS 12042247770
    And I write password FML1987!Fdx
    Then I should see a new screen
    And I click on Emprego
    And I click on Carreira Contributiva
    And I click on Ver detalhe no ano de 2020
    And I click on Ver detalhe de Fevereiro
    And I change to the year of 2009
    Then I should get an error message


