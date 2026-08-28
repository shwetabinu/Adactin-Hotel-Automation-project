@login
Feature: Login Functionality

  @loginpositive
  Scenario: To verify if the user is able to login with valid credentials
    Given I navigate to the login page
    When I Login with "testuser135" and "513UI8" credentials
    Then Search Hotel Page should be displayed
    
  @loginnegative
 Scenario Outline: To verify if the user is able to login with "<scenarioname>"
    Given I navigate to the login page
    When I Login with "<username>" and "<password>" credentials
    Then Relevant "<error message>" should be displayed
    
    Examples:
       |scenarioname|username| password|error message|
       |Blank username and password |||Enter Username|
       |Blank username||password |Enter Username|
       |Blank passowrd |username||Enter Password|
       |Invalid credentials |username|password|Invalid Login details or Your Password might have expired. |


  # Exploring other ways to do login feature
  # @loginstored
  # Scenario: To verify if the user is able to login with valid credentials from a stored config file
  #   Given I navigate to the login page
  #   When I Login with stored valid credentials
  #   Then Search Hotel Page should be displayed

  # @loginstorednegative
  # Scenario Outline: To verify if the user is able to login with "<scenarioname>"
  #   Given I navigate to the login page
  #   When I login with invalid credentials of scenario type "<scenarioname>"
  #   Then Relevant "<error message>" should be displayed

  # Examples:
  # |scenarioname|error message|
  #  |Blank username and password|Enter Username|
  #  |Blank username|Enter Username|
  #  |Blank passowrd |Enter Password|
  #  |Invalid credentials|Invalid Login details or Your Password might have expired. |


    

