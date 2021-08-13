const Intern = require("../lib/Intern");

test("Can set School via constructor", () => {
    const testValue = "UCLA";
    const e = new Intern ("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern ("Foo", 1, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
});

test("Can get School via getSchool()", () => {
    const testValue = "UCLA";
    const e = new Intern ("FOO", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});