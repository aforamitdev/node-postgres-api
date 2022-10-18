"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = void 0;
class ApiException extends Error {
    constructor(status, code, message) {
        super(message);
        this.name = new.target.name;
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
exports.ApiException = ApiException;
//# sourceMappingURL=api.exceptions.js.map