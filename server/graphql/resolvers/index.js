const bylaws = require('./bylaws');
const taxes = require('./taxes');
const propertyValues = require('./propertyValues');
const lawsDocumentList = require('./lawsDocumentList');
const lawsDocument = require('./lawsDocument');

module.exports = {
  Query: {
    bylaws,
    lawsDocumentList,
    lawsDocument,
    taxes,
    propertyValues,
  },
  PartContent: {
    __resolveType(obj) {
      if (obj.marginalNote) {
        return 'Section';
      } else {
        return 'Division';
      }
    },
  },
  SectionContent: {
    __resolveType(obj) {
      return obj.type;
    },
  },
  SubSectionContent: {
    __resolveType(obj) {
      return obj.type;
    },
  },
}
