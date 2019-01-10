describe("Jasmine Test Environment", () =>{
    //expect是期望的结果，toBe是断言
    // it("is working", () => expect(true).toBe(false));
    it("test numeric value", ()=>expect(12).toBeGreaterThan(10));
    it("test string value", ()=>expect("London").toMatch("^Lon"));

})