// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/html-template");

// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { async } = require("rxjs");

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
  // If Manager answers
    if (answers.role === "Manager"){
      const managerAnswer = await inquirer
        .prompt([
          {
            type: "input",
            message: "What is your Officer #",
            name: "Office#",
          },
    ])
      const newManager
        }
}