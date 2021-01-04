import { HttpError } from "./base.mjs";
export class BadRequestError extends HttpError {
    constructor(message, properties) {
        super(400, message, properties);
        this.name = 'BadRequestError';
    }
}
BadRequestError.status = 400;
BadRequestError.error = 'BadRequest';
BadRequestError.message = 'Bad Request';
BadRequestError.phrase = 'Bad request.';
export class UnauthorizedError extends HttpError {
    constructor(message, properties) {
        super(401, message, properties);
        this.name = 'UnauthorizedError';
    }
}
UnauthorizedError.status = 401;
UnauthorizedError.error = 'Unauthorized';
UnauthorizedError.message = 'Unauthorized';
UnauthorizedError.phrase = 'Unauthorized.';
export class PaymentRequiredError extends HttpError {
    constructor(message, properties) {
        super(402, message, properties);
        this.name = 'PaymentRequiredError';
    }
}
PaymentRequiredError.status = 402;
PaymentRequiredError.error = 'PaymentRequired';
PaymentRequiredError.message = 'Payment Required';
PaymentRequiredError.phrase = 'Payment required.';
export class ForbiddenError extends HttpError {
    constructor(message, properties) {
        super(403, message, properties);
        this.name = 'ForbiddenError';
    }
}
ForbiddenError.status = 403;
ForbiddenError.error = 'Forbidden';
ForbiddenError.message = 'Forbidden';
ForbiddenError.phrase = 'Forbidden.';
export class NotFoundError extends HttpError {
    constructor(message, properties) {
        super(404, message, properties);
        this.name = 'NotFoundError';
    }
}
NotFoundError.status = 404;
NotFoundError.error = 'NotFound';
NotFoundError.message = 'Not Found';
NotFoundError.phrase = 'Not found.';
export class MethodNotAllowedError extends HttpError {
    constructor(message, properties) {
        super(405, message, properties);
        this.name = 'MethodNotAllowedError';
    }
}
MethodNotAllowedError.status = 405;
MethodNotAllowedError.error = 'MethodNotAllowed';
MethodNotAllowedError.message = 'Method Not Allowed';
MethodNotAllowedError.phrase = 'Method not allowed.';
export class NotAcceptableError extends HttpError {
    constructor(message, properties) {
        super(406, message, properties);
        this.name = 'NotAcceptableError';
    }
}
NotAcceptableError.status = 406;
NotAcceptableError.error = 'NotAcceptable';
NotAcceptableError.message = 'Not Acceptable';
NotAcceptableError.phrase = 'Not acceptable.';
export class ProxyAuthenticationRequiredError extends HttpError {
    constructor(message, properties) {
        super(407, message, properties);
        this.name = 'ProxyAuthenticationRequiredError';
    }
}
ProxyAuthenticationRequiredError.status = 407;
ProxyAuthenticationRequiredError.error = 'ProxyAuthenticationRequired';
ProxyAuthenticationRequiredError.message = 'Proxy Authentication Required';
ProxyAuthenticationRequiredError.phrase = 'Proxy authentication required.';
export class RequestTimeoutError extends HttpError {
    constructor(message, properties) {
        super(408, message, properties);
        this.name = 'RequestTimeoutError';
    }
}
RequestTimeoutError.status = 408;
RequestTimeoutError.error = 'RequestTimeout';
RequestTimeoutError.message = 'Request Timeout';
RequestTimeoutError.phrase = 'Request timeout.';
export class ConflictError extends HttpError {
    constructor(message, properties) {
        super(409, message, properties);
        this.name = 'ConflictError';
    }
}
ConflictError.status = 409;
ConflictError.error = 'Conflict';
ConflictError.message = 'Conflict';
ConflictError.phrase = 'Conflict.';
export class GoneError extends HttpError {
    constructor(message, properties) {
        super(410, message, properties);
        this.name = 'GoneError';
    }
}
GoneError.status = 410;
GoneError.error = 'Gone';
GoneError.message = 'Gone';
GoneError.phrase = 'Gone.';
export class LengthRequiredError extends HttpError {
    constructor(message, properties) {
        super(411, message, properties);
        this.name = 'LengthRequiredError';
    }
}
LengthRequiredError.status = 411;
LengthRequiredError.error = 'LengthRequired';
LengthRequiredError.message = 'Length Required';
LengthRequiredError.phrase = 'Length required.';
export class PreconditionFailedError extends HttpError {
    constructor(message, properties) {
        super(412, message, properties);
        this.name = 'PreconditionFailedError';
    }
}
PreconditionFailedError.status = 412;
PreconditionFailedError.error = 'PreconditionFailed';
PreconditionFailedError.message = 'Precondition Failed';
PreconditionFailedError.phrase = 'Precondition failed.';
export class PayloadTooLargeError extends HttpError {
    constructor(message, properties) {
        super(413, message, properties);
        this.name = 'PayloadTooLargeError';
    }
}
PayloadTooLargeError.status = 413;
PayloadTooLargeError.error = 'PayloadTooLarge';
PayloadTooLargeError.message = 'Payload Too Large';
PayloadTooLargeError.phrase = 'Payload too large.';
export class URITooLongError extends HttpError {
    constructor(message, properties) {
        super(414, message, properties);
        this.name = 'URITooLongError';
    }
}
URITooLongError.status = 414;
URITooLongError.error = 'URITooLong';
URITooLongError.message = 'URI Too Long';
URITooLongError.phrase = 'Uri too long.';
export class UnsupportedMediaTypeError extends HttpError {
    constructor(message, properties) {
        super(415, message, properties);
        this.name = 'UnsupportedMediaTypeError';
    }
}
UnsupportedMediaTypeError.status = 415;
UnsupportedMediaTypeError.error = 'UnsupportedMediaType';
UnsupportedMediaTypeError.message = 'Unsupported Media Type';
UnsupportedMediaTypeError.phrase = 'Unsupported media type.';
export class RangeNotSatisfiableError extends HttpError {
    constructor(message, properties) {
        super(416, message, properties);
        this.name = 'RangeNotSatisfiableError';
    }
}
RangeNotSatisfiableError.status = 416;
RangeNotSatisfiableError.error = 'RangeNotSatisfiable';
RangeNotSatisfiableError.message = 'Range Not Satisfiable';
RangeNotSatisfiableError.phrase = 'Range not satisfiable.';
export class ExpectationFailedError extends HttpError {
    constructor(message, properties) {
        super(417, message, properties);
        this.name = 'ExpectationFailedError';
    }
}
ExpectationFailedError.status = 417;
ExpectationFailedError.error = 'ExpectationFailed';
ExpectationFailedError.message = 'Expectation Failed';
ExpectationFailedError.phrase = 'Expectation failed.';
export class ImaTeapotError extends HttpError {
    constructor(message, properties) {
        super(418, message, properties);
        this.name = 'ImaTeapotError';
    }
}
ImaTeapotError.status = 418;
ImaTeapotError.error = 'ImaTeapot';
ImaTeapotError.message = "I'm a Teapot";
ImaTeapotError.phrase = "I'm a teapot.";
export class MisdirectedRequestError extends HttpError {
    constructor(message, properties) {
        super(421, message, properties);
        this.name = 'MisdirectedRequestError';
    }
}
MisdirectedRequestError.status = 421;
MisdirectedRequestError.error = 'MisdirectedRequest';
MisdirectedRequestError.message = 'Misdirected Request';
MisdirectedRequestError.phrase = 'Misdirected request.';
export class UnprocessableEntityError extends HttpError {
    constructor(message, properties) {
        super(422, message, properties);
        this.name = 'UnprocessableEntityError';
    }
}
UnprocessableEntityError.status = 422;
UnprocessableEntityError.error = 'UnprocessableEntity';
UnprocessableEntityError.message = 'Unprocessable Entity';
UnprocessableEntityError.phrase = 'Unprocessable entity.';
export class LockedError extends HttpError {
    constructor(message, properties) {
        super(423, message, properties);
        this.name = 'LockedError';
    }
}
LockedError.status = 423;
LockedError.error = 'Locked';
LockedError.message = 'Locked';
LockedError.phrase = 'Locked.';
export class FailedDependencyError extends HttpError {
    constructor(message, properties) {
        super(424, message, properties);
        this.name = 'FailedDependencyError';
    }
}
FailedDependencyError.status = 424;
FailedDependencyError.error = 'FailedDependency';
FailedDependencyError.message = 'Failed Dependency';
FailedDependencyError.phrase = 'Failed dependency.';
export class TooEarlyError extends HttpError {
    constructor(message, properties) {
        super(425, message, properties);
        this.name = 'TooEarlyError';
    }
}
TooEarlyError.status = 425;
TooEarlyError.error = 'TooEarly';
TooEarlyError.message = 'Too Early';
TooEarlyError.phrase = 'Too early.';
export class UpgradeRequiredError extends HttpError {
    constructor(message, properties) {
        super(426, message, properties);
        this.name = 'UpgradeRequiredError';
    }
}
UpgradeRequiredError.status = 426;
UpgradeRequiredError.error = 'UpgradeRequired';
UpgradeRequiredError.message = 'Upgrade Required';
UpgradeRequiredError.phrase = 'Upgrade required.';
export class PreconditionRequiredError extends HttpError {
    constructor(message, properties) {
        super(428, message, properties);
        this.name = 'PreconditionRequiredError';
    }
}
PreconditionRequiredError.status = 428;
PreconditionRequiredError.error = 'PreconditionRequired';
PreconditionRequiredError.message = 'Precondition Required';
PreconditionRequiredError.phrase = 'Precondition required.';
export class TooManyRequestsError extends HttpError {
    constructor(message, properties) {
        super(429, message, properties);
        this.name = 'TooManyRequestsError';
    }
}
TooManyRequestsError.status = 429;
TooManyRequestsError.error = 'TooManyRequests';
TooManyRequestsError.message = 'Too Many Requests';
TooManyRequestsError.phrase = 'Too many requests.';
export class RequestHeaderFieldsTooLargeError extends HttpError {
    constructor(message, properties) {
        super(431, message, properties);
        this.name = 'RequestHeaderFieldsTooLargeError';
    }
}
RequestHeaderFieldsTooLargeError.status = 431;
RequestHeaderFieldsTooLargeError.error = 'RequestHeaderFieldsTooLarge';
RequestHeaderFieldsTooLargeError.message = 'Request Header Fields Too Large';
RequestHeaderFieldsTooLargeError.phrase = 'Request header fields too large.';
export class UnavailableForLegalReasonsError extends HttpError {
    constructor(message, properties) {
        super(451, message, properties);
        this.name = 'UnavailableForLegalReasonsError';
    }
}
UnavailableForLegalReasonsError.status = 451;
UnavailableForLegalReasonsError.error = 'UnavailableForLegalReasons';
UnavailableForLegalReasonsError.message = 'Unavailable For Legal Reasons';
UnavailableForLegalReasonsError.phrase = 'Unavailable for legal reasons.';
export class InternalServerError extends HttpError {
    constructor(message, properties) {
        super(500, message, properties);
        this.name = 'InternalServerError';
    }
}
InternalServerError.status = 500;
InternalServerError.error = 'InternalServerError';
InternalServerError.message = 'Internal Server Error';
InternalServerError.phrase = 'Internal server error.';
export class NotImplementedError extends HttpError {
    constructor(message, properties) {
        super(501, message, properties);
        this.name = 'NotImplementedError';
    }
}
NotImplementedError.status = 501;
NotImplementedError.error = 'NotImplemented';
NotImplementedError.message = 'Not Implemented';
NotImplementedError.phrase = 'Not implemented.';
export class BadGatewayError extends HttpError {
    constructor(message, properties) {
        super(502, message, properties);
        this.name = 'BadGatewayError';
    }
}
BadGatewayError.status = 502;
BadGatewayError.error = 'BadGateway';
BadGatewayError.message = 'Bad Gateway';
BadGatewayError.phrase = 'Bad gateway.';
export class ServiceUnavailableError extends HttpError {
    constructor(message, properties) {
        super(503, message, properties);
        this.name = 'ServiceUnavailableError';
    }
}
ServiceUnavailableError.status = 503;
ServiceUnavailableError.error = 'ServiceUnavailable';
ServiceUnavailableError.message = 'Service Unavailable';
ServiceUnavailableError.phrase = 'Service unavailable.';
export class GatewayTimeoutError extends HttpError {
    constructor(message, properties) {
        super(504, message, properties);
        this.name = 'GatewayTimeoutError';
    }
}
GatewayTimeoutError.status = 504;
GatewayTimeoutError.error = 'GatewayTimeout';
GatewayTimeoutError.message = 'Gateway Timeout';
GatewayTimeoutError.phrase = 'Gateway timeout.';
export class HTTPVersionNotSupportedError extends HttpError {
    constructor(message, properties) {
        super(505, message, properties);
        this.name = 'HTTPVersionNotSupportedError';
    }
}
HTTPVersionNotSupportedError.status = 505;
HTTPVersionNotSupportedError.error = 'HTTPVersionNotSupported';
HTTPVersionNotSupportedError.message = 'HTTP Version Not Supported';
HTTPVersionNotSupportedError.phrase = 'Http version not supported.';
export class VariantAlsoNegotiatesError extends HttpError {
    constructor(message, properties) {
        super(506, message, properties);
        this.name = 'VariantAlsoNegotiatesError';
    }
}
VariantAlsoNegotiatesError.status = 506;
VariantAlsoNegotiatesError.error = 'VariantAlsoNegotiates';
VariantAlsoNegotiatesError.message = 'Variant Also Negotiates';
VariantAlsoNegotiatesError.phrase = 'Variant also negotiates.';
export class InsufficientStorageError extends HttpError {
    constructor(message, properties) {
        super(507, message, properties);
        this.name = 'InsufficientStorageError';
    }
}
InsufficientStorageError.status = 507;
InsufficientStorageError.error = 'InsufficientStorage';
InsufficientStorageError.message = 'Insufficient Storage';
InsufficientStorageError.phrase = 'Insufficient storage.';
export class LoopDetectedError extends HttpError {
    constructor(message, properties) {
        super(508, message, properties);
        this.name = 'LoopDetectedError';
    }
}
LoopDetectedError.status = 508;
LoopDetectedError.error = 'LoopDetected';
LoopDetectedError.message = 'Loop Detected';
LoopDetectedError.phrase = 'Loop detected.';
export class BandwidthLimitExceededError extends HttpError {
    constructor(message, properties) {
        super(509, message, properties);
        this.name = 'BandwidthLimitExceededError';
    }
}
BandwidthLimitExceededError.status = 509;
BandwidthLimitExceededError.error = 'BandwidthLimitExceeded';
BandwidthLimitExceededError.message = 'Bandwidth Limit Exceeded';
BandwidthLimitExceededError.phrase = 'Bandwidth limit exceeded.';
export class NotExtendedError extends HttpError {
    constructor(message, properties) {
        super(510, message, properties);
        this.name = 'NotExtendedError';
    }
}
NotExtendedError.status = 510;
NotExtendedError.error = 'NotExtended';
NotExtendedError.message = 'Not Extended';
NotExtendedError.phrase = 'Not extended.';
export class NetworkAuthenticationRequiredError extends HttpError {
    constructor(message, properties) {
        super(511, message, properties);
        this.name = 'NetworkAuthenticationRequiredError';
    }
}
NetworkAuthenticationRequiredError.status = 511;
NetworkAuthenticationRequiredError.error = 'NetworkAuthenticationRequired';
NetworkAuthenticationRequiredError.message = 'Network Authentication Required';
NetworkAuthenticationRequiredError.phrase = 'Network authentication required.';
