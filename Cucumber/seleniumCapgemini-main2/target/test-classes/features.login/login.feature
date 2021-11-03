Feature: login

  Scenario: logging in sucess
    Given I have a login screen
    When I write NISS 12031875008
    And I write password Ines26042001#
    Then I should see a new screen
    And I click on Pensões
    And I click on Pensão de Velhice
    And I click on Simular pensão de velhice
    And I click on Escolher simulação
    And I click on Pensão de velhice
    And I select the date 23/11/2020
    Then I should get an error message

  Scenario: logging in sucess
    Given I have a login screen
    When I write NISS 12031875008
    And I write password Ines26042001#
    Then I should see a new screen
    And I click on Pensões
    And I click on Pensão de Velhice
    And I click on Simular pensão de velhice
    And I click on Escolher simulação
    And I click on Pensão de velhice
    And I select the date 23/11/2032
    Then I should get aditional information
    And I click in salarios
    And I add 20000€ to the year 2021
    Then I should get an error message

  Scenario: logging in
    Given I have a login screen
    When I write NISS 123
    And I write password password
    Then I should see an error message

