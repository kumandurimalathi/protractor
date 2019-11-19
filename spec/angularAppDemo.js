describe('Angular app demo',function(){
    it('Testing angular application',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('1234');
        element(by.model('second')).sendKeys('2356');
        element(by.buttonText('Go!')).click();
        expect(element(by.binding('latest')).getText()).toEqual('3590');
    })
})