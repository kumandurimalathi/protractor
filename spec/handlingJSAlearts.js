describe('Handling alerts Demo:',function(){
    it('How to handle alerts in protractor',function(){
        
        //browser.waitForAngularEnabled(false);
        browser.driver.get('http://demo.automationtesting.in/Alerts.html');
        browser.sleep(3000);

        var alertButton= element(by.linkText('Alert with OK & Cancel'));
        alertButton.click();
        

        element(by.buttonText('click the button to display a confirm box')).click();

        browser.sleep(3000);
        browser.switchTo().alert().accept();   //will click on OK button-switching to particular alert-inbuilt function

        element(by.buttonText('click the button to display a confirm box')).click();
        browser.sleep(3000);
        browser.switchTo().alert().dismiss();     //will click on cancel

        element(by.buttonText('click the button to display a confirm box')).click();
        browser.sleep(3000);

        browser.switchTo().alert().getText().then(textOnAlert=>{
            console.log("Text on alert is: " +textOnAlert);
        })


     
        browser.sleep(5000);

    })
})