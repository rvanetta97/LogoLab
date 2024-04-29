class Shape {
    constructor(logoColor, logoShape) {
        this.logoColor = logoColor;
        this.logoShape = logoShape;
    }
    setColor(color) {
        this.logoColor = color;
    }
    setShape(shape) {
        this.logoShape = shape;
    }
}

class Triangle extends Shape {
    constructor(color){
        super(color, 'Triangle')
    }
        render() {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />`
        };
    
}

class Circle extends Shape {
    constructor(color){
        super(color, 'Circle')
    }
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.logoColor}"/>`;;
    }
}

class Square extends Shape {
    constructor(color){
        super(color, 'Square')
    }
    render() {
       return `<rect x="73" y="40" width="160" height="160" fill="${this.logoColor}" />`
    }
}

module.exports = {triangle, square, circle}