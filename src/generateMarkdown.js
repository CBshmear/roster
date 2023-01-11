const inquirer = require("inquirer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");
const fs = require("fs");

function generateHtml() {
  let cardString = "";
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].role === "Manager") {
      cardString += makeManagerCard(employees[i]);
    } else if (employees[i].role === "Intern") {
      cardString += makeInternCard(employees[i]);
    } else if (employees[i].role === "Engineer") {
      cardString += makeEngineerCard(employees[i]);
    }
  }
  // loop through employees array
  // if manager, make manager card
  //  cardsString += makeManagerCard(i)
  // if employee, make employee card
  // if intern, add intern card
  /*
        return `<html>
                ...
                    <div id=cards>
                        ${cardsString}
                    </div>
                ...
                </html>`
    */
  console.log(cardString);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div class="cards">
          ${cardString}
      </div>
      
  </body>
  </html>`;
}

function makeManagerCard(manager) {
  return `
  <div class="manager">
  <p>${manager.newName}</p>
  <p>${manager.id}</p>
  <p>${manager.email}</p>
  <p>${manager.officeNumber}</p>
</div>
  `;
}
function makeInternCard(intern) {
  return `
    <div class="intern">
 <p>${intern.newName}</p>
  <p>${intern.id}</p>
  <p>${intern.email}</p>
  <p>${intern.school}</p>
</div>
    `;
}
function makeEngineerCard(engineer) {
  return `<div class="engineer">
   <p> ${engineer.newName}</p>
    <p>${engineer.id}</p>
    <p>${engineer.email}</p>
    <p>${engineer.github}</p>
  </div>`;
}

// intern

// engineer

// Prompt functions for each employee type
function askIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newName",
        message: "Enter the interns name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the interns ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the interns email",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the interns school",
      },
      {
        type: "list",
        message: "Choose what type of employee you would like to add next.",
        name: "employeeType",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.newName,
        answers.id,
        answers.email,
        answers.school
      );
      employees.push(intern);
      if (answers.employeeType === "Engineer") {
        askEngineer();
      } else if (answers.employeeType === "Intern") {
        askIntern();
      } else if (answers.employeeType === "Done") {
        console.log(employees);
        const htmlPageContent = generateHtml(employees);

        fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created index.html!")
        );
      }
    });
}

function askEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newName",
        message: "Enter the engineers name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineers ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineers email",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineers Github username.",
      },
      {
        type: "list",
        message: "Choose what type of employee you would like to add next.",
        name: "employeeType",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.newName,
        answers.id,
        answers.email,
        answers.github
      );
      employees.push(engineer);
      if (answers.employeeType === "Engineer") {
        askEngineer();
      } else if (answers.employeeType === "Intern") {
        askIntern();
      } else if (answers.employeeType === "Done") {
        console.log(employees);
        const htmlPageContent = generateHtml(employees);

        fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created index.html!")
        );
      }
    });
}

const employees = [];
function askManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newName",
        message: "Enter the manager's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's Id",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office Number.",
      },
      {
        type: "list",
        message: "Choose what type of employee you'd like to add next.",
        name: "employeeType",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.newName,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      employees.push(manager);
      if (answers.employeeType === "Intern") {
        askIntern();
      } else if (answers.employeeType === "Engineer") {
        askEngineer();
        // Ask questions specific to engineers
      } else if (answers.employeeType === "Done") {
        const htmlPageContent = generateHtml(employees);

        fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created index.html!")
        );
      }
    });
}

module.exports = askManager;
