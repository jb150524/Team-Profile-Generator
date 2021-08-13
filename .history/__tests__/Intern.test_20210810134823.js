const Intern = require("../lib/Intern");

test("Can set School via constructor", () => {
    const testValue = "UPENN";
    const e = new Intern ("RARA", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole", () => {
    const testValue = "UPENN";
    const e = new Intern ("RARA", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("Can set School via constructor", () => {
    const testValue = "UPENN";
    const e = new Intern ("RARA", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});