const getDocumentTemplate = require('document-templates')
const generateDocumentData = require('../lib/generate-document-data')

module.exports = async function (context, request) {
  if (request.body) {
    const { templateData, templateConfig } = request.body
    const documentTemplate = getDocumentTemplate({ domain: templateConfig.domain, templateId: templateConfig.templateId })
    const template = {
      filePath: documentTemplate.filePath,
      data: templateData
    }
    const document = await generateDocumentData(context, template)
    context.response = document
  } else {
    context.response = {
      status: 400,
      body: 'Please pass a name on the query string or in the request body'
    }
  }
  return context
}
