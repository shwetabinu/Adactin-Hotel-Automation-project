@searchHotel
Feature: Search Hotel Functionality

@searchHotelPositive
Scenario Outline: To verify search hotel functionality for <testDataType> form fields
    Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "<testDataType>" test data
    When The "search" button is clicked
    Then Search results should be displayed
Examples:
|testDataType|
|valid|
|mandatory| 

@searchHotelInvalid
Scenario Outline: To verify search hotel functionality for <searchCriteria>
    Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "<searchCriteria>" test data
    When The "search" button is clicked
    Then Mandatory error message should be displayed for "<searchCriteria>"
    
    Examples:
    |searchCriteria|
    |same check in and check out|
    |past checkout|
    |blank fields|

@resetSearchedFields
Scenario: To verify reset button in the Search Hotels page
    Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "valid" test data
    When The "reset" button is clicked
    Then The results should be resetted
