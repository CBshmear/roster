
const questions = [
{
    type: "input",
    name: 'name',
    message: "Enter the manager's name.",
},
{
    type: 'input',
    name: 'id',
    message: "Enter the manager's Id",
},
{
    type: 'input',
    name: 'email',
    message: "Enter the manager's email."
},
{
    type: 'input',
    name: 'office',
    message: "Enter the manager's office Number.",
},
{
    type: 'list',
    message: "Choose what type of employee you'd like to add next.",
    name: 'addEmploy',
    choices: ["Engineer", "Intern"],
}
]