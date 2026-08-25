Feature: Cancel Hotel functionality

@cancelHotel
Scenario: To verify successful booking cancelation
Given I am in the booked itinerary page and an existing order is present in the page
When I select the order for cancelation and click on cancel button
Then The booked order should be canceled