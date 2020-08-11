"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_postgres_1 = require("ts-postgres");
var client = new ts_postgres_1.Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
});
exports.default = client;
//# sourceMappingURL=database.js.map