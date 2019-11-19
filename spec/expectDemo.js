describe('About expect',function(){
    it('It to explain expect in jasmine',function(){
        
        //expect in Jasmine
        //toBe
        var a=false;
        //expect(a).toBe(true);
        expect(a).not.toBe(true);

        //toEqual
        var b=10;
        expect(b).toEqual(10);
        //expect(b).toEqual(11);

        var array=[1,2,3];
        expect(array).toEqual([1,2,3]);
        //expect(array).toEqual([1,2,3,4])

        // var name=null;
        // expect(name).toBeNull();

         var value='Jasmine';
        // expect(name).toBeNull();

        expect(value).toContain("Jas");
        expect(value).toContain("jas");  //will give error-bcz case sensitive

    })
})