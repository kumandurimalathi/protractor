exports.config = {
    directConnect:true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: 
    [
   
   //'./spec/beforeEachDemo.js',
   //'./spec/afterEachDemo.js',
   //'./spec/beforeAllDemo.js',
   //'./spec/afterAllDemo.js',
   //'./spec/fdescribeDemo.js',
   //'./spec/xdescribeDemo.js',
   //'./spec/fitblockDemo.js',
   //'./spec/xitblockDemo.js',
   './spec/expectDemo.js',
   //'./spec/angularAppDemo.js',
   //'./spec/chromeDemo.js',
   //'./spec/chromeHeadlessDemo.js',
   //'./spec/firefoxDemo.js',
   //'./spec/firefoxHeadlessDemo.js',
   //'./spec/textBoxDemo.js',
   //'./spec/buttonDemo.js',
   //'./spec/radioButtonDemo.js',
   //'./spec/handleDropdownDemo.js',
   //'./spec/nonAngularDemo.js',
   //'./spec/handlingDatePickerDemo.js',
   //'./spec/getTextDemo.js',
   //'./spec/getPageURL.js',
   //'./spec/getPageTitle.js',
   //'./spec/getAttributeDemo.js',
   //'./spec/mouseMovement(mouseHover).js',
   //'./spec/handleKeyboardActionsDemo.js',
   //'./spec/doubleClickDemo.js',
   //'./spec/handlingJSAlearts.js',
   //'./spec/handleWindowsDemo.js',
   //'./spec/fullpageScreenshotDemo.js',
   //'./spec/dropdownSpec.js',
   //'./spec/elementScreenshotDemo.js',
   //'./spec/readJsonDemo.js',
   //'./spec/fakerDemo.js',
   //'./spec/dragDropDemo.js',
   //'./spec/functionsDemo.js'
   ],
    capabilities:
        {
        browserName: 'chrome',

      },
      
        //   chromeOptions:{
      //      args:['--headless']
      //   }
      
      // 'moz:firefoxOptions':
      // {
      // args:['--headless']
      // }
   
   //   {
   //      'browserName': 'safari'
   //   }],
   //   {
   //    'browserName': 'safari'
   //   }],
     framework: 'jasmine',
     //outputFilename: 'ProtractorTestReport',
     //testPlatform: platform,
     //getPageTimeout: 15000,
   //   restartBrowserBetweenTests: false,

   //   framework: 'custom',
 
   //  frameworkPath: require.resolve('protractor-cucumber-framework'),
 
   //  specs: [
   //     './test.feature'
   //  ],
 
   //  // cucumber command line options
   //  cucumberOpts: {
   //     require: ['./cucumber/*.js'],
   //     tags: [],
   //     strict: true,
   //     format: ["pretty"],
   //     'dry-run': false,
   //     compiler: []
   //  },

    onPrepare: function () {
       browser.manage().window().maximize();
    },

   //   onPrepare: function(){ //configure junit xml report

   //      var jasmineReporters = require('jasmine-reporters');
   //      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
   //         consolidateAll: false,
   //         filePrefix: 'guitest-xmloutput',
   //         savePath: 'test/reports'
   //      }));
   //  },

   //  onPrepare: function()
   //  {
   //    var jasmineReporters = require('jasmine-reporters');
   //    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
   //       consolidateAll: false,
   //       savePath: './XML Results',
   //       filePrefix: 'xmlresults-'
   //    }));
   //  },

//     onComplete: function() {
//       var browserName, browserVersion;
//       var capsPromise = browser.getCapabilities();
  
//       capsPromise.then(function (caps) {
//          browserName = caps.get('browserName');
//          browserVersion = caps.get('version');
//          platform = caps.get('platform');
  
//          var HTMLReport = require('protractor-html-reporter-2');
  
//          testConfig = {
//              reportTitle: 'Protractor Test Execution Report',
//              outputPath: './HTML Reports',
//              outputFilename: 'ProtractorTestReport',
//              screenshotPath: './screenshot html',
//              testBrowser: browserName,
//              browserVersion: browserVersion,
//              modifiedSuiteName: true,
//              screenshotsOnlyOnFailure: false,
//              testPlatform: platform,
//              consolidateAll: false
//          };
//          new HTMLReport().from('./XML Results/xmlresults-HandlingalertsDemo.xml', testConfig);
//      });
//   }

    
  };