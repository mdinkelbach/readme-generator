// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
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
      type: 'list',
      message: 'What License does your project use?',
      choices: [ "Choice A", "choice B" ],
      name: 'license',
  },
  {
    type: 'input',
    message: 'How does someone contribute to your project? If allowed at all.',
    default: 'N/A',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'How does someone test your project?',
    default: 'N/A',
    name: 'test',
  },
  {
    type: 'input',
    message: 'What is your GitHub account?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is a good email for people to send quetions to?',
    name: 'email',
  },];

// TODO: Create a function to write README file
const writeToFile = ({title, description, installation, usage, license, contribute, test, github, email}) => 
`# ${title}

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

This application is covered under the ${license} license.

## How to Contribute

${contribute}

## Tests

${test}

## Questions?

Send any inquires to ${email}

GitHub Account:
https://github.com/${github}`;

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
    fs.writeFile('README.md', writeToFile(response), (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  ));
}

// Function call to initialize app
init();
