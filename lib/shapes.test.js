const { Shape, Triangle, Circle, Square } = require('./shapes');

// Test cases for Shape class
describe('Shape class', () => {
    test('Constructor should set color and shapeType properties', () => {
        const shape = new Shape('red', 'Circle');
        expect(shape.logoColor).toBe('red');
        expect(shape.logoShape).toBe('Circle');
    });
});

// Test cases for Triangle class
describe('Triangle class', () => {
    test('Render method should return correct SVG markup for triangle', () => {
        const triangle = new Triangle('blue', 'Triangle');
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        expect(triangle.render()).toBe(expectedSVG);
    });
});

// Test cases for Circle class
describe('Circle class', () => {
    test('Render method should return correct SVG markup for circle', () => {
        const circle = new Circle('green', 'Circle');
        const expectedSVG = '<circle cx="150" cy="115" r="80" fill="green"/>';
        expect(circle.render()).toBe(expectedSVG);
    });
});

// Test cases for Square class
describe('Square class', () => {
    test('Render method should return correct SVG markup for square', () => {
        const square = new Square('yellow', 'Square');
        const expectedSVG = '<rect x="73" y="40" width="160" height="160" fill="yellow" />';
        expect(square.render()).toBe(expectedSVG);
    });
});