describe('Keyboard Enter Demo',function(){
    it('How to perform keyboard actions in protractor',function(){
        
        browser.get('http://demo.automationtesting.in/Register.html');
        browser.sleep(3000);
        
        element(by.model('FirstName')).sendKeys("Prajakta");
        element(by.model('FirstName')).sendKeys(protractor.Key.ENTER);
     
        browser.sleep(5000);

    })
})


