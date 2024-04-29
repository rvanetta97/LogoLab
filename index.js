//packages/exports needed to generate logo
const fs = require("fs");
const inquirer = require("inquirer");
const shapes = require("./lib/shapes");
const path = require("path");

//questions for user input for the shape, color, & title
const questions = [
    {
        type: "input",
        name: "logo-title",
        message: "What company/product name will be on the logo?"
    },
    {
        type: "input",
        name: "text-color",
        message: "What color would you like the title to be? *this can be a color name or a hexadecimal number*"
    },
    {
        type: "list",
        name: "logoShape",
        message: "What shape would you like your logo to be?",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "logoColor",
        message: "What color would you like the shape of the logo to be? *this can be a color name or a hexadecimal number*"
    },
  
];

function generateLogo(responses) {
    let shape;
    switch (responses.logoShape) {
        case "Circle":
            shape = new Circle(responses.logoColor);
            break;
        case "Square":
            shape = new Square(responses.logoColor);
            break;
        case "Triangle":
            shape = new Triangle(responses.logoColor);
            break;
    }
    const shapeSVG = shape.render();
    const titleSVG = `<text x="20" y="20" fill="${responses.textColor}">${responses.logoTitle}</text>`;
    
    return `<svg width="200" height="200" xmlns="https://www.w3.org/TR/SVG2/">${shapeSVG}${titleSVG}</svg>`;
}

function writeToFile(fileName, responses) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        const completedSVG = generateLogo(responses);
        console.log(`${title} design coming soon....`);
        writeToFile(`./examples/${responses.title}.svg`, logo({ ...responses }))
            .then(() => {
                console.log('Logo created successfully!');
            })
            .catch((err) => {
                console.error('Error creating logo:', err);
            });
    });
}

init();