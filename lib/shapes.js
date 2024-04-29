class Shape {
    constructor(color, shapeType) {
        this.logoColor = color;
        this.logoShape = shapeType;
    }
}

class Triangle extends Shape {
    constructor(color, shapeType){
        super(color, 'Triangle')
    }
        render() {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />`
        };
    
}

class Circle extends Shape {
    constructor(color, shapeType){
        super(color, 'Circle')
    }
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.logoColor}"/>`;;
    }
}

class Square extends Shape {
    constructor(color, shapeType){
        super(color, 'Square')
    }
    render() {
       return `<rect x="73" y="40" width="160" height="160" fill="${this.logoColor}" />`
    }
}

module.exports = {Shape, Triangle, Square, Circle};