Feature: Automate online Calculator

  Scenario: Automate calculator
    Given chrome browser is open
    And user is on google search page
    When user enters url in search box
    And  hits enter
    Then user is navigated to online calculator site
  
  
    
  Scenario: calculate add
        Given I have a calculator with add -234234 345345
        When I ask it to say add
        Then it should answer with add 111111
        
       Scenario: calculate subtract
        Given I have a calculator with subtract 234823 -23094823
        When I ask it to say subtract
        Then it should answer with sub 23329646 

    Scenario: calculate multiply
        Given I have a calculator with multiply 423 525
        When I ask it to say multiply
        Then it should answer with mul 222075 

    Scenario: calculate divide
        Given I have a calculator with divide 4000 200
        When I ask it to say divide
        Then it should answer with div 20   