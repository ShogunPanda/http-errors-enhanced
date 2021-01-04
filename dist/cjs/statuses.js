"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOO_EARLY = exports.FAILED_DEPENDENCY = exports.LOCKED = exports.UNPROCESSABLE_ENTITY = exports.MISDIRECTED_REQUEST = exports.IMA_TEAPOT = exports.EXPECTATION_FAILED = exports.RANGE_NOT_SATISFIABLE = exports.UNSUPPORTED_MEDIA_TYPE = exports.URITOO_LONG = exports.PAYLOAD_TOO_LARGE = exports.PRECONDITION_FAILED = exports.LENGTH_REQUIRED = exports.GONE = exports.CONFLICT = exports.REQUEST_TIMEOUT = exports.PROXY_AUTHENTICATION_REQUIRED = exports.NOT_ACCEPTABLE = exports.METHOD_NOT_ALLOWED = exports.NOT_FOUND = exports.FORBIDDEN = exports.PAYMENT_REQUIRED = exports.UNAUTHORIZED = exports.BAD_REQUEST = exports.PERMANENT_REDIRECT = exports.TEMPORARY_REDIRECT = exports.USE_PROXY = exports.NOT_MODIFIED = exports.SEE_OTHER = exports.FOUND = exports.MOVED_PERMANENTLY = exports.MULTIPLE_CHOICES = exports.IMUSED = exports.ALREADY_REPORTED = exports.MULTI_STATUS = exports.PARTIAL_CONTENT = exports.RESET_CONTENT = exports.NO_CONTENT = exports.NON_AUTHORITATIVE_INFORMATION = exports.ACCEPTED = exports.CREATED = exports.OK = exports.EARLY_HINTS = exports.PROCESSING = exports.SWITCHING_PROTOCOLS = exports.CONTINUE = exports.phrasesByCodes = exports.messagesByCodes = exports.codesByIdentifier = exports.identifierByCodes = void 0;
exports.NETWORK_AUTHENTICATION_REQUIRED = exports.NOT_EXTENDED = exports.BANDWIDTH_LIMIT_EXCEEDED = exports.LOOP_DETECTED = exports.INSUFFICIENT_STORAGE = exports.VARIANT_ALSO_NEGOTIATES = exports.HTTPVERSION_NOT_SUPPORTED = exports.GATEWAY_TIMEOUT = exports.SERVICE_UNAVAILABLE = exports.BAD_GATEWAY = exports.NOT_IMPLEMENTED = exports.INTERNAL_SERVER_ERROR = exports.UNAVAILABLE_FOR_LEGAL_REASONS = exports.REQUEST_HEADER_FIELDS_TOO_LARGE = exports.TOO_MANY_REQUESTS = exports.PRECONDITION_REQUIRED = exports.UPGRADE_REQUIRED = void 0;
exports.identifierByCodes = {
    100: 'Continue',
    101: 'SwitchingProtocols',
    102: 'Processing',
    103: 'EarlyHints',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'NonAuthoritativeInformation',
    204: 'NoContent',
    205: 'ResetContent',
    206: 'PartialContent',
    207: 'MultiStatus',
    208: 'AlreadyReported',
    226: 'IMUsed',
    300: 'MultipleChoices',
    301: 'MovedPermanently',
    302: 'Found',
    303: 'SeeOther',
    304: 'NotModified',
    305: 'UseProxy',
    307: 'TemporaryRedirect',
    308: 'PermanentRedirect',
    400: 'BadRequest',
    401: 'Unauthorized',
    402: 'PaymentRequired',
    403: 'Forbidden',
    404: 'NotFound',
    405: 'MethodNotAllowed',
    406: 'NotAcceptable',
    407: 'ProxyAuthenticationRequired',
    408: 'RequestTimeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'LengthRequired',
    412: 'PreconditionFailed',
    413: 'PayloadTooLarge',
    414: 'URITooLong',
    415: 'UnsupportedMediaType',
    416: 'RangeNotSatisfiable',
    417: 'ExpectationFailed',
    418: 'ImaTeapot',
    421: 'MisdirectedRequest',
    422: 'UnprocessableEntity',
    423: 'Locked',
    424: 'FailedDependency',
    425: 'TooEarly',
    426: 'UpgradeRequired',
    428: 'PreconditionRequired',
    429: 'TooManyRequests',
    431: 'RequestHeaderFieldsTooLarge',
    451: 'UnavailableForLegalReasons',
    500: 'InternalServerError',
    501: 'NotImplemented',
    502: 'BadGateway',
    503: 'ServiceUnavailable',
    504: 'GatewayTimeout',
    505: 'HTTPVersionNotSupported',
    506: 'VariantAlsoNegotiates',
    507: 'InsufficientStorage',
    508: 'LoopDetected',
    509: 'BandwidthLimitExceeded',
    510: 'NotExtended',
    511: 'NetworkAuthenticationRequired'
};
exports.codesByIdentifier = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    OK: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    IMUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    URITooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImaTeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HTTPVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    BandwidthLimitExceeded: 509,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
exports.messagesByCodes = {
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',
    103: 'Early Hints',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    226: 'IM Used',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: "I'm a Teapot",
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    509: 'Bandwidth Limit Exceeded',
    510: 'Not Extended',
    511: 'Network Authentication Required'
};
exports.phrasesByCodes = {
    100: 'Continue.',
    101: 'Switching protocols.',
    102: 'Processing.',
    103: 'Early hints.',
    200: 'Ok.',
    201: 'Created.',
    202: 'Accepted.',
    203: 'Non-authoritative information.',
    204: 'No content.',
    205: 'Reset content.',
    206: 'Partial content.',
    207: 'Multi-status.',
    208: 'Already reported.',
    226: 'Im used.',
    300: 'Multiple choices.',
    301: 'Moved permanently.',
    302: 'Found.',
    303: 'See other.',
    304: 'Not modified.',
    305: 'Use proxy.',
    307: 'Temporary redirect.',
    308: 'Permanent redirect.',
    400: 'Bad request.',
    401: 'Unauthorized.',
    402: 'Payment required.',
    403: 'Forbidden.',
    404: 'Not found.',
    405: 'Method not allowed.',
    406: 'Not acceptable.',
    407: 'Proxy authentication required.',
    408: 'Request timeout.',
    409: 'Conflict.',
    410: 'Gone.',
    411: 'Length required.',
    412: 'Precondition failed.',
    413: 'Payload too large.',
    414: 'Uri too long.',
    415: 'Unsupported media type.',
    416: 'Range not satisfiable.',
    417: 'Expectation failed.',
    418: "I'm a teapot.",
    421: 'Misdirected request.',
    422: 'Unprocessable entity.',
    423: 'Locked.',
    424: 'Failed dependency.',
    425: 'Too early.',
    426: 'Upgrade required.',
    428: 'Precondition required.',
    429: 'Too many requests.',
    431: 'Request header fields too large.',
    451: 'Unavailable for legal reasons.',
    500: 'Internal server error.',
    501: 'Not implemented.',
    502: 'Bad gateway.',
    503: 'Service unavailable.',
    504: 'Gateway timeout.',
    505: 'Http version not supported.',
    506: 'Variant also negotiates.',
    507: 'Insufficient storage.',
    508: 'Loop detected.',
    509: 'Bandwidth limit exceeded.',
    510: 'Not extended.',
    511: 'Network authentication required.'
};
exports.CONTINUE = 100;
exports.SWITCHING_PROTOCOLS = 101;
exports.PROCESSING = 102;
exports.EARLY_HINTS = 103;
exports.OK = 200;
exports.CREATED = 201;
exports.ACCEPTED = 202;
exports.NON_AUTHORITATIVE_INFORMATION = 203;
exports.NO_CONTENT = 204;
exports.RESET_CONTENT = 205;
exports.PARTIAL_CONTENT = 206;
exports.MULTI_STATUS = 207;
exports.ALREADY_REPORTED = 208;
exports.IMUSED = 226;
exports.MULTIPLE_CHOICES = 300;
exports.MOVED_PERMANENTLY = 301;
exports.FOUND = 302;
exports.SEE_OTHER = 303;
exports.NOT_MODIFIED = 304;
exports.USE_PROXY = 305;
exports.TEMPORARY_REDIRECT = 307;
exports.PERMANENT_REDIRECT = 308;
exports.BAD_REQUEST = 400;
exports.UNAUTHORIZED = 401;
exports.PAYMENT_REQUIRED = 402;
exports.FORBIDDEN = 403;
exports.NOT_FOUND = 404;
exports.METHOD_NOT_ALLOWED = 405;
exports.NOT_ACCEPTABLE = 406;
exports.PROXY_AUTHENTICATION_REQUIRED = 407;
exports.REQUEST_TIMEOUT = 408;
exports.CONFLICT = 409;
exports.GONE = 410;
exports.LENGTH_REQUIRED = 411;
exports.PRECONDITION_FAILED = 412;
exports.PAYLOAD_TOO_LARGE = 413;
exports.URITOO_LONG = 414;
exports.UNSUPPORTED_MEDIA_TYPE = 415;
exports.RANGE_NOT_SATISFIABLE = 416;
exports.EXPECTATION_FAILED = 417;
exports.IMA_TEAPOT = 418;
exports.MISDIRECTED_REQUEST = 421;
exports.UNPROCESSABLE_ENTITY = 422;
exports.LOCKED = 423;
exports.FAILED_DEPENDENCY = 424;
exports.TOO_EARLY = 425;
exports.UPGRADE_REQUIRED = 426;
exports.PRECONDITION_REQUIRED = 428;
exports.TOO_MANY_REQUESTS = 429;
exports.REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
exports.UNAVAILABLE_FOR_LEGAL_REASONS = 451;
exports.INTERNAL_SERVER_ERROR = 500;
exports.NOT_IMPLEMENTED = 501;
exports.BAD_GATEWAY = 502;
exports.SERVICE_UNAVAILABLE = 503;
exports.GATEWAY_TIMEOUT = 504;
exports.HTTPVERSION_NOT_SUPPORTED = 505;
exports.VARIANT_ALSO_NEGOTIATES = 506;
exports.INSUFFICIENT_STORAGE = 507;
exports.LOOP_DETECTED = 508;
exports.BANDWIDTH_LIMIT_EXCEEDED = 509;
exports.NOT_EXTENDED = 510;
exports.NETWORK_AUTHENTICATION_REQUIRED = 511;
