Feature: Search Hotel Functionality

Scenario: To verify search hotel functionality with all fields selected
    Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "valid" test data
    When The "search" button is clicked
    Then Search results should be displayed


Scenario: To verify search hotel without selecting any fields
    Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "invalidBlank" test data
    When The "search" button is clicked
    Then Mandatory error messages should be displayed

Scenario: To verify reset button in the Search Hotels page
    Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "valid" test data
    When The "reset" button is clicked
    Then The results should be resetted

# Scenario: To verify dropdown values of each field in the Search Hotel page
#     Given I am already logged into Adactin Hotel application
#     When I capture the dropdown values of each field
#     Then The dropdown values are as expected