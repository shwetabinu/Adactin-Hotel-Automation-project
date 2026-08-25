// Generated from: features/searchHotel.feature
import { test } from "../../fixtures/index.ts";

test.describe('Search Hotel Functionality', () => {

  test('To verify search hotel functionality with all fields selected', { tag: ['@searchHotelValid'] }, async ({ Given, When, Then, authenticatedLoginPage, searchHotelPage }) => { 
    await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
    await When('I fill the search hotel form with "valid" test data', null, { searchHotelPage }); 
    await When('The "search" button is clicked', null, { searchHotelPage }); 
    await Then('Search results should be displayed', null, { searchHotelPage }); 
  });

  test('To verify search hotel without selecting any fields', { tag: ['@searchHotelInvalid'] }, async ({ Given, When, Then, authenticatedLoginPage, searchHotelPage }) => { 
    await Given('I am already logged into Adactin Hotel application', null, { authenticatedLoginPage }); 
    await When('I fill the search hotel form with "invalidBlank" test data', null, { searchHotelPage }); 
    await When('The "search" button is clicked', null, { searchHotelPage }); 
    await Then('Mandatory error messages should be displayed in search hotel page', null, { searchHotelPage }); 
  });

  test('To verify reset button in the Search Hotels page', async ({ Given, When, Then, authenticatedLoginPage, searchHotelPage }) => { 
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
  {"pwTestLine":6,"pickleLine":4,"tags":["@searchHotelValid"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Search results should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":11,"tags":["@searchHotelInvalid"],"steps":[{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"invalidBlank\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"invalidBlank\"","children":[{"start":35,"value":"invalidBlank","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The \"search\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"search\"","children":[{"start":5,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Mandatory error messages should be displayed in search hotel page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I am already logged into Adactin Hotel application","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I fill the search hotel form with \"valid\" test data","stepMatchArguments":[{"group":{"start":34,"value":"\"valid\"","children":[{"start":35,"value":"valid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When The \"reset\" button is clicked","stepMatchArguments":[{"group":{"start":4,"value":"\"reset\"","children":[{"start":5,"value":"reset","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then The results should be resetted","stepMatchArguments":[]}]},
]; // bdd-data-end