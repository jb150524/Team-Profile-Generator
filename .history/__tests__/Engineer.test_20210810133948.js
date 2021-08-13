const Engineer = require("../lib/Engineer");

test("Can set Github account via constructor", () => {
    const testValue = "GithubUser";
    const e = new Engineer("RARA", 1, "test@test.com", testValue);
    expect(e.gi())
});