"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = exports.parseMs = void 0;
const utilities_interfaces_1 = require("../@types/utilities.interfaces");
function parseMs(ms) {
    return {
        days: Math.floor(ms / utilities_interfaces_1.Time.Day),
        hours: Math.floor((ms % utilities_interfaces_1.Time.Day) / utilities_interfaces_1.Time.Hour),
        minutes: Math.floor((ms % utilities_interfaces_1.Time.Hour) / utilities_interfaces_1.Time.Minute),
        seconds: Math.floor((ms % utilities_interfaces_1.Time.Minute) / utilities_interfaces_1.Time.Second),
    };
}
exports.parseMs = parseMs;
function parseDate(date) {
    return {
        days: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}
exports.parseDate = parseDate;
//# sourceMappingURL=helpers.js.map