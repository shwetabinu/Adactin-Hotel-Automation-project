// Generated from: features/cancel-hotel.feature
import { test } from "../../fixtures/index.ts";

test.describe('Cancel Hotel functionality', () => {

  test('To verify successful booking cancelation', { tag: ['@cancelHotel', '@cancelHotelBookedItinerary'] }, async ({ Given, When, Then, authenticatedLoginPage, bookedItineraryPage, bookHotelPage, bookingConfirmationPage, searchHotelPage, selectHotelPage }) => { 
    await Given('I am in the booked itinerary page and an existing order is present in the page', null, { authenticatedLoginPage, bookedItineraryPage, bookHotelPage, bookingConfirmationPage, searchHotelPage, selectHotelPage }); 
    await When('I select the newly booked order for cancelation and click on its cancel button', null, { bookedItineraryPage }); 
    await Then('The selected booked order should be canceled', null, { bookedItineraryPage }); 
  });

  test('To verify inflight cancelling by click on Cancel button from Book Hotel page after clicking on Continue button from Select Hotel Page', { tag: ['@cancelHotel', '@cancelHotelBookHotel'] }, async ({ Given, When, Then, authenticatedLoginPage, bookHotelPage, searchHotelPage, selectHotelPage }) => { 
    await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
    await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
    await When('The "search" button is clicked', null, { searchHotelPage }); 
    await When('I select the searched hotel', null, { selectHotelPage }); 
    await When('I click on cancel button from book hotel page', null, { bookHotelPage }); 
    await Then('User should be navigated to select hotel page', null, { selectHotelPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/cancel-hotel.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@cancelHotel","@cancelHotelBookedItinerary"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am in the booked itinerary page and an existing order is present in the page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I select the newly booked order for cancelation and click on its cancel button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then The selected booked order should be canceled","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@cancelHotel","@cancelHotelBookHotel"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I select the searched hotel","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I click on cancel button from book hotel page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to select hotel page","stepMatchArguments":[]}]},
]; // bdd-data-end