describe("Browser commands demo",function(){
       
        xit("Handling window in Protractor",function(){
    
        browser.driver.get('http://demo.automationtesting.in/Register.html');
        browser.sleep(3000);
        browser.manage().window().maximize();
        browser.navigate().refresh();
        browser.sleep(5000);
             
        });

        xit('To get window size', function() {
            browser.get('https://angularjs.org/');
            browser.manage().window().getSize().then(function(windowSize){
                // promise resolving block
                console.log("Browser Width : " + windowSize.width);
                console.log("Browser Height : " + windowSize.height);
            })
        });

        xit('To set window position', function() {
            browser.get('https://angularjs.org/');
            browser.manage().window().setPosition(200, 300);
            browser.sleep(5000);
        });

        xit('Set window size', function() {
            browser.get('https://angularjs.org/');
            browser.manage().window().setSize(200, 300);
            browser.sleep(5000);
        });

        xit('Get Window position', function() {
            browser.get('https://angularjs.org/');
            browser.sleep(3000);
            browser.manage().window().getPosition().then(function(windowLocation){
                console.log("Browser x postion : " +windowLocation.x)
                console.log("Browser y postion : " +windowLocation.y)
            })
        });

        xit('To get url', function() {
            browser.get('https://angularjs.org/');
            browser.sleep(3000);
            browser.getCurrentUrl().then(function(url){
                console.log("Web page url is : " +url )
            })
        });

        xit('Get Title', function() {
            browser.get('https://angularjs.org/');
            browser.sleep(3000);
            browser.getTitle().then(function(title){
                console.log("Web page title is : " + title )
            })
        });
        
        xit('To get page source code', function() {
            browser.get('https://angularjs.org/');
            browser.sleep(3000);
            browser.getPageSource().then(function(pageSurce){
                console.log("Web page pageSurce is : " +pageSurce )
            })
        });

        xit('title verifications', function() {
            browser.get('https://angularjs.org/');
            browser.sleep(3000);
            browser.navigate().back(); // goes back to blank page
            browser.sleep(5000);
            browser.navigate().forward() // navigates to angular page
            browser.navigate().to("https://yahoo.com");
            browser.sleep(5000);
        });

        it('Restart browser', function() {
            browser.get('https://angularjs.org/');
            browser.sleep(3000);
            browser.restart();
            browser.navigate().to("https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiS-LeWsqPlAhWzILcAHah0DQQQPAgH");
            browser.sleep(5000);
        });
    
    
    })
