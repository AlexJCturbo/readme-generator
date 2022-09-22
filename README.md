# Professional README File Generator

## Description
This project uses JavaScript and Node.js create an application that generates a professional README file based on the user's input.

## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Code Description
This project was produced using Node.js and JavaScript. The code consists of an index file where the inquirer app is called to prompt all the questions that is required for the README file, a readme-template file that holds the template for the README file and a generateMarkdown file that calls the badges for the different license options. The app is initialized with Node.js executing the index file. This file runs the code in a series of functions and promises which concludes writing a README file based on the user's responses.

## Links

- [Deployed Link](https://alexjcturbo.github.io/readme-generator/)

- [GitHub Repository Link](https://github.com/AlexJCturbo/readme-generator)

## Screen Shots