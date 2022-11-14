import type { ParsedMs } from "../@types/utilities.interfaces";
export declare class Duration {
    protected ms: number;
    date: Date;
    constructor(ms: number);
    toString(): string;
    toLocaleString(locale: string): string;
    static fromNow(duration: string): Duration;
    toISOString(): string;
    toJSON(): ParsedMs;
    isAfter(date: Date): boolean;
    isBefore(date: Date): boolean;
    isSame(date: Date): boolean;
    add(duration: Duration): Duration;
    subtract(duration: Duration): Duration;
    get seconds(): number;
    get minutes(): number;
    get hours(): number;
    get days(): number;
    get months(): number;
    get years(): number;
    static fromSeconds(seconds: number): Duration;
    static fromMinutes(minutes: number): Duration;
    static fromHours(hours: number): Duration;
    static fromDays(days: number): Duration;
    static fromMonths(months: number): Duration;
    static fromYears(years: number): Duration;
    static fromString(duration: string): Duration;
}
