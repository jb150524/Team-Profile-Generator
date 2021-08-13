const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor argument", () => {
    const name = "Pedro";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test( "Can set ID via constructor argument", () => {
    const testValue = 50;
    const e = new Employee("RARA", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set Email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("RARA", 1)
}