const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  const manager = new Manager(
    "Sam",
    13,
    "lacko_6789@hotmail.co.uk",
  );

  describe("getName function", () => {
    it("employee name returned", () => {
      expect(manager.getName()).toBe("Sam");
    });
  });

  describe("getId function", () => {
    it("ID returned", () => {
      expect(manager.getId()).toBe(13);
    });
  });

  describe("getEmail function", () => {
    it("Email returned", () => {
      expect(manager.getEmail()).toBe("lacko_6789@hotmail.co.uk");
    });
  });
  
  describe("getRole function", () => {
    it("Role returned", () => {
      expect(manager.getRole()).toBe("Manager");
    });
  });
});