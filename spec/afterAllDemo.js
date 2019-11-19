describe("afterAll",function(){
    
    it("first",function(){
        console.log("First it block")
    })

    afterAll(function()
    {
        console.log("This is afterAll block-Common for all it blocks inside describe-will execute once after all it blocks inside describe")
    })

    it("first",function(){
        console.log( "Second it block")
    })

})