describe("Date Picker Demo",function(){
    it("Handling date picker in Protractor",function(){
        browser.driver.get('http://demo.automationtesting.in/Datepicker.html'); //for non-angular applications
        browser.sleep(3000);
        element(by.id('datepicker2')).sendKeys('09/07/1990');
        browser.sleep(5000);
        //element(by.id('datepicker1')).sendKeys('23/05/1996'); //will just identify the datepicker
        browser.executeScript("document.getElementById('datepicker1').value='04/11/1993'");
        browser.sleep(5000);
    })
})









