var fs = require('fs')                               //file stream package
describe('Demo to take screenshots:',function(){
    it('How to take full page screenshots in protractor',function(){
        
        //browser.waitForAngularEnabled(false);
        browser.driver.get('http://demo.automationtesting.in/Register.html');
        browser.sleep(5000);

        browser.takeScreenshot().then(function(fullPage){
            var stream = fs.createWriteStream('./screenshots/registerPage.png');                         //give screenshot location inside createWriteStream() method
            stream.write(new Buffer(fullPage,'base64'));                       //inside buffer(which file u want to store,format)
            stream.end();
        })
            //takeScreenshot() available in protractor
       

    })
})