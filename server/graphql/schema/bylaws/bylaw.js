const BylawDivision = require('./bylawDivision');

const Bylaw = `
  type Bylaw {
    _id: String!
    property: String!
    document: String!
    divisions: [BylawDivision]
  }
`;

module.exports = () => [Bylaw, BylawDivision];
