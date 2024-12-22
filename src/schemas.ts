export const badRequestSchema = {
  type: 'object',
  $id: 'http-error-400',
  description:
    'Error returned when the client payload is either invalid, malformed or has logical validation errors.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [400],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Bad Request'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Bad Request'],
    },
    errors: {
      type: 'array',
      items: {
        type: 'object',
        description: 'A client error detected by the server.',
        additionalProperties: true,
      },
    },
    failedValidations: {
      type: 'object',
      description: 'The validation errors in the client payload.',
      additionalProperties: true,
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const unauthorizedSchema = {
  type: 'object',
  $id: 'http-error-401',
  description:
    'Error returned when client does not provide any valid authorization.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [401],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Unauthorized'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Unauthorized'],
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const forbiddenSchema = {
  type: 'object',
  $id: 'http-error-403',
  description:
    'Error returned when client is not authorized to access the requested resource.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [403],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Forbidden'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Forbidden'],
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const notFoundSchema = {
  type: 'object',
  $id: 'http-error-404',
  description: 'Error returned when the requested resource is not found.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [404],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Not Found'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Not Found'],
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const methodNotAllowedSchema = {
  type: 'object',
  $id: 'http-error-405',
  description:
    'Error returned when the requested method resource is not available.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [405],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Method Not Allowed'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Method Not Allowed'],
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const notAcceptableSchema = {
  type: 'object',
  $id: 'http-error-406',
  description:
    'Error returned when the server is not able to accept the request.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [406],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Not Acceptable'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Not Acceptable'],
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const conflictSchema = {
  type: 'object',
  $id: 'http-error-409',
  description: 'Error returned when the requested resource already exists.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [409],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Conflict'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: { type: 'string', description: 'The error code', enum: ['Conflict'] },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const unsupportedMediaTypeSchema = {
  type: 'object',
  $id: 'http-error-415',
  description:
    'Error returned when the server is not able to accept the request media type.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [415],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Unsupported Media Type'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Unsupported Media Type'],
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const internalServerErrorSchema = {
  type: 'object',
  $id: 'http-error-500',
  description:
    'Error returned when a unexpected error was thrown by the server.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [500],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Internal Server Error'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Internal Server Error'],
    },
    stack: {
      type: 'array',
      items: {
        type: 'string',
        description: 'A call in the error stack.',
        pattern: '.+',
      },
    },
    errors: {
      type: 'array',
      items: {
        type: 'object',
        description: 'A server error.',
        additionalProperties: true,
      },
    },
    failedValidations: {
      type: 'object',
      description: 'The validation errors in the server response.',
      additionalProperties: true,
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const badGatewaySchema = {
  type: 'object',
  $id: 'http-error-502',
  description:
    'Error returned when a unexpected error was thrown by a upstream server.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [502],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Bad Gateway'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Bad Gateway'],
    },
    errors: {
      type: 'array',
      items: {
        type: 'object',
        description: 'A upstream server error.',
        additionalProperties: true,
      },
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}

export const gatewayTimeoutSchema = {
  type: 'object',
  $id: 'http-error-504',
  description: 'Error returned when a upstream server timed out.',
  properties: {
    statusCode: {
      type: 'number',
      description: 'The error HTTP status code',
      enum: [504],
    },
    error: {
      type: 'string',
      description: 'The error HTTP status description',
      enum: ['Gateway Timeout'],
    },
    message: {
      type: 'string',
      description: 'The error message',
      pattern: '.+',
    },
    code: {
      type: 'string',
      description: 'The error code',
      enum: ['Gateway Timeout'],
    },
  },
  required: ['statusCode', 'error', 'message'],
  additionalProperties: false,
}
