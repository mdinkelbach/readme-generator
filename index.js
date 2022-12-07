// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeToFile = ({username, city, bio, liurl, ghurl}) => 
    `<!DOCTYPE html>
    <html lang="en-US">
    
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Test</title>
      </head>
    
      <body>
        <header class="header">
        ${username}
        </header>
    
        <section>
        ${city}
        ${bio}
        ${liurl}
        ${ghurl}
        </section>
        <script src="index.js"></script>
      </body>
    
    </html>`;

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What city do you live in?',
        name: 'city',
      },
      {
        type: 'input',
        message: 'Use one sentence to describe yourself',
        name: 'bio',
      },
      {
          type: 'input',
          message: 'What is your LinkedIn Url?',
          name: 'liurl',
      },
      {
          type: 'input',
          message: 'What is your GitHub Url?',
          name: 'ghurl',
      },
    ])
    .then((response) =>
    fs.writeFile('README.md', writeToFile(response), (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  ));
}

// Function call to initialize app
init();
