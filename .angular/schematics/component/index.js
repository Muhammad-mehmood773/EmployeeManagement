"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.component = component;
var schematics_1 = require("@angular-devkit/schematics");
var core_1 = require("@angular-devkit/core");
function component(_options) {
    return function (_tree, _context) {
        var sourceTemplates = (0, schematics_1.url)('./files');
        var sourceParametrizedTemplates = (0, schematics_1.apply)(sourceTemplates, [
            (0, schematics_1.template)(__assign(__assign({}, _options), core_1.strings)),
            (0, schematics_1.move)("src/app/".concat(_options.name))
        ]);
        return (0, schematics_1.mergeWith)(sourceParametrizedTemplates);
    };
}
