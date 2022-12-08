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
      choices: ['MIT', 'GPLv2', 'Apache', 'Other', 'None'],
      name: 'license',
  },
  {
    type: 'input',
    message: 'How would someone contribute to your project? If allowed at all.',
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

![license](https://img.shields.io/badge/License-${license}-brightgreen)

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

## Contributing

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
    err ? console.error(err) : console.log('README Created!')
  ));
}

// Function call to initialize app
init();
