const fs = require("fs");
const inquirer = require("inquirer");
const logo_shapes = require("./lib/shapes");
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
        name: "logo-shape",
        message: "What shape would you like your logo to be?",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "logo-color",
        message: "What color would you like the shape of the logo to be? *this can be a color name or a hexadecimal number*"
    },
  
];

function writeToFile(fileName, responses) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(process.cwd(), fileName), responses, (err) => {
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
        console.log(`${title} design coming soon....`);
        writeToFile(`./examples/${responses.title}.svg`, readMe({ ...responses }))
            .then(() => {
                console.log('Logo created successfully!');
            })
            .catch((err) => {
                console.error('Error creating logo:', err);
            });
    });
}

init();