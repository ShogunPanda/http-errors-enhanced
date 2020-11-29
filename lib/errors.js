"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAuthenticationRequiredError = exports.NotExtendedError = exports.BandwidthLimitExceededError = exports.LoopDetectedError = exports.InsufficientStorageError = exports.VariantAlsoNegotiatesError = exports.HTTPVersionNotSupportedError = exports.GatewayTimeoutError = exports.ServiceUnavailableError = exports.BadGatewayError = exports.NotImplementedError = exports.InternalServerError = exports.UnavailableForLegalReasonsError = exports.RequestHeaderFieldsTooLargeError = exports.TooManyRequestsError = exports.PreconditionRequiredError = exports.UpgradeRequiredError = exports.TooEarlyError = exports.FailedDependencyError = exports.LockedError = exports.UnprocessableEntityError = exports.MisdirectedRequestError = exports.ImaTeapotError = exports.ExpectationFailedError = exports.RangeNotSatisfiableError = exports.UnsupportedMediaTypeError = exports.URITooLongError = exports.PayloadTooLargeError = exports.PreconditionFailedError = exports.LengthRequiredError = exports.GoneError = exports.ConflictError = exports.RequestTimeoutError = exports.ProxyAuthenticationRequiredError = exports.NotAcceptableError = exports.MethodNotAllowedError = exports.NotFoundError = exports.ForbiddenError = exports.PaymentRequiredError = exports.UnauthorizedError = exports.BadRequestError = void 0;
const base_1 = require("./base");
class BadRequestError extends base_1.HttpError {
    constructor(message, properties) {
        super(400, message, properties);
        this.name = 'BadRequestError';
    }
}
exports.BadRequestError = BadRequestError;
BadRequestError.status = 400;
BadRequestError.error = 'BadRequest';
BadRequestError.message = 'Bad Request';
BadRequestError.phrase = 'Bad request.';
class UnauthorizedError extends base_1.HttpError {
    constructor(message, properties) {
        super(401, message, properties);
        this.name = 'UnauthorizedError';
    }
}
exports.UnauthorizedError = UnauthorizedError;
UnauthorizedError.status = 401;
UnauthorizedError.error = 'Unauthorized';
UnauthorizedError.message = 'Unauthorized';
UnauthorizedError.phrase = 'Unauthorized.';
class PaymentRequiredError extends base_1.HttpError {
    constructor(message, properties) {
        super(402, message, properties);
        this.name = 'PaymentRequiredError';
    }
}
exports.PaymentRequiredError = PaymentRequiredError;
PaymentRequiredError.status = 402;
PaymentRequiredError.error = 'PaymentRequired';
PaymentRequiredError.message = 'Payment Required';
PaymentRequiredError.phrase = 'Payment required.';
class ForbiddenError extends base_1.HttpError {
    constructor(message, properties) {
        super(403, message, properties);
        this.name = 'ForbiddenError';
    }
}
exports.ForbiddenError = ForbiddenError;
ForbiddenError.status = 403;
ForbiddenError.error = 'Forbidden';
ForbiddenError.message = 'Forbidden';
ForbiddenError.phrase = 'Forbidden.';
class NotFoundError extends base_1.HttpError {
    constructor(message, properties) {
        super(404, message, properties);
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
NotFoundError.status = 404;
NotFoundError.error = 'NotFound';
NotFoundError.message = 'Not Found';
NotFoundError.phrase = 'Not found.';
class MethodNotAllowedError extends base_1.HttpError {
    constructor(message, properties) {
        super(405, message, properties);
        this.name = 'MethodNotAllowedError';
    }
}
exports.MethodNotAllowedError = MethodNotAllowedError;
MethodNotAllowedError.status = 405;
MethodNotAllowedError.error = 'MethodNotAllowed';
MethodNotAllowedError.message = 'Method Not Allowed';
MethodNotAllowedError.phrase = 'Method not allowed.';
class NotAcceptableError extends base_1.HttpError {
    constructor(message, properties) {
        super(406, message, properties);
        this.name = 'NotAcceptableError';
    }
}
exports.NotAcceptableError = NotAcceptableError;
NotAcceptableError.status = 406;
NotAcceptableError.error = 'NotAcceptable';
NotAcceptableError.message = 'Not Acceptable';
NotAcceptableError.phrase = 'Not acceptable.';
class ProxyAuthenticationRequiredError extends base_1.HttpError {
    constructor(message, properties) {
        super(407, message, properties);
        this.name = 'ProxyAuthenticationRequiredError';
    }
}
exports.ProxyAuthenticationRequiredError = ProxyAuthenticationRequiredError;
ProxyAuthenticationRequiredError.status = 407;
ProxyAuthenticationRequiredError.error = 'ProxyAuthenticationRequired';
ProxyAuthenticationRequiredError.message = 'Proxy Authentication Required';
ProxyAuthenticationRequiredError.phrase = 'Proxy authentication required.';
class RequestTimeoutError extends base_1.HttpError {
    constructor(message, properties) {
        super(408, message, properties);
        this.name = 'RequestTimeoutError';
    }
}
exports.RequestTimeoutError = RequestTimeoutError;
RequestTimeoutError.status = 408;
RequestTimeoutError.error = 'RequestTimeout';
RequestTimeoutError.message = 'Request Timeout';
RequestTimeoutError.phrase = 'Request timeout.';
class ConflictError extends base_1.HttpError {
    constructor(message, properties) {
        super(409, message, properties);
        this.name = 'ConflictError';
    }
}
exports.ConflictError = ConflictError;
ConflictError.status = 409;
ConflictError.error = 'Conflict';
ConflictError.message = 'Conflict';
ConflictError.phrase = 'Conflict.';
class GoneError extends base_1.HttpError {
    constructor(message, properties) {
        super(410, message, properties);
        this.name = 'GoneError';
    }
}
exports.GoneError = GoneError;
GoneError.status = 410;
GoneError.error = 'Gone';
GoneError.message = 'Gone';
GoneError.phrase = 'Gone.';
class LengthRequiredError extends base_1.HttpError {
    constructor(message, properties) {
        super(411, message, properties);
        this.name = 'LengthRequiredError';
    }
}
exports.LengthRequiredError = LengthRequiredError;
LengthRequiredError.status = 411;
LengthRequiredError.error = 'LengthRequired';
LengthRequiredError.message = 'Length Required';
LengthRequiredError.phrase = 'Length required.';
class PreconditionFailedError extends base_1.HttpError {
    constructor(message, properties) {
        super(412, message, properties);
        this.name = 'PreconditionFailedError';
    }
}
exports.PreconditionFailedError = PreconditionFailedError;
PreconditionFailedError.status = 412;
PreconditionFailedError.error = 'PreconditionFailed';
PreconditionFailedError.message = 'Precondition Failed';
PreconditionFailedError.phrase = 'Precondition failed.';
class PayloadTooLargeError extends base_1.HttpError {
    constructor(message, properties) {
        super(413, message, properties);
        this.name = 'PayloadTooLargeError';
    }
}
exports.PayloadTooLargeError = PayloadTooLargeError;
PayloadTooLargeError.status = 413;
PayloadTooLargeError.error = 'PayloadTooLarge';
PayloadTooLargeError.message = 'Payload Too Large';
PayloadTooLargeError.phrase = 'Payload too large.';
class URITooLongError extends base_1.HttpError {
    constructor(message, properties) {
        super(414, message, properties);
        this.name = 'URITooLongError';
    }
}
exports.URITooLongError = URITooLongError;
URITooLongError.status = 414;
URITooLongError.error = 'URITooLong';
URITooLongError.message = 'URI Too Long';
URITooLongError.phrase = 'Uri too long.';
class UnsupportedMediaTypeError extends base_1.HttpError {
    constructor(message, properties) {
        super(415, message, properties);
        this.name = 'UnsupportedMediaTypeError';
    }
}
exports.UnsupportedMediaTypeError = UnsupportedMediaTypeError;
UnsupportedMediaTypeError.status = 415;
UnsupportedMediaTypeError.error = 'UnsupportedMediaType';
UnsupportedMediaTypeError.message = 'Unsupported Media Type';
UnsupportedMediaTypeError.phrase = 'Unsupported media type.';
class RangeNotSatisfiableError extends base_1.HttpError {
    constructor(message, properties) {
        super(416, message, properties);
        this.name = 'RangeNotSatisfiableError';
    }
}
exports.RangeNotSatisfiableError = RangeNotSatisfiableError;
RangeNotSatisfiableError.status = 416;
RangeNotSatisfiableError.error = 'RangeNotSatisfiable';
RangeNotSatisfiableError.message = 'Range Not Satisfiable';
RangeNotSatisfiableError.phrase = 'Range not satisfiable.';
class ExpectationFailedError extends base_1.HttpError {
    constructor(message, properties) {
        super(417, message, properties);
        this.name = 'ExpectationFailedError';
    }
}
exports.ExpectationFailedError = ExpectationFailedError;
ExpectationFailedError.status = 417;
ExpectationFailedError.error = 'ExpectationFailed';
ExpectationFailedError.message = 'Expectation Failed';
ExpectationFailedError.phrase = 'Expectation failed.';
class ImaTeapotError extends base_1.HttpError {
    constructor(message, properties) {
        super(418, message, properties);
        this.name = 'ImaTeapotError';
    }
}
exports.ImaTeapotError = ImaTeapotError;
ImaTeapotError.status = 418;
ImaTeapotError.error = 'ImaTeapot';
ImaTeapotError.message = "I'm a Teapot";
ImaTeapotError.phrase = "I'm a teapot.";
class MisdirectedRequestError extends base_1.HttpError {
    constructor(message, properties) {
        super(421, message, properties);
        this.name = 'MisdirectedRequestError';
    }
}
exports.MisdirectedRequestError = MisdirectedRequestError;
MisdirectedRequestError.status = 421;
MisdirectedRequestError.error = 'MisdirectedRequest';
MisdirectedRequestError.message = 'Misdirected Request';
MisdirectedRequestError.phrase = 'Misdirected request.';
class UnprocessableEntityError extends base_1.HttpError {
    constructor(message, properties) {
        super(422, message, properties);
        this.name = 'UnprocessableEntityError';
    }
}
exports.UnprocessableEntityError = UnprocessableEntityError;
UnprocessableEntityError.status = 422;
UnprocessableEntityError.error = 'UnprocessableEntity';
UnprocessableEntityError.message = 'Unprocessable Entity';
UnprocessableEntityError.phrase = 'Unprocessable entity.';
class LockedError extends base_1.HttpError {
    constructor(message, properties) {
        super(423, message, properties);
        this.name = 'LockedError';
    }
}
exports.LockedError = LockedError;
LockedError.status = 423;
LockedError.error = 'Locked';
LockedError.message = 'Locked';
LockedError.phrase = 'Locked.';
class FailedDependencyError extends base_1.HttpError {
    constructor(message, properties) {
        super(424, message, properties);
        this.name = 'FailedDependencyError';
    }
}
exports.FailedDependencyError = FailedDependencyError;
FailedDependencyError.status = 424;
FailedDependencyError.error = 'FailedDependency';
FailedDependencyError.message = 'Failed Dependency';
FailedDependencyError.phrase = 'Failed dependency.';
class TooEarlyError extends base_1.HttpError {
    constructor(message, properties) {
        super(425, message, properties);
        this.name = 'TooEarlyError';
    }
}
exports.TooEarlyError = TooEarlyError;
TooEarlyError.status = 425;
TooEarlyError.error = 'TooEarly';
TooEarlyError.message = 'Too Early';
TooEarlyError.phrase = 'Too early.';
class UpgradeRequiredError extends base_1.HttpError {
    constructor(message, properties) {
        super(426, message, properties);
        this.name = 'UpgradeRequiredError';
    }
}
exports.UpgradeRequiredError = UpgradeRequiredError;
UpgradeRequiredError.status = 426;
UpgradeRequiredError.error = 'UpgradeRequired';
UpgradeRequiredError.message = 'Upgrade Required';
UpgradeRequiredError.phrase = 'Upgrade required.';
class PreconditionRequiredError extends base_1.HttpError {
    constructor(message, properties) {
        super(428, message, properties);
        this.name = 'PreconditionRequiredError';
    }
}
exports.PreconditionRequiredError = PreconditionRequiredError;
PreconditionRequiredError.status = 428;
PreconditionRequiredError.error = 'PreconditionRequired';
PreconditionRequiredError.message = 'Precondition Required';
PreconditionRequiredError.phrase = 'Precondition required.';
class TooManyRequestsError extends base_1.HttpError {
    constructor(message, properties) {
        super(429, message, properties);
        this.name = 'TooManyRequestsError';
    }
}
exports.TooManyRequestsError = TooManyRequestsError;
TooManyRequestsError.status = 429;
TooManyRequestsError.error = 'TooManyRequests';
TooManyRequestsError.message = 'Too Many Requests';
TooManyRequestsError.phrase = 'Too many requests.';
class RequestHeaderFieldsTooLargeError extends base_1.HttpError {
    constructor(message, properties) {
        super(431, message, properties);
        this.name = 'RequestHeaderFieldsTooLargeError';
    }
}
exports.RequestHeaderFieldsTooLargeError = RequestHeaderFieldsTooLargeError;
RequestHeaderFieldsTooLargeError.status = 431;
RequestHeaderFieldsTooLargeError.error = 'RequestHeaderFieldsTooLarge';
RequestHeaderFieldsTooLargeError.message = 'Request Header Fields Too Large';
RequestHeaderFieldsTooLargeError.phrase = 'Request header fields too large.';
class UnavailableForLegalReasonsError extends base_1.HttpError {
    constructor(message, properties) {
        super(451, message, properties);
        this.name = 'UnavailableForLegalReasonsError';
    }
}
exports.UnavailableForLegalReasonsError = UnavailableForLegalReasonsError;
UnavailableForLegalReasonsError.status = 451;
UnavailableForLegalReasonsError.error = 'UnavailableForLegalReasons';
UnavailableForLegalReasonsError.message = 'Unavailable For Legal Reasons';
UnavailableForLegalReasonsError.phrase = 'Unavailable for legal reasons.';
class InternalServerError extends base_1.HttpError {
    constructor(message, properties) {
        super(500, message, properties);
        this.name = 'InternalServerError';
    }
}
exports.InternalServerError = InternalServerError;
InternalServerError.status = 500;
InternalServerError.error = 'InternalServerError';
InternalServerError.message = 'Internal Server Error';
InternalServerError.phrase = 'Internal server error.';
class NotImplementedError extends base_1.HttpError {
    constructor(message, properties) {
        super(501, message, properties);
        this.name = 'NotImplementedError';
    }
}
exports.NotImplementedError = NotImplementedError;
NotImplementedError.status = 501;
NotImplementedError.error = 'NotImplemented';
NotImplementedError.message = 'Not Implemented';
NotImplementedError.phrase = 'Not implemented.';
class BadGatewayError extends base_1.HttpError {
    constructor(message, properties) {
        super(502, message, properties);
        this.name = 'BadGatewayError';
    }
}
exports.BadGatewayError = BadGatewayError;
BadGatewayError.status = 502;
BadGatewayError.error = 'BadGateway';
BadGatewayError.message = 'Bad Gateway';
BadGatewayError.phrase = 'Bad gateway.';
class ServiceUnavailableError extends base_1.HttpError {
    constructor(message, properties) {
        super(503, message, properties);
        this.name = 'ServiceUnavailableError';
    }
}
exports.ServiceUnavailableError = ServiceUnavailableError;
ServiceUnavailableError.status = 503;
ServiceUnavailableError.error = 'ServiceUnavailable';
ServiceUnavailableError.message = 'Service Unavailable';
ServiceUnavailableError.phrase = 'Service unavailable.';
class GatewayTimeoutError extends base_1.HttpError {
    constructor(message, properties) {
        super(504, message, properties);
        this.name = 'GatewayTimeoutError';
    }
}
exports.GatewayTimeoutError = GatewayTimeoutError;
GatewayTimeoutError.status = 504;
GatewayTimeoutError.error = 'GatewayTimeout';
GatewayTimeoutError.message = 'Gateway Timeout';
GatewayTimeoutError.phrase = 'Gateway timeout.';
class HTTPVersionNotSupportedError extends base_1.HttpError {
    constructor(message, properties) {
        super(505, message, properties);
        this.name = 'HTTPVersionNotSupportedError';
    }
}
exports.HTTPVersionNotSupportedError = HTTPVersionNotSupportedError;
HTTPVersionNotSupportedError.status = 505;
HTTPVersionNotSupportedError.error = 'HTTPVersionNotSupported';
HTTPVersionNotSupportedError.message = 'HTTP Version Not Supported';
HTTPVersionNotSupportedError.phrase = 'Http version not supported.';
class VariantAlsoNegotiatesError extends base_1.HttpError {
    constructor(message, properties) {
        super(506, message, properties);
        this.name = 'VariantAlsoNegotiatesError';
    }
}
exports.VariantAlsoNegotiatesError = VariantAlsoNegotiatesError;
VariantAlsoNegotiatesError.status = 506;
VariantAlsoNegotiatesError.error = 'VariantAlsoNegotiates';
VariantAlsoNegotiatesError.message = 'Variant Also Negotiates';
VariantAlsoNegotiatesError.phrase = 'Variant also negotiates.';
class InsufficientStorageError extends base_1.HttpError {
    constructor(message, properties) {
        super(507, message, properties);
        this.name = 'InsufficientStorageError';
    }
}
exports.InsufficientStorageError = InsufficientStorageError;
InsufficientStorageError.status = 507;
InsufficientStorageError.error = 'InsufficientStorage';
InsufficientStorageError.message = 'Insufficient Storage';
InsufficientStorageError.phrase = 'Insufficient storage.';
class LoopDetectedError extends base_1.HttpError {
    constructor(message, properties) {
        super(508, message, properties);
        this.name = 'LoopDetectedError';
    }
}
exports.LoopDetectedError = LoopDetectedError;
LoopDetectedError.status = 508;
LoopDetectedError.error = 'LoopDetected';
LoopDetectedError.message = 'Loop Detected';
LoopDetectedError.phrase = 'Loop detected.';
class BandwidthLimitExceededError extends base_1.HttpError {
    constructor(message, properties) {
        super(509, message, properties);
        this.name = 'BandwidthLimitExceededError';
    }
}
exports.BandwidthLimitExceededError = BandwidthLimitExceededError;
BandwidthLimitExceededError.status = 509;
BandwidthLimitExceededError.error = 'BandwidthLimitExceeded';
BandwidthLimitExceededError.message = 'Bandwidth Limit Exceeded';
BandwidthLimitExceededError.phrase = 'Bandwidth limit exceeded.';
class NotExtendedError extends base_1.HttpError {
    constructor(message, properties) {
        super(510, message, properties);
        this.name = 'NotExtendedError';
    }
}
exports.NotExtendedError = NotExtendedError;
NotExtendedError.status = 510;
NotExtendedError.error = 'NotExtended';
NotExtendedError.message = 'Not Extended';
NotExtendedError.phrase = 'Not extended.';
class NetworkAuthenticationRequiredError extends base_1.HttpError {
    constructor(message, properties) {
        super(511, message, properties);
        this.name = 'NetworkAuthenticationRequiredError';
    }
}
exports.NetworkAuthenticationRequiredError = NetworkAuthenticationRequiredError;
NetworkAuthenticationRequiredError.status = 511;
NetworkAuthenticationRequiredError.error = 'NetworkAuthenticationRequired';
NetworkAuthenticationRequiredError.message = 'Network Authentication Required';
NetworkAuthenticationRequiredError.phrase = 'Network authentication required.';
