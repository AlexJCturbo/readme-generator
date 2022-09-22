// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

module.exports = readmeInput => {

  if (readmeInput.license === 'MIT') {
    console.log('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
    return;
  } else if (readmeInput.license === 'ISC') {
    console.log('[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)')
    return;
  }
}

//'MIT', 'ISC', 'GNU GPLv3', 'Apache License 2.0', 'Mozilla Public License 2.0', 'No License'

// function renderLicenseBadge(license) {}


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// `;
// }

//module.exports = getMarkdown;




/*
const generateBadge = licenseBadge => {
const urlMit = '(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
const urlISC = '(https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
const urlGNU = '(https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
const urlApache = '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
const urlMozilla = '(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
const urlUnlicense = '(https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';

  if (licenseBadge === 'MIT')


  if (licenseBadge === 'No License') {
    return 'No license available';
  }
  

  return `
    ${licenseBadge
    .map(({license}) => {
      return `
      [![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `
    })
  }
  `
}
*/