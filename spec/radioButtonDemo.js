describe('Radio Button Demo',function(){
    it('Handling radio button',function(){

browser.get('https://material.angularjs.org/latest/demo/radioButton');
        
        var apple= browser.element(by.id('radio_44'));
        var banana= browser.element(by.id('radio_45'));
        var mango= browser.element(by.id('radio_46'));
        apple.click();
        var b=apple.getAttribute('aria-checked');
        b.then(value=>
            {
            console.log("Is checked:"+ value);
        })

    })
})


