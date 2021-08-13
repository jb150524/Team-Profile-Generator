const Engineer = require("../lib/Engineer");

test("Can set Github account via constructor", () => {
    const testValue = "GithubUser";
    const e = new Engineer("RARA", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("RARA", 1, "test@test.com", "GithubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get Github Username via getGitHub()", () => {
    const testValue = "GithubUser";
    const e = new Engineer("RARA", 1, "test@test.com", testValue);
    expect(e.get).toBe(testValue);
});