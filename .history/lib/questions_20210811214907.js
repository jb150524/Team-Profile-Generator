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
        //  run only user 
        type: "input",
        name: "email",
        message: "What is your Email?",
     },
  ],
};