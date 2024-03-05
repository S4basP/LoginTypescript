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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const db_1 = require("../database/db");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = {
        name: req.body.name,
        brithdate: req.body.brithdate,
        email: req.body.email,
        pass: req.body.pass
    };
    try {
        yield db_1.pool.query('insert into user (name, brithdate, email, pass )value ( ?, ?, ?, ?);', [user.name, user.brithdate, user.email, user.pass]);
        res.status(200).json({ message: "Added User" });
    }
    catch (error) {
        res.status(500).json({ message: `Can´t registrer user ${error}` });
    }
});
exports.createUser = createUser;
