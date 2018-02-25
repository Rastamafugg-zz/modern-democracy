const ContentType = require('./contentType');
const Link = require('./link');
const Paragraph = require('./paragraph');

const Definition = `
  type Definition {
    id: String!
    type: ContentType!
    term: String!
    text: String
    links: [Link!]
    content: [Paragraph!]
  }
`;

module.exports = () => [Definition, ContentType, Link, Paragraph];
