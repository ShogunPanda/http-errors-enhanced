const processRoot = process.cwd();
export function pascalCase(original) {
    const rest = original
        .slice(1)
        .toLowerCase()
        .replace(/(\s+[a-z])/g, (_, char) => char.toUpperCase().trim());
    return original.slice(0, 1).toUpperCase() + rest;
}
export function upperFirst(original) {
    return original.slice(0, 1).toUpperCase() + original.slice(1);
}
export function lowerFirst(original) {
    return original.slice(0, 1).toLowerCase() + original.slice(1);
}
export function addAdditionalProperties(target, source) {
    for (const v in source) {
        if (v in target) {
            // Do not allow any overwriting here
            continue;
        }
        target[v] = source[v];
    }
}
export function serializeError(error, omitStack = false) {
    var _a, _b, _c;
    const tag = (_b = (_a = error.code) !== null && _a !== void 0 ? _a : error.name) !== null && _b !== void 0 ? _b : 'Error';
    const serialized = {
        message: `[${tag}] ${error.message}`
    };
    if (!omitStack) {
        serialized.stack = ((_c = error.stack) !== null && _c !== void 0 ? _c : '')
            .split('\n')
            .slice(1)
            .map((s) => s.trim().replace(/^at /, '').replace(processRoot, '$ROOT'));
    }
    addAdditionalProperties(serialized, error);
    return serialized;
}
