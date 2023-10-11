const inquirer = require('inquirer');
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        message: 'Enter your project title...',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Enter a description for your project...',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions...',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Enter usage instructions...',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Enter license details...',
        name: 'License',
    },
    {
        type: 'input',
        message: 'Enter contributers...',
        name: 'Credits',
    },
    {
        type: 'input',
        message: 'Enter some supposed FAQs...',
        name: 'FAQs'
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function readMeString(response) {
    

}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            readMeString(response)
        
  );
}

// Function call to initialize app
init();
