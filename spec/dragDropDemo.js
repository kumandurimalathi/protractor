describe('Drag and Drop Demo',function(){
    it('How to drag and drop in protractor',function(){
        
        browser.get('http://codef0rmer.github.io/angular-dragdrop/#!/#%2F');
        browser.sleep(3000);

        var source=element(by.model('list1'));
        var destination=element(by.model('list2'));

        browser.actions().dragAndDrop(source,destination).perform();

        browser.sleep(5000);
        

    })
})