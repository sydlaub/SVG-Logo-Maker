// import inquirer
const inquirer = reuquire('inquirer');

// import file system module
const fs = require('fs');


// GIVEN a command - line application that accepts user input


// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword(OR a hexadecimal number)

//function to promp the user to answer questions about their logo and save the users answers
function promptUser() {
    inquirer
        .prompt([
            // text for logo
            {
                type:"input",
                message:"What text would you like the logo to display? Please only enter three characters.",
                name:"text",
            },
            // text color
            {
                type: "input",
                message: "Input desired text color using a color keyword or a hexidecimal number.",
                name: "textColor",
            },
            // shape of logo
            {
                type: "input",
                message: "What shape would you like the logo to display?",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
            },
            // shape color
            {
                type: "input",
                message: "Input desired shape background color using a color keyword or a hexidecimal number.",
                name: "shapeColor",
            },
        ])
}

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named`logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered