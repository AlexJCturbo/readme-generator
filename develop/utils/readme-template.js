//Packages needed for this application
const getMarkdown = require('./generateMarkdown.js');

//module.exports = response => {
module.exports = readmeInput => {
	const {name, description, installation, usage, contribute, testInstructions, license, github, email, reference} = readmeInput;

	return `
# ${name}


## Table of Contents
- [Project Description](#Project-Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution Guidelines](#Contribution-Guidelines)
- [Test Instructions](#Test-Instructions)
- [Questions](#Questions)
- [Links](#Links)
- [References](#References)
- [License](#License)


## Project Description
${description}
###### [Back to Index](#Table-of-Contents)

## Installation
${installation}
###### [Back to Index](#Table-of-Contents)

## Usage
${usage}
###### [Back to Index](#Table-of-Contents)

## Contribution Guidelines
${contribute}
###### [Back to Index](#Table-of-Contents)

## Test Instructions
${testInstructions}
###### [Back to Index](#Table-of-Contents)

## Questions
Please, fee free to get in touch with me at ${email} to discuss any inquiries or suggestions for the project. I will be happy to connect with you!
###### [Back to Index](#Table-of-Contents)

## Links
[Application Repository](${github})
###### [Back to Index](#Table-of-Contents)

## References
${reference}
###### [Back to Index](#Table-of-Contents)

## License
${license}
###### [Back to Index](#Table-of-Contents)
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
