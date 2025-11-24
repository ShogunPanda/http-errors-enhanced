import { HttpError } from './base.ts'
import { type GenericObject } from './utils.ts'

export class BadRequestError extends HttpError {
  static status: number = 400
  static error: string = 'BadRequest'
  static message: string = 'Bad Request'
  static phrase: string = 'Bad request.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(400, message, properties)
    this.name = 'BadRequestError'
  }
}

export class UnauthorizedError extends HttpError {
  static status: number = 401
  static error: string = 'Unauthorized'
  static message: string = 'Unauthorized'
  static phrase: string = 'Unauthorized.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(401, message, properties)
    this.name = 'UnauthorizedError'
  }
}

export class PaymentRequiredError extends HttpError {
  static status: number = 402
  static error: string = 'PaymentRequired'
  static message: string = 'Payment Required'
  static phrase: string = 'Payment required.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(402, message, properties)
    this.name = 'PaymentRequiredError'
  }
}

export class ForbiddenError extends HttpError {
  static status: number = 403
  static error: string = 'Forbidden'
  static message: string = 'Forbidden'
  static phrase: string = 'Forbidden.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(403, message, properties)
    this.name = 'ForbiddenError'
  }
}

export class NotFoundError extends HttpError {
  static status: number = 404
  static error: string = 'NotFound'
  static message: string = 'Not Found'
  static phrase: string = 'Not found.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(404, message, properties)
    this.name = 'NotFoundError'
  }
}

export class MethodNotAllowedError extends HttpError {
  static status: number = 405
  static error: string = 'MethodNotAllowed'
  static message: string = 'Method Not Allowed'
  static phrase: string = 'Method not allowed.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(405, message, properties)
    this.name = 'MethodNotAllowedError'
  }
}

export class NotAcceptableError extends HttpError {
  static status: number = 406
  static error: string = 'NotAcceptable'
  static message: string = 'Not Acceptable'
  static phrase: string = 'Not acceptable.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(406, message, properties)
    this.name = 'NotAcceptableError'
  }
}

export class ProxyAuthenticationRequiredError extends HttpError {
  static status: number = 407
  static error: string = 'ProxyAuthenticationRequired'
  static message: string = 'Proxy Authentication Required'
  static phrase: string = 'Proxy authentication required.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(407, message, properties)
    this.name = 'ProxyAuthenticationRequiredError'
  }
}

export class RequestTimeoutError extends HttpError {
  static status: number = 408
  static error: string = 'RequestTimeout'
  static message: string = 'Request Timeout'
  static phrase: string = 'Request timeout.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(408, message, properties)
    this.name = 'RequestTimeoutError'
  }
}

export class ConflictError extends HttpError {
  static status: number = 409
  static error: string = 'Conflict'
  static message: string = 'Conflict'
  static phrase: string = 'Conflict.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(409, message, properties)
    this.name = 'ConflictError'
  }
}

export class GoneError extends HttpError {
  static status: number = 410
  static error: string = 'Gone'
  static message: string = 'Gone'
  static phrase: string = 'Gone.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(410, message, properties)
    this.name = 'GoneError'
  }
}

export class LengthRequiredError extends HttpError {
  static status: number = 411
  static error: string = 'LengthRequired'
  static message: string = 'Length Required'
  static phrase: string = 'Length required.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(411, message, properties)
    this.name = 'LengthRequiredError'
  }
}

export class PreconditionFailedError extends HttpError {
  static status: number = 412
  static error: string = 'PreconditionFailed'
  static message: string = 'Precondition Failed'
  static phrase: string = 'Precondition failed.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(412, message, properties)
    this.name = 'PreconditionFailedError'
  }
}

export class PayloadTooLargeError extends HttpError {
  static status: number = 413
  static error: string = 'PayloadTooLarge'
  static message: string = 'Payload Too Large'
  static phrase: string = 'Payload too large.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(413, message, properties)
    this.name = 'PayloadTooLargeError'
  }
}

