
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		message: "What is the title of the project?",
		name: "name",
	},
	{
		type: "input",
		message: "What is the project about? Give a detailed description of your project?",
		name: "Desription",
	},
	{
		type: "input",
		message: "Table of contents?",
		name: "Table of contents",
	},
	{
		type: "checkbox",
		message: "What does the user need to install to run this app?",
		name: "stack",
		choices: ["inquire", "nood.js", "fs", "index.js"],
	},
	{
		type: "checkbox",
		message: "How is the app used?",
		name: "stack",
		choices: ["Through Webpage", "Using node.js", "Using HTML & CSS"],
	},
	{
		type: "input",
		message: "how is the app used? Give instructions",
		name: "usage",
	},
	{
		type: "input",
		message: "Who contributed to this project?",
		name: "Contributing",
	},
	{
		type: "input",
		message: "Contact info for inquiries.",
		name: "Questions",
	},
	{
		type: "input",
		message: "What is your Github username?",
		name: "Username",
	},
	{
		type: "input",
		message: "What is your Email address?",
		name: "Email",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

	fs.writeFile(fileName,data,function(err) {
		console.log(fileName);
		console.log(data);
		if (err) {
			return console.log(err);
		} else {
			console.log("Success");
		}
	});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generatorMarkdown (data));
        console.log(data);
    })
}

// Function call to initialize app
init();
