const Paragraph = require('./paragraph');
const Definition = require('./definition');

const SubSectionContent = `
  union SubSectionContent = Definition | Paragraph
`;

module.exports = () => [SubSectionContent, Definition, Paragraph];