export class URITooLongError extends HttpError {
  static status: number = 414
  static error: string = 'URITooLong'
  static message: string = 'URI Too Long'
  static phrase: string = 'Uri too long.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(414, message, properties)
    this.name = 'URITooLongError'
  }
}

export class UnsupportedMediaTypeError extends HttpError {
  static status: number = 415
  static error: string = 'UnsupportedMediaType'
  static message: string = 'Unsupported Media Type'
  static phrase: string = 'Unsupported media type.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(415, message, properties)
    this.name = 'UnsupportedMediaTypeError'
  }
}

export class RangeNotSatisfiableError extends HttpError {
  static status: number = 416
  static error: string = 'RangeNotSatisfiable'
  static message: string = 'Range Not Satisfiable'
  static phrase: string = 'Range not satisfiable.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(416, message, properties)
    this.name = 'RangeNotSatisfiableError'
  }
}

export class ExpectationFailedError extends HttpError {
  static status: number = 417
  static error: string = 'ExpectationFailed'
  static message: string = 'Expectation Failed'
  static phrase: string = 'Expectation failed.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(417, message, properties)
    this.name = 'ExpectationFailedError'
  }
}

export class ImaTeapotError extends HttpError {
  static status: number = 418
  static error: string = 'ImaTeapot'
  static message: string = "I'm a Teapot"
  static phrase: string = "I'm a teapot."

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(418, message, properties)
    this.name = 'ImaTeapotError'
  }
}

export class MisdirectedRequestError extends HttpError {
  static status: number = 421
  static error: string = 'MisdirectedRequest'
  static message: string = 'Misdirected Request'
  static phrase: string = 'Misdirected request.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(421, message, properties)
    this.name = 'MisdirectedRequestError'
  }
}

export class UnprocessableEntityError extends HttpError {
  static status: number = 422
  static error: string = 'UnprocessableEntity'
  static message: string = 'Unprocessable Entity'
  static phrase: string = 'Unprocessable entity.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(422, message, properties)
    this.name = 'UnprocessableEntityError'
  }
}

export class LockedError extends HttpError {
  static status: number = 423
  static error: string = 'Locked'
  static message: string = 'Locked'
  static phrase: string = 'Locked.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(423, message, properties)
    this.name = 'LockedError'
  }
}

export class FailedDependencyError extends HttpError {
  static status: number = 424
  static error: string = 'FailedDependency'
  static message: string = 'Failed Dependency'
  static phrase: string = 'Failed dependency.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(424, message, properties)
    this.name = 'FailedDependencyError'
  }
}

export class TooEarlyError extends HttpError {
  static status: number = 425
  static error: string = 'TooEarly'
  static message: string = 'Too Early'
  static phrase: string = 'Too early.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(425, message, properties)
    this.name = 'TooEarlyError'
  }
}

export class UpgradeRequiredError extends HttpError {
  static status: number = 426
  static error: string = 'UpgradeRequired'
  static message: string = 'Upgrade Required'
  static phrase: string = 'Upgrade required.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(426, message, properties)
    this.name = 'UpgradeRequiredError'
  }
}

export class PreconditionRequiredError extends HttpError {
  static status: number = 428
  static error: string = 'PreconditionRequired'
  static message: string = 'Precondition Required'
  static phrase: string = 'Precondition required.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(428, message, properties)
    this.name = 'PreconditionRequiredError'
  }
}

export class TooManyRequestsError extends HttpError {
  static status: number = 429
  static error: string = 'TooManyRequests'
  static message: string = 'Too Many Requests'
  static phrase: string = 'Too many requests.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(429, message, properties)
    this.name = 'TooManyRequestsError'
  }
}

export class RequestHeaderFieldsTooLargeError extends HttpError {
  static status: number = 431
  static error: string = 'RequestHeaderFieldsTooLarge'
  static message: string = 'Request Header Fields Too Large'
  static phrase: string = 'Request header fields too large.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(431, message, properties)
    this.name = 'RequestHeaderFieldsTooLargeError'
  }
}

