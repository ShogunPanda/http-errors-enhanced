import { codesByIdentifier, identifierByCodes, messagesByCodes, phrasesByCodes } from './statuses.js'
import { addAdditionalProperties, serializeError, upperFirst, type GenericObject } from './utils.js'

export class HttpError extends Error {
  static standardErrorPrefix: string = 'HTTP_ERROR_'

  status: number
  statusCode: number // This always mirrors status
  statusClass: number
  code: string
  error: string
  errorPhrase: string
  expose: boolean
  headers: Record<string, string>
  isClientError: boolean
  isServerError: boolean;
  [key: string]: any

  constructor(status: number | string, message?: string | GenericObject, properties?: GenericObject) {
    // Normalize arguments
    if (typeof message === 'object') {
      properties = message
      message = properties.message || ''
    }

    properties = properties ?? {}

    // Extract special properties for Error constructor
    const errorOptions: ErrorOptions = properties['cause'] ? { cause: properties['cause'] } : {}

    // Create the error
    super(message as string, errorOptions)

    // Resolve status when string
    const resolvedStatus = this.#resolveStatus(status)
    const validStatus = this.#validateStatus(resolvedStatus)

    // Assign basic properties
    this.status = this.statusCode = validStatus
    this.error = messagesByCodes[this.status]
    this.errorPhrase = phrasesByCodes[this.status] ?? ''
    this.headers = properties['headers'] ?? {}
    this.stack = properties['stack'] || this.stack

    // Assign serialization properties
    this.name = 'HttpError'
    this.code = properties['code'] || this.#generateErrorCode(this.status)

    // Assign helpers properties
    this.isClientError = this.status < 500
    this.isServerError = !this.isClientError
    this.statusClass = this.isClientError ? 400 : 500
    this.expose = properties['expose'] ?? this.isClientError

    // This is needed to ensure http-errors isHttpError detects duck typing correctly
    if (typeof this.expose !== 'boolean') {
      this.expose = false
    }

    // Assign additional properties - No overwriting is allowed
    if (typeof properties === 'object') {
      addAdditionalProperties(this, properties)
    }

    // Configure properties
    Object.defineProperties(this, {
      status: { enumerable: false },
      code: { enumerable: !this.code.startsWith(HttpError.standardErrorPrefix) },
      errorPhrase: { enumerable: false },
      headers: { enumerable: false },
      name: { enumerable: false },
      isClientError: { enumerable: false },
      isServerError: { enumerable: false },
      statusClass: { enumerable: false },
      expose: { enumerable: false }
    })
  }

  #resolveStatus(status: number | string): number {
    return typeof status === 'string' ? (codesByIdentifier[upperFirst(status)] ?? 500) : status
  }

  #validateStatus(status: number): number {
    return status >= 400 && status <= 599 ? status : 500
  }

  #generateErrorCode(status: number): string {
    const httpDetail = identifierByCodes[status] || status.toString()
    return `${HttpError.standardErrorPrefix}${httpDetail
      .split('')
      .map((char, idx, arr) => {
        const prevChar = arr[idx - 1] ?? ''
        return /[a-z]/.test(prevChar) && /[A-Z]/.test(char) ? `_${char}` : char
      })
      .join('')
      .toUpperCase()}`
  }

  serialize(extended: boolean = false, omitStack: boolean = false): GenericObject {
    if (!extended) {
      return {
        statusCode: this.statusCode,
        error: this.error,
        message: this.message
      }
    }

    return { ...serializeError(this, omitStack), message: this.message }
  }
}

export function createError(
  status: number | string,
  message?: string | GenericObject,
  properties?: GenericObject
): HttpError {
  return new HttpError(status, message, properties)
}

export const isHttpError = (error: any): error is HttpError => {
  if (typeof error !== 'object' || !error) {
    return false
  }
  return (
    error instanceof HttpError ||
    (typeof error.status === 'number' && error.status === error.statusCode && typeof error.expose === 'boolean')
  )
}
