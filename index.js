// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeToFile = ({title, description, installation, usage, license, contribute, test, questions}) => 
`# ${title}

## Description

This is the ${description} section

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

This is the ${installation} section

## Usage

This is the ${usage} section

## License

This is the ${license} section

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## How to Contribute

This is the ${contribute} section

## Tests

This is the ${test} section

## Questions?

This is the ${questions} section`;

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
          type: 'input',
          message: `What is your project's title?`,
          name: 'title',
      },
      {
          type: 'input',
          message: 'Describe your project',
          name: 'description',
      },
      {
          type: 'input',
          message: 'What is the installation process?',
          name: 'installation',
      },
      {
          type: 'input',
          message: 'How is your project used?',
          name: 'usage',
      },
      {
          type: 'input',
          message: 'What License does your project use?',
          name: 'license',
      },
      {
        type: 'input',
        message: 'How does someone contribute to your project? If allowed at all.',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'How does someone test your project?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What is a good email for people to send quetions to?',
        name: 'questions',
      },
    ])
    .then((response) =>
    fs.writeFile('README.md', writeToFile(response), (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  ));
}

// Function call to initialize app
init();
