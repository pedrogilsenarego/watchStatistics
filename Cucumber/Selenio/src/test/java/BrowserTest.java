import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;


import org.openqa.selenium.JavascriptExecutor;

public class BrowserTest {

    public static void main(String[] args) throws InterruptedException {

        System.setProperty("webdriver.chrome.driver", "drivers\\chromeDriver\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        driver.get("https://app.seg-social.pt/ptss");

        //Write username
        WebElement currentElement = driver.findElement(By.id("username"));
        currentElement.sendKeys("12042247770");

        //Write Password
        currentElement = driver.findElement(By.id("password"));
        currentElement.sendKeys("FML1987!Fdx");

        //Click Login
        currentElement = driver.findElement(By.name("submitBtn"));
        currentElement.click();

        Actions actions = new Actions(driver);

        currentElement = driver.findElement(By.id("M7645"));
        actions.moveToElement(currentElement).perform();


        currentElement = driver.findElement(By.id("M7645-M7646-M7988")).findElement(By.className("titulo-item"));
        actions.moveToElement(currentElement).click().perform();

        currentElement = driver.findElement(By.id("formPassos:btnSipSimularVelhice"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0, 1000)","");
        actions.click(currentElement).perform();

        Thread.sleep(2000);

        js.executeScript("window.scrollBy(0, 1000)","");

        Thread.sleep(2000);

        WebElement button = driver.findElement(By.id("formPaginaPrincipal:menuButtonPrincipalSip_button"));
        actions.moveToElement(button).click().perform();

        Thread.sleep(2000);

        currentElement = driver.findElement(By.id("formPaginaPrincipal:menuButtonItemOne"));
        actions.click(currentElement).perform();

        Thread.sleep(2000);

        js.executeScript("window.scrollBy(0, 1000)","");

        Thread.sleep(2000);

        currentElement = driver.findElement(By.id("formPassos:calendarDataInicioPensao:calendar_input"));
        actions.click(currentElement).perform();

        currentElement.sendKeys("20650101");

        currentElement = driver.findElement(By.id("formPassos:buttonProsseguir"));
        actions.click(currentElement).perform();

        js.executeScript("window.scrollBy(0, 1000)","");

        Thread.sleep(2000);

        currentElement = driver.findElement(By.id("formPassos:btnPassoSeguinte"));
        actions.click(currentElement).perform();

        js.executeScript("window.scrollBy(0, 1000)","");

        Thread.sleep(2000);

        currentElement = driver.findElement(By.id("formPassos:sipAdicionaAnoNovo"));
        actions.click(currentElement).perform();

        currentElement = driver.findElement(By.id("formPassos:btnPassoSeguinte"));
        actions.click(currentElement).perform();

        js.executeScript("window.scrollBy(0, 1000)","");

        Thread.sleep(2000);


        currentElement = driver.findElement(By.id("formPassos:sipInputAnoNovo"));
        actions.click(currentElement).perform();

        currentElement.sendKeys("2014");

        currentElement = driver.findElement(By.id("formPassos:sipInputValorNovo"));
        actions.click(currentElement).perform();

        currentElement.sendKeys("10000");

        currentElement = driver.findElement(By.id("formPassos:sipEscolhaAno"));
        actions.click(currentElement).perform();







        js.executeScript("window.scrollBy(0, 1000)","");

        Thread.sleep(2000);

        currentElement = driver.findElement(By.id("formPassos:btnPassoSeguinte"));
        actions.click(currentElement).perform();






    }
}
