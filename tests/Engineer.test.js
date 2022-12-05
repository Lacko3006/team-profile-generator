const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  const engineer = new Engineer(
    "Sam",
    13,
    "lacko_6789@hotmail.co.uk",
    "github.com/lacko3006"
  );

  describe("getName function", () => {
    it("employee name returned", () => {
      expect(engineer.getName()).toBe("Sam");
    });
  });

  describe("getId function", () => {
    it("ID returned", () => {
      expect(engineer.getId()).toBe(13);
    });
  });

  describe("getEmail function", () => {
    it("Email returned", () => {
      expect(engineer.getEmail()).toBe("lacko_6789@hotmail.co.uk");
    });
  });

  describe("getGitHub function", () => {
    it("GitHub username returned", () => {
      expect(engineer.getGitHub()).toBe("github.com/lacko3006");
    });
  });

  describe("getRole function", () => {
    it("Role returned", () => {
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
