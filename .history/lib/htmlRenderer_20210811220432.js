const path = require("path");
const fs = require("fs");

const templateDir = path.resolve(__dirname, "../templates");

const render = employee => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    return renderMain(html.join(""));
};

const renderManager = manager => {};