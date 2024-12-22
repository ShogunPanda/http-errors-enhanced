import { writeFile } from 'node:fs/promises'
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
      statusCode: {
        type: 'number',
        description: 'The error HTTP status code',
        enum: [code]
      },
      error: {
        type: 'string',
        description: 'The error HTTP status description',
        enum: [error]
      },
      message: {
        type: 'string',
        description: 'The error message',
        pattern: '.+'
      },
      code: {
        type: 'string',
        description: 'The error code',
        enum: [error]
      },
      ...additional
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
  }

  return `export const ${lowerFirst(identifier)}Schema = ${JSON.stringify(definition)}`
}

async function main(): Promise<void> {
  const require = createRequire(import.meta.url)
  const prettierConfig = require('./prettier.config.js')
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
        stack: {
          type: 'array',
          items: {
            type: 'string',
            description: 'A call in the error stack.',
            pattern: '.+'
          }
        },
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
  const statusCodes: string[] = []
  const classes: string[] = []
  const errorClasses: string[] = []
  const classesTests: string[] = []
  const schemas: string[] = []

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
          test('${klass}', () => {
            const error = new ${klass}('WHATEVER', {key1: 'prop1'})

            deepStrictEqual(${klass}.status, ${code})
            deepStrictEqual(${klass}.error, '${identifier}')
            deepStrictEqual(${klass}.message, "${message}")
            deepStrictEqual(${klass}.phrase, "${phrase}")

            deepStrictEqual(error.status, ${code})
            deepStrictEqual(error.message, 'WHATEVER')
            deepStrictEqual(error.error, "${message}")
            deepStrictEqual(error.errorPhrase, "${phrase}")
            deepStrictEqual(error.code, "HTTP_ERROR_${errorConstant}")
            deepStrictEqual(error.name, '${klass}')
            ok(${isClientError ? '' : '!'}error.isClientError)
            ok(${isClientError ? '!' : ''}error.isServerError)
            ok(${isClientError ? '' : '!'}error.expose)
            deepStrictEqual(error.key1, 'prop1')
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

  await writeFile(
    'src/errors.ts',
    await format(
      `
        import { HttpError } from './base.js'
        import { type GenericObject } from './utils.js'

        ${classes.join('\n\n')}
      `.trim(),
      { parser: 'typescript', ...prettierConfig }
    ),
    'utf8'
  )

  await writeFile(
    'src/schemas.ts',
    await format(
      `
        ${schemas.join('\n\n')}
      `.trim(),
      { parser: 'typescript', ...prettierConfig }
    ),
    'utf8'
  )

  await writeFile(
    'src/statuses.ts',
    await format(
      `
        export const identifierByCodes: Record<string, string> = ${JSON.stringify(identifierByCodes, null, 2)}

        export const codesByIdentifier: Record<string, number> = ${JSON.stringify(codesByIdentifier, null, 2)}

        export const messagesByCodes: Record<string, string> = ${JSON.stringify(messagesByCodes, null, 2)}

        export const phrasesByCodes: Record<string, string> = ${JSON.stringify(phrasesByCodes, null, 2)}

        ${statusCodes.join('\n')}
      `.trim(),
      { parser: 'typescript', ...prettierConfig }
    ),
    'utf8'
  )

  await writeFile(
    'test/errors.test.ts',
    await format(
      `
        /* eslint-disable @typescript-eslint/no-floating-promises */

        import { deepStrictEqual, ok } from 'node:assert'
        import { test } from 'node:test'
        import { ${errorClasses
          .sort((a: string, b: string) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .join(',')} } from '../src/index.js'

        ${classesTests.join('\n\n')}
      `.trim(),
      { parser: 'typescript', ...prettierConfig }
    ),
    'utf8'
  )
}

main()
