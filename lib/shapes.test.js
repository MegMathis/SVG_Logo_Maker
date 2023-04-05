const test = require("./shape.js");

describe("New Circle", () => {
  it("Should return a string for a green circle", () => {
    const newCircle = new test.Circle("Meg", "pink", "blue");
    const result = newCircle.render();
    console.log(result);

    expect(result).toEqual('<circle cx="150" cy="100" r="75" fill="blue"/>');
  });

  describe("New Triangle", () => {
    it("Should return a string for a red triangle", () => {
      const newTriangle = new test.Triangle("Meg", "blue", "pink");
      const result = newTriangle.render();
      console.log(result);

      expect(result).toEqual(
        '<polygon points="50, 200 150, 0 250, 200" fill="pink"/>'
      );
    });
  });

  describe("New Square", () => {
    it("Should return a string for a red square", () => {
      const newSquare = new test.Square("Meg", "pink", "blue");
      const result = newSquare.render();
      console.log(result);

      expect(result).toEqual(
        '<rect x="75" y="25" width="150" height="150" fill="blue"/>'
      );
    });
  });
});
