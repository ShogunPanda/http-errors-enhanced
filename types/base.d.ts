import { GenericObject } from './utils';
export declare class HttpError extends Error {
    static standardErrorPrefix: string;
    status: number;
    statusCode: number;
    statusClass: number;
    code: string;
    error: string;
    errorPhrase: string;
    expose: boolean;
    headers: {
        [key: string]: string;
    };
    isClientError: boolean;
    isServerError: boolean;
    [key: string]: any;
    constructor(status: number | string, message?: string | GenericObject, properties?: GenericObject);
    serialize(extended?: boolean, omitStack?: boolean): object;
}
export declare function createError(status: number | string, message?: string | GenericObject, properties?: GenericObject): HttpError;
export declare function isHttpError(error: any): boolean;
