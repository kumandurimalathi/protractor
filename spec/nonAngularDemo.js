describe("Non-Angular Demo",function(){
it("Handling non-angular applications in Protractor",function(){
    /*
    //browser.waitForAngularEnabled(false);  //add if the application is not angular before navigating to url
    browser.ignoreSynchronization = true;   //add if the application is not angular before navigating to url
    browser.get('http://demo.automationtesting.in/Datepicker.html');
    */

    browser.driver.get('http://demo.automationtesting.in/Datepicker.html');

    browser.sleep(3000);
    
    element(by.id('datepicker1')).click();
    
    browser.sleep(5000);
})
})


describe("Non-Angular Demo",function(){
    it("Handling non-angular applications in Protractor",function(){
        browser.ignoreSynchronization = true;   //add if the application is not angular before navigating to url
        browser.get('http://demo.automationtesting.in/Datepicker.html');
        browser.sleep(3000);
        element(by.id('datepicker1')).click();
        browser.sleep(5000);
    })
})

describe("Non-Angular Demo",function(){
    it("Handling non-angular applications in Protractor",function(){
            browser.waitForAngularEnabled(false);  //add if the application is not angular before navigating to url
            browser.get('http://demo.automationtesting.in/Datepicker.html');
            browser.sleep(3000);
            element(by.id('datepicker1')).click();
            browser.sleep(5000);
    })
})

describe("Non-Angular Demo",function(){
    it("Handling non-angular applications in Protractor",function(){
            browser.driver.get('http://demo.automationtesting.in/Datepicker.html');
            browser.sleep(3000);
            element(by.id('datepicker1')).click();
            browser.sleep(5000);
    })
})


