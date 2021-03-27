const fetchData=require("./fetchData.js")

test("promise testing",()=>{
     return fetchData().then((data)=>{
        expect(data).toBe("helow");
     })
})