var assert = require("assert"),
    webdriver = require("selenium-webdriver"),
    utils = require('./utils'),
    shouldNotFindXpath = utils.shouldNotFindXpath,
    verifyXpath = utils.verifyXpath,
    clickXpath = utils.clickXpath,
    waitForPageLoad = utils.waitForPageLoad;


describe("testing styled starter project", function() {
    this.timeout(20000);

    beforeEach(function() {
        this.driver = new webdriver.Builder()
            .withCapabilities({
            browserName: "chrome"
        }).build();
        this.driver.get("http://localhost:3000");
        return waitForPageLoad(this.driver);
    });

    afterEach(function() {
        return this.driver.quit();
    });

    it('can navigate - About Page', function() {
        return verifyTopLevelNav(this.driver, 'About');
    });

    it('can count', function() {
        console.log('      - count is zero');
        verifyXpath(this.driver, "//*[@id='propsCount' and text()='0']");
        console.log('      - click plus');
        clickXpath(this.driver, "//button[text()='+']");
        console.log('      - count is one');
        verifyXpath(this.driver, "//*[@id='propsCount' and text()='1']");
        console.log('      - click minus');
        clickXpath(this.driver, "//button[text()='-']");
        console.log('      - count is zero');
        verifyXpath(this.driver, "//*[@id='propsCount' and text()='0']");
    });
});

function verifyTopLevelNav(driver, section) {
    console.log('      - active nav is home');
    shouldNotFindXpath(driver, "//nav//p[text()='"+section+"']");
    verifyXpath(driver, "//nav//p[text()='Styled Starter']");
    
    console.log('      - click '+section+' link');
    clickXpath(driver, "//nav//a[@href='/"+section.toLowerCase()+"' and text()='"+section+"']");
    waitForPageLoad(driver);
    
    console.log('      - active nav is '+section+'')
    verifyXpath(driver, "//nav//p[text()='"+section+"']");

    console.log('      - click home link');
    clickXpath(driver, "//nav//a[@href='/' and text()='Styled Starter']");

    console.log('      - active nav is home');
    shouldNotFindXpath(driver, "//nav//p[text()='"+section+"']");
    return verifyXpath(driver, "//nav//p[text()='Styled Starter']");
}