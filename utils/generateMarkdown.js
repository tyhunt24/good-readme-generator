// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of contents
  ${data.table}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  
  ## contribution
  ${data.contribution}

  ## tests
  ${data.tests}

  ## Questions
  ${data.question}
  ${data.email}
`;
}

module.exports = generateMarkdown;
