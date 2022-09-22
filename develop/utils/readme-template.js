//Include packages needed for this application

//const bringMarkdown = require('./generateMarkdown.js');


//module.exports = response => {
module.exports = readmeInput => {

	const {name, description, installation, usage, contribute, testInstructions, license, github, email} = readmeInput;

	return `
# ${name}

## Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribute](#Contribute)
- [Tests ](#Tests)
- [Questions](#Questions)
- [Application Repository](#Application Repository)
- [License](#License)


## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contribute
${contribute}

## Tests
${testInstructions}

## Questions
${email}

## Application Repository
[Application Repository](${github})

## License
${license}

  `

/*
TEST
	`
	# This is the TEST

	## Here you see input ${response.one}
	## Here you see input ${response.two}
	`
*/
}
