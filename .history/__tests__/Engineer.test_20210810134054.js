const Engineer = require("../lib/Engineer");

test("Can set Github account via constructor", () => {
    const testValue = "GithubUser";
    const e = new Engineer("RARA", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return", () => {
    const testValue = "GithubUser";
    const e = new Engineer("RARA", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("Can set Github account via constructor", () => {
    const testValue = "GithubUser";
    const e = new Engineer("RARA", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});