var fs=require('fs')
describe('Demo to take element screenshots:',function(){

    it('How to take element screenshots in protractor',function(){
        
        //browser.waitForAngularEnabled(false);
        browser.driver.get('http://demo.automationtesting.in/Register.html');
        browser.sleep(3000);

        var logo = element(by.id('imagetrgt'));
        logo.takeScreenshot().then(element=>{
            var stream= fs.createWriteStream('./screenshots/element.png');
            stream.write(new Buffer(element,'base64'))
        })
        
            browser.sleep(5000);

        })

    })
