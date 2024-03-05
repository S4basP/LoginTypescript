"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.pool = (0, promise_1.createPool)({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    port: 3306,
    database: 'users'
});
/**
 *     host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.BD_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE

**/ 
