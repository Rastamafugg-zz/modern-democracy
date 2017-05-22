const Part = require('./part');

const Act = `
  type Act {
    id: String!
    title: String!
    chapter: Int!
    yearEnacted: Int!
    assentedTo: String!
    parts: [Part!]
  }
`;

module.exports = () => [Act, Part];
