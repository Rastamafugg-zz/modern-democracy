const Division = require('./division');
const Section = require('./section');

const PartContent = `
  union PartContent = Division | Section
`;

module.exports = () => [PartContent, Division, Section];
