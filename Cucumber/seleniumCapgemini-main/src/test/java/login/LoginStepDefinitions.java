package login;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import static org.assertj.core.api.Java6Assertions.assertThat;

public class LoginStepDefinitions {

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


    @And("I click on Pensões")
    public void click_pensoes() {

        WebElement pensoes_button = driver.findElement(By.xpath("//*[@id=\"M7645\"]"));
        actions.moveToElement(pensoes_button).click().perform();
    }

    @And("I click on Pensão de Velhice")
    public void click_pensoes_de_velhice() {

        WebElement pvelhice_button = driver.findElement(By.xpath("//*[@id=\"M7645-M7646-M7988\"]/a"));
        actions.moveToElement(pvelhice_button).click().perform();
    }

    @And("I click on Simular pensão de velhice")
    public void click_simular() {

        WebElement simulation_button = driver.findElement(By.xpath("//*[@id=\"formPassos:btnSipSimularVelhice\"]"));
        actions.moveToElement(simulation_button).click().perform();
    }

    @And("I click on Escolher simulação")
    public void click_choose_simulation() throws InterruptedException {

        Thread.sleep(1000);
        currentElement = driver.findElement(By.xpath("//*[@id=\"formPaginaPrincipal:menuButtonPrincipalSip\"]"));

        actions.moveToElement(currentElement).click().perform();

    }

    @And("I click on Pensão de velhice")
    public void click_velhice() {

        currentElement = driver.findElement(By.xpath("//*[@id=\"formPaginaPrincipal:menuButtonItemOne\"]"));
        actions.moveToElement(currentElement).click().perform();
    }

    @And("I select the date {word}")
    public void click_velhice(String date) throws ParseException, InterruptedException {

        Date _date = new SimpleDateFormat("dd/MM/yyyy").parse(date);

        Calendar calendar = Calendar.getInstance();

        calendar.setTime(_date);

        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int day = calendar.get(Calendar.DAY_OF_MONTH);

        Thread.sleep(1000);
        currentElement = driver.findElement(By.xpath("//*[@id=\"formPassos:calendarDataInicioPensao:calendar_input\"]"));
        currentElement.sendKeys(year + "-" + month + "-" + day);

        Thread.sleep(1000);
        currentElement = driver.findElement(By.xpath("//*[@id=\"formPassos:buttonProsseguir\"]"));
        actions.moveToElement(currentElement).click().perform();


    }

    @Then("^I should get (.*)$")
    public void invalid_date(String screen) {

        if (driver.findElement(By.xpath("//*[@id=\"frawWarnErrorFatalMsg\"]")) != null) {
            assertThat("an error message".equals(screen));
        }
        else {
            assertThat("aditional information".equals(screen));
        }

    }

    @Then("I click in salarios")
    public void salarios() throws InterruptedException {

        Thread.sleep(1000);
        currentElement = driver.findElement(By.xpath("//*[@id=\"formPassos:btnPassoSeguinte\"]"));
        actions.moveToElement(currentElement).click().perform();

    }

    @And("I add {int}€ to the year {int}")
    public void add_money_year(int money, int year) throws InterruptedException {

        Thread.sleep(1000);

        currentElement = driver.findElement(By.xpath("//*[@id=\"formPassos:sipAdicionaAnoNovo\"]"));
        actions.moveToElement(currentElement).click().perform();

        Thread.sleep(1000);

        currentElement = driver.findElement(By.xpath("//*[@id=\"formPassos:sipInputAnoNovo\"]"));
        currentElement.sendKeys(String.valueOf(year));

        Thread.sleep(1000);

        currentElement = driver.findElement(By.xpath("//*[@id=\"formPassos:sipInputValorNovo\"]"));
        currentElement.sendKeys(String.valueOf(money));

        Thread.sleep(1000);

        currentElement = driver.findElement(By.xpath("//*[@id=\"formPassos:sipEscolhaAno\"]"));
        actions.moveToElement(currentElement).click().perform();

        Thread.sleep(1000);

        currentElement = driver.findElement(By.xpath("//*[@id=\"formPassos:btnPassoSeguinte\"]"));
        actions.moveToElement(currentElement).click().perform();

    }

}