export class UnavailableForLegalReasonsError extends HttpError {
  static status: number = 451
  static error: string = 'UnavailableForLegalReasons'
  static message: string = 'Unavailable For Legal Reasons'
  static phrase: string = 'Unavailable for legal reasons.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(451, message, properties)
    this.name = 'UnavailableForLegalReasonsError'
  }
}

export class InternalServerError extends HttpError {
  static status: number = 500
  static error: string = 'InternalServerError'
  static message: string = 'Internal Server Error'
  static phrase: string = 'Internal server error.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(500, message, properties)
    this.name = 'InternalServerError'
  }
}

export class NotImplementedError extends HttpError {
  static status: number = 501
  static error: string = 'NotImplemented'
  static message: string = 'Not Implemented'
  static phrase: string = 'Not implemented.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(501, message, properties)
    this.name = 'NotImplementedError'
  }
}

export class BadGatewayError extends HttpError {
  static status: number = 502
  static error: string = 'BadGateway'
  static message: string = 'Bad Gateway'
  static phrase: string = 'Bad gateway.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(502, message, properties)
    this.name = 'BadGatewayError'
  }
}

export class ServiceUnavailableError extends HttpError {
  static status: number = 503
  static error: string = 'ServiceUnavailable'
  static message: string = 'Service Unavailable'
  static phrase: string = 'Service unavailable.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(503, message, properties)
    this.name = 'ServiceUnavailableError'
  }
}

export class GatewayTimeoutError extends HttpError {
  static status: number = 504
  static error: string = 'GatewayTimeout'
  static message: string = 'Gateway Timeout'
  static phrase: string = 'Gateway timeout.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(504, message, properties)
    this.name = 'GatewayTimeoutError'
  }
}

export class HTTPVersionNotSupportedError extends HttpError {
  static status: number = 505
  static error: string = 'HTTPVersionNotSupported'
  static message: string = 'HTTP Version Not Supported'
  static phrase: string = 'Http version not supported.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(505, message, properties)
    this.name = 'HTTPVersionNotSupportedError'
  }
}

export class VariantAlsoNegotiatesError extends HttpError {
  static status: number = 506
  static error: string = 'VariantAlsoNegotiates'
  static message: string = 'Variant Also Negotiates'
  static phrase: string = 'Variant also negotiates.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(506, message, properties)
    this.name = 'VariantAlsoNegotiatesError'
  }
}

export class InsufficientStorageError extends HttpError {
  static status: number = 507
  static error: string = 'InsufficientStorage'
  static message: string = 'Insufficient Storage'
  static phrase: string = 'Insufficient storage.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(507, message, properties)
    this.name = 'InsufficientStorageError'
  }
}

export class LoopDetectedError extends HttpError {
  static status: number = 508
  static error: string = 'LoopDetected'
  static message: string = 'Loop Detected'
  static phrase: string = 'Loop detected.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(508, message, properties)
    this.name = 'LoopDetectedError'
  }
}

export class BandwidthLimitExceededError extends HttpError {
  static status: number = 509
  static error: string = 'BandwidthLimitExceeded'
  static message: string = 'Bandwidth Limit Exceeded'
  static phrase: string = 'Bandwidth limit exceeded.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(509, message, properties)
    this.name = 'BandwidthLimitExceededError'
  }
}

export class NotExtendedError extends HttpError {
  static status: number = 510
  static error: string = 'NotExtended'
  static message: string = 'Not Extended'
  static phrase: string = 'Not extended.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(510, message, properties)
    this.name = 'NotExtendedError'
  }
}

export class NetworkAuthenticationRequiredError extends HttpError {
  static status: number = 511
  static error: string = 'NetworkAuthenticationRequired'
  static message: string = 'Network Authentication Required'
  static phrase: string = 'Network authentication required.'

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(511, message, properties)
    this.name = 'NetworkAuthenticationRequiredError'
  }
}
