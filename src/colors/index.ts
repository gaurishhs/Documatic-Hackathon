import { Decorations } from "../@types/colors.interfaces";

export default {
    red: (text: string) => `${Decorations.FgRed}${text}${Decorations.Reset}`,
    green: (text: string) => `${Decorations.FgGreen}${text}${Decorations.Reset}`,
    yellow: (text: string) => `${Decorations.FgYellow}${text}${Decorations.Reset}`,
    blue: (text: string) => `${Decorations.FgBlue}${text}${Decorations.Reset}`,
    magenta: (text: string) => `${Decorations.FgMagenta}${text}${Decorations.Reset}`,
    cyan: (text: string) => `${Decorations.FgCyan}${text}${Decorations.Reset}`,
    white: (text: string) => `${Decorations.FgWhite}${text}${Decorations.Reset}`,
    black: (text: string) => `${Decorations.FgBlack}${text}${Decorations.Reset}`,
    bgRed: (text: string) => `${Decorations.BgRed}${text}${Decorations.Reset}`,
    bgGreen: (text: string) => `${Decorations.BgGreen}${text}${Decorations.Reset}`,
    bgYellow: (text: string) => `${Decorations.BgYellow}${text}${Decorations.Reset}`,
    bgBlue: (text: string) => `${Decorations.BgBlue}${text}${Decorations.Reset}`,
    bgMagenta: (text: string) => `${Decorations.BgMagenta}${text}${Decorations.Reset}`,
    bgCyan: (text: string) => `${Decorations.BgCyan}${text}${Decorations.Reset}`,
    bgWhite: (text: string) => `${Decorations.BgWhite}${text}${Decorations.Reset}`,
    bgBlack: (text: string) => `${Decorations.BgBlack}${text}${Decorations.Reset}`,
    underline: (text: string) => `${Decorations.Underline}${text}${Decorations.Reset}`,
    reverse: (text: string) => `${Decorations.Reverse}${text}${Decorations.Reset}`,
    bright: (text: string) => `${Decorations.Bright}${text}${Decorations.Reset}`,
    dim: (text: string) => `${Decorations.Dim}${text}${Decorations.Reset}`,
    hidden: (text: string) => `${Decorations.Hidden}${text}${Decorations.Reset}`,
}