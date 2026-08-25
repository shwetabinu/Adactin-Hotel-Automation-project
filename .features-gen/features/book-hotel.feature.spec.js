// Generated from: features/book-hotel.feature
import { test } from "../../fixtures/index.ts";

test.describe('Book hotel functionality', () => {

  test('To verify booking of a hotel by selecting the searched hotel', { tag: ['@bookHotelpositive'] }, async ({ Given, When, Then, authenticatedLoginPage, bookHotelPage, bookingConfirmationPage, searchHotelPage, selectHotelPage }) => { 
    await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
    await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
    await When('The "search" button is clicked', null, { searchHotelPage }); 
    await When('I select the searched hotel', null, { selectHotelPage }); 
    await When('I enter the booking details', null, { bookHotelPage }); 
    await When('I click on book now button', null, { bookHotelPage }); 
    await Then('The booking confirmation page is displayed with the order id', null, { bookingConfirmationPage }); 
  });

  test('To verify booking hotel without filling mandatory fields', { tag: ['@bookHotelnegative'] }, async ({ Given, When, Then, authenticatedLoginPage, bookHotelPage, searchHotelPage, selectHotelPage }) => { 
    await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
    await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
    await When('The "search" button is clicked', null, { searchHotelPage }); 
    await When('I select the searched hotel', null, { selectHotelPage }); 
    await When('I click on book now button', null, { bookHotelPage }); 
    await Then('Mandatory error messages should be displayed in book hotel page', null, { bookHotelPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/book-hotel.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@bookHotelpositive"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I select the searched hotel","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I enter the booking details","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click on book now button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then The booking confirmation page is displayed with the order id","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@bookHotelnegative"],"steps":[{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I select the searched hotel","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I click on book now button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Mandatory error messages should be displayed in book hotel page","stepMatchArguments":[]}]},
]; // bdd-data-end