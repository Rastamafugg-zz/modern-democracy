const PartContent = require('./partContent');

const Part = `
  type Part {
    id: String!
    postfix: String!
    num: String!
    text: String!
    content: [PartContent]
  }
`;

module.exports = () => [Part, PartContent];
