import type { ParsedMs } from "../@types/utilities.interfaces";
import { parseMs } from "./helpers";

export class Duration {
    constructor(protected ms: number) {
        this.ms = ms;
    }
    /**
     * Converts the duration to a date object
     * @returns {Date} The date object
     */
    public toDate(): Date {
        return new Date(Date.now() + this.ms);
    }
    /**
     * Converts the duration to a string
     * @returns {string} The string
    */
    public toString(): string {
        return this.toDate().toString()
    }

    /**
     * Converts the duration to a locale string
     * @returns {string} The string
     * @see toString
     */
    public toLocaleString(locale: string): string {
        return this.toDate().toLocaleString(locale);
    }

    /**
     * Create the class constructor from the current time
     * @param {string} duration The duration string
     * @returns {Duration} The duration
     */
    public static fromNow(duration: string): Duration {
        return new Duration(Date.now() + Duration.fromString(duration).ms);
    }

    /**
     * Get the duration to a ISO string
     * @returns {string} The ISO string
    */
    public toISOString(): string {
        return this.toDate().toISOString();
    }

    /**
     * Get the duration to a JSON object
     * @returns {ParsedMs} The JSON object
     */
    public toJSON(): ParsedMs {
        return parseMs(this.ms);
    }

    /**
     * Check if the provided date is after the current date
     * @param date The date
     * @returns {boolean} If the date is before
     */
    public isAfter(date: Date): boolean {
        return this.toDate() > date;
    }

    /**
     * Check if the provided date is before the current date
     * @param {Date} date The date
     * @returns {boolean} If the date is before
    */
    public isBefore(date: Date): boolean {
        return this.toDate() < date;
    }

    /**
     * Check if the provided date is same as the current date
     * @param {Date} date The date
     * @returns {boolean} If the date is same
    */
    public isSame(date: Date): boolean {
        return this.toDate() === date;
    }

    /**
     * Add a duration to the current duration
     * @param {Duration} duration The duration to add
     * @returns {Duration} The duration
    */
    public add(duration: Duration): Duration {
        this.ms += duration.ms;
        return this;
    }

    /**
     * Subtract a duration from the current duration
     * @param {Duration} duration The duration to subtract
     * @returns {Duration} The duration
    */
    public subtract(duration: Duration): Duration {
        this.ms -= duration.ms;
        return this;
    }

    /**
     * Seconds left in the duration
     * @returns {number} The seconds
     */
    public get seconds(): number {
        return Math.floor(this.ms / 1000);
    }

    /**
     * Minutes left in the duration
     * @returns {number} The minutes
     */
    public get minutes(): number {
        return Math.floor(this.ms / 1000 / 60);
    }

    /**
     * Hours left in the duration
     * @returns {number} The hours
     */
    public get hours(): number {
        return Math.floor(this.ms / 1000 / 60 / 60);
    }

    /**
     * Days left in the duration
     * @returns {number} The days
     */
    public get days(): number {
        return Math.floor(this.ms / 1000 / 60 / 60 / 24);
    }

    /**
     * Months left in the duration
     * @returns {number} The months
     */
    public get months(): number {
        return Math.floor(this.ms / 1000 / 60 / 60 / 24 / (365 / 12));
    }
    /**
     * Years left in the duration
     * @returns {number} The years
     */
    public get years(): number {
        return Math.floor(this.ms / 1000 / 60 / 60 / 24 / 365);
    }

    /**
     * Create the class constructor from seconds
     * @param seconds The seconds
     * @returns {Duration} The duration
     */
    public static fromSeconds(seconds: number): Duration {
        return new Duration(seconds * 1000);
    }

    /**
     * Create the class constructor from minutes
     * @param minutes The minutes
     * @returns {Duration} The duration
     */
    public static fromMinutes(minutes: number): Duration {
        return new Duration(minutes * 1000 * 60);
    }

    /**
     * Create the class constructor from hours
     * @param hours The hours
     * @returns {Duration} The duration
     */
    public static fromHours(hours: number): Duration {
        return new Duration(hours * 1000 * 60 * 60);
    }

    /**
     * Create the class constructor from days
     * @param days The days
     * @returns {Duration} The duration
     */
    public static fromDays(days: number): Duration {
        return new Duration(days * 1000 * 60 * 60 * 24);
    }
    /**
     * Create the class constructor from months
     * @param {Date} months The months
     * @returns {Duration} The duration
    */
    public static fromMonths(months: number): Duration {
        return new Duration(months * 1000 * 60 * 60 * 24 * (365 / 12));
    }

    /**
     * Create the class constructor from years rather than milliseconds
     * @param years The years
     * @returns {Duration} The duration
     */
    public static fromYears(years: number): Duration {
        return new Duration(years * 1000 * 60 * 60 * 24 * 365);
    }

    /**
     * Create the class constructor from a string
     * @param {string} duration The duration string
     * @returns {Duration} The duration
    */
    public static fromString(duration: string): Duration {
        const matches = duration.match(/(\d+)([a-z]+)/g);
        if (!matches) return new Duration(0);
        let ms = 0;
        for (const match of matches) {
            const iterator = match.match(/(\d+)([a-z]+)/);
            if (!iterator) continue;
            const [, value, unit] = iterator;
            switch (unit) {
                case "s":
                    ms += Duration.fromSeconds(Number(value)).ms;
                    break;
                case "m":
                    ms += Duration.fromMinutes(Number(value)).ms;
                    break;
                case "h":
                    ms += Duration.fromHours(Number(value)).ms;
                    break;
                case "d":
                    ms += Duration.fromDays(Number(value)).ms;
                    break;
                case "M":
                    ms += Duration.fromMonths(Number(value)).ms;
                    break;
                case "y":
                    ms += Duration.fromYears(Number(value)).ms;
                    break;
            }
        }
        return new Duration(ms);
    }

}
