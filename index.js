const inquirer = require("inquirer")
const fs = require("fs")
const markdown = require("./utils/generateMarkdown.js")

inquirer.prompt([
    {
        type: "input",
        message: "Title:",
        name: "title"
    },

    {
        type: "input",
        message: "Description:",
        name: "description"
    },

    {
        type: "input",
        message: "Table of contents:",
        name: "table"
    },

    {
        type: "input",
        message: "Installation:",
        name: "installation"
    },

    {
        type: "input",
        message: "Usage:",
        name: "usage"
    },

    {
        type: "list",
        message: "License:",
        name: "license",
        choices: ["mit", "Common Development and Distribution License", "Eclipse Public License version 2.0", "Apache License 2.0"]
    },

    {   
        type: "input",
        message: "contribution:",
        name: "contribution"
    },

    {   
        type: "input",
        message: "Test:",
        name: "tests"
    },

    {
        type: "input",
        message: "User Name:",
        name: "question"
    },

    {
        type: "input",
        message: "Email:",
        name: "email"
    },


]).then(answers => {
   fs.writeFile("read.md", markdown(answers),(err) =>{
        if(err) console.log(err)
    })
})
