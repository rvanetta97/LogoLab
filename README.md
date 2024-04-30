# LogoLab

This Node.js application generates SVG logos based on user input for shape, color, and title.

# Table of Contents
 - Installation (#Installation)
 - Usage (#Usage)
 - Requirements (#Requirements)
 - Dependencies (#Dependencies)
 - Code Overview (#Overview)
 - License (#License)

# Installation
Clone this repository to your local machine.
Navigate to the root directory of the repository.

 - Install dependencies using npm:
        bash
        npm install

# Usage
To generate a logo, run the following command in your terminal:
- bash
- node index.js
- Follow the prompts to input the company or product name, desired text color, logo shape, and logo color. The application will then generate an SVG logo based on your input and save it in the ./examples directory.

# Requirements
 - Node.js
 - Inquirer
 - Jest

# Dependencies
inquirer - For prompting user input.
fs - For file system operations.
path - For working with file paths.

# Overview
- index.js: Main file containing the application logic.
- lib/shapes.js: Module defining the classes for different shapes (Triangle, Square, Circle) used in generating the logo.
- cleanSVGContent: Function to clean SVG content by removing unwanted script and comments.
- writeToFile: Function to write SVG content to a file.
- generateLogo: Function to generate SVG logo based on user responses.
- init: Function to initialize the application by prompting user input and generating the logo.

# License
    This project is licensed under the MIT License - see the LICENSE file for details.
