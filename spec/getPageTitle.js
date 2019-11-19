describe('getTitle Demo',function(){
    it('How to get title in protractor',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

        browser.getTitle().then(elementTitle =>{
            console.log('Page title is: ' + elementTitle);
        })
        
       browser.sleep(5000);

    })
})