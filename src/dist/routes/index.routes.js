"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllersUsers_1 = require("../controllers/controllersUsers");
const routers = (0, express_1.Router)();
routers.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});
routers.post('/createUser', controllersUsers_1.createUser);
exports.default = routers;
