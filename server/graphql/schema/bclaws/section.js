const SectionContent = require('./sectionContent');

const Section = `
  type Section {
    id: String!
    num: String!
    marginalNote: String!
    text: String
    content: [SectionContent]
  }
`;

module.exports = () => [Section, SectionContent];
