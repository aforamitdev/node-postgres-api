"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
require("module-alias/register");
console.log('Application started');
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const express_1 = __importDefault(require("express"));
const container_1 = require("../../container");
const db_1 = require("../../business/database/pg/db");
require("./routes/v1/company");
class Application {
    constructor() {
        this.port = process.env.PORT || 8080;
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const server = new inversify_express_utils_1.InversifyExpressServer(container_1.container);
            server.setConfig((applications) => {
                applications.use(express_1.default.json());
            });
            const app = server.build();
            const databaseContext = container_1.container.get(db_1.DatabaseContext);
            yield databaseContext.connect();
            app.listen(this.port, () => {
                console.log(`server started at http://localhost:${this.port}`);
            });
        });
    }
}
exports.Application = Application;
//# sourceMappingURL=index.js.map