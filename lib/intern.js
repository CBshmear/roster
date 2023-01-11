const Employee = require("./employee");

class Intern extends Employee {
  constructor(newName, id, email, school) {
    super(newName, id, email);
    this.school = school;
    this.role = "Intern";
  }
}

module.exports = Intern;
