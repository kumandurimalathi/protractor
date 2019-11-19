describe("afterEach",function(){
    
    it("first",function(){
        console.log("First it block")
    })

    it("first",function(){
        console.log( "Second it block")
    })

    afterEach(function()
    {
        console.log("This is afterEach block-Common for all it blocks inside describe-will execute after each it block inside describe")
    })


})