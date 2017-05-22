const axios = require('axios');
const xmlParser = require('xml2js');

const { BCLAWS_URL } = require('../config');

module.exports = function(obj, args, context, info) {
  return new Promise((resolve, reject) => {
    axios.get(BCLAWS_URL).then(function(result) {
      //console.log(result.data);
      let parseString = xmlParser.parseString;
      parseString(result.data, function (err, resultJson) {
        let content = [];
        for (let document of resultJson.root.index) {
          content.push({
            title: document.CIVIX_DOCUMENT_TITLE,
            documentId: document.CIVIX_DOCUMENT_ID
          })
        }
        resolve(content);
      });
    }).catch(function(error) {
      console.log(error)
    });
  });
};
