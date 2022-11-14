"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64Decode = exports.base64Encode = exports.hmac = exports.sha512 = exports.sha256 = exports.sha1 = exports.md5 = exports.hash = void 0;
const crypto_1 = __importDefault(require("crypto"));
function hash(algorithm, data, outputFormat) {
    let sum = crypto_1.default.createHash(algorithm);
    let isBuffer = Buffer.isBuffer(data);
    if (!isBuffer && typeof data === 'object') {
        data = JSON.stringify(data);
    }
    sum.update(data, isBuffer ? 'binary' : 'utf8');
    return sum.digest(outputFormat || 'hex');
}
exports.hash = hash;
function md5(data, outputFormat) {
    return hash('md5', data, outputFormat);
}
exports.md5 = md5;
function sha1(data, outputFormat) {
    return hash('sha1', data, outputFormat);
}
exports.sha1 = sha1;
function sha256(data, outputFormat) {
    return hash('sha256', data, outputFormat);
}
exports.sha256 = sha256;
function sha512(data, outputFormat) {
    return hash('sha512', data, outputFormat);
}
exports.sha512 = sha512;
function hmac(algorithm, key, data, outputFormat) {
    let hmac = crypto_1.default.createHmac(algorithm, key);
    let isBuffer = Buffer.isBuffer(data);
    if (!isBuffer && typeof data === 'object') {
        data = JSON.stringify(data);
    }
    hmac.update(data, isBuffer ? 'binary' : 'utf8');
    return hmac.digest(outputFormat || 'hex');
}
exports.hmac = hmac;
function base64Encode(data) {
    return Buffer.from(data).toString('base64');
}
exports.base64Encode = base64Encode;
function base64Decode(data) {
    return Buffer.from(data, 'base64').toString('utf8');
}
exports.base64Decode = base64Decode;
//# sourceMappingURL=index.js.map