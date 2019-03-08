# azf-shared-documents

Shared Azure functions for documents

## generateDocx

Generates a document from template and data.

## Usage

POST json and receive a base64 encoded version of a docx-file.

### Development

Install all tools needed for [local development](https://docs.microsoft.com/en-us/azure/azure-functions/functions-develop-local).

Clone the repo. Install dependencies.

Start server

```
$ func start
```

POST testdata

```
$ curl http://localhost:7071/api/generateDocx -d @test/data/generate-document.json --header "Content-Type: application/json"
```

# License

[MIT](LICENSE)

