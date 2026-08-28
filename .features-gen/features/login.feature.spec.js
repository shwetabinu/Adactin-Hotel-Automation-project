// Generated from: features/login.feature
import { test } from "../../fixtures/index.ts";

test.describe('Login Functionality', () => {

  test('To verify if the user is able to login with valid credentials', { tag: ['@login', '@loginpositive'] }, async ({ Given, When, Then, loggedOutPage }) => { 
    await Given('I navigate to the login page', null, { loggedOutPage }); 
    await When('I Login with "testuser135" and "513UI8" credentials', null, { loggedOutPage }); 
    await Then('Search Hotel Page should be displayed', null, { loggedOutPage }); 
  });

  test.describe('To verify if the user is able to login with "<scenarioname>"', () => {

    test('To verify if the user is able to login with "Blank username and password"', { tag: ['@login', '@loginnegative'] }, async ({ Given, When, Then, loggedOutPage }) => { 
      await Given('I navigate to the login page', null, { loggedOutPage }); 
      await When('I Login with "" and "" credentials', null, { loggedOutPage }); 
      await Then('Relevant "Enter Username" should be displayed', null, { loggedOutPage }); 
    });

    test('To verify if the user is able to login with "Blank username"', { tag: ['@login', '@loginnegative'] }, async ({ Given, When, Then, loggedOutPage }) => { 
      await Given('I navigate to the login page', null, { loggedOutPage }); 
      await When('I Login with "" and "password" credentials', null, { loggedOutPage }); 
      await Then('Relevant "Enter Username" should be displayed', null, { loggedOutPage }); 
    });

    test('To verify if the user is able to login with "Blank passowrd"', { tag: ['@login', '@loginnegative'] }, async ({ Given, When, Then, loggedOutPage }) => { 
      await Given('I navigate to the login page', null, { loggedOutPage }); 
      await When('I Login with "username" and "" credentials', null, { loggedOutPage }); 
      await Then('Relevant "Enter Password" should be displayed', null, { loggedOutPage }); 
    });

    test('To verify if the user is able to login with "Invalid credentials"', { tag: ['@login', '@loginnegative'] }, async ({ Given, When, Then, loggedOutPage }) => { 
      await Given('I navigate to the login page', null, { loggedOutPage }); 
      await When('I Login with "username" and "password" credentials', null, { loggedOutPage }); 
      await Then('Relevant "Invalid Login details or Your Password might have expired." should be displayed', null, { loggedOutPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@login","@loginpositive"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I Login with \"testuser135\" and \"513UI8\" credentials","stepMatchArguments":[{"group":{"start":13,"value":"\"testuser135\"","children":[{"start":14,"value":"testuser135","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"513UI8\"","children":[{"start":32,"value":"513UI8","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Search Hotel Page should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":18,"tags":["@login","@loginnegative"],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I Login with \"\" and \"\" credentials","stepMatchArguments":[{"group":{"start":13,"value":"\"\"","children":[{"start":14,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":20,"value":"\"\"","children":[{"start":21,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Relevant \"Enter Username\" should be displayed","stepMatchArguments":[{"group":{"start":9,"value":"\"Enter Username\"","children":[{"start":10,"value":"Enter Username","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":19,"tags":["@login","@loginnegative"],"steps":[{"pwStepLine":21,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I Login with \"\" and \"password\" credentials","stepMatchArguments":[{"group":{"start":13,"value":"\"\"","children":[{"start":14,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":20,"value":"\"password\"","children":[{"start":21,"value":"password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Relevant \"Enter Username\" should be displayed","stepMatchArguments":[{"group":{"start":9,"value":"\"Enter Username\"","children":[{"start":10,"value":"Enter Username","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":20,"tags":["@login","@loginnegative"],"steps":[{"pwStepLine":27,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I Login with \"username\" and \"\" credentials","stepMatchArguments":[{"group":{"start":13,"value":"\"username\"","children":[{"start":14,"value":"username","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"\"","children":[{"start":29,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Relevant \"Enter Password\" should be displayed","stepMatchArguments":[{"group":{"start":9,"value":"\"Enter Password\"","children":[{"start":10,"value":"Enter Password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":21,"tags":["@login","@loginnegative"],"steps":[{"pwStepLine":33,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I Login with \"username\" and \"password\" credentials","stepMatchArguments":[{"group":{"start":13,"value":"\"username\"","children":[{"start":14,"value":"username","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"password\"","children":[{"start":29,"value":"password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Relevant \"Invalid Login details or Your Password might have expired.\" should be displayed","stepMatchArguments":[{"group":{"start":9,"value":"\"Invalid Login details or Your Password might have expired.\"","children":[{"start":10,"value":"Invalid Login details or Your Password might have expired.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end