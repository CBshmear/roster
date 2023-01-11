const Employee = require('./employee');

class Manager extends Employee {
    constructor(newName, id, email, officeNumber) {
        super(newName, id, email)
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
}

module.exports = Manager;