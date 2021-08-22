package test.cucumber;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(strict=true,plugin = { "html:target/cucumber-html-report", "json:target/cucumber-json-report.json" } , monochrome = true )
public class RunCukesTest {

}