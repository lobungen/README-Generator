// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import {generateMarkdown} from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contributingGuidelines",
    message: "What are the contributing guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?",
  },
  {
    type: "input",
    name: "questions",
    message: "What are the questions?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error("Error creating README.md", err);
    } else {
      console.log("Successfully created README.md");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
    const filename = `${answers.title.toLowerCase().replace(/\s+/g, '')}.md`;
    const readmeContent = generateMarkdown(answers);
    writeToFile(filename, readmeContent);
  });
}

// Function call to initialize app
init();
