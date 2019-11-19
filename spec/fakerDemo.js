var faker=require('faker');
describe('Fake Data Demo',function(){
    it('How to generate random fake data in protractor',function(){
        
        browser.get('http://demo.automationtesting.in/Register.html');
        browser.sleep(3000);

        console.log(faker.name.firstName());
        console.log(faker.name.lastName());
        console.log(faker.phone.phoneNumber());
        console.log(faker.address.city())
        
        

    })
})