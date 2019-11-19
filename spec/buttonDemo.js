describe('Button Demo',function(){
    it('Handling button',function(){

browser.get('http://juliemr.github.io/protractor-demo/');
        
        var textBox1= browser.element(by.model('first'));
        var textBox2= browser.element(by.model('second'));
        //var goButton= browser.element(by.id('gobutton'));
        var goButton= browser.element(by.buttonText('Go!'));
        textBox1.sendKeys('1234');
        browser.sleep(3000);
        textBox2.sendKeys('4537');
        browser.sleep(3000);
        goButton.click();
        browser.sleep(5000);
    

    })
})

