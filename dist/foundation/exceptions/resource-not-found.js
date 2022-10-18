"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const api_exceptions_1 = require("./api.exceptions");
class ResourceNotFoundException extends api_exceptions_1.ApiException {
    constructor(message) {
        super(http_status_codes_1.StatusCodes.NOT_FOUND, 'not_found', `${message}.`);
    }
}
//# sourceMappingURL=resource-not-found.js.map