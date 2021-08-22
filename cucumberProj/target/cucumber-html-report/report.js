$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:test/cucumber/calc/calc.feature");
formatter.feature({
  "name": "Automate online Calculator",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Automate calculator",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "chrome browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.chrome_browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.user_is_on_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters url in search box",
  "keyword": "When "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.user_enters_url_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.hits_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to online calculator site",
  "keyword": "Then "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.user_is_navigated_to_online_calculator_site()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "calculate add",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a calculator with add -234234 345345",
  "keyword": "Given "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.i_have_a_calc_with_add(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask it to say add",
  "keyword": "When "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.I_ask_it_to_say_add()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should answer with add 111111",
  "keyword": "Then "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.it_should_answer_with_add(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "calculate subtract",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a calculator with subtract 234823 -23094823",
  "keyword": "Given "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.i_have_a_calc_with_subtract(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask it to say subtract",
  "keyword": "When "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.I_ask_it_to_say_subtract()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should answer with sub 23329646",
  "keyword": "Then "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.it_should_answer_with_sub(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "calculate multiply",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a calculator with multiply 423 525",
  "keyword": "Given "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.i_have_a_calc_with_multiply(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask it to say multiply",
  "keyword": "When "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.I_ask_it_to_say_multiply()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should answer with mul 222075",
  "keyword": "Then "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.it_should_answer_with_mul(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "calculate divide",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a calculator with divide 4000 200",
  "keyword": "Given "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.i_have_a_calc_with_divide(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask it to say divide",
  "keyword": "When "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.I_ask_it_to_say_divide()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should answer with div 20",
  "keyword": "Then "
});
formatter.match({
  "location": "test.cucumber.calc.CalculatorStepDefs.it_should_answer_with_div(int)"
});
formatter.result({
  "status": "passed"
});
});