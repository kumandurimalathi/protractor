describe('Textbox Demo',function(){
    it('Handling textbox in protractor',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

        browser.sleep(5000);

        element(by.model('operator')).element(by.css("option[value='MODULO']")).click();   //way 1

        browser.sleep(5000);
       
        element.all(by.options('value for (key, value) in operators')).get(3).click();    //way 2

        browser.sleep(5000);

        element(by.cssContainingText('option','-')).click();                              //way 3
        
        browser.sleep(5000);
        

    })
})