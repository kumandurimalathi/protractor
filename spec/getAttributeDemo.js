describe('get attribute Demo',function(){
    it('How to get attribute in protractor',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
       
        var button=element(by.buttonText('Go!')).getAttribute('id');
        button.then(idValue=>{
            console.log('Id attribute value is: '+ idValue);
        })
        browser.sleep(5000);

    })
})

