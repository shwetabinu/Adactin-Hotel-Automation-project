// Generated from: features/book-hotel.feature
import { test } from "../../fixtures/index.ts";

test.describe('Book hotel functionality', () => {

  test('To verify booking of a hotel by selecting the searched hotel', { tag: ['@bookHotel', '@bookHotelpositive'] }, async ({ Given, When, Then, authenticatedLoginPage, bookHotelPage, bookingConfirmationPage, searchHotelPage, selectHotelPage }) => { 
    await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
    await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
    await When('The "search" button is clicked', null, { searchHotelPage }); 
    await When('I select the searched hotel', null, { selectHotelPage }); 
    await When('I enter "valid" booking details', null, { bookHotelPage }); 
    await When('I click on book now button', null, { bookHotelPage }); 
    await Then('The booking confirmation page is displayed with the order id', null, { bookingConfirmationPage }); 
  });

  test.describe('To verify booking hotel for <testDataType>', () => {

    test('To verify booking hotel for blank fields', { tag: ['@bookHotel', '@bookHotelnegative'] }, async ({ Given, When, Then, authenticatedLoginPage, bookHotelPage, searchHotelPage, selectHotelPage }) => { 
      await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
      await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
      await When('The "search" button is clicked', null, { searchHotelPage }); 
      await When('I select the searched hotel', null, { selectHotelPage }); 
      await When('I enter "blank fields" booking details', null, { bookHotelPage }); 
      await When('I click on book now button', null, { bookHotelPage }); 
      await Then('Mandatory error messages should be displayed in book hotel page for "blank fields"', null, { bookHotelPage }); 
    });

    test('To verify booking hotel for invalid credit card expiry date', { tag: ['@bookHotel', '@bookHotelnegative'] }, async ({ Given, When, Then, authenticatedLoginPage, bookHotelPage, searchHotelPage, selectHotelPage }) => { 
      await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
      await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
      await When('The "search" button is clicked', null, { searchHotelPage }); 
      await When('I select the searched hotel', null, { selectHotelPage }); 
      await When('I enter "invalid credit card expiry date" booking details', null, { bookHotelPage }); 
      await When('I click on book now button', null, { bookHotelPage }); 
      await Then('Mandatory error messages should be displayed in book hotel page for "invalid credit card expiry date"', null, { bookHotelPage }); 
    });

    test('To verify booking hotel for incomplete credit card number', { tag: ['@bookHotel', '@bookHotelnegative'] }, async ({ Given, When, Then, authenticatedLoginPage, bookHotelPage, searchHotelPage, selectHotelPage }) => { 
      await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
      await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
      await When('The "search" button is clicked', null, { searchHotelPage }); 
      await When('I select the searched hotel', null, { selectHotelPage }); 
      await When('I enter "incomplete credit card number" booking details', null, { bookHotelPage }); 
      await When('I click on book now button', null, { bookHotelPage }); 
      await Then('Mandatory error messages should be displayed in book hotel page for "incomplete credit card number"', null, { bookHotelPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/book-hotel.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@bookHotel","@bookHotelpositive"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I select the searched hotel","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I enter \"valid\" booking details","stepMatchArguments":[{"group":{"start":8,"value":"\"valid\"","children":[{"start":9,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I click on book now button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then The booking confirmation page is displayed with the order id","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":25,"tags":["@bookHotel","@bookHotelnegative"],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I select the searched hotel","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I enter \"blank fields\" booking details","stepMatchArguments":[{"group":{"start":8,"value":"\"blank fields\"","children":[{"start":9,"value":"blank fields","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on book now button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Mandatory error messages should be displayed in book hotel page for \"blank fields\"","stepMatchArguments":[{"group":{"start":68,"value":"\"blank fields\"","children":[{"start":69,"value":"blank fields","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":26,"tags":["@bookHotel","@bookHotelnegative"],"steps":[{"pwStepLine":29,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I select the searched hotel","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I enter \"invalid credit card expiry date\" booking details","stepMatchArguments":[{"group":{"start":8,"value":"\"invalid credit card expiry date\"","children":[{"start":9,"value":"invalid credit card expiry date","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on book now button","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Mandatory error messages should be displayed in book hotel page for \"invalid credit card expiry date\"","stepMatchArguments":[{"group":{"start":68,"value":"\"invalid credit card expiry date\"","children":[{"start":69,"value":"invalid credit card expiry date","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":27,"tags":["@bookHotel","@bookHotelnegative"],"steps":[{"pwStepLine":39,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I select the searched hotel","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I enter \"incomplete credit card number\" booking details","stepMatchArguments":[{"group":{"start":8,"value":"\"incomplete credit card number\"","children":[{"start":9,"value":"incomplete credit card number","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on book now button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Mandatory error messages should be displayed in book hotel page for \"incomplete credit card number\"","stepMatchArguments":[{"group":{"start":68,"value":"\"incomplete credit card number\"","children":[{"start":69,"value":"incomplete credit card number","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end