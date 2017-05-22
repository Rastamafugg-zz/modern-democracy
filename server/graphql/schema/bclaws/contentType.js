const ContentType = `
  enum ContentType {
    Part
    Division
    Section
    SubSection
    Paragraph
    SubParagraph
    Definition
  }
`;

module.exports = () => [ContentType];
