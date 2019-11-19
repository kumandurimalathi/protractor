describe('getURL Demo',function(){
    it('How to get url in protractor',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        browser.getCurrentUrl().then(url=>{
            console.log('Current URL is: ' + url);
        })
        
       browser.sleep(5000);

    })
})