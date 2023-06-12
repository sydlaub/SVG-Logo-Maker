// import inquirer
const inquirer = require('inquirer');



// import file system module
const fs = require('fs');

// import shapes file
const Shape = require('./lib/shapes');

function generateSVG(shape) {
    let newShape = shape.render();
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${newShape}</svg>`
    
}


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
        .then((answers) => {
            // make sure the user does not enter more than 3 characters for the logo
            let shape;
            if(answers.shape = 'Circle'){
                let circleShape = new Shape.Circle()
                shape = circleShape;
            }
            if (answers.text.length > 3) {
                console.log("Please enter a text input of no more than 3 characters.");
                // if user enters more than 3 characters prompt again
                promptUser();
            } else {
                // once prompts are answered, call the function to write the svg file

                writeToFile("logo.svg", generateSVG(shape));
            };
        });   
}

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named`logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered