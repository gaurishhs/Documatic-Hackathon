export declare enum Time {
    Millisecond = 1,
    Second = 1000,
    Minute = 60000,
    Hour = 3600000,
    Day = 86400000,
    Month = 2628000000,
    Year = 31536000000
}
export interface ParsedMs {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
