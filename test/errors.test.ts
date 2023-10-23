/* eslint-disable @typescript-eslint/no-floating-promises */

import t from 'tap'
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

t.test('BadRequestError', t => {
  t.plan(14)

  const error = new BadRequestError('WHATEVER', { key1: 'prop1' })

  t.equal(BadRequestError.status, 400)
  t.equal(BadRequestError.error, 'BadRequest')
  t.equal(BadRequestError.message, 'Bad Request')
  t.equal(BadRequestError.phrase, 'Bad request.')

  t.equal(error.status, 400)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Bad Request')
  t.equal(error.errorPhrase, 'Bad request.')
  t.equal(error.code, 'HTTP_ERROR_BAD_REQUEST')
  t.equal(error.name, 'BadRequestError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('UnauthorizedError', t => {
  t.plan(14)

  const error = new UnauthorizedError('WHATEVER', { key1: 'prop1' })

  t.equal(UnauthorizedError.status, 401)
  t.equal(UnauthorizedError.error, 'Unauthorized')
  t.equal(UnauthorizedError.message, 'Unauthorized')
  t.equal(UnauthorizedError.phrase, 'Unauthorized.')

  t.equal(error.status, 401)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Unauthorized')
  t.equal(error.errorPhrase, 'Unauthorized.')
  t.equal(error.code, 'HTTP_ERROR_UNAUTHORIZED')
  t.equal(error.name, 'UnauthorizedError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('PaymentRequiredError', t => {
  t.plan(14)

  const error = new PaymentRequiredError('WHATEVER', { key1: 'prop1' })

  t.equal(PaymentRequiredError.status, 402)
  t.equal(PaymentRequiredError.error, 'PaymentRequired')
  t.equal(PaymentRequiredError.message, 'Payment Required')
  t.equal(PaymentRequiredError.phrase, 'Payment required.')

  t.equal(error.status, 402)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Payment Required')
  t.equal(error.errorPhrase, 'Payment required.')
  t.equal(error.code, 'HTTP_ERROR_PAYMENT_REQUIRED')
  t.equal(error.name, 'PaymentRequiredError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('ForbiddenError', t => {
  t.plan(14)

  const error = new ForbiddenError('WHATEVER', { key1: 'prop1' })

  t.equal(ForbiddenError.status, 403)
  t.equal(ForbiddenError.error, 'Forbidden')
  t.equal(ForbiddenError.message, 'Forbidden')
  t.equal(ForbiddenError.phrase, 'Forbidden.')

  t.equal(error.status, 403)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Forbidden')
  t.equal(error.errorPhrase, 'Forbidden.')
  t.equal(error.code, 'HTTP_ERROR_FORBIDDEN')
  t.equal(error.name, 'ForbiddenError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('NotFoundError', t => {
  t.plan(14)

  const error = new NotFoundError('WHATEVER', { key1: 'prop1' })

  t.equal(NotFoundError.status, 404)
  t.equal(NotFoundError.error, 'NotFound')
  t.equal(NotFoundError.message, 'Not Found')
  t.equal(NotFoundError.phrase, 'Not found.')

  t.equal(error.status, 404)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Not Found')
  t.equal(error.errorPhrase, 'Not found.')
  t.equal(error.code, 'HTTP_ERROR_NOT_FOUND')
  t.equal(error.name, 'NotFoundError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('MethodNotAllowedError', t => {
  t.plan(14)

  const error = new MethodNotAllowedError('WHATEVER', { key1: 'prop1' })

  t.equal(MethodNotAllowedError.status, 405)
  t.equal(MethodNotAllowedError.error, 'MethodNotAllowed')
  t.equal(MethodNotAllowedError.message, 'Method Not Allowed')
  t.equal(MethodNotAllowedError.phrase, 'Method not allowed.')

  t.equal(error.status, 405)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Method Not Allowed')
  t.equal(error.errorPhrase, 'Method not allowed.')
  t.equal(error.code, 'HTTP_ERROR_METHOD_NOT_ALLOWED')
  t.equal(error.name, 'MethodNotAllowedError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('NotAcceptableError', t => {
  t.plan(14)

  const error = new NotAcceptableError('WHATEVER', { key1: 'prop1' })

  t.equal(NotAcceptableError.status, 406)
  t.equal(NotAcceptableError.error, 'NotAcceptable')
  t.equal(NotAcceptableError.message, 'Not Acceptable')
  t.equal(NotAcceptableError.phrase, 'Not acceptable.')

  t.equal(error.status, 406)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Not Acceptable')
  t.equal(error.errorPhrase, 'Not acceptable.')
  t.equal(error.code, 'HTTP_ERROR_NOT_ACCEPTABLE')
  t.equal(error.name, 'NotAcceptableError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('ProxyAuthenticationRequiredError', t => {
  t.plan(14)

  const error = new ProxyAuthenticationRequiredError('WHATEVER', { key1: 'prop1' })

  t.equal(ProxyAuthenticationRequiredError.status, 407)
  t.equal(ProxyAuthenticationRequiredError.error, 'ProxyAuthenticationRequired')
  t.equal(ProxyAuthenticationRequiredError.message, 'Proxy Authentication Required')
  t.equal(ProxyAuthenticationRequiredError.phrase, 'Proxy authentication required.')

  t.equal(error.status, 407)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Proxy Authentication Required')
  t.equal(error.errorPhrase, 'Proxy authentication required.')
  t.equal(error.code, 'HTTP_ERROR_PROXY_AUTHENTICATION_REQUIRED')
  t.equal(error.name, 'ProxyAuthenticationRequiredError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('RequestTimeoutError', t => {
  t.plan(14)

  const error = new RequestTimeoutError('WHATEVER', { key1: 'prop1' })

  t.equal(RequestTimeoutError.status, 408)
  t.equal(RequestTimeoutError.error, 'RequestTimeout')
  t.equal(RequestTimeoutError.message, 'Request Timeout')
  t.equal(RequestTimeoutError.phrase, 'Request timeout.')

  t.equal(error.status, 408)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Request Timeout')
  t.equal(error.errorPhrase, 'Request timeout.')
  t.equal(error.code, 'HTTP_ERROR_REQUEST_TIMEOUT')
  t.equal(error.name, 'RequestTimeoutError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('ConflictError', t => {
  t.plan(14)

  const error = new ConflictError('WHATEVER', { key1: 'prop1' })

  t.equal(ConflictError.status, 409)
  t.equal(ConflictError.error, 'Conflict')
  t.equal(ConflictError.message, 'Conflict')
  t.equal(ConflictError.phrase, 'Conflict.')

  t.equal(error.status, 409)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Conflict')
  t.equal(error.errorPhrase, 'Conflict.')
  t.equal(error.code, 'HTTP_ERROR_CONFLICT')
  t.equal(error.name, 'ConflictError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('GoneError', t => {
  t.plan(14)

  const error = new GoneError('WHATEVER', { key1: 'prop1' })

  t.equal(GoneError.status, 410)
  t.equal(GoneError.error, 'Gone')
  t.equal(GoneError.message, 'Gone')
  t.equal(GoneError.phrase, 'Gone.')

  t.equal(error.status, 410)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Gone')
  t.equal(error.errorPhrase, 'Gone.')
  t.equal(error.code, 'HTTP_ERROR_GONE')
  t.equal(error.name, 'GoneError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('LengthRequiredError', t => {
  t.plan(14)

  const error = new LengthRequiredError('WHATEVER', { key1: 'prop1' })

  t.equal(LengthRequiredError.status, 411)
  t.equal(LengthRequiredError.error, 'LengthRequired')
  t.equal(LengthRequiredError.message, 'Length Required')
  t.equal(LengthRequiredError.phrase, 'Length required.')

  t.equal(error.status, 411)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Length Required')
  t.equal(error.errorPhrase, 'Length required.')
  t.equal(error.code, 'HTTP_ERROR_LENGTH_REQUIRED')
  t.equal(error.name, 'LengthRequiredError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('PreconditionFailedError', t => {
  t.plan(14)

  const error = new PreconditionFailedError('WHATEVER', { key1: 'prop1' })

  t.equal(PreconditionFailedError.status, 412)
  t.equal(PreconditionFailedError.error, 'PreconditionFailed')
  t.equal(PreconditionFailedError.message, 'Precondition Failed')
  t.equal(PreconditionFailedError.phrase, 'Precondition failed.')

  t.equal(error.status, 412)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Precondition Failed')
  t.equal(error.errorPhrase, 'Precondition failed.')
  t.equal(error.code, 'HTTP_ERROR_PRECONDITION_FAILED')
  t.equal(error.name, 'PreconditionFailedError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('PayloadTooLargeError', t => {
  t.plan(14)

  const error = new PayloadTooLargeError('WHATEVER', { key1: 'prop1' })

  t.equal(PayloadTooLargeError.status, 413)
  t.equal(PayloadTooLargeError.error, 'PayloadTooLarge')
  t.equal(PayloadTooLargeError.message, 'Payload Too Large')
  t.equal(PayloadTooLargeError.phrase, 'Payload too large.')

  t.equal(error.status, 413)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Payload Too Large')
  t.equal(error.errorPhrase, 'Payload too large.')
  t.equal(error.code, 'HTTP_ERROR_PAYLOAD_TOO_LARGE')
  t.equal(error.name, 'PayloadTooLargeError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('URITooLongError', t => {
  t.plan(14)

  const error = new URITooLongError('WHATEVER', { key1: 'prop1' })

  t.equal(URITooLongError.status, 414)
  t.equal(URITooLongError.error, 'URITooLong')
  t.equal(URITooLongError.message, 'URI Too Long')
  t.equal(URITooLongError.phrase, 'Uri too long.')

  t.equal(error.status, 414)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'URI Too Long')
  t.equal(error.errorPhrase, 'Uri too long.')
  t.equal(error.code, 'HTTP_ERROR_URITOO_LONG')
  t.equal(error.name, 'URITooLongError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('UnsupportedMediaTypeError', t => {
  t.plan(14)

  const error = new UnsupportedMediaTypeError('WHATEVER', { key1: 'prop1' })

  t.equal(UnsupportedMediaTypeError.status, 415)
  t.equal(UnsupportedMediaTypeError.error, 'UnsupportedMediaType')
  t.equal(UnsupportedMediaTypeError.message, 'Unsupported Media Type')
  t.equal(UnsupportedMediaTypeError.phrase, 'Unsupported media type.')

  t.equal(error.status, 415)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Unsupported Media Type')
  t.equal(error.errorPhrase, 'Unsupported media type.')
  t.equal(error.code, 'HTTP_ERROR_UNSUPPORTED_MEDIA_TYPE')
  t.equal(error.name, 'UnsupportedMediaTypeError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('RangeNotSatisfiableError', t => {
  t.plan(14)

  const error = new RangeNotSatisfiableError('WHATEVER', { key1: 'prop1' })

  t.equal(RangeNotSatisfiableError.status, 416)
  t.equal(RangeNotSatisfiableError.error, 'RangeNotSatisfiable')
  t.equal(RangeNotSatisfiableError.message, 'Range Not Satisfiable')
  t.equal(RangeNotSatisfiableError.phrase, 'Range not satisfiable.')

  t.equal(error.status, 416)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Range Not Satisfiable')
  t.equal(error.errorPhrase, 'Range not satisfiable.')
  t.equal(error.code, 'HTTP_ERROR_RANGE_NOT_SATISFIABLE')
  t.equal(error.name, 'RangeNotSatisfiableError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('ExpectationFailedError', t => {
  t.plan(14)

  const error = new ExpectationFailedError('WHATEVER', { key1: 'prop1' })

  t.equal(ExpectationFailedError.status, 417)
  t.equal(ExpectationFailedError.error, 'ExpectationFailed')
  t.equal(ExpectationFailedError.message, 'Expectation Failed')
  t.equal(ExpectationFailedError.phrase, 'Expectation failed.')

  t.equal(error.status, 417)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Expectation Failed')
  t.equal(error.errorPhrase, 'Expectation failed.')
  t.equal(error.code, 'HTTP_ERROR_EXPECTATION_FAILED')
  t.equal(error.name, 'ExpectationFailedError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('ImaTeapotError', t => {
  t.plan(14)

  const error = new ImaTeapotError('WHATEVER', { key1: 'prop1' })

  t.equal(ImaTeapotError.status, 418)
  t.equal(ImaTeapotError.error, 'ImaTeapot')
  t.equal(ImaTeapotError.message, "I'm a Teapot")
  t.equal(ImaTeapotError.phrase, "I'm a teapot.")

  t.equal(error.status, 418)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, "I'm a Teapot")
  t.equal(error.errorPhrase, "I'm a teapot.")
  t.equal(error.code, 'HTTP_ERROR_IMA_TEAPOT')
  t.equal(error.name, 'ImaTeapotError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('MisdirectedRequestError', t => {
  t.plan(14)

  const error = new MisdirectedRequestError('WHATEVER', { key1: 'prop1' })

  t.equal(MisdirectedRequestError.status, 421)
  t.equal(MisdirectedRequestError.error, 'MisdirectedRequest')
  t.equal(MisdirectedRequestError.message, 'Misdirected Request')
  t.equal(MisdirectedRequestError.phrase, 'Misdirected request.')

  t.equal(error.status, 421)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Misdirected Request')
  t.equal(error.errorPhrase, 'Misdirected request.')
  t.equal(error.code, 'HTTP_ERROR_MISDIRECTED_REQUEST')
  t.equal(error.name, 'MisdirectedRequestError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('UnprocessableEntityError', t => {
  t.plan(14)

  const error = new UnprocessableEntityError('WHATEVER', { key1: 'prop1' })

  t.equal(UnprocessableEntityError.status, 422)
  t.equal(UnprocessableEntityError.error, 'UnprocessableEntity')
  t.equal(UnprocessableEntityError.message, 'Unprocessable Entity')
  t.equal(UnprocessableEntityError.phrase, 'Unprocessable entity.')

  t.equal(error.status, 422)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Unprocessable Entity')
  t.equal(error.errorPhrase, 'Unprocessable entity.')
  t.equal(error.code, 'HTTP_ERROR_UNPROCESSABLE_ENTITY')
  t.equal(error.name, 'UnprocessableEntityError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('LockedError', t => {
  t.plan(14)

  const error = new LockedError('WHATEVER', { key1: 'prop1' })

  t.equal(LockedError.status, 423)
  t.equal(LockedError.error, 'Locked')
  t.equal(LockedError.message, 'Locked')
  t.equal(LockedError.phrase, 'Locked.')

  t.equal(error.status, 423)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Locked')
  t.equal(error.errorPhrase, 'Locked.')
  t.equal(error.code, 'HTTP_ERROR_LOCKED')
  t.equal(error.name, 'LockedError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('FailedDependencyError', t => {
  t.plan(14)

  const error = new FailedDependencyError('WHATEVER', { key1: 'prop1' })

  t.equal(FailedDependencyError.status, 424)
  t.equal(FailedDependencyError.error, 'FailedDependency')
  t.equal(FailedDependencyError.message, 'Failed Dependency')
  t.equal(FailedDependencyError.phrase, 'Failed dependency.')

  t.equal(error.status, 424)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Failed Dependency')
  t.equal(error.errorPhrase, 'Failed dependency.')
  t.equal(error.code, 'HTTP_ERROR_FAILED_DEPENDENCY')
  t.equal(error.name, 'FailedDependencyError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('TooEarlyError', t => {
  t.plan(14)

  const error = new TooEarlyError('WHATEVER', { key1: 'prop1' })

  t.equal(TooEarlyError.status, 425)
  t.equal(TooEarlyError.error, 'TooEarly')
  t.equal(TooEarlyError.message, 'Too Early')
  t.equal(TooEarlyError.phrase, 'Too early.')

  t.equal(error.status, 425)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Too Early')
  t.equal(error.errorPhrase, 'Too early.')
  t.equal(error.code, 'HTTP_ERROR_TOO_EARLY')
  t.equal(error.name, 'TooEarlyError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('UpgradeRequiredError', t => {
  t.plan(14)

  const error = new UpgradeRequiredError('WHATEVER', { key1: 'prop1' })

  t.equal(UpgradeRequiredError.status, 426)
  t.equal(UpgradeRequiredError.error, 'UpgradeRequired')
  t.equal(UpgradeRequiredError.message, 'Upgrade Required')
  t.equal(UpgradeRequiredError.phrase, 'Upgrade required.')

  t.equal(error.status, 426)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Upgrade Required')
  t.equal(error.errorPhrase, 'Upgrade required.')
  t.equal(error.code, 'HTTP_ERROR_UPGRADE_REQUIRED')
  t.equal(error.name, 'UpgradeRequiredError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('PreconditionRequiredError', t => {
  t.plan(14)

  const error = new PreconditionRequiredError('WHATEVER', { key1: 'prop1' })

  t.equal(PreconditionRequiredError.status, 428)
  t.equal(PreconditionRequiredError.error, 'PreconditionRequired')
  t.equal(PreconditionRequiredError.message, 'Precondition Required')
  t.equal(PreconditionRequiredError.phrase, 'Precondition required.')

  t.equal(error.status, 428)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Precondition Required')
  t.equal(error.errorPhrase, 'Precondition required.')
  t.equal(error.code, 'HTTP_ERROR_PRECONDITION_REQUIRED')
  t.equal(error.name, 'PreconditionRequiredError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('TooManyRequestsError', t => {
  t.plan(14)

  const error = new TooManyRequestsError('WHATEVER', { key1: 'prop1' })

  t.equal(TooManyRequestsError.status, 429)
  t.equal(TooManyRequestsError.error, 'TooManyRequests')
  t.equal(TooManyRequestsError.message, 'Too Many Requests')
  t.equal(TooManyRequestsError.phrase, 'Too many requests.')

  t.equal(error.status, 429)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Too Many Requests')
  t.equal(error.errorPhrase, 'Too many requests.')
  t.equal(error.code, 'HTTP_ERROR_TOO_MANY_REQUESTS')
  t.equal(error.name, 'TooManyRequestsError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('RequestHeaderFieldsTooLargeError', t => {
  t.plan(14)

  const error = new RequestHeaderFieldsTooLargeError('WHATEVER', { key1: 'prop1' })

  t.equal(RequestHeaderFieldsTooLargeError.status, 431)
  t.equal(RequestHeaderFieldsTooLargeError.error, 'RequestHeaderFieldsTooLarge')
  t.equal(RequestHeaderFieldsTooLargeError.message, 'Request Header Fields Too Large')
  t.equal(RequestHeaderFieldsTooLargeError.phrase, 'Request header fields too large.')

  t.equal(error.status, 431)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Request Header Fields Too Large')
  t.equal(error.errorPhrase, 'Request header fields too large.')
  t.equal(error.code, 'HTTP_ERROR_REQUEST_HEADER_FIELDS_TOO_LARGE')
  t.equal(error.name, 'RequestHeaderFieldsTooLargeError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('UnavailableForLegalReasonsError', t => {
  t.plan(14)

  const error = new UnavailableForLegalReasonsError('WHATEVER', { key1: 'prop1' })

  t.equal(UnavailableForLegalReasonsError.status, 451)
  t.equal(UnavailableForLegalReasonsError.error, 'UnavailableForLegalReasons')
  t.equal(UnavailableForLegalReasonsError.message, 'Unavailable For Legal Reasons')
  t.equal(UnavailableForLegalReasonsError.phrase, 'Unavailable for legal reasons.')

  t.equal(error.status, 451)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Unavailable For Legal Reasons')
  t.equal(error.errorPhrase, 'Unavailable for legal reasons.')
  t.equal(error.code, 'HTTP_ERROR_UNAVAILABLE_FOR_LEGAL_REASONS')
  t.equal(error.name, 'UnavailableForLegalReasonsError')
  t.ok(error.isClientError)
  t.notOk(error.isServerError)
  t.ok(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('InternalServerError', t => {
  t.plan(14)

  const error = new InternalServerError('WHATEVER', { key1: 'prop1' })

  t.equal(InternalServerError.status, 500)
  t.equal(InternalServerError.error, 'InternalServerError')
  t.equal(InternalServerError.message, 'Internal Server Error')
  t.equal(InternalServerError.phrase, 'Internal server error.')

  t.equal(error.status, 500)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Internal Server Error')
  t.equal(error.errorPhrase, 'Internal server error.')
  t.equal(error.code, 'HTTP_ERROR_INTERNAL_SERVER_ERROR')
  t.equal(error.name, 'InternalServerError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('NotImplementedError', t => {
  t.plan(14)

  const error = new NotImplementedError('WHATEVER', { key1: 'prop1' })

  t.equal(NotImplementedError.status, 501)
  t.equal(NotImplementedError.error, 'NotImplemented')
  t.equal(NotImplementedError.message, 'Not Implemented')
  t.equal(NotImplementedError.phrase, 'Not implemented.')

  t.equal(error.status, 501)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Not Implemented')
  t.equal(error.errorPhrase, 'Not implemented.')
  t.equal(error.code, 'HTTP_ERROR_NOT_IMPLEMENTED')
  t.equal(error.name, 'NotImplementedError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('BadGatewayError', t => {
  t.plan(14)

  const error = new BadGatewayError('WHATEVER', { key1: 'prop1' })

  t.equal(BadGatewayError.status, 502)
  t.equal(BadGatewayError.error, 'BadGateway')
  t.equal(BadGatewayError.message, 'Bad Gateway')
  t.equal(BadGatewayError.phrase, 'Bad gateway.')

  t.equal(error.status, 502)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Bad Gateway')
  t.equal(error.errorPhrase, 'Bad gateway.')
  t.equal(error.code, 'HTTP_ERROR_BAD_GATEWAY')
  t.equal(error.name, 'BadGatewayError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('ServiceUnavailableError', t => {
  t.plan(14)

  const error = new ServiceUnavailableError('WHATEVER', { key1: 'prop1' })

  t.equal(ServiceUnavailableError.status, 503)
  t.equal(ServiceUnavailableError.error, 'ServiceUnavailable')
  t.equal(ServiceUnavailableError.message, 'Service Unavailable')
  t.equal(ServiceUnavailableError.phrase, 'Service unavailable.')

  t.equal(error.status, 503)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Service Unavailable')
  t.equal(error.errorPhrase, 'Service unavailable.')
  t.equal(error.code, 'HTTP_ERROR_SERVICE_UNAVAILABLE')
  t.equal(error.name, 'ServiceUnavailableError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('GatewayTimeoutError', t => {
  t.plan(14)

  const error = new GatewayTimeoutError('WHATEVER', { key1: 'prop1' })

  t.equal(GatewayTimeoutError.status, 504)
  t.equal(GatewayTimeoutError.error, 'GatewayTimeout')
  t.equal(GatewayTimeoutError.message, 'Gateway Timeout')
  t.equal(GatewayTimeoutError.phrase, 'Gateway timeout.')

  t.equal(error.status, 504)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Gateway Timeout')
  t.equal(error.errorPhrase, 'Gateway timeout.')
  t.equal(error.code, 'HTTP_ERROR_GATEWAY_TIMEOUT')
  t.equal(error.name, 'GatewayTimeoutError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('HTTPVersionNotSupportedError', t => {
  t.plan(14)

  const error = new HTTPVersionNotSupportedError('WHATEVER', { key1: 'prop1' })

  t.equal(HTTPVersionNotSupportedError.status, 505)
  t.equal(HTTPVersionNotSupportedError.error, 'HTTPVersionNotSupported')
  t.equal(HTTPVersionNotSupportedError.message, 'HTTP Version Not Supported')
  t.equal(HTTPVersionNotSupportedError.phrase, 'Http version not supported.')

  t.equal(error.status, 505)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'HTTP Version Not Supported')
  t.equal(error.errorPhrase, 'Http version not supported.')
  t.equal(error.code, 'HTTP_ERROR_HTTPVERSION_NOT_SUPPORTED')
  t.equal(error.name, 'HTTPVersionNotSupportedError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('VariantAlsoNegotiatesError', t => {
  t.plan(14)

  const error = new VariantAlsoNegotiatesError('WHATEVER', { key1: 'prop1' })

  t.equal(VariantAlsoNegotiatesError.status, 506)
  t.equal(VariantAlsoNegotiatesError.error, 'VariantAlsoNegotiates')
  t.equal(VariantAlsoNegotiatesError.message, 'Variant Also Negotiates')
  t.equal(VariantAlsoNegotiatesError.phrase, 'Variant also negotiates.')

  t.equal(error.status, 506)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Variant Also Negotiates')
  t.equal(error.errorPhrase, 'Variant also negotiates.')
  t.equal(error.code, 'HTTP_ERROR_VARIANT_ALSO_NEGOTIATES')
  t.equal(error.name, 'VariantAlsoNegotiatesError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('InsufficientStorageError', t => {
  t.plan(14)

  const error = new InsufficientStorageError('WHATEVER', { key1: 'prop1' })

  t.equal(InsufficientStorageError.status, 507)
  t.equal(InsufficientStorageError.error, 'InsufficientStorage')
  t.equal(InsufficientStorageError.message, 'Insufficient Storage')
  t.equal(InsufficientStorageError.phrase, 'Insufficient storage.')

  t.equal(error.status, 507)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Insufficient Storage')
  t.equal(error.errorPhrase, 'Insufficient storage.')
  t.equal(error.code, 'HTTP_ERROR_INSUFFICIENT_STORAGE')
  t.equal(error.name, 'InsufficientStorageError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('LoopDetectedError', t => {
  t.plan(14)

  const error = new LoopDetectedError('WHATEVER', { key1: 'prop1' })

  t.equal(LoopDetectedError.status, 508)
  t.equal(LoopDetectedError.error, 'LoopDetected')
  t.equal(LoopDetectedError.message, 'Loop Detected')
  t.equal(LoopDetectedError.phrase, 'Loop detected.')

  t.equal(error.status, 508)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Loop Detected')
  t.equal(error.errorPhrase, 'Loop detected.')
  t.equal(error.code, 'HTTP_ERROR_LOOP_DETECTED')
  t.equal(error.name, 'LoopDetectedError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('BandwidthLimitExceededError', t => {
  t.plan(14)

  const error = new BandwidthLimitExceededError('WHATEVER', { key1: 'prop1' })

  t.equal(BandwidthLimitExceededError.status, 509)
  t.equal(BandwidthLimitExceededError.error, 'BandwidthLimitExceeded')
  t.equal(BandwidthLimitExceededError.message, 'Bandwidth Limit Exceeded')
  t.equal(BandwidthLimitExceededError.phrase, 'Bandwidth limit exceeded.')

  t.equal(error.status, 509)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Bandwidth Limit Exceeded')
  t.equal(error.errorPhrase, 'Bandwidth limit exceeded.')
  t.equal(error.code, 'HTTP_ERROR_BANDWIDTH_LIMIT_EXCEEDED')
  t.equal(error.name, 'BandwidthLimitExceededError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('NotExtendedError', t => {
  t.plan(14)

  const error = new NotExtendedError('WHATEVER', { key1: 'prop1' })

  t.equal(NotExtendedError.status, 510)
  t.equal(NotExtendedError.error, 'NotExtended')
  t.equal(NotExtendedError.message, 'Not Extended')
  t.equal(NotExtendedError.phrase, 'Not extended.')

  t.equal(error.status, 510)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Not Extended')
  t.equal(error.errorPhrase, 'Not extended.')
  t.equal(error.code, 'HTTP_ERROR_NOT_EXTENDED')
  t.equal(error.name, 'NotExtendedError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})

t.test('NetworkAuthenticationRequiredError', t => {
  t.plan(14)

  const error = new NetworkAuthenticationRequiredError('WHATEVER', { key1: 'prop1' })

  t.equal(NetworkAuthenticationRequiredError.status, 511)
  t.equal(NetworkAuthenticationRequiredError.error, 'NetworkAuthenticationRequired')
  t.equal(NetworkAuthenticationRequiredError.message, 'Network Authentication Required')
  t.equal(NetworkAuthenticationRequiredError.phrase, 'Network authentication required.')

  t.equal(error.status, 511)
  t.equal(error.message, 'WHATEVER')
  t.equal(error.error, 'Network Authentication Required')
  t.equal(error.errorPhrase, 'Network authentication required.')
  t.equal(error.code, 'HTTP_ERROR_NETWORK_AUTHENTICATION_REQUIRED')
  t.equal(error.name, 'NetworkAuthenticationRequiredError')
  t.notOk(error.isClientError)
  t.ok(error.isServerError)
  t.notOk(error.expose)
  t.equal(error.key1, 'prop1')
})
