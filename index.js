// include jest, inquirer, and fs
// maxx length

const fs = require("fs");
const inquirer = require("inquirer");
const shape = require("./lib/shape");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");

inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

// prompt questions

const questions = [
  {
    type: "maxlength-input",
    name: "text",
    message: "Please enter three characters for your logo text.",
    maxLength: 3,
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      } else {
        return "Text is too long, text must be three characters or less";
      }
    },
  },
  {
    type: "input",
    name: "text_color",
    message: "Please enter the color you want your text.",
  },

  {
    type: "list",
    name: "shape",
    message: "Please choose a shape for your logo.",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shape_color",
    message: "Please enter the color you want your shape",
  },
];

// function to write SVG

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Generated logo.svg");
  });
}

// function to initialize

function init() {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    writeToFile("logo.svg", shape.newLogo(answers));
  });
}

// function call to init app

init();
