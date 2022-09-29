import { ParsedMs, Time } from "../@types/utilities.interfaces";

export function parseMs(ms: number): ParsedMs {
    return {
        days: Math.floor(ms / Time.Day),
        hours: Math.floor((ms % Time.Day) / Time.Hour),
        minutes: Math.floor((ms % Time.Hour) / Time.Minute),
        seconds: Math.floor((ms % Time.Minute) / Time.Second),
    }
}

export function parseDate(date: Date) {
    return {
        days: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}

