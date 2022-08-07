// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
// return ''
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
// return ''
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
// return ''
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Description
${data.Description}
# List of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following installed dependencies are required for the program to function properly: ${data.Installation}
# Usage
Using this app requires: ${data.Usage}
# License
This project is authorized by the ${data.License} license. 
![Project license](https://docs.oracle.com/communications/F25434_01/docs.10/Licensing%20Manual/GUID-994D4BFE-FAED-4D42-A3A2-6B90EF444769.htm)
# Contributing
​Contributors: ${data.Contributing}
# Tests
The following are necessary for the test to run: ${data.Tests}
# Inquiries
If you have any questions contact ${data.Username} direct at: ${data.Email}.
`
}

module.exports = generateMarkdown;