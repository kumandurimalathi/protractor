describe("beforeAll",function(){
    
    it("first",function(){
        console.log("First it block")
    })

    beforeAll(function()
    {
        console.log("This is beforeAll block-Common for all it blocks inside describe-will execute once before all it blocks inside describe")
    })

    it("first",function(){
        console.log( "Second it block")
    })

})