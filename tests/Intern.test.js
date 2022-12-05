const Intern = require("../lib/Intern");

describe("Manager Class", () => {
  const intern = new Intern(
    "Sam",
    13,
    "lacko_6789@hotmail.co.uk",
  );

  describe("getName function", () => {
    it("employee name returned", () => {
      expect(intern.getName()).toBe("Sam");
    });
  });

  describe("getId function", () => {
    it("ID returned", () => {
      expect(intern.getId()).toBe(13);
    });
  });

  describe("getEmail function", () => {
    it("Email returned", () => {
      expect(intern.getEmail()).toBe("lacko_6789@hotmail.co.uk");
    });
  });
  
  describe("getRole function", () => {
    it("Role returned", () => {
      expect(intern.getRole()).toBe("Intern");
    });
  });
});