// Generated from: features/searchHotel.feature
import { test } from "../../fixtures/index.ts";

test.describe('Search Hotel Functionality', () => {

  test.describe('To verify search hotel functionality for <testDataType> form fields', () => {

    test('To verify search hotel functionality for valid form fields', { tag: ['@searchHotel', '@searchHotelPositive'] }, async ({ Given, When, Then, authenticatedLoginPage, searchHotelPage }) => { 
      await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
      await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
      await When('The "search" button is clicked', null, { searchHotelPage }); 
      await Then('Search results should be displayed', null, { searchHotelPage }); 
    });

    test('To verify search hotel functionality for mandatory form fields', { tag: ['@searchHotel', '@searchHotelPositive'] }, async ({ Given, When, Then, authenticatedLoginPage, searchHotelPage }) => { 
      await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
      await When('I fill the search hotel form with "mandatory" test data', null, { searchHotelPage }); 
      await When('The "search" button is clicked', null, { searchHotelPage }); 
      await Then('Search results should be displayed', null, { searchHotelPage }); 
    });

  });

  test.describe('To verify search hotel functionality for <searchCriteria>', () => {

    test('To verify search hotel functionality for same check in and check out', { tag: ['@searchHotel', '@searchHotelInvalid'] }, async ({ Given, When, Then, authenticatedLoginPage, searchHotelPage }) => { 
      await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
      await When('I fill the search hotel form with "same check in and check out" test data', null, { searchHotelPage }); 
      await When('The "search" button is clicked', null, { searchHotelPage }); 
      await Then('Mandatory error message should be displayed for "same check in and check out"', null, { searchHotelPage }); 
    });

    test('To verify search hotel functionality for past checkout', { tag: ['@searchHotel', '@searchHotelInvalid'] }, async ({ Given, When, Then, authenticatedLoginPage, searchHotelPage }) => { 
      await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
      await When('I fill the search hotel form with "past checkout" test data', null, { searchHotelPage }); 
      await When('The "search" button is clicked', null, { searchHotelPage }); 
      await Then('Mandatory error message should be displayed for "past checkout"', null, { searchHotelPage }); 
    });

    test('To verify search hotel functionality for blank fields', { tag: ['@searchHotel', '@searchHotelInvalid'] }, async ({ Given, When, Then, authenticatedLoginPage, searchHotelPage }) => { 
      await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
      await When('I fill the search hotel form with "blank fields" test data', null, { searchHotelPage }); 
      await When('The "search" button is clicked', null, { searchHotelPage }); 
      await Then('Mandatory error message should be displayed for "blank fields"', null, { searchHotelPage }); 
    });

  });

  test('To verify reset button in the Search Hotels page', { tag: ['@searchHotel', '@resetSearchedFields'] }, async ({ Given, When, Then, authenticatedLoginPage, searchHotelPage }) => { 
    await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
    await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
    await When('The "reset" button is clicked', null, { searchHotelPage }); 
    await Then('The results should be resetted', null, { searchHotelPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/searchHotel.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":12,"tags":["@searchHotel","@searchHotelPositive"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Search results should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@searchHotel","@searchHotelPositive"],"steps":[{"pwStepLine":16,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"mandatory\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"mandatory\"","children":[{"start":35,"value":"mandatory","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Search results should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":24,"tags":["@searchHotel","@searchHotelInvalid"],"steps":[{"pwStepLine":27,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"same check in and check out\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"same check in and check out\"","children":[{"start":35,"value":"same check in and check out","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Mandatory error message should be displayed for \"same check in and check out\"","stepMatchArguments":[{"group":{"start":48,"value":"\"same check in and check out\"","children":[{"start":49,"value":"same check in and check out","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":25,"tags":["@searchHotel","@searchHotelInvalid"],"steps":[{"pwStepLine":34,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"past checkout\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"past checkout\"","children":[{"start":35,"value":"past checkout","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Mandatory error message should be displayed for \"past checkout\"","stepMatchArguments":[{"group":{"start":48,"value":"\"past checkout\"","children":[{"start":49,"value":"past checkout","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":26,"tags":["@searchHotel","@searchHotelInvalid"],"steps":[{"pwStepLine":41,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"blank fields\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"blank fields\"","children":[{"start":35,"value":"blank fields","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Mandatory error message should be displayed for \"blank fields\"","stepMatchArguments":[{"group":{"start":48,"value":"\"blank fields\"","children":[{"start":49,"value":"blank fields","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":49,"pickleLine":29,"tags":["@searchHotel","@resetSearchedFields"],"steps":[{"pwStepLine":50,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When The \"reset\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"reset\"","children":[{"start":5,"value":"reset","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then The results should be resetted","stepMatchArguments":[]}]},
]; // bdd-data-end