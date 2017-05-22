const bylaws = require('./bylaws');
const taxes = require('./taxes');
const propertyValues = require('./propertyValues');
const lawsDocumentList = require('./lawsDocumentList');
const lawsDocument = require('./lawsDocument');

/*
 {laws {
 title,
 documentId
 }}

 {lawsDocument(path: ["statreg", "1527898742", "98043", "1138648009"]) {
 title,
 chapter,
 yearEnacted,
 assentedTo,
 parts {
 id,
 postfix,
 num,
 text,
 content {
 ... on Division {
 id,
 text,
 num
 }
 ... on Section {
 id,
 marginalNote,
 num
 }
 }
 }
 }} */
module.exports = {
  Query: {
    bylaws,
    lawsDocumentList,
    lawsDocument,
    taxes,
    propertyValues
  },
  PartContent: {
    __resolveType(obj, context, info){
      if (obj.marginalNote) {
        return 'Section';
      } else {
        return 'Division';
      }
    }
  },
  SectionContent: {
    __resolveType(obj, context, info){
      return obj.type;
    }
  },
  SubSectionContent: {
    __resolveType(obj, context, info){
      return obj.type;
    }
  }
}
