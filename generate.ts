import { writeFileSync } from 'node:fs'
import { STATUS_CODES } from 'node:http'
import { createRequire } from 'node:module'
import { format } from 'prettier'
import { lowerFirst, upperFirst } from './src/utils.js'

function buildError(code: number, description: string, identifier: string, error: string, additional: object): string {
  const definition = {
    type: 'object',
    $id: `http-error-${code}`,
    description,
    properties: {
      statusCode: { type: 'number', description: 'The error HTTP status code', enum: [code], example: code },
      error: { type: 'string', description: 'The error HTTP status description', enum: [error], example: error },
      message: {
        type: 'string',
        description: 'The error message',
        pattern: '.+',
        example: `${error}.`
      },
      code: { type: 'string', description: 'The error code', enum: [error], example: error },
      ...additional
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
  }

  return `export const ${lowerFirst(identifier)}Schema = ${JSON.stringify(definition)}`
}

function main(): void {
  const require = createRequire(import.meta.url)
  const prettierConfig = require('./prettier.config.cjs')
  const schemasDefinitions: { [key: string]: string | [string, object] } = {
    400: [
      'Error returned when the client payload is either invalid, malformed or has logical validation errors.',
      {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            description: 'A client error detected by the server.',
            additionalProperties: true
          }
        },
        failedValidations: {
          type: 'object',
          description: 'The validation errors in the client payload.',
          additionalProperties: true
        }
      }
    ],
    401: 'Error returned when client does not provide any valid authorization.',
    403: 'Error returned when client is not authorized to access the requested resource.',
    404: 'Error returned when the requested resource is not found.',
    405: 'Error returned when the requested method resource is not available.',
    406: 'Error returned when the server is not able to accept the request.',
    409: 'Error returned when the requested resource already exists.',
    415: 'Error returned when the server is not able to accept the request media type.',
    500: [
      'Error returned when a unexpected error was thrown by the server.',
      {
        stack: { type: 'array', items: { type: 'string', description: 'A call in the error stack.', pattern: '.+' } },
        errors: {
          type: 'array',
          items: {
            type: 'object',
            description: 'A server error.',
            additionalProperties: true
          }
        },
        failedValidations: {
          type: 'object',
          description: 'The validation errors in the server response.',
          additionalProperties: true
        }
      }
    ],
    502: [
      'Error returned when a unexpected error was thrown by a upstream server.',
      {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            description: 'A upstream server error.',
            additionalProperties: true
          }
        }
      }
    ],
    504: 'Error returned when a upstream server timed out.'
  }

  type Dictionary = Record<string, string | number>
  const identifierByCodes: Dictionary = {}
  const codesByIdentifier: Dictionary = {}
  const messagesByCodes: Dictionary = {}
  const phrasesByCodes: Dictionary = {}
  const statusCodes: Array<string> = []
  const classes: Array<string> = []
  const errorClasses: Array<string> = []
  const classesTests: Array<string> = []
  const schemas: Array<string> = []

  // Iterate
  for (const [code, message] of Object.entries(STATUS_CODES as Dictionary)) {
    const identifier = (message as string).replace(/\W/g, '')
    const klass = identifier.replace(/Error$/, '') + 'Error'
    const phrase = upperFirst((message as string).toLowerCase()) + '.'

    identifierByCodes[code] = identifier
    codesByIdentifier[identifier] = Number.parseInt(code, 10)
    messagesByCodes[code] = message
    phrasesByCodes[code] = phrase

    const errorConstant = identifier.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase()
    statusCodes.push(`export const ${errorConstant} = ${code}`)

    if (/^[45]/.test(code)) {
      classes.push(
        `
          export class ${klass} extends HttpError {
            static status: number = ${code}
            static error: string = '${identifier}'
            static message: string = "${message}"
            static phrase: string = "${phrase}"
          
            constructor(message?: string | GenericObject, properties?: GenericObject) {
              super(${code}, message, properties)
              this.name = '${klass}'
            }
          }
        `
      )

      const isClientError = code.startsWith('4')

      errorClasses.push(`${klass}`)
      classesTests.push(
        `
          t.test('${klass}', t => {
            t.plan(14)

            const error = new ${klass}('WHATEVER', {key1: 'prop1'})

            t.equal(${klass}.status, ${code})
            t.equal(${klass}.error, '${identifier}')
            t.equal(${klass}.message, "${message}")
            t.equal(${klass}.phrase, "${phrase}")

            t.equal(error.status, ${code})
            t.equal(error.message, 'WHATEVER')
            t.equal(error.error, "${message}")
            t.equal(error.errorPhrase, "${phrase}")
            t.equal(error.code, "HTTP_ERROR_${errorConstant}")
            t.equal(error.name, '${klass}')
            t.${isClientError ? 'true' : 'false'}(error.isClientError)
            t.${isClientError ? 'false' : 'true'}(error.isServerError)
            t.${isClientError ? 'true' : 'false'}(error.expose)
            t.equal(error.key1, 'prop1')
          })
        `
      )

      if (schemasDefinitions[code]) {
        let description: string | [string, object] = schemasDefinitions[code]
        let additional: object = {}

        if (typeof description !== 'string') {
          additional = description[1]
          description = description[0]
        }

        schemas.push(buildError(Number.parseInt(code, 0), description, identifier, message as string, additional))
      }
    }
  }

  writeFileSync(
    'src/errors.ts',
    format(
      `
        import { HttpError } from './base.js'
        import {GenericObject} from './utils.js'

        ${classes.join('\n\n')}
      `.trim(),
      { parser: 'babel', ...prettierConfig }
    ),
    'utf8'
  )

  writeFileSync(
    'src/schemas.ts',
    format(
      `
        ${schemas.join('\n\n')}
      `.trim(),
      { parser: 'babel', ...prettierConfig }
    ),
    'utf8'
  )

  writeFileSync(
    'src/statuses.ts',
    format(
      `
        export const identifierByCodes: { [key: string]: string } = ${JSON.stringify(identifierByCodes, null, 2)}

        export const codesByIdentifier: { [key: string]: number } = ${JSON.stringify(codesByIdentifier, null, 2)}

        export const messagesByCodes: { [key: string]: string } = ${JSON.stringify(messagesByCodes, null, 2)}

        export const phrasesByCodes: { [key: string]: string } = ${JSON.stringify(phrasesByCodes, null, 2)}

        ${statusCodes.join('\n')}
      `.trim(),
      { parser: 'babel', ...prettierConfig }
    ),
    'utf8'
  )

  writeFileSync(
    'test/errors.test.ts',
    format(
      `
        /* eslint-disable @typescript-eslint/no-floating-promises */

        import t from 'tap'
        import { ${errorClasses
          .sort((a: string, b: string) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .join(',')} } from '../src/index.js'

        ${classesTests.join('\n\n')}
      `.trim(),
      { parser: 'babel', ...prettierConfig }
    ),
    'utf8'
  )
}

main()
