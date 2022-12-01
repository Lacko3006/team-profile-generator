const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {

        super(name, id, email);
        this.github = github;
    }
    getGitHub(){
        console.log(`GitHub: ${this.github}`)
    }
    getRole(){
        console.log('Engineer')
    }
}
const engineer = new Engineer("Sam", 25, "lacko_6789@hotmail.co.uk", "lacko3006")

engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGitHub();
engineer.getRole();