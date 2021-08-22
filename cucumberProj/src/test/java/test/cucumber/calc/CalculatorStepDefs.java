package test.cucumber.calc;
import static org.junit.Assert.assertEquals;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.*;

public class CalculatorStepDefs {
	private Calculator calc;
	private int res;
	
	WebDriver driver = null;
	
	@Given("chrome browser is open")
	public void chrome_browser_is_open() throws InterruptedException {

		System.out.println("Inside step-browser is open");
		
		String projectPath=System.getProperty("user.dir");
		System.out.println("Project path is:"+projectPath);
		System.setProperty("webdriver.chrome.driver",projectPath+"/src/test/resources/ChromeDriver/chromedriver.exe");
		
		driver = new ChromeDriver();
		
		driver.manage().timeouts().implicitlyWait(40,TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(40,TimeUnit.SECONDS);
		
		driver.manage().window().maximize();
		Thread.sleep(1000);
	}
	
	@And("user is on google search page")
	public void user_is_on_google_search_page() throws InterruptedException {
		
		System.out.println("user is on google search page");
		driver.navigate().to("https://google.com");
		Thread.sleep(1000);
	}
	
	@When("user enters url in search box")
	public void user_enters_url_in_search_box() throws InterruptedException {
		System.out.println("user enters url in search box");
		driver.findElement(By.name("q")).sendKeys("https://www.calculator.net");
	Thread.sleep(1000);
	}
	
	@And("hits enter")
	public void hits_enter() throws InterruptedException{
		System.out.println("hits enter");
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
		Thread.sleep(1000);
	}
	
	@Then("user is navigated to online calculator site")
	public void user_is_navigated_to_online_calculator_site() throws InterruptedException {
		driver.navigate().to("https://www.calculator.net");
		Thread.sleep(1000);
	}
	
	  
	 @Given("I have a calculator with add {int} {int}")
	 public void i_have_a_calc_with_add(int int1, int int2) {
		 calc = new Calculator(int1, int2);
		 }


	@When("I ask it to say add")
	  public void I_ask_it_to_say_add() throws Throwable {
	    res = calc.add();
	   
	  }

	  @Then("it should answer with add {int}")
	  public void it_should_answer_with_add(int expectedRes) throws Throwable {
	    assertEquals(res, expectedRes, expectedRes);
	    System.out.println(res);
	    
	  }
	  
	  @Given("I have a calculator with subtract {int} {int}")
		 public void i_have_a_calc_with_subtract(int int1, int int2) {
			 calc = new Calculator(int1, int2);
			}
	  @When("I ask it to say subtract")
	  public void I_ask_it_to_say_subtract() throws Throwable {
	    res = calc.subtract();
	  }

	  @Then("it should answer with sub {int}")
	  public void it_should_answer_with_sub(int expectedRes) throws Throwable {
	   assertEquals(res, expectedRes, expectedRes);
	  }

	  @Given("I have a calculator with multiply {int} {int}")
		 public void i_have_a_calc_with_multiply(int int1, int int2) {
			 calc = new Calculator(int1, int2);
			}
	  @When("I ask it to say multiply")
	  public void I_ask_it_to_say_multiply() throws Throwable {
	    res = calc.multiply();
	  }
	  
	  @Then("it should answer with mul {int}")
	  public void it_should_answer_with_mul(int expectedRes) throws Throwable {
	    assertEquals(expectedRes, res);
	  }
	  
	  @Given("I have a calculator with divide {int} {int}")
		 public void i_have_a_calc_with_divide(int int1, int int2) {
			 calc = new Calculator(int1, int2);
			}

	  @When("I ask it to say divide")
	  public void I_ask_it_to_say_divide() throws Throwable {
	    res = calc.divison();
	  }

	  @Then("it should answer with div {int}")
	  public void it_should_answer_with_div(int expectedRes) throws Throwable {
	    assertEquals(expectedRes, res);
	  }
	

}