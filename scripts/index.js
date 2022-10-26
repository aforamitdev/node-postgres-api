"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_pg_migrate_1 = __importDefault(require("node-pg-migrate"));
require("dotenv/config");
const options = {
    direction: 'up',
    dir: 'migrations',
    migrationsTable: 'pgmigrations',
    databaseUrl: process.env.DB_URL,
};
console.log(process.env.DB_URL);
(0, node_pg_migrate_1.default)(options)
    .then((res) => {
    console.log(res);
})
    .then((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map