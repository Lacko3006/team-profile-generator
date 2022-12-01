class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(`Name: ${this.name}`);
    }
    getId(){
        console.log(`ID: ${this.id}`);
    }
    getEmail(){
        console.log(`Email: ${this.email}`);
    }
    getRole(){
        console.log('Employee')
    }
}

const employee = new Employee("Sam", 25, "lacko_6789@hotmail.co.uk");

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee