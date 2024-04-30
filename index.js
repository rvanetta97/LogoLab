//packages/exports needed to generate logo
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require('./lib/shapes');
const path = require("path");

//questions for user input for the shape, color, & title
const questions = [
    {
        type: "input",
        name: "logoTitle",
        message: "What company/product name will be on the logo?"
    },
    {
        type: "input",
        name: "textColor",
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
        default:
            throw new Error("Invalid shape selected");
    }

    let shapeSVG = "";
    if (shape) {
        shapeSVG = shape.render();
    } else {
        console.error("Shape object is undefined");
    }

    const titleSVG = `<text x="150" y="150" text-anchor="middle" font-size="40" fill="${responses.textColor}">${responses.logoTitle}</text>`
        console.log(titleSVG)

    // Add inline CSS styling to the SVG elements
    const logoSVG = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <style>
            /* Add your CSS styles here */
            text {
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: ${responses.textColor}
            }
            .center {
                text-anchor: middle;
                alignment-baseline: middle;
            }
            .shape {
                stroke: black;
                stroke-width: 2;
            }
        </style>
        <g class="center">
            ${shapeSVG}
            <text x="150" y="115" fill="${responses.textColor}" class = "center">${responses.logoTitle}</text>
        </g>
    </svg>
`;

    return logoSVG;
}


function cleanSVGContent(svgContent) {
    // Remove any script or comments injected by live-server
    return svgContent.replace(/<!--[\s\S]*?-->/g, '').replace(/<script>[\s\S]*?<\/script>/g, '');
}

function writeToFile(fileName, content) {
    return new Promise((resolve, reject) => {
        const cleanedContent = cleanSVGContent(content);

        fs.writeFile(fileName, cleanedContent, 'utf8', (err) => {
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
        const completedSVG = generateLogo(responses); // Pass the responses object to generateLogo
        const fileName = `./examples/${responses.logoTitle}.svg`;
        console.log(`${responses.logoTitle} design coming soon....`);

        writeToFile(fileName, completedSVG)
            .then(() => {
                console.log('Logo created successfully!');
            })
            .catch((err) => {
                console.error('Error creating logo:', err);
            });
    });
}

init();