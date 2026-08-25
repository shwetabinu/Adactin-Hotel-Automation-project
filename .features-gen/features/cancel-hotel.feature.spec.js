// Generated from: features/cancel-hotel.feature
import { test } from "../../fixtures/index.ts";

test.describe('Cancel Hotel functionality', () => {

  test('To verify successful booking cancelation', { tag: ['@cancelHotel'] }, async ({ Given, When, Then, bookedItineraryPage }) => { 
    await Given('I am in the booked itinerary page and an existing order is present in the page', null, { bookedItineraryPage }); 
    await When('I select the order for cancelation and click on cancel button for "orderid"', null, { bookedItineraryPage }); 
    await Then('The booked order "string" should be canceled', null, { bookedItineraryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/cancel-hotel.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@cancelHotel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am in the booked itinerary page and an existing order is present in the page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I select the order for cancelation and click on cancel button for \"orderid\"","stepMatchArguments":[{"group":{"start":66,"value":"\"orderid\"","children":[{"start":67,"value":"orderid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then The booked order \"string\" should be canceled","stepMatchArguments":[{"group":{"start":17,"value":"\"string\"","children":[{"start":18,"value":"string","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end