@cancelHotel
Feature: Cancel Hotel functionality

@cancelHotelBookedItinerary
Scenario: To verify successful booking cancelation
Given I am in the booked itinerary page and an existing order is present in the page
When I select the first order for cancelation and click on its cancel button
Then The selected booked order should be canceled

@cancelHotelBookHotel
Scenario: To verify inflight cancelling by click on Cancel button from Book Hotel page after clicking on Continue button from Select Hotel Page
 Given I am already logged into Adactin Hotel application
 When I fill the search hotel form with "valid" test data
 When The "search" button is clicked
 When I select the searched hotel
 When I click on cancel button from book hotel page
 Then User should be navigated to select hotel page
