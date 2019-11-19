describe("beforeEach",function(){
    
    beforeEach(function()
    {
        console.log("This is beforeEach block-Common for all it blocks inside describe-will execute before each it block inside describe")
    })

    it("first",function(){
        console.log("First it block")
    })

    it("first",function(){
        console.log( "Second it block")
    })

})