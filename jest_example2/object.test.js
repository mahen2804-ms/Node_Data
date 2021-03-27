const name= require("./object_call.js"); 
 
   test("object testing",()=>{
       expect(name()).toEqual({name:'mahen'})
   })
