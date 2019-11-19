describe('Chrome Demo',function(){
    it('Execute protractor script in Chrome Browser',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.getTitle().then(function(title){
            console.log("Title is : "+ title);
        })
    })
})



