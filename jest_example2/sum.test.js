const sum= require("./sum");


test("sum function test case",()=>{
    expect(sum(2,8)).toBe(10)
});


test("sum function not equle test case",()=>{
    expect(sum(2,8)).not.toBe(5)
});
