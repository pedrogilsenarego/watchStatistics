package emprego;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import static org.assertj.core.api.Java6Assertions.assertThat;

public class EmpregoStepDefinitions {

    private static WebElement currentElement;
    private static WebDriver driver;
    Actions actions;
    JavascriptExecutor js;

    @Given("I have a login screen")
    public void i_have_login_screen() {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromedriver.exe");
        driver = new ChromeDriver();

        driver.get("https://app.seg-social.pt/ptss");

        driver.manage().window().maximize();

        actions = new Actions(driver);

        js = (JavascriptExecutor) driver;

    }

    @When("I write NISS {word}")
    public void i_write_niss(String niss) {
        WebElement userNISS = driver.findElement(By.xpath("//*[@id=\"username\"]"));
        userNISS.sendKeys(niss);

    }

    @And("I write password {word}")
    public void i_write_pass(String pass) {

        WebElement password = driver.findElement(By.xpath("//*[@id=\"password\"]"));
        password.sendKeys(pass);

    }

    @Then("^I should see (.*)$")
    public void login_sucess(String outcome) {

        WebElement login_button = driver.findElement(By.xpath("//*[@id=\"credentials\"]/div[5]/input"));
        actions.moveToElement(login_button).click().perform();

        if (driver.getTitle().equals("Serviço de Autenticação da Segurança Social")) {
            assertThat(outcome.equals("an error message"));
        } else {
            assertThat(outcome.equals("a new page"));
        }

    }


    @And("I click on Emprego")
    public void click_emprego() {

        WebElement emprego_button = driver.findElement(By.xpath("//*[@id=\"M7612\"]"));
        actions.moveToElement(emprego_button).click().perform();
    }

    @And("I click on Carreira Contributiva")
    public void click_carreira_contributiva() {

        WebElement carreira_contributiva_button = driver.findElement(By.xpath("//*[@id=\"M7612-M7601-M8039\"]/a"));
        actions.moveToElement(carreira_contributiva_button).click().perform();
    }

    @And("I click on Ver detalhe no ano de 2020")
    public void ver_detalhe_2020() throws InterruptedException {

        WebElement ver_detalhe_2020_button = driver.findElement(By.xpath("//*[@id=\"mainForm:j_idt730:1:j_idt738\"]"));
        actions.moveToElement(ver_detalhe_2020_button).click().perform();
    }

}
