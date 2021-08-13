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
                type: "input"
            },
        ]
}