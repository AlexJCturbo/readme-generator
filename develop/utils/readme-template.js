//Packages needed for this application
//const getMarkdown = require('./generateMarkdown.js');


//module.exports = response => {
module.exports = readmeInput => {

	const {name, description, installation, usage, contribute, testInstructions, license, github, email} = readmeInput;

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
###### [Back to Table of Contents](#Table-of-Contents)

## Usage
${usage}
###### [Back to Table of Contents](#Table-of-Contents)

## Contribution Guidelines
${contribute}
###### [Back to Table of Contents](#Table-of-Contents)

## Test Instructions
${testInstructions}
###### [Back to Table of Contents](#Table-of-Contents)

## Questions
${email}
###### [Back to Table of Contents](#Table-of-Contents)

## Links
[Application Repository](${github})
###### [Back to Table of Contents](#Table-of-Contents)

## References
${reference}
###### [Back to Table of Contents](#Table-of-Contents)

## License
${license}
###### [Back to Table of Contents](#Table-of-Contents)
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
