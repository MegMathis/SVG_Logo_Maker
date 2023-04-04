const test = require("./shape.js");

describe("New Circle", () => {
  it("Should return a string for a green circle", () => {
    const newCircle = new test.Circle("MEG", "Black", "Green");
    const result = newCircle.render();
    console.log(result);

    expect(result).toEqual('<circle cx="50" cy="50" r="40" fill="green"/>');
  });

  describe("New Triangle", () => {
    it("Should return a string for a red triangle", () => {
      const newTriangle = new test.Triangle("MEG", "Yellow", "Red");
      const result = newTriangle.render();
      console.log(result);

      expect(result).toEqual(
        '<polygon points="50,50 50, 50 50, 50" fill="red" />'
      );
    });
  });

  describe("New Square", () => {
    it("Should return a string for a red square", () => {
      const newSquare = new test.Square("MEG", "Green", "Red");
      const result = newSquare.render();
      console.log(result);

      expect(result).toEqual(
        'rect x="50" y="50" width="150" height="150" fill="red" />'
      );
    });
  });
});
