const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e).toBe("object");
});

test("Can set name via constructor argument", () => {
    const name = "Pedro";
    const e = new Employee();
    expect(typeof(e).toBe("object");
});