class Shape {
    constructor (text, text_color, shape, shape_color) {
        this.text = text,
        this.text_color = text_color,
        this.shape = shape,
        this.shape_color = shape_color
    }
}

class Circle extends Shape {
    constructor (text, text_color, shape_color)
        super (text, text_color, shape, shape_color)
}

class Triangle extends Shape {
    constructor (text, text_color, shape_color)
        super (text, text_color, shape, shape_color)
}

class Square extends Shape {
    constructor (text, text_color, shape_color)
        super (text, text_color, shape, shape_color)
}