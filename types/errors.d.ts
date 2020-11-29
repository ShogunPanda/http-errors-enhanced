import { HttpError } from './base';
import { GenericObject } from './utils';
export declare class BadRequestError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class UnauthorizedError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class PaymentRequiredError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class ForbiddenError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class NotFoundError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class MethodNotAllowedError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class NotAcceptableError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class ProxyAuthenticationRequiredError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class RequestTimeoutError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class ConflictError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class GoneError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class LengthRequiredError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class PreconditionFailedError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class PayloadTooLargeError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class URITooLongError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class UnsupportedMediaTypeError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class RangeNotSatisfiableError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class ExpectationFailedError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class ImaTeapotError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class MisdirectedRequestError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class UnprocessableEntityError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class LockedError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class FailedDependencyError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class TooEarlyError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class UpgradeRequiredError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class PreconditionRequiredError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class TooManyRequestsError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class RequestHeaderFieldsTooLargeError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class UnavailableForLegalReasonsError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class InternalServerError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class NotImplementedError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class BadGatewayError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class ServiceUnavailableError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class GatewayTimeoutError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class HTTPVersionNotSupportedError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class VariantAlsoNegotiatesError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class InsufficientStorageError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class LoopDetectedError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class BandwidthLimitExceededError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class NotExtendedError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
export declare class NetworkAuthenticationRequiredError extends HttpError {
    static status: number;
    static error: string;
    static message: string;
    static phrase: string;
    constructor(message?: string | GenericObject, properties?: GenericObject);
}
