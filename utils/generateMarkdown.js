// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## table of contents
  [Installation](## Installation)
  [Usage](## Usage)
  [License](## License)
  [Contribution](## Contribution)
  [Tests](## Tests)
  [Questions](## Questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.question}
  ${data.email}

`;
}

module.exports = generateMarkdown;
