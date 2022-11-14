"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_interfaces_1 = require("../@types/colors.interfaces");
exports.default = {
    red: (text) => `${colors_interfaces_1.Decorations.FgRed}${text}${colors_interfaces_1.Decorations.Reset}`,
    green: (text) => `${colors_interfaces_1.Decorations.FgGreen}${text}${colors_interfaces_1.Decorations.Reset}`,
    yellow: (text) => `${colors_interfaces_1.Decorations.FgYellow}${text}${colors_interfaces_1.Decorations.Reset}`,
    blue: (text) => `${colors_interfaces_1.Decorations.FgBlue}${text}${colors_interfaces_1.Decorations.Reset}`,
    magenta: (text) => `${colors_interfaces_1.Decorations.FgMagenta}${text}${colors_interfaces_1.Decorations.Reset}`,
    cyan: (text) => `${colors_interfaces_1.Decorations.FgCyan}${text}${colors_interfaces_1.Decorations.Reset}`,
    white: (text) => `${colors_interfaces_1.Decorations.FgWhite}${text}${colors_interfaces_1.Decorations.Reset}`,
    black: (text) => `${colors_interfaces_1.Decorations.FgBlack}${text}${colors_interfaces_1.Decorations.Reset}`,
    bgRed: (text) => `${colors_interfaces_1.Decorations.BgRed}${text}${colors_interfaces_1.Decorations.Reset}`,
    bgGreen: (text) => `${colors_interfaces_1.Decorations.BgGreen}${text}${colors_interfaces_1.Decorations.Reset}`,
    bgYellow: (text) => `${colors_interfaces_1.Decorations.BgYellow}${text}${colors_interfaces_1.Decorations.Reset}`,
    bgBlue: (text) => `${colors_interfaces_1.Decorations.BgBlue}${text}${colors_interfaces_1.Decorations.Reset}`,
    bgMagenta: (text) => `${colors_interfaces_1.Decorations.BgMagenta}${text}${colors_interfaces_1.Decorations.Reset}`,
    bgCyan: (text) => `${colors_interfaces_1.Decorations.BgCyan}${text}${colors_interfaces_1.Decorations.Reset}`,
    bgWhite: (text) => `${colors_interfaces_1.Decorations.BgWhite}${text}${colors_interfaces_1.Decorations.Reset}`,
    bgBlack: (text) => `${colors_interfaces_1.Decorations.BgBlack}${text}${colors_interfaces_1.Decorations.Reset}`,
    underline: (text) => `${colors_interfaces_1.Decorations.Underline}${text}${colors_interfaces_1.Decorations.Reset}`,
    reverse: (text) => `${colors_interfaces_1.Decorations.Reverse}${text}${colors_interfaces_1.Decorations.Reset}`,
    bright: (text) => `${colors_interfaces_1.Decorations.Bright}${text}${colors_interfaces_1.Decorations.Reset}`,
    dim: (text) => `${colors_interfaces_1.Decorations.Dim}${text}${colors_interfaces_1.Decorations.Reset}`,
    hidden: (text) => `${colors_interfaces_1.Decorations.Hidden}${text}${colors_interfaces_1.Decorations.Reset}`,
};
//# sourceMappingURL=index.js.map