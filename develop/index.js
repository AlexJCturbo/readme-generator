//Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const fileTemplate = require('./utils/readme-template.js');

//Array of questions for user input
const questions = () => {
	console.log(`

Welcome to the README generator app!
	
Instructions:
This app will allow you to create a professional README file for your project
You will be prompt a series of questions that will allow the app to create your README.
Once all the questions are answered, a README.md file will be created.
The location of the README file will be in the folder "dist".

=====================================
Please answer the following questions
=====================================

	`		
	);

  return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter the name of your project (required):',
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log('Please enter the name of the project:');
				}
			}
    },
		{
			type: 'input',
			name: 'description',
			message: 'Provide a detailed description of your project (required):',
			validate: descriptionInput => {
				if (descriptionInput) {
					return true;
				} else {
					console.log('Please provide a description of your project:');
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmInstallation',
			message: 'Does your project have specific installation instructions?',
			default: true
		},
		{
			type: 'input',
			name: 'installation',
			message: 'Enter the installation instructions to run your project:',
			when: ({confirmInstallation}) => {
				if (confirmInstallation) {
					return true;
				} else {
					return false;
				}
			},
			validate: installationInput => {
				if (installationInput) {
					return true;
				} else {
					console.log('Please enter the installation instructions to run your project:');
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmUsage',
			message: 'Would you like to describe how to use your project?',
			default: true
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Explain how to use your project:',
			when: ({confirmUsage}) => {
				if (confirmUsage) {
					return true;
				} else {
					return false;
				}
			},
			validate: usageInput => {
				if (usageInput) {
					return true;
				} else {
					console.log('Please explain how to use your project:');
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmContribute',
			message: 'Would you like to describe how can users make contributions to your project?',
			default: true
		},
		{
			type: 'input',
			name: 'contribute',
			message: 'Provide the guidelines to contribute with the project:',
			when: ({confirmContribute}) => {
				if (confirmContribute) {
					return true;
				} else {
					return false;
				}
			},
			validate: contributeInput => {
				if (contributeInput) {
					return true;
				} else {
					console.log('Please provide the guidelines to contribute with the project:');
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmTestInstructions',
			message: 'Would you like to provide testing instructions for your project?',
			default: true
		},
		{
			type: 'input',
			name: 'testInstructions',
			message: "Provide the testing instructions for your project:",
			when: ({confirmTestInstructions}) => {
				if (confirmTestInstructions) {
					return true;
				} else {
					return false;
				}
			},
			validate: testInstructionsInput => {
				if (testInstructionsInput) {
					return true;
				} else {
					console.log('Please provide the testing instructions for your project:');
				}
			}
		},
		{
			type: 'list',
			name: 'license',
			message: 'Choose a license for your open-source project.',
			choices: ['MIT', 'ISC', 'Apache License 2.0', 'BSD 3-Clause License', 'GNU GPLv3', 'Mozilla Public License 2.0', 'No License']
		},
		{
			type: 'input',
			name: 'github',
			message: 'Enter the GitHub repository of your project (required):',
			validate: githubInput => {
				if (githubInput) {
					return true;
				} else {
					console.log('Please enter the GitHub repository of your project:');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'githubUserName',
			message: 'Enter your GitHub user name (required):',
			validate: githubInput => {
				if (githubInput) {
					return true;
				} else {
					console.log('Please enter your GitHub user name:');
					return false;
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmEmail',
			message: 'Would you like to provide an email address to reach you with additional questions?',
			default: true
		},
		{
			type: 'input',
			name: 'email',
			message: 'Please enter your email address:',
			when: ({confirmEmail}) => {
				if (confirmEmail) {
					return true;
				} else {
					return false;
				}
			},
			validate: emailInput => {
				if (emailInput) {
					return true;
				} else {
					console.log('Please enter your email address:');
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmReference',
			message: 'Would you like to provide references of your project?',
			default: true
		},
		{
			type: 'input',
			name: 'reference',
			message: 'Please provide your references:',
			when: ({confirmReference}) => {
				if (confirmReference) {
					return true;
				} else {
					return false;
				}
			},
			validate: referenceInput => {
				if (referenceInput) {
					return true;
				} else {
					console.log('Please provide your references:');
				}
			}
		},
		{
			type: 'input',
			name: 'copyright',
			message: 'Provide the name or organization that holds the copyright of this program:',
			when: ({license}) => {
				if (license === 'MIT') {
					return true;
				} else if (license === 'ISC') {
					return true;
				} else if (license === 'BSD 3-Clause License') {
					return true;
				} else {
					return false;
				}
			}
		}
  ]);
};


//Function to write README file
const writeToFile = collectInput => {
	return new Promise((resolve, reject) => {
		fs.writeFile('../dist/README.md', collectInput, err => {
			if (err){
				reject(err);
				return;
			}
			resolve ({
				ok: true,
				message: 'File created!'
			});
		});
	});
}

//Function to initialize app
const init = () => {
	questions().then(function(readmeInput){
		console.log(readmeInput);
		
		let collectInput = fileTemplate(readmeInput);
		console.log(collectInput);
		writeToFile(collectInput);
	})
}

//Call function to initialize app
init();
