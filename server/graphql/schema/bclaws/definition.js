const ContentType = require('./contentType');
const Link = require('./link');

const Definition = `
  type Definition {
    id: String!
    type: ContentType!
    term: String!
    text: String!
    links: [Link!]
  }
`;

module.exports = () => [Definition, ContentType, Link];
