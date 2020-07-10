// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const questions = [

    {
        type: "input",
        name: "name",
        message: "What is title of your page?"

    },
    {
        type: "input",
        message: "Describe your page",
        name: "Description",
    },
    {
        type: "input",
        message: " Mention your Table of contents",
        name: "content",
    },
        
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "usage",

    },
    {
        type: "list",
        message: "License you like to use?",
        name: "license",
        choices: ["MIT", "Appache", "GNU/GPL", "CreativeCommon"]
    },

    {
        type: "input",
        message: "How would you want other developers to contribute to the Apllication or package?",
        name: "contribution",
    }, 
    {
        type: "input",
        message: "Write tests for your Application.",
        name: "test",
    }, 
    {
        type: "input",
        message: "How do you wanted to be contacted with questions?",
        name: "question",
    }
]

// function to write README file
function writeToFile(fileName, data) {
    let fpath = process.cwd();
    let file = fs.writeFileSync(`${fpath}/${fileName}`, data);
    return file;
    //generateBadge(license);

}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(data){
    var fileName = "README.md";
    writeToFile(fileName, Util(data),);
    console.log(fileName);

});
}
 //function generateBadge(license){
 //   let licenseName = license.replace(' ', '');
 //   return `![GitHub License](https://img.shields.io/badge/license-$license}-blue.svg)`;
//}

// function call to initialize program
init();

function Util(data){
    return`
# Title: [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://github.com/${data.name.toLowerCase().split(' ').join("-")})
    ${data.name}
    
## Description:
    ${data.Description}
   

## Table of Contents:

* [Installation ](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [License](#License)
* [questions](#questions)

    

## Installation:
    ${data.installation}

## Usage:
    ${data.usage}

## License:
    ${data.license}

## Contributing:
    ${data.contribution}

## Tests:
    ${data.test}

## Contact:
    ${data.question}
    `
}