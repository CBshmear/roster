class Employee {
    constructor(newName, id, email) {
        this.newName = newName;
        this.id = id;
        this.email = email;
    }

    getName(data) {
        const name = data.newName;
        
    }

    getId(data) {
        const id = data.id;

    }

    getEmail(data) {
        const email = data.email;

    }

    getRole() {
        return "Employee";
    }
}


module.exports = Employee;
