const Section = require('./section');

const Division = `
  type Division {
    id: String!
    num: String!
    text: String!
    sections: [Section]
  }
`;

module.exports = () => [Division, Section];
