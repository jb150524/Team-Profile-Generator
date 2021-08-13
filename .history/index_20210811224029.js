// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateTeam = require("./src/html-template.js");

// lib modules 
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { inherits } = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Array questions & answers
const employees = [];

// Array for questions asked
function runAgain() {
  inquirer
    .prompt({
      type: "confirm",
      name: "again",
      message: "Would you like to add another Employee?",
})
.then(function (addAnother) {
  if (addAnother.again == false) {
    fs.writeFile(outputPath, render(employees), (err) =>
    err ? console.log(err) : console.log(`Generated ${outputPath}`)
    );
  }
  });
}

function init() {
  inquirer.prompt(questions.employee).then(function (answers) {
    if (answers.role == "Manager") {
      employees.push(
        new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.OfficeNumber,
        )
      );
     }
if (answers.role == "Intern") {
  employees.push(
    new Intern(answers.name, answers.id, answers,email, answers.school)
  );
}
if