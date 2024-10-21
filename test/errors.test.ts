import { deepStrictEqual, ok } from 'node:assert'
import { test } from 'node:test'
import {
  BadGatewayError,
  BadRequestError,
  BandwidthLimitExceededError,
  ConflictError,
  ExpectationFailedError,
  FailedDependencyError,
  ForbiddenError,
  GatewayTimeoutError,
  GoneError,
  HTTPVersionNotSupportedError,
  ImaTeapotError,
  InsufficientStorageError,
  InternalServerError,
  LengthRequiredError,
  LockedError,
  LoopDetectedError,
  MethodNotAllowedError,
  MisdirectedRequestError,
  NetworkAuthenticationRequiredError,
  NotAcceptableError,
  NotExtendedError,
  NotFoundError,
  NotImplementedError,
  PayloadTooLargeError,
  PaymentRequiredError,
  PreconditionFailedError,
  PreconditionRequiredError,
  ProxyAuthenticationRequiredError,
  RangeNotSatisfiableError,
  RequestHeaderFieldsTooLargeError,
  RequestTimeoutError,
  ServiceUnavailableError,
  TooEarlyError,
  TooManyRequestsError,
  UnauthorizedError,
  UnavailableForLegalReasonsError,
  UnprocessableEntityError,
  UnsupportedMediaTypeError,
  UpgradeRequiredError,
  URITooLongError,
  VariantAlsoNegotiatesError
} from '../src/index.js'

