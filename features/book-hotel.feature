@bookHotel
Feature: Book hotel functionality

@bookHotelpositive
Scenario: To verify booking of a hotel by selecting the searched hotel
    Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "valid" test data
    When The "search" button is clicked
    When I select the searched hotel
    When I enter "valid" booking details
    When I click on book now button
    Then The booking confirmation page is displayed with the order id

@bookHotelnegative
Scenario Outline: To verify booking hotel for "<testDataType>"
    Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "valid" test data
    When The "search" button is clicked
    When I select the searched hotel
    When I enter "<testDataType>" booking details
    When I click on book now button
    Then Mandatory error messages should be displayed in book hotel page for "<testDataType>"
Examples:
|testDataType|
|blank fields|
|invalid credit card expiry date|
|incomplete credit card number|

