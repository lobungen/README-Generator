// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "GPLv3":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "BSD 3-Clause":
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
    case "ISC":
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";

  const licenseLinks = {
    MIT: "[MIT License](https://opensource.org/licenses/MIT)",
    GPLv3: "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)",
    "Apache 2.0":
      "[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)",
    "BSD 3-Clause":
      "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)",
    ISC: "[ISC License](https://opensource.org/licenses/ISC)",
  };
  return licenseLinks[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";

  return `## License

This project is licensed under the **${renderLicenseLink(license)}**.`;
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ${data.description}

  ${renderLicenseSection(data.license)}



## **Table of Contents**
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)

## **Installation Instructions**
${data.installation}

## **Usage Information**
${data.usage}

## **Contribution Guidelines**
${data.contributingGuidelines}

## **Test Instructions**
${data.tests}


`;
}

export default generateMarkdown;
