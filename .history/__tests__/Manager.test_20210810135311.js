const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set Office # via constructor argument", () => {
    const testValue = 50;
    const e = new Manager ("RARA", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern ("RARA", 1, "test@test.com", "UPENN");
    expect(e.getRole()).toBe(testValue);
});

test("Can get School via getSchool()", () => {
    const testValue = "UPENN";
    const e = new Intern ("RARA", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});


