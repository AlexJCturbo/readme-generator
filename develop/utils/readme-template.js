//Packages needed for this application
const getMarkdown = require('./generateMarkdown.js');

//Create sections based on the user confirmations
//Installation section
const generateInstallation = installationText => {
	if (!installationText) {
		return '';
	}
	return `
## Installation
${installationText}
###### [Back to Index](#Table-of-Contents)
	`;
};

//Usage section
const generateUsage = usageText => {
	if (!usageText) {
		return '';
	}
	return `
## Usage
${usageText}
###### [Back to Index](#Table-of-Contents)
	`;
};

//Contribution guidelines section
const generateContribute = contributeText => {
	if (!contributeText) {
		return '';
	}
	return `
## Contribution Guidelines
${contributeText}
###### [Back to Index](#Table-of-Contents)
	`;
};

//Testing instructions section
const generateTesting = testInstructionsText => {
	if (!testInstructionsText) {
		return '';
	}
	return `
## Test Instructions
${testInstructionsText}
###### [Back to Index](#Table-of-Contents)
	`;
};

//Questions section
const generateQuestions = emailForQuestions => {
	if (!emailForQuestions) {
		return '';
	}
	return `
## Questions
Please, fee free to get in touch with me at ${emailForQuestions} to discuss any inquiries or suggestions for the project. I will be happy to connect with you!
###### [Back to Index](#Table-of-Contents)
	`;
};

//References section
const generateReferences = referencesText => {
	if (!referencesText) {
		return '';
	}
	return `
## References
${referencesText}
###### [Back to Index](#Table-of-Contents)
	`;
};


//Table of contents sections
const generateIndexInstall = indexInstall => {
	if (!indexInstall) {
		return '';
	}
	return `- [Installation](#Installation)`;
};

const generateIndexUsage = indexUsage => {
	if (!indexUsage) {
		return '';
	}
	return `
- [Usage](#Usage)`;
};

const generateIndexContribute = indexContribute => {
	if (!indexContribute) {
		return '';
	}
	return `
- [Contribution Guidelines](#Contribution-Guidelines)`;
};

const generateIndexTesting = indexTestInstructions => {
	if (!indexTestInstructions) {
		return '';
	}
	return `
- [Test Instructions](#Test-Instructions)`;
};

const generateIndexQuestions = indexQuestions => {
	if (!indexQuestions) {
		return '';
	}
	return `
- [Questions](#Questions)`;
};

const generateIndexReference = indexReferences => {
	if (!indexReferences) {
		return '';
	}
	return `- [References](#References)`;
};



//module.exports = response => {
module.exports = readmeInput => {
	let selectedLicense = getMarkdown(readmeInput);

	const {name, description, confirmInstallation, installation, confirmUsage, usage, confirmContribute, contribute, confirmTestInstructions, testInstructions, license, github, confirmEmail, email, confirmReference, reference} = readmeInput;

	return `
# ${name}
${selectedLicense}


## Table of Contents
- [Project Description](#Project-Description)

${generateIndexInstall(confirmInstallation)}
${generateIndexUsage(confirmUsage)}
${generateIndexContribute(confirmContribute)}
${generateIndexTesting(confirmTestInstructions)}
${generateIndexQuestions(confirmEmail)}

- [Links](#Links)

${generateIndexReference(confirmReference)}

- [License](#License)


## Project Description
${description}
###### [Back to Index](#Table-of-Contents)

${generateInstallation(installation)}

${generateUsage(usage)}

${generateContribute(contribute)}

${generateTesting(testInstructions)}

${generateQuestions(email)}

## Links
[Application Repository](${github})
###### [Back to Index](#Table-of-Contents)

${generateReferences(reference)}

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
