const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        console.log(`School: ${this.school}`)
    }
    getRole(){
        console.log("Intern")
    }
}

const intern = new Intern("Sam", 25, "lacko_6789@hotmail.co.uk", "chezzo")

intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();