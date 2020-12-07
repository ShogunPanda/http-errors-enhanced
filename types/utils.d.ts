/// <reference types="node" />
export interface GenericObject {
    [key: string]: any;
}
export declare type NodeError = NodeJS.ErrnoException;
export declare function pascalCase(original: string): string;
export declare function upperFirst(original: string): string;
export declare function lowerFirst(original: string): string;
export declare function addAdditionalProperties(target: GenericObject, source: GenericObject): void;
export declare function serializeError(error: Error, includeStack?: boolean): GenericObject;
