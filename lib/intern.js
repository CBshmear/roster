const Employee = require('./employee');

class Intern extends Employee {

    constructor(newName, id, email, school) {
        super(newName, id, email);
        this.school = school;
    }

    getSchool () {
        const school = this.school;
        return school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;