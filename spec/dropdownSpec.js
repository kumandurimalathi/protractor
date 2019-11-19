describe('Dropdown Demo',function(){
    it('handling dropdown',function(){
        var appURL='http://juliemr.github.io/protractor-demo/';
        browser.get(appURL);
        var firstNumber=element(by.model('first'));
        var secondNumber=element(by.model('second'));
        var goButton=element(by.id('gobutton'));
       
        //Illustration of dropdown operation
        //perform 5 + 12 operation
        firstNumber.sendKeys('5');
        var operator = element.all(by.options('value for (key, value) in operators'));
        operator.get(0).click();
        secondNumber.sendKeys('12');
        goButton.click();
        browser.sleep('5000');

        //perform 5 / 12 operation
        firstNumber.sendKeys('5');
        var operator = element.all(by.options('value for (key, value) in operators'));
        operator.get(1).click();
        secondNumber.sendKeys('12');
        goButton.click();
        browser.sleep('5000');


        //perform 5 % 12 operation
        firstNumber.sendKeys('5');
        var operator = element.all(by.options('value for (key, value) in operators'));
        operator.get(2).click();
        secondNumber.sendKeys('12');
        goButton.click();
        browser.sleep('5000');

        //perform 5 * 12 operation
        firstNumber.sendKeys('5');
        var operator = element.all(by.options('value for (key, value) in operators'));
        operator.get(3).click();
        secondNumber.sendKeys('12');
        goButton.click();
        browser.sleep('5000');

        //perform 5 - 12 operation
        firstNumber.sendKeys('5');
        var operator = element.all(by.options('value for (key, value) in operators'));
        operator.get(4).click();
        secondNumber.sendKeys('12');
        goButton.click();
        browser.sleep('5000');

    })
})