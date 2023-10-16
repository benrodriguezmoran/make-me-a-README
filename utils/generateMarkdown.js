// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `[${license.toUpperCase()} Licensing](https://choosealicense.com/licenses/${license}/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `
    ${renderLicenseBadge(license)} ${renderLicenseLink(license)}
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
${(data.description !== '') ? `${data.description}` : null}
![screenshot](assets/images/screenshot.png)
## Table Of Contents
${(data.installation !== '') ? `- [Installation](#installation)` : ``}
${(data.usage !== '') ? `- [Usage](#usage)` : ``}
${(data.credits !== '') ? `- [Credits](#credits)` : ``}
${(data.license !== 'None') ? `- [License](#license)` : ``}
${(data.github !== '') ? `- [Questions](#questions)` : ``}
${(data.features !== '') ? `- [Features](#features)` : ``}
${(data.contribution !== '') ? `- [Contribution](#contribution)` : ``}
${(data.tests !== '') ? `- [Tests](#tests)` : ``}

${(data.installation !== '') ? `## Installation 
${data.installation}` : ``}
${(data.usage !== '') ? `## Usage 
${data.usage}` : ``}
${(data.credits !== '') ? `## Credits 
${data.credits}` : ``}
${(data.license !== 'None') ? `## License 
${renderLicenseSection(data.license)}` : ``}
## Questions
${(data.github !== '') ? `- Github [${data.github}](https://github.com/${data.github})` : ``} ${(data.email !== '') ? `
- Email [${data.email}](mailto:${data.email})` : ``}
${(data.features !== '') ? `## Features 
${data.features}` : ``}
${(data.contribution !== '') ? `## Contributuion 
${data.contribution}` : ``}
${(data.tests !== '') ? `## Tests 
${data.tests}` : ``}
`;


}

module.exports = generateMarkdown;
