//Packages needed for this application
const {selectedBadge, licenseDescription} = require('./generateMarkdown.js');

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


//Functions to display different sections in the table of contents
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

//Function to add badges
// const badgeMIT = licenseSelection => {
// 	if (licenseSelection === 'MIT') {
//     console.log('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
//     return;
//   } else if (readmeInput === 'ISC') {
//     console.log('[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)')
//     return;
//   }
// }

//README template function
module.exports = readmeInput => {

	//Destructure input array
	const {name, description, confirmInstallation, installation, confirmUsage, usage, confirmContribute, contribute, confirmTestInstructions, testInstructions, license, github, confirmEmail, email, confirmReference, reference, copyright} = readmeInput;

	//Variable to get the license badges
	let selectedLicense = selectedBadge(readmeInput.license);
	console.log(selectedLicense);

	let licenseTerms = licenseDescription(readmeInput.license);
	console.log(licenseTerms);

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
${licenseTerms}
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
