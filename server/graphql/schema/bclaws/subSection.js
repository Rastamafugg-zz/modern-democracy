const SubSectionContent = require('./subSectionContent');
const ContentType = require('./contentType');

const SubSection = `
  type SubSection {
    id: String!
    type: ContentType!
    num: String!
    text: String
    content: [SubSectionContent]
  }
`;

module.exports = () => [SubSection, SubSectionContent, ContentType];
