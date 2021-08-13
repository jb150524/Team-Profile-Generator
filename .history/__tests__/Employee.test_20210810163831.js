const Employee = require("../lib/Employee.");

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
    const testValue = 100;
    const e = new Employee("RARA", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set Email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("RARA", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get Name via getName()", () => {
    const testValue = "Rodrigo";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get ID via getId()", () => {
    const testValue = 100;
    const e = new Employee("RARA", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get Email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("RARA", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Rodrigo", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});