package com.example.tests;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class LogInJaLogOut {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @Before
  public void setUp() throws Exception {
    driver = new FirefoxDriver();
    baseUrl = "http://ounake-app.appspot.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testLogInJaLogOut() throws Exception {

// Sisse logimine ja välja logimis nupu kontroll
driver.get(baseUrl + "/pealeht.html");
driver.findElement(By.cssSelector("img.fb-button")).click();
driver.findElement(By.id("email")).clear();
driver.findElement(By.id("email")).sendKeys("open_agglwpi_user@tfbnw.net");
driver.findElement(By.id("pass")).clear();
driver.findElement(By.id("pass")).sendKeys("testuser");
// ERROR: Caught exception [ERROR: Unsupported command [clickAt | id=u_0_1 | ]]
driver.close();
driver.get(baseUrl + "/");
// ERROR: Caught exception [ERROR: Unsupported command [selectWindow | null | ]]
try {
  assertTrue(isElementPresent(By.cssSelector("#status > img")));
} catch (Error e) {
  verificationErrors.append(e.toString());
}
// Sisse logides on minu riiul nähtav
assertTrue(driver.findElement(By.linkText("MINU RIIUL")).isDisplayed());
// ERROR: Caught exception [unknown command []]
// Minu riiul nähtav, kui sisse logitud - autoriseerimine
try {
  assertTrue(isElementPresent(By.cssSelector("#status > img")));
} catch (Error e) {
  verificationErrors.append(e.toString());
}
assertTrue(driver.findElement(By.linkText("MINU RIIUL")).isDisplayed());
// ERROR: Caught exception [unknown command []]
// Välja logimine
driver.findElement(By.cssSelector("#status > img")).click();
// ERROR: Caught exception [unknown command []]
// ERROR: Caught exception [unknown command []]
// ERROR: Caught exception [unknown command []]
  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
