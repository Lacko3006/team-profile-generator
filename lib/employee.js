class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

const employee = new Employee("Sam", 25, "lacko_6789@hotmail.co.uk");

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee