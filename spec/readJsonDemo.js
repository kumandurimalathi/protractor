var data=require('../Json files/global.json');
describe("Read data Demo:",function(){
    it("How to read data from Json file",function(){

        console.log(data.url);
        console.log(data.password);
        console.log(data.capabilities.platformName);

    })
})