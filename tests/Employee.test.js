const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  const employee = new Employee("Sam", 13, "lacko_6789@hotmail.co.uk");

  describe("getName function", () => {
    it("employee name returned", () => {
      expect(employee.getName()).toBe("Sam");
    });
  });

  describe("getId function", () => {
    it("ID returned", () => {
      expect(employee.getId()).toBe(13);
    });
  });

  describe("getEmail function", () => {
    it("Email returned", () => {
      expect(employee.getEmail()).toBe("lacko_6789@hotmail.co.uk");
    });
  });

  describe("getRole function", () => {
    it("Role returned", () => {
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
