describe('Handling alerts Demo:',function(){
    it('How to handle alerts in protractor',function(){
        
        //browser.waitForAngularEnabled(false);
        browser.driver.get('http://demo.automationtesting.in/Windows.html');
        browser.sleep(5000);

        var tabbedButton= element(by.css("button[class='btn btn-info']"));
        tabbedButton.click();
        browser.sleep(3000);

        var windowHandle= browser.getAllWindowHandles();     //getAllWindowHandles() will give browsers and tabs opened at that moment
        
        windowHandle.then(function(handles){
            var parentWindow= handles[0];      //handle will contain all open windows
            var tabbedWindow= handles[1];
            
            browser.waitForAngularEnabled(false);
            browser.switchTo().window(tabbedWindow);
            

            browser.getTitle().then(pageTitle=>{
                console.log("Tabbed window title is: "+pageTitle);
            })
        })

       

    })
})