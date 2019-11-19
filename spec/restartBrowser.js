describe('Protractor Demo', function() {
    it('should start other page', function() {

       browser.get('https://www.tutorialspoint.com/tutorialslibrary.htm');
       browser.controlFlowIsEnabled();
       browser.restart();
       browser.get('https://in.yahoo.com/?p=us');
       });
    });
 