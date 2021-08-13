const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const employee = require("../lib/Employee");

test("Can instantiate Employee instance",() => {
    const e = new Employee();
    expect(typeof(e).to);
});