test('BadRequestError', () => {
  const error = new BadRequestError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(BadRequestError.status, 400)
  deepStrictEqual(BadRequestError.error, 'BadRequest')
  deepStrictEqual(BadRequestError.message, 'Bad Request')
  deepStrictEqual(BadRequestError.phrase, 'Bad request.')

  deepStrictEqual(error.status, 400)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Bad Request')
  deepStrictEqual(error.errorPhrase, 'Bad request.')
  deepStrictEqual(error.code, 'HTTP_ERROR_BAD_REQUEST')
  deepStrictEqual(error.name, 'BadRequestError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('UnauthorizedError', () => {
  const error = new UnauthorizedError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(UnauthorizedError.status, 401)
  deepStrictEqual(UnauthorizedError.error, 'Unauthorized')
  deepStrictEqual(UnauthorizedError.message, 'Unauthorized')
  deepStrictEqual(UnauthorizedError.phrase, 'Unauthorized.')

  deepStrictEqual(error.status, 401)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Unauthorized')
  deepStrictEqual(error.errorPhrase, 'Unauthorized.')
  deepStrictEqual(error.code, 'HTTP_ERROR_UNAUTHORIZED')
  deepStrictEqual(error.name, 'UnauthorizedError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('PaymentRequiredError', () => {
  const error = new PaymentRequiredError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(PaymentRequiredError.status, 402)
  deepStrictEqual(PaymentRequiredError.error, 'PaymentRequired')
  deepStrictEqual(PaymentRequiredError.message, 'Payment Required')
  deepStrictEqual(PaymentRequiredError.phrase, 'Payment required.')

  deepStrictEqual(error.status, 402)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Payment Required')
  deepStrictEqual(error.errorPhrase, 'Payment required.')
  deepStrictEqual(error.code, 'HTTP_ERROR_PAYMENT_REQUIRED')
  deepStrictEqual(error.name, 'PaymentRequiredError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('ForbiddenError', () => {
  const error = new ForbiddenError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(ForbiddenError.status, 403)
  deepStrictEqual(ForbiddenError.error, 'Forbidden')
  deepStrictEqual(ForbiddenError.message, 'Forbidden')
  deepStrictEqual(ForbiddenError.phrase, 'Forbidden.')

  deepStrictEqual(error.status, 403)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Forbidden')
  deepStrictEqual(error.errorPhrase, 'Forbidden.')
  deepStrictEqual(error.code, 'HTTP_ERROR_FORBIDDEN')
  deepStrictEqual(error.name, 'ForbiddenError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('NotFoundError', () => {
  const error = new NotFoundError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(NotFoundError.status, 404)
  deepStrictEqual(NotFoundError.error, 'NotFound')
  deepStrictEqual(NotFoundError.message, 'Not Found')
  deepStrictEqual(NotFoundError.phrase, 'Not found.')

  deepStrictEqual(error.status, 404)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Not Found')
  deepStrictEqual(error.errorPhrase, 'Not found.')
  deepStrictEqual(error.code, 'HTTP_ERROR_NOT_FOUND')
  deepStrictEqual(error.name, 'NotFoundError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('MethodNotAllowedError', () => {
  const error = new MethodNotAllowedError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(MethodNotAllowedError.status, 405)
  deepStrictEqual(MethodNotAllowedError.error, 'MethodNotAllowed')
  deepStrictEqual(MethodNotAllowedError.message, 'Method Not Allowed')
  deepStrictEqual(MethodNotAllowedError.phrase, 'Method not allowed.')

  deepStrictEqual(error.status, 405)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Method Not Allowed')
  deepStrictEqual(error.errorPhrase, 'Method not allowed.')
  deepStrictEqual(error.code, 'HTTP_ERROR_METHOD_NOT_ALLOWED')
  deepStrictEqual(error.name, 'MethodNotAllowedError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('NotAcceptableError', () => {
  const error = new NotAcceptableError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(NotAcceptableError.status, 406)
  deepStrictEqual(NotAcceptableError.error, 'NotAcceptable')
  deepStrictEqual(NotAcceptableError.message, 'Not Acceptable')
  deepStrictEqual(NotAcceptableError.phrase, 'Not acceptable.')

  deepStrictEqual(error.status, 406)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Not Acceptable')
  deepStrictEqual(error.errorPhrase, 'Not acceptable.')
  deepStrictEqual(error.code, 'HTTP_ERROR_NOT_ACCEPTABLE')
  deepStrictEqual(error.name, 'NotAcceptableError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('ProxyAuthenticationRequiredError', () => {
  const error = new ProxyAuthenticationRequiredError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(ProxyAuthenticationRequiredError.status, 407)
  deepStrictEqual(ProxyAuthenticationRequiredError.error, 'ProxyAuthenticationRequired')
  deepStrictEqual(ProxyAuthenticationRequiredError.message, 'Proxy Authentication Required')
  deepStrictEqual(ProxyAuthenticationRequiredError.phrase, 'Proxy authentication required.')

  deepStrictEqual(error.status, 407)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Proxy Authentication Required')
  deepStrictEqual(error.errorPhrase, 'Proxy authentication required.')
  deepStrictEqual(error.code, 'HTTP_ERROR_PROXY_AUTHENTICATION_REQUIRED')
  deepStrictEqual(error.name, 'ProxyAuthenticationRequiredError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('RequestTimeoutError', () => {
  const error = new RequestTimeoutError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(RequestTimeoutError.status, 408)
  deepStrictEqual(RequestTimeoutError.error, 'RequestTimeout')
  deepStrictEqual(RequestTimeoutError.message, 'Request Timeout')
  deepStrictEqual(RequestTimeoutError.phrase, 'Request timeout.')

  deepStrictEqual(error.status, 408)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Request Timeout')
  deepStrictEqual(error.errorPhrase, 'Request timeout.')
  deepStrictEqual(error.code, 'HTTP_ERROR_REQUEST_TIMEOUT')
  deepStrictEqual(error.name, 'RequestTimeoutError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('ConflictError', () => {
  const error = new ConflictError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(ConflictError.status, 409)
  deepStrictEqual(ConflictError.error, 'Conflict')
  deepStrictEqual(ConflictError.message, 'Conflict')
  deepStrictEqual(ConflictError.phrase, 'Conflict.')

  deepStrictEqual(error.status, 409)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Conflict')
  deepStrictEqual(error.errorPhrase, 'Conflict.')
  deepStrictEqual(error.code, 'HTTP_ERROR_CONFLICT')
  deepStrictEqual(error.name, 'ConflictError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('GoneError', () => {
  const error = new GoneError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(GoneError.status, 410)
  deepStrictEqual(GoneError.error, 'Gone')
  deepStrictEqual(GoneError.message, 'Gone')
  deepStrictEqual(GoneError.phrase, 'Gone.')

  deepStrictEqual(error.status, 410)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Gone')
  deepStrictEqual(error.errorPhrase, 'Gone.')
  deepStrictEqual(error.code, 'HTTP_ERROR_GONE')
  deepStrictEqual(error.name, 'GoneError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('LengthRequiredError', () => {
  const error = new LengthRequiredError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(LengthRequiredError.status, 411)
  deepStrictEqual(LengthRequiredError.error, 'LengthRequired')
  deepStrictEqual(LengthRequiredError.message, 'Length Required')
  deepStrictEqual(LengthRequiredError.phrase, 'Length required.')

  deepStrictEqual(error.status, 411)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Length Required')
  deepStrictEqual(error.errorPhrase, 'Length required.')
  deepStrictEqual(error.code, 'HTTP_ERROR_LENGTH_REQUIRED')
  deepStrictEqual(error.name, 'LengthRequiredError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('PreconditionFailedError', () => {
  const error = new PreconditionFailedError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(PreconditionFailedError.status, 412)
  deepStrictEqual(PreconditionFailedError.error, 'PreconditionFailed')
  deepStrictEqual(PreconditionFailedError.message, 'Precondition Failed')
  deepStrictEqual(PreconditionFailedError.phrase, 'Precondition failed.')

  deepStrictEqual(error.status, 412)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Precondition Failed')
  deepStrictEqual(error.errorPhrase, 'Precondition failed.')
  deepStrictEqual(error.code, 'HTTP_ERROR_PRECONDITION_FAILED')
  deepStrictEqual(error.name, 'PreconditionFailedError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('PayloadTooLargeError', () => {
  const error = new PayloadTooLargeError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(PayloadTooLargeError.status, 413)
  deepStrictEqual(PayloadTooLargeError.error, 'PayloadTooLarge')
  deepStrictEqual(PayloadTooLargeError.message, 'Payload Too Large')
  deepStrictEqual(PayloadTooLargeError.phrase, 'Payload too large.')

  deepStrictEqual(error.status, 413)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Payload Too Large')
  deepStrictEqual(error.errorPhrase, 'Payload too large.')
  deepStrictEqual(error.code, 'HTTP_ERROR_PAYLOAD_TOO_LARGE')
  deepStrictEqual(error.name, 'PayloadTooLargeError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('URITooLongError', () => {
  const error = new URITooLongError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(URITooLongError.status, 414)
  deepStrictEqual(URITooLongError.error, 'URITooLong')
  deepStrictEqual(URITooLongError.message, 'URI Too Long')
  deepStrictEqual(URITooLongError.phrase, 'Uri too long.')

  deepStrictEqual(error.status, 414)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'URI Too Long')
  deepStrictEqual(error.errorPhrase, 'Uri too long.')
  deepStrictEqual(error.code, 'HTTP_ERROR_URITOO_LONG')
  deepStrictEqual(error.name, 'URITooLongError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('UnsupportedMediaTypeError', () => {
  const error = new UnsupportedMediaTypeError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(UnsupportedMediaTypeError.status, 415)
  deepStrictEqual(UnsupportedMediaTypeError.error, 'UnsupportedMediaType')
  deepStrictEqual(UnsupportedMediaTypeError.message, 'Unsupported Media Type')
  deepStrictEqual(UnsupportedMediaTypeError.phrase, 'Unsupported media type.')

  deepStrictEqual(error.status, 415)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Unsupported Media Type')
  deepStrictEqual(error.errorPhrase, 'Unsupported media type.')
  deepStrictEqual(error.code, 'HTTP_ERROR_UNSUPPORTED_MEDIA_TYPE')
  deepStrictEqual(error.name, 'UnsupportedMediaTypeError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('RangeNotSatisfiableError', () => {
  const error = new RangeNotSatisfiableError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(RangeNotSatisfiableError.status, 416)
  deepStrictEqual(RangeNotSatisfiableError.error, 'RangeNotSatisfiable')
  deepStrictEqual(RangeNotSatisfiableError.message, 'Range Not Satisfiable')
  deepStrictEqual(RangeNotSatisfiableError.phrase, 'Range not satisfiable.')

  deepStrictEqual(error.status, 416)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Range Not Satisfiable')
  deepStrictEqual(error.errorPhrase, 'Range not satisfiable.')
  deepStrictEqual(error.code, 'HTTP_ERROR_RANGE_NOT_SATISFIABLE')
  deepStrictEqual(error.name, 'RangeNotSatisfiableError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('ExpectationFailedError', () => {
  const error = new ExpectationFailedError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(ExpectationFailedError.status, 417)
  deepStrictEqual(ExpectationFailedError.error, 'ExpectationFailed')
  deepStrictEqual(ExpectationFailedError.message, 'Expectation Failed')
  deepStrictEqual(ExpectationFailedError.phrase, 'Expectation failed.')

  deepStrictEqual(error.status, 417)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Expectation Failed')
  deepStrictEqual(error.errorPhrase, 'Expectation failed.')
  deepStrictEqual(error.code, 'HTTP_ERROR_EXPECTATION_FAILED')
  deepStrictEqual(error.name, 'ExpectationFailedError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('ImaTeapotError', () => {
  const error = new ImaTeapotError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(ImaTeapotError.status, 418)
  deepStrictEqual(ImaTeapotError.error, 'ImaTeapot')
  deepStrictEqual(ImaTeapotError.message, "I'm a Teapot")
  deepStrictEqual(ImaTeapotError.phrase, "I'm a teapot.")

  deepStrictEqual(error.status, 418)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, "I'm a Teapot")
  deepStrictEqual(error.errorPhrase, "I'm a teapot.")
  deepStrictEqual(error.code, 'HTTP_ERROR_IMA_TEAPOT')
  deepStrictEqual(error.name, 'ImaTeapotError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('MisdirectedRequestError', () => {
  const error = new MisdirectedRequestError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(MisdirectedRequestError.status, 421)
  deepStrictEqual(MisdirectedRequestError.error, 'MisdirectedRequest')
  deepStrictEqual(MisdirectedRequestError.message, 'Misdirected Request')
  deepStrictEqual(MisdirectedRequestError.phrase, 'Misdirected request.')

  deepStrictEqual(error.status, 421)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Misdirected Request')
  deepStrictEqual(error.errorPhrase, 'Misdirected request.')
  deepStrictEqual(error.code, 'HTTP_ERROR_MISDIRECTED_REQUEST')
  deepStrictEqual(error.name, 'MisdirectedRequestError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('UnprocessableEntityError', () => {
  const error = new UnprocessableEntityError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(UnprocessableEntityError.status, 422)
  deepStrictEqual(UnprocessableEntityError.error, 'UnprocessableEntity')
  deepStrictEqual(UnprocessableEntityError.message, 'Unprocessable Entity')
  deepStrictEqual(UnprocessableEntityError.phrase, 'Unprocessable entity.')

  deepStrictEqual(error.status, 422)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Unprocessable Entity')
  deepStrictEqual(error.errorPhrase, 'Unprocessable entity.')
  deepStrictEqual(error.code, 'HTTP_ERROR_UNPROCESSABLE_ENTITY')
  deepStrictEqual(error.name, 'UnprocessableEntityError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('LockedError', () => {
  const error = new LockedError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(LockedError.status, 423)
  deepStrictEqual(LockedError.error, 'Locked')
  deepStrictEqual(LockedError.message, 'Locked')
  deepStrictEqual(LockedError.phrase, 'Locked.')

  deepStrictEqual(error.status, 423)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Locked')
  deepStrictEqual(error.errorPhrase, 'Locked.')
  deepStrictEqual(error.code, 'HTTP_ERROR_LOCKED')
  deepStrictEqual(error.name, 'LockedError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('FailedDependencyError', () => {
  const error = new FailedDependencyError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(FailedDependencyError.status, 424)
  deepStrictEqual(FailedDependencyError.error, 'FailedDependency')
  deepStrictEqual(FailedDependencyError.message, 'Failed Dependency')
  deepStrictEqual(FailedDependencyError.phrase, 'Failed dependency.')

  deepStrictEqual(error.status, 424)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Failed Dependency')
  deepStrictEqual(error.errorPhrase, 'Failed dependency.')
  deepStrictEqual(error.code, 'HTTP_ERROR_FAILED_DEPENDENCY')
  deepStrictEqual(error.name, 'FailedDependencyError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('TooEarlyError', () => {
  const error = new TooEarlyError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(TooEarlyError.status, 425)
  deepStrictEqual(TooEarlyError.error, 'TooEarly')
  deepStrictEqual(TooEarlyError.message, 'Too Early')
  deepStrictEqual(TooEarlyError.phrase, 'Too early.')

  deepStrictEqual(error.status, 425)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Too Early')
  deepStrictEqual(error.errorPhrase, 'Too early.')
  deepStrictEqual(error.code, 'HTTP_ERROR_TOO_EARLY')
  deepStrictEqual(error.name, 'TooEarlyError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('UpgradeRequiredError', () => {
  const error = new UpgradeRequiredError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(UpgradeRequiredError.status, 426)
  deepStrictEqual(UpgradeRequiredError.error, 'UpgradeRequired')
  deepStrictEqual(UpgradeRequiredError.message, 'Upgrade Required')
  deepStrictEqual(UpgradeRequiredError.phrase, 'Upgrade required.')

  deepStrictEqual(error.status, 426)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Upgrade Required')
  deepStrictEqual(error.errorPhrase, 'Upgrade required.')
  deepStrictEqual(error.code, 'HTTP_ERROR_UPGRADE_REQUIRED')
  deepStrictEqual(error.name, 'UpgradeRequiredError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('PreconditionRequiredError', () => {
  const error = new PreconditionRequiredError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(PreconditionRequiredError.status, 428)
  deepStrictEqual(PreconditionRequiredError.error, 'PreconditionRequired')
  deepStrictEqual(PreconditionRequiredError.message, 'Precondition Required')
  deepStrictEqual(PreconditionRequiredError.phrase, 'Precondition required.')

  deepStrictEqual(error.status, 428)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Precondition Required')
  deepStrictEqual(error.errorPhrase, 'Precondition required.')
  deepStrictEqual(error.code, 'HTTP_ERROR_PRECONDITION_REQUIRED')
  deepStrictEqual(error.name, 'PreconditionRequiredError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('TooManyRequestsError', () => {
  const error = new TooManyRequestsError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(TooManyRequestsError.status, 429)
  deepStrictEqual(TooManyRequestsError.error, 'TooManyRequests')
  deepStrictEqual(TooManyRequestsError.message, 'Too Many Requests')
  deepStrictEqual(TooManyRequestsError.phrase, 'Too many requests.')

  deepStrictEqual(error.status, 429)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Too Many Requests')
  deepStrictEqual(error.errorPhrase, 'Too many requests.')
  deepStrictEqual(error.code, 'HTTP_ERROR_TOO_MANY_REQUESTS')
  deepStrictEqual(error.name, 'TooManyRequestsError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('RequestHeaderFieldsTooLargeError', () => {
  const error = new RequestHeaderFieldsTooLargeError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(RequestHeaderFieldsTooLargeError.status, 431)
  deepStrictEqual(RequestHeaderFieldsTooLargeError.error, 'RequestHeaderFieldsTooLarge')
  deepStrictEqual(RequestHeaderFieldsTooLargeError.message, 'Request Header Fields Too Large')
  deepStrictEqual(RequestHeaderFieldsTooLargeError.phrase, 'Request header fields too large.')

  deepStrictEqual(error.status, 431)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Request Header Fields Too Large')
  deepStrictEqual(error.errorPhrase, 'Request header fields too large.')
  deepStrictEqual(error.code, 'HTTP_ERROR_REQUEST_HEADER_FIELDS_TOO_LARGE')
  deepStrictEqual(error.name, 'RequestHeaderFieldsTooLargeError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('UnavailableForLegalReasonsError', () => {
  const error = new UnavailableForLegalReasonsError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(UnavailableForLegalReasonsError.status, 451)
  deepStrictEqual(UnavailableForLegalReasonsError.error, 'UnavailableForLegalReasons')
  deepStrictEqual(UnavailableForLegalReasonsError.message, 'Unavailable For Legal Reasons')
  deepStrictEqual(UnavailableForLegalReasonsError.phrase, 'Unavailable for legal reasons.')

  deepStrictEqual(error.status, 451)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Unavailable For Legal Reasons')
  deepStrictEqual(error.errorPhrase, 'Unavailable for legal reasons.')
  deepStrictEqual(error.code, 'HTTP_ERROR_UNAVAILABLE_FOR_LEGAL_REASONS')
  deepStrictEqual(error.name, 'UnavailableForLegalReasonsError')
  ok(error.isClientError)
  ok(!error.isServerError)
  ok(error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('InternalServerError', () => {
  const error = new InternalServerError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(InternalServerError.status, 500)
  deepStrictEqual(InternalServerError.error, 'InternalServerError')
  deepStrictEqual(InternalServerError.message, 'Internal Server Error')
  deepStrictEqual(InternalServerError.phrase, 'Internal server error.')

  deepStrictEqual(error.status, 500)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Internal Server Error')
  deepStrictEqual(error.errorPhrase, 'Internal server error.')
  deepStrictEqual(error.code, 'HTTP_ERROR_INTERNAL_SERVER_ERROR')
  deepStrictEqual(error.name, 'InternalServerError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('NotImplementedError', () => {
  const error = new NotImplementedError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(NotImplementedError.status, 501)
  deepStrictEqual(NotImplementedError.error, 'NotImplemented')
  deepStrictEqual(NotImplementedError.message, 'Not Implemented')
  deepStrictEqual(NotImplementedError.phrase, 'Not implemented.')

  deepStrictEqual(error.status, 501)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Not Implemented')
  deepStrictEqual(error.errorPhrase, 'Not implemented.')
  deepStrictEqual(error.code, 'HTTP_ERROR_NOT_IMPLEMENTED')
  deepStrictEqual(error.name, 'NotImplementedError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('BadGatewayError', () => {
  const error = new BadGatewayError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(BadGatewayError.status, 502)
  deepStrictEqual(BadGatewayError.error, 'BadGateway')
  deepStrictEqual(BadGatewayError.message, 'Bad Gateway')
  deepStrictEqual(BadGatewayError.phrase, 'Bad gateway.')

  deepStrictEqual(error.status, 502)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Bad Gateway')
  deepStrictEqual(error.errorPhrase, 'Bad gateway.')
  deepStrictEqual(error.code, 'HTTP_ERROR_BAD_GATEWAY')
  deepStrictEqual(error.name, 'BadGatewayError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('ServiceUnavailableError', () => {
  const error = new ServiceUnavailableError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(ServiceUnavailableError.status, 503)
  deepStrictEqual(ServiceUnavailableError.error, 'ServiceUnavailable')
  deepStrictEqual(ServiceUnavailableError.message, 'Service Unavailable')
  deepStrictEqual(ServiceUnavailableError.phrase, 'Service unavailable.')

  deepStrictEqual(error.status, 503)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Service Unavailable')
  deepStrictEqual(error.errorPhrase, 'Service unavailable.')
  deepStrictEqual(error.code, 'HTTP_ERROR_SERVICE_UNAVAILABLE')
  deepStrictEqual(error.name, 'ServiceUnavailableError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('GatewayTimeoutError', () => {
  const error = new GatewayTimeoutError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(GatewayTimeoutError.status, 504)
  deepStrictEqual(GatewayTimeoutError.error, 'GatewayTimeout')
  deepStrictEqual(GatewayTimeoutError.message, 'Gateway Timeout')
  deepStrictEqual(GatewayTimeoutError.phrase, 'Gateway timeout.')

  deepStrictEqual(error.status, 504)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Gateway Timeout')
  deepStrictEqual(error.errorPhrase, 'Gateway timeout.')
  deepStrictEqual(error.code, 'HTTP_ERROR_GATEWAY_TIMEOUT')
  deepStrictEqual(error.name, 'GatewayTimeoutError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('HTTPVersionNotSupportedError', () => {
  const error = new HTTPVersionNotSupportedError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(HTTPVersionNotSupportedError.status, 505)
  deepStrictEqual(HTTPVersionNotSupportedError.error, 'HTTPVersionNotSupported')
  deepStrictEqual(HTTPVersionNotSupportedError.message, 'HTTP Version Not Supported')
  deepStrictEqual(HTTPVersionNotSupportedError.phrase, 'Http version not supported.')

  deepStrictEqual(error.status, 505)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'HTTP Version Not Supported')
  deepStrictEqual(error.errorPhrase, 'Http version not supported.')
  deepStrictEqual(error.code, 'HTTP_ERROR_HTTPVERSION_NOT_SUPPORTED')
  deepStrictEqual(error.name, 'HTTPVersionNotSupportedError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('VariantAlsoNegotiatesError', () => {
  const error = new VariantAlsoNegotiatesError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(VariantAlsoNegotiatesError.status, 506)
  deepStrictEqual(VariantAlsoNegotiatesError.error, 'VariantAlsoNegotiates')
  deepStrictEqual(VariantAlsoNegotiatesError.message, 'Variant Also Negotiates')
  deepStrictEqual(VariantAlsoNegotiatesError.phrase, 'Variant also negotiates.')

  deepStrictEqual(error.status, 506)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Variant Also Negotiates')
  deepStrictEqual(error.errorPhrase, 'Variant also negotiates.')
  deepStrictEqual(error.code, 'HTTP_ERROR_VARIANT_ALSO_NEGOTIATES')
  deepStrictEqual(error.name, 'VariantAlsoNegotiatesError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('InsufficientStorageError', () => {
  const error = new InsufficientStorageError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(InsufficientStorageError.status, 507)
  deepStrictEqual(InsufficientStorageError.error, 'InsufficientStorage')
  deepStrictEqual(InsufficientStorageError.message, 'Insufficient Storage')
  deepStrictEqual(InsufficientStorageError.phrase, 'Insufficient storage.')

  deepStrictEqual(error.status, 507)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Insufficient Storage')
  deepStrictEqual(error.errorPhrase, 'Insufficient storage.')
  deepStrictEqual(error.code, 'HTTP_ERROR_INSUFFICIENT_STORAGE')
  deepStrictEqual(error.name, 'InsufficientStorageError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('LoopDetectedError', () => {
  const error = new LoopDetectedError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(LoopDetectedError.status, 508)
  deepStrictEqual(LoopDetectedError.error, 'LoopDetected')
  deepStrictEqual(LoopDetectedError.message, 'Loop Detected')
  deepStrictEqual(LoopDetectedError.phrase, 'Loop detected.')

  deepStrictEqual(error.status, 508)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Loop Detected')
  deepStrictEqual(error.errorPhrase, 'Loop detected.')
  deepStrictEqual(error.code, 'HTTP_ERROR_LOOP_DETECTED')
  deepStrictEqual(error.name, 'LoopDetectedError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('BandwidthLimitExceededError', () => {
  const error = new BandwidthLimitExceededError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(BandwidthLimitExceededError.status, 509)
  deepStrictEqual(BandwidthLimitExceededError.error, 'BandwidthLimitExceeded')
  deepStrictEqual(BandwidthLimitExceededError.message, 'Bandwidth Limit Exceeded')
  deepStrictEqual(BandwidthLimitExceededError.phrase, 'Bandwidth limit exceeded.')

  deepStrictEqual(error.status, 509)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Bandwidth Limit Exceeded')
  deepStrictEqual(error.errorPhrase, 'Bandwidth limit exceeded.')
  deepStrictEqual(error.code, 'HTTP_ERROR_BANDWIDTH_LIMIT_EXCEEDED')
  deepStrictEqual(error.name, 'BandwidthLimitExceededError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('NotExtendedError', () => {
  const error = new NotExtendedError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(NotExtendedError.status, 510)
  deepStrictEqual(NotExtendedError.error, 'NotExtended')
  deepStrictEqual(NotExtendedError.message, 'Not Extended')
  deepStrictEqual(NotExtendedError.phrase, 'Not extended.')

  deepStrictEqual(error.status, 510)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Not Extended')
  deepStrictEqual(error.errorPhrase, 'Not extended.')
  deepStrictEqual(error.code, 'HTTP_ERROR_NOT_EXTENDED')
  deepStrictEqual(error.name, 'NotExtendedError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})

test('NetworkAuthenticationRequiredError', () => {
  const error = new NetworkAuthenticationRequiredError('WHATEVER', { key1: 'prop1' })

  deepStrictEqual(NetworkAuthenticationRequiredError.status, 511)
  deepStrictEqual(NetworkAuthenticationRequiredError.error, 'NetworkAuthenticationRequired')
  deepStrictEqual(NetworkAuthenticationRequiredError.message, 'Network Authentication Required')
  deepStrictEqual(NetworkAuthenticationRequiredError.phrase, 'Network authentication required.')

  deepStrictEqual(error.status, 511)
  deepStrictEqual(error.message, 'WHATEVER')
  deepStrictEqual(error.error, 'Network Authentication Required')
  deepStrictEqual(error.errorPhrase, 'Network authentication required.')
  deepStrictEqual(error.code, 'HTTP_ERROR_NETWORK_AUTHENTICATION_REQUIRED')
  deepStrictEqual(error.name, 'NetworkAuthenticationRequiredError')
  ok(!error.isClientError)
  ok(error.isServerError)
  ok(!error.expose)
  deepStrictEqual(error.key1, 'prop1')
})
