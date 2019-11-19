describe('getText Demo',function(){
    it('How to get text in protractor',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        var text = element(by.tagName('h3')).getText();
            //text willl give u an object
            text.then(elementText =>{
            console.log('Element text is: ' + elementText);
        })
        browser.sleep(5000);

    })
})

