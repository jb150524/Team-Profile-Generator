// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateTeam = require("./src/html-template.js");

// lib modules 
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render

// Array questions & answers
const newStaffMemberData = [];

// Array for questions asked
const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your ID #?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your Email?",
                name: "email",
            },
            {
                message: "What is your Role?",
                name: "role",
                type: "list",
                choices: ["Manager, Engineer, Intern"],
            },
        ])

// console.log(answer);
  // If Select Manager Answer
    if (answers.role === "Manager"){
      const managerAnswer = await inquirer
        .prompt([
          {
            type: "input",
            message: "What is your Officer #",
            name: "Office#",
          },
    ])
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.OfficeNumber,
      );
      newStaffMemberData.push(newManager);
// If Select Engineer Answer
    }else if (answers.role === "Engineer"){
      const githubAnswer = await inquirer
        .prompt([
          {
            type: "input",
            message: "What is your Github User Name",
            name: "github",
          }
        ])
      const newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github,
      );
      newStaffMemberData.push(newEngineer);

// If Select Inter Answer
    }else if (answers.role === "Intern"){
      const internAnswer = await inquirer
        .prompt([
          {
            type: "input",
            message: "What University did you attend?",
            name: "school",
          },
        ])
      const newIntern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school,
      );
      newStaffMemberData.push(newIntern);
    }
};
// Function ends for questions
async function promptQuestions(){
    await questions()

    const addMemberAnswer = await inquirer
      .prompt([
        {
          name: 'addMember',
          type: 'list',
          choices: ['Add a new member', 'Create Team'],
          message: "What would you like to do next?"
        }
      ])
    if (addMemberAnswer.addMember === 'Add a New Member') {
        return promptQuestions()
    }
        return createTeam();
}

promptQuestions();

function createTeam () {
    console.log("new guy", newStaffMemberData)
    fs.writeFileSync(
        "./dist/index.html",
        generateTeam(newStaffMemberData),
        "utf-8"
    );
}