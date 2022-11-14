"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
const helpers_1 = require("./helpers");
class Duration {
    constructor(ms) {
        this.ms = ms;
        this.ms = ms;
        this.date = new Date(Date.now() + this.ms);
    }
    toString() {
        return this.date.toString();
    }
    toLocaleString(locale) {
        return this.date.toLocaleString(locale);
    }
    static fromNow(duration) {
        return new Duration(Date.now() + Duration.fromString(duration).ms);
    }
    toISOString() {
        return this.date.toISOString();
    }
    toJSON() {
        return (0, helpers_1.parseMs)(this.ms);
    }
    isAfter(date) {
        return this.date > date;
    }
    isBefore(date) {
        return this.date < date;
    }
    isSame(date) {
        return this.date === date;
    }
    add(duration) {
        this.ms += duration.ms;
        return this;
    }
    subtract(duration) {
        this.ms -= duration.ms;
        return this;
    }
    get seconds() {
        return Math.floor(this.ms / 1000);
    }
    get minutes() {
        return Math.floor(this.ms / 1000 / 60);
    }
    get hours() {
        return Math.floor(this.ms / 1000 / 60 / 60);
    }
    get days() {
        return Math.floor(this.ms / 1000 / 60 / 60 / 24);
    }
    get months() {
        return Math.floor(this.ms / 1000 / 60 / 60 / 24 / (365 / 12));
    }
    get years() {
        return Math.floor(this.ms / 1000 / 60 / 60 / 24 / 365);
    }
    static fromSeconds(seconds) {
        return new Duration(seconds * 1000);
    }
    static fromMinutes(minutes) {
        return new Duration(minutes * 1000 * 60);
    }
    static fromHours(hours) {
        return new Duration(hours * 1000 * 60 * 60);
    }
    static fromDays(days) {
        return new Duration(days * 1000 * 60 * 60 * 24);
    }
    static fromMonths(months) {
        return new Duration(months * 1000 * 60 * 60 * 24 * (365 / 12));
    }
    static fromYears(years) {
        return new Duration(years * 1000 * 60 * 60 * 24 * 365);
    }
    static fromString(duration) {
        const matches = duration.match(/(\d+)([a-z]+)/g);
        if (!matches)
            return new Duration(0);
        let ms = 0;
        for (const match of matches) {
            const iterator = match.match(/(\d+)([a-z]+)/);
            if (!iterator)
                continue;
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
exports.Duration = Duration;
//# sourceMappingURL=index.js.map