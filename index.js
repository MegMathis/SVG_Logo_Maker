// include jest, inquirer, and fs

const inquirer = require("inquirer");
const fs = require("fs");

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
