// Import required packages
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const fs = require("fs");
const mdu = require('markdown-utils');

// Function to prompt user for input and generate README file

// Define questions to gather user input for README content
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List the installation steps required for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project:',
        choices: ['MIT License', 'Apache License 2.0', 'The Unlicense', 'Eclipse Public License 2.0'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List any contributors to your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests written for your project:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for contact:',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub username:',
    },
];

// Write README
function writeToFile(fileName, data) {
    console.log(data);
    let mkd = `
${mdu.h1(data.title)}
${mdu.h4(data.description)}
${mdu.h4("")}
${mdu.h2("Installation")}
${data.installation}
${mdu.h2("Usage")}
${data.usage}
${mdu.h2("License")}
${mdu.em(data.license)}*
${mdu.h2("Contribution")}
${mdu.strong(data.contributing)}
${mdu.h2("Tests")}
${mdu.code(data.tests)}
${mdu.h2("Email")}
${mdu.link(data.email, data.email, 'Email')}
${mdu.h2("Github")}
${mdu.link(data.gitHub, 'https://github.com/'+data.gitHub, 'GitHub')}
${mdu.hr()}
`;
    console.log(mkd);
  fs.writeFile(fileName, mkd, (err) => console.log(err));
}

// Initializing
function init() {
  prompt(questions)
    .then((answers) => {
      writeToFile("README_FILES/README.md", answers);
      console.log("Success");
    })
    .catch((err) => {
      console.log(err);
    });
}
// Node index
init();
