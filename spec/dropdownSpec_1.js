describe("Radio button demo",function(){
    it("Handling radio button in protractor",function(){
        
        browser.get('https://material.angularjs.org/latest/demo/radioButton');
        
        var radiobutton=element(by.value("Apple"));
        radiobutton.click();
    })
})