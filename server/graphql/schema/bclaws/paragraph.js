const SubParagraph = require('./subParagraph');
const ContentType = require('./contentType');

const Paragraph = `
  type Paragraph {
    id: String!
    type: ContentType!
    num: String!
    text: String
    description: String
    content: [SubParagraph]
  }
`;

module.exports = () => [Paragraph, SubParagraph, ContentType];
