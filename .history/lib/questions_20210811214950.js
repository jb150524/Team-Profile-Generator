const questions = {
    employee: [
     {
        type: "input",
        name: "name",
        message: "What is your name?",
     },
     {
        type: "input",
        name: "id",
        message: "What is your employee ID #?",
     },
     {
        type: "input",
        name: "email",
        message: "What is your Email?",
     },
     {
        type: "list",
        name: "role",
        message: "What is your Role?",
        choices: ["Manager", "Engineer", "Intern"],
     },
     {
        //  run only user selects Manager
        type: "input",
        name: "OfficeNumber",
        message: "What is your office number?",
        when
     },
  ],
};