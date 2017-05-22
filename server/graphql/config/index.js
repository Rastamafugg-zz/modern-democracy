module.exports = {
  STRATA_URL: 'mongodb://127.0.0.1/strata',
  GOVERNMENT_URL: 'mongodb://127.0.0.1/government',
  BCLAWS_URL: 'http://www.bclaws.ca/civix/content/complete',
  BCLAWS_DOC_URL: (contentType, pageId) => `http://www.bclaws.ca/civix/document/id/complete/${contentType}/${pageId}/xml`,
}
