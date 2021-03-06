"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeError = exports.addAdditionalProperties = void 0;
__exportStar(require("./base"), exports);
__exportStar(require("./errors"), exports);
__exportStar(require("./schemas"), exports);
__exportStar(require("./statuses"), exports);
var utils_1 = require("./utils");
Object.defineProperty(exports, "addAdditionalProperties", { enumerable: true, get: function () { return utils_1.addAdditionalProperties; } });
Object.defineProperty(exports, "serializeError", { enumerable: true, get: function () { return utils_1.serializeError; } });
