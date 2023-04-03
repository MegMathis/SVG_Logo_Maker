class Shape {
  constructor(text, textColor, shape, shapeColor) {
    (this.text = text),
      (this.textColor = textColor),
      (this.shape = shape),
      (this.shapeColor = shapeColor);
  }

  updateSVG() {
    return `<svg version="1.1"
   width="300" height="400">
   ${this.render()} 
   ${this.renderText()}
   </svg>`;
  }
  renderText() {
    return `<text x="150" y="150" font-size="50" font-family="arial" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor, "circle");
  }
  render() {
    return `<circle cx="50" cy="50" r="40" fill="${this.shapeColor}"/>`;
  }
}

// triangle = polygon??

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor, "triangle");
  }
  render() {
    return `<polygon points="50,50 50, 50 50, 50" fill=${this.shapeColor}"/>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor, "rectangle");
  }
  render() {
    return `<rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}" />`;
  }
}

const newLogo = ({ text, textColor, shape, shapeColor }) => {
  switch (shape) {
    case "circle":
      const newCircle = new Circle(text, textColor, shapeColor);
      return newCircle.updateSVG();
    case "triangle":
      const newTriangle = new Triangle(text, textColor, shapeColor);
      return newTriangle.updateSVG();
    default:
      const newSquare = new Square(text, textColor, shapeColor);
      return newSquare.updateSVG();
  }
};

module.exports = { newLogo, Shape, Triangle, Square, Circle };
