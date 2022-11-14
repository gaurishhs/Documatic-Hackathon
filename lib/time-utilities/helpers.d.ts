import { ParsedMs } from "../@types/utilities.interfaces";
export declare function parseMs(ms: number): ParsedMs;
export declare function parseDate(date: Date): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
