class Shape {
  constructor(text, text_color, shape, shape_color) {
    (this.text = text),
      (this.text_color = text_color),
      (this.shape = shape),
      (this.shape_color = shape_color);
  }

  updateSVG() {
    return `<svg version="1.1" width="300" height="400">
        ${this.render()}
        ${this.renderText()}</svg>`;
  }
  renderText() {
    return `<text x="150" y="255" font-six="75" text-anchor='middle' fill=${this.shape_color}
        >${this.text}</text>`;
  }
}

class Circle extends Shape {
  constructor(text, text_color, shape, shape_color) {
    super(text, text_color, shape, shape_color);
  }
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.shape_color}"/>`;
  }
}

// triangle = polygon??

class Triangle extends Shape {
  constructor(text, text_color, shape, shape_color) {
    super(text, text_color, shape, shape_color);
  }
  render() {
    return `<polygon points="200 0, 200 200, 0 200" fill=${this.shape_color}"/>`;
  }
}

class Square extends Shape {
  constructor(text, text_color, shape, shape_color) {
    super(text, text_color, shape, shape_color);
  }
  render() {
    return `<rec x="25" y="25" width="300" height="300" fill=${this.shape_color}"/>`;
  }
}

const newLogo = ({ text, text_color, shape, shape_color }) => {
  switch (shape) {
    case "circle":
      const newCircle = new Circle(text, text_color, shape_color);
      return newCircle.updateSVG();
    case "triangle":
      const newTriangle = new Triangle(text, text_color, shape_color);
      return newTriangle.updateSVG();
    default:
      const newSquare = new Square(text, text_color, shape_color);
      return newSquare.updateSVG();
  }
};

module.exports = { newLogo, Shape, Triangle, Square, Circle };
