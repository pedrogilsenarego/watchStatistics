Feature: login

  Scenario Outline: logging in sucess
    Given I have a login screen
    When I write NISS <NISS>
    And I write password <PASSWORD>
    Then I should see a new screen
    And I click on Pensões
    And I click on Pensão de Velhice
    And I click on Simular pensão de velhice
    And I click on Escolher simulação
    And I click on Pensão de velhice
    And I select the date 23/11/2020
    Then I should get an error message

    Examples:
      | NISS | PASSWORD |
      | "user" | "password" |

  Scenario Outline: logging in sucess
    Given I have a login screen
    When I write NISS <NISS>
    And I write password <PASSWORD>
    Then I should see a new screen
    And I click on Pensões
    And I click on Pensão de Velhice
    And I click on Simular pensão de velhice
    And I click on Escolher simulação
    And I click on Pensão de velhice
    And I select the date 23/11/2032
    Then I should get aditional information
    And I click in salarios
    And I add <SALARIO>€ to the year <ANO>

    Examples:
      | NISS | PASSWORD | SALARIO | ANO  |
      | "user" | "password" | 20000   | 2021 |

  Scenario: logging in
    Given I have a login screen
    When I write NISS 123
    And I write password password
    Then I should see an error message