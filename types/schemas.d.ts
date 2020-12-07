export declare const badRequestSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        errors: {
            type: string;
            items: {
                type: string;
                description: string;
                additionalProperties: boolean;
            };
        };
        failedValidations: {
            type: string;
            description: string;
            additionalProperties: boolean;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const unauthorizedSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const forbiddenSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const notFoundSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const methodNotAllowedSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const notAcceptableSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const conflictSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const unsupportedMediaTypeSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const internalServerErrorSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        stack: {
            type: string;
            items: {
                type: string;
                description: string;
                pattern: string;
            };
        };
        errors: {
            type: string;
            items: {
                type: string;
                description: string;
                additionalProperties: boolean;
            };
        };
        failedValidations: {
            type: string;
            description: string;
            additionalProperties: boolean;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const badGatewaySchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        errors: {
            type: string;
            items: {
                type: string;
                description: string;
                additionalProperties: boolean;
            };
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const gatewayTimeoutSchema: {
    type: string;
    $id: string;
    description: string;
    properties: {
        statusCode: {
            type: string;
            description: string;
            enum: number[];
            example: number;
        };
        error: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
        message: {
            type: string;
            description: string;
            pattern: string;
            example: string;
        };
        code: {
            type: string;
            description: string;
            enum: string[];
            example: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
