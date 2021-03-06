// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## table of contents
  [Installation](#Installation) \n
  [Usage](#Usage) \n
  [License](#License) \n
  [Contribution](#Contribution)\n
  [Tests](#Tests) \n 
  [Questions](#Questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Badges
  [![Generic badge](https://img.shields.io/badge/<Javascript>-<Working>-<COLOR>.svg)](https://shields.io/)
  
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  [${data.question}](https://github.com/) \n
  ${data.email} \n 
  `;
}

module.exports = generateMarkdown;
