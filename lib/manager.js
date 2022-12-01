const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {

    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole(){
    console.log('Manager')
  }
}
const manager = new Manager("Sam", 25, "lacko_6789@hotmail.co.uk")

manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();

