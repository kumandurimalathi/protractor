describe('Double click Demo:',function(){
    it('How to double click in protractor',function(){
        
        browser.get('http://demo.automationtesting.in/WebTable.html');
        browser.sleep(3000);
        
        var button= element(by.css("button[ngbtooltip='Tooltip on top']"));
        //var button= element(by.css("button.btn.btn-xs.btn-custom"));
        browser.actions().doubleClick(button).perform();
        browser.sleep(5000);

    })
})












        