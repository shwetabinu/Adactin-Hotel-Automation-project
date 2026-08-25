Feature: Book hotel functionality

@bookHotelpositive
Scenario: To verify booking of a hotel by selecting the searched hotel
    Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "valid" test data
    When The "search" button is clicked
    When I select the searched hotel
    When I enter the booking details
    When I click on book now button
    Then The booking confirmation page is displayed with the order id

@bookHotelnegative
Scenario: To verify booking hotel without filling mandatory fields
     Given I am already logged into Adactin Hotel application
    When I fill the search hotel form with "valid" test data
    When The "search" button is clicked
    When I select the searched hotel
    When I click on book now button
    Then Mandatory error messages should be displayed
