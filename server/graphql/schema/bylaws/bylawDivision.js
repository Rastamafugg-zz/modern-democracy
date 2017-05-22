const BylawSection = require('./bylawSection');

const BylawDivision = `
  type BylawDivision {
    division: String!
    title: String
    text: String
    sections: [BylawSection]
  }
`;

module.exports = () => [BylawDivision, BylawSection];
