const generateDocument = require('generate-docx')

function getTemplateName (input) {
  return input ? input.toString().split('/').slice(-1)[0] : false
}

module.exports = (context, template) => {
  context.log(`generate-document-data - template - ${getTemplateName(template.filePath)}`)
  return new Promise(async (resolve, reject) => {
    const options = {
      template: {
        filePath: template.filePath,
        data: template.data
      }
    }

    const buffer = await generateDocument(options)

    context.log(`generate-document-data - document-generated`)

    resolve(buffer.toString('base64'))
  })
}
