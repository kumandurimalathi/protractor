exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
 
    baseUrl: 'https://angularjs.org/',
 
    capabilities: {
       browserName:'Firefox'
    },
 
    framework: 'custom',
 
    frameworkPath: require.resolve('protractor-cucumber-framework'),
 
    specs: [
       './cucumber/*.feature'
    ],
 
    // cucumber command line options
    cucumberOpts: {
       require: ['./cucumber/*.js'],
       tags: [],
       strict: true,
       format: ["pretty"],
       'dry-run': false,
       compiler: []
    },
    onPrepare: function () {
       browser.manage().window().maximize();
    }
 };