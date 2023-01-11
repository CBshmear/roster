const Employee = require("./employee");

class Engineer extends Employee {
  constructor(newName, id, email, github) {
    super(newName, id, email);

    this.github = github;
    this.role = "Engineer";
  }
}

module.exports = Engineer;
