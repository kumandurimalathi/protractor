describe('Mouse hover Demo',function(){
    it('How to handle mouse movements in protractor',function(){
        
        browser.get('https://ng-bootstrap.github.io/#/components/tooltip/examples');
        browser.sleep(3000);
        
        var button= element(by.css("button[ngbtooltip='Tooltip on top']"));
        
        browser.actions().mouseMove(button).perform();
     
        browser.sleep(5000);

    })
})


