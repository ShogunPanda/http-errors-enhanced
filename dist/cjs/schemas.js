"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayTimeoutSchema = exports.badGatewaySchema = exports.internalServerErrorSchema = exports.unsupportedMediaTypeSchema = exports.conflictSchema = exports.notAcceptableSchema = exports.methodNotAllowedSchema = exports.notFoundSchema = exports.forbiddenSchema = exports.unauthorizedSchema = exports.badRequestSchema = void 0;
exports.badRequestSchema = {
    type: 'object',
    $id: '#http-error-400',
    description: 'Error returned when the client payload is either invalid, malformed or has logical validation errors.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [400], example: 400 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Bad Request'],
            example: 'Bad Request'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Bad Request.' },
        code: { type: 'string', description: 'The error code', enum: ['Bad Request'], example: 'Bad Request' },
        errors: {
            type: 'array',
            items: { type: 'object', description: 'A client error detected by the server.', additionalProperties: true }
        },
        failedValidations: {
            type: 'object',
            description: 'The validation errors in the client payload.',
            additionalProperties: true
        }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.unauthorizedSchema = {
    type: 'object',
    $id: '#http-error-401',
    description: 'Error returned when client does not provide any valid authorization.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [401], example: 401 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Unauthorized'],
            example: 'Unauthorized'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Unauthorized.' },
        code: { type: 'string', description: 'The error code', enum: ['Unauthorized'], example: 'Unauthorized' }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.forbiddenSchema = {
    type: 'object',
    $id: '#http-error-403',
    description: 'Error returned when client is not authorized to access the requested resource.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [403], example: 403 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Forbidden'],
            example: 'Forbidden'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Forbidden.' },
        code: { type: 'string', description: 'The error code', enum: ['Forbidden'], example: 'Forbidden' }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.notFoundSchema = {
    type: 'object',
    $id: '#http-error-404',
    description: 'Error returned when the requested resource is not found.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [404], example: 404 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Not Found'],
            example: 'Not Found'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Not Found.' },
        code: { type: 'string', description: 'The error code', enum: ['Not Found'], example: 'Not Found' }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.methodNotAllowedSchema = {
    type: 'object',
    $id: '#http-error-405',
    description: 'Error returned when the requested method resource is not available.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [405], example: 405 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Method Not Allowed'],
            example: 'Method Not Allowed'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Method Not Allowed.' },
        code: { type: 'string', description: 'The error code', enum: ['Method Not Allowed'], example: 'Method Not Allowed' }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.notAcceptableSchema = {
    type: 'object',
    $id: '#http-error-406',
    description: 'Error returned when the server is not able to accept the request.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [406], example: 406 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Not Acceptable'],
            example: 'Not Acceptable'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Not Acceptable.' },
        code: { type: 'string', description: 'The error code', enum: ['Not Acceptable'], example: 'Not Acceptable' }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.conflictSchema = {
    type: 'object',
    $id: '#http-error-409',
    description: 'Error returned when the requested resource already exists.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [409], example: 409 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Conflict'],
            example: 'Conflict'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Conflict.' },
        code: { type: 'string', description: 'The error code', enum: ['Conflict'], example: 'Conflict' }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.unsupportedMediaTypeSchema = {
    type: 'object',
    $id: '#http-error-415',
    description: 'Error returned when the server is not able to accept the request media type.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [415], example: 415 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Unsupported Media Type'],
            example: 'Unsupported Media Type'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Unsupported Media Type.' },
        code: {
            type: 'string',
            description: 'The error code',
            enum: ['Unsupported Media Type'],
            example: 'Unsupported Media Type'
        }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.internalServerErrorSchema = {
    type: 'object',
    $id: '#http-error-500',
    description: 'Error returned when a unexpected error was thrown by the server.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [500], example: 500 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Internal Server Error'],
            example: 'Internal Server Error'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Internal Server Error.' },
        code: {
            type: 'string',
            description: 'The error code',
            enum: ['Internal Server Error'],
            example: 'Internal Server Error'
        },
        stack: { type: 'array', items: { type: 'string', description: 'A call in the error stack.', pattern: '.+' } },
        errors: { type: 'array', items: { type: 'object', description: 'A server error.', additionalProperties: true } },
        failedValidations: {
            type: 'object',
            description: 'The validation errors in the server response.',
            additionalProperties: true
        }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.badGatewaySchema = {
    type: 'object',
    $id: '#http-error-502',
    description: 'Error returned when a unexpected error was thrown by a upstream server.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [502], example: 502 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Bad Gateway'],
            example: 'Bad Gateway'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Bad Gateway.' },
        code: { type: 'string', description: 'The error code', enum: ['Bad Gateway'], example: 'Bad Gateway' },
        errors: {
            type: 'array',
            items: { type: 'object', description: 'A upstream server error.', additionalProperties: true }
        }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
exports.gatewayTimeoutSchema = {
    type: 'object',
    $id: '#http-error-504',
    description: 'Error returned when a upstream server timed out.',
    properties: {
        statusCode: { type: 'number', description: 'The error HTTP status code', enum: [504], example: 504 },
        error: {
            type: 'string',
            description: 'The error HTTP status description',
            enum: ['Gateway Timeout'],
            example: 'Gateway Timeout'
        },
        message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Gateway Timeout.' },
        code: { type: 'string', description: 'The error code', enum: ['Gateway Timeout'], example: 'Gateway Timeout' }
    },
    required: ['statusCode', 'error', 'message'],
    additionalProperties: false
};
