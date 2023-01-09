const Employee = require("./employee");

class Engineer extends Employee {
    constructor(newName, id, email, github) {
        
        super(newName, id, email)
        
        this.github = github;
        
        
    }

    getGithub(data) {
        const github = `https://github.com/${data.github}`
        return github;

    }

    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;