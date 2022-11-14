"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.getRandomString = exports.getRandomInt = exports.getRandomItemFromArray = void 0;
function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.getRandomItemFromArray = getRandomItemFromArray;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomInt = getRandomInt;
function getRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.getRandomString = getRandomString;
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;
//# sourceMappingURL=basic.js.map