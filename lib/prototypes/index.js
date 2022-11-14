"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
express_1.default.response.reply = function (code, message) {
    this.status(code).send(message);
};
//# sourceMappingURL=index.js.map