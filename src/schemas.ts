export const badRequestSchema = {
  type: 'object',
  $id: '#errors/400',
  description: 'Error returned when the client payload is either invalid, malformed or has logical validation errors.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [400], example: 400 },
    error: { type: 'string', description: 'The error title', enum: ['BadRequest'], example: 'BadRequest' },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'BadRequest.' },
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
}

export const unauthorizedSchema = {
  type: 'object',
  $id: '#errors/401',
  description: 'Error returned when client does not provide any valid authorization.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [401], example: 401 },
    error: { type: 'string', description: 'The error title', enum: ['Unauthorized'], example: 'Unauthorized' },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Unauthorized.' }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}

export const forbiddenSchema = {
  type: 'object',
  $id: '#errors/403',
  description: 'Error returned when client is not authorized to access the requested resource.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [403], example: 403 },
    error: { type: 'string', description: 'The error title', enum: ['Forbidden'], example: 'Forbidden' },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Forbidden.' }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}

export const notFoundSchema = {
  type: 'object',
  $id: '#errors/404',
  description: 'Error returned when the requested resource is not found.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [404], example: 404 },
    error: { type: 'string', description: 'The error title', enum: ['NotFound'], example: 'NotFound' },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'NotFound.' }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}

export const methodNotAllowedSchema = {
  type: 'object',
  $id: '#errors/405',
  description: 'Error returned when the requested method resource is not available.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [405], example: 405 },
    error: { type: 'string', description: 'The error title', enum: ['MethodNotAllowed'], example: 'MethodNotAllowed' },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'MethodNotAllowed.' }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}

export const notAcceptableSchema = {
  type: 'object',
  $id: '#errors/406',
  description: 'Error returned when the server is not able to accept the request.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [406], example: 406 },
    error: { type: 'string', description: 'The error title', enum: ['NotAcceptable'], example: 'NotAcceptable' },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'NotAcceptable.' }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}

export const conflictSchema = {
  type: 'object',
  $id: '#errors/409',
  description: 'Error returned when the requested resource already exists.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [409], example: 409 },
    error: { type: 'string', description: 'The error title', enum: ['Conflict'], example: 'Conflict' },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'Conflict.' }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}

export const unsupportedMediaTypeSchema = {
  type: 'object',
  $id: '#errors/415',
  description: 'Error returned when the server is not able to accept the request media type.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [415], example: 415 },
    error: {
      type: 'string',
      description: 'The error title',
      enum: ['UnsupportedMediaType'],
      example: 'UnsupportedMediaType'
    },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'UnsupportedMediaType.' }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}

export const internalServerErrorSchema = {
  type: 'object',
  $id: '#errors/500',
  description: 'Error returned when a unexpected error was thrown by the server.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [500], example: 500 },
    error: {
      type: 'string',
      description: 'The error title',
      enum: ['InternalServerError'],
      example: 'InternalServerError'
    },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'InternalServerError.' },
    stack: { type: 'array', items: { type: 'string', description: 'A call in the error stack.', pattern: '.+' } },
    errors: { type: 'object', description: 'A server error.', additionalProperties: true },
    failedValidations: {
      type: 'object',
      description: 'The validation errors in the server response.',
      additionalProperties: true
    }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}

export const badGatewaySchema = {
  type: 'object',
  $id: '#errors/502',
  description: 'Error returned when a unexpected error was thrown by a upstream server.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [502], example: 502 },
    error: { type: 'string', description: 'The error title', enum: ['BadGateway'], example: 'BadGateway' },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'BadGateway.' }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}

export const gatewayTimeoutSchema = {
  type: 'object',
  $id: '#errors/504',
  description: 'Error returned when a upstream server timed out.',
  properties: {
    statusCode: { type: 'number', description: 'The error code', enum: [504], example: 504 },
    error: { type: 'string', description: 'The error title', enum: ['GatewayTimeout'], example: 'GatewayTimeout' },
    message: { type: 'string', description: 'The error message', pattern: '.+', example: 'GatewayTimeout.' }
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false
}
