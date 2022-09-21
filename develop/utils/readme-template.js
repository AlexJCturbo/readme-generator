//README file title


module.exports = readmeTemplateData => {

	//Destructure projects and about data from templateData based on their property key names
	//This will create three variables based on data in templateData
	const {name, description, installation, usage, contribute, testInstructions, license, github, email, ...others} = readmeTemplateData;

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
}
