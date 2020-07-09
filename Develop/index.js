// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const questions = [

    {
        type: "input",
        name: "name",
        message: "Title of your page?"

    },
    {
        type: "input",
        message: "Description",
        name: "Description",
    },
    {
        type: "input",
        message: "Table of contents",
        name: "content",
    },
        
    {
        type: "input",
        message: "Installation",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage",
        name: "usage",

    },
    {
        type: "checkbox",
        message: "License",
        name: "license",
        choices: ["MIT", "Appache", "GNU/GPL", "CreativeCommon"]
    },
    {
        type: "input",
        message: "Contributing",
        name: "contribution",
    }, 
    {
        type: "input",
        message: "Tests",
        name: "test",
    }, 
    {
        type: "input",
        message: "How do you wanted to be contacted with questions",
        name: "question",
    }
]

// function to write README file
function writeToFile(fileName, data) {
    let fpath = process.cwd();
    let file = fs.writeFileSync(`${fpath}/${fileName}`, data);
    return file;
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(data){
    var fileName = "README.md";
    writeToFile(fileName, Util(data));
    console.log(fileName);

});
}

// function call to initialize program
init();

function Util(data){
    return `
    # Title
    ${data.name}
    ## Description
    ${data.Description}
    ## Table of Contents
    ${data.content}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Contributing
    ${data.contribution}
    ## Tests
    ${data.test}
    ## How do you wanted to be contacted with questions
    ${data.question}
    `
}