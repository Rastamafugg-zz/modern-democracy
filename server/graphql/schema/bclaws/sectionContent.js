const Paragraph = require('./paragraph');
const SubSection = require('./subSection');

const SectionContent = `
  union SectionContent = SubSection | Paragraph
`;

module.exports = () => [SectionContent, SubSection, Paragraph];
