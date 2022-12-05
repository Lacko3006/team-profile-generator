const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const employeeQuestions = [
    "Name",
    "ID",
    "Email",
];

const employeeType = 
    {
      type: "list",
      name: "employeeType",
      choices: ["Manager", "Intern", "Engineer"],
    };


const managerQuestions = [
    "What is your Office Number?"
];    

const employeeTypeArray = employeeQuestions.map((it) => {
    return {
      type: "input",
      name: it,
      message: it,
    };
  });

if (employeeType === employeeType.choices[0]){
console.log("hello")
}

employeeTypeArray.push(employeeType);

async function askQuestions() {
    return await inquirer.prompt(employeeTypeArray);
  }

askQuestions();


// const managerQuestions = () => {
//     return inquirer.prompt
// }
