const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set Office # via constructor argument", () => {
    const testValue = 50;
    const e = new Manager ("RARA", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager ("RARA", 1, "test@test.com", 50);
    expect(e.getRole()).toBe(testValue);
});

test("Can get Office # via getOffice()", () => {
    const testValue = ;
    const e = new Intern ("RARA", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});


