class Shape {
  constructor(text, textColor, shape, shapeColor) {
    (this.text = text),
      (this.textColor = textColor),
      (this.shape = shape),
      (this.shapeColor = shapeColor);
  }

  updateSVG() {
    return `<svg version="1.1"
   width="300" height="200">
   ${this.render()} 
   ${this.renderText()}
   </svg>`;
  }
  renderText() {
    return `<text x="100" y="115" font-size="50" font-family="arial" text-anchor="inherit" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, "circle", shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}"/>`;
  }
}

// triangle = polygon??

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, "triangle", shapeColor);
  }
  render() {
    return `<polygon points="50, 200 150, 0 250, 200" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, "square", shapeColor);
  }
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`;
  }
}

const newLogo = ({ text, textColor, shape, shapeColor }) => {
  switch (shape) {
    case "Circle":
      const newCircle = new Circle(text, textColor, shapeColor);
      return newCircle.updateSVG();
    case "Triangle":
      const newTriangle = new Triangle(text, textColor, shapeColor);
      return newTriangle.updateSVG();
    default:
      const newSquare = new Square(text, textColor, shapeColor);
      return newSquare.updateSVG();
  }
};

module.exports = { newLogo, Shape, Triangle, Square, Circle };
