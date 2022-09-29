import { Duration } from "../../src";

// Create a duration class for after 1 hour
const duration = new Duration(1000);

console.log("JSON: ", duration.toJSON());
console.log("String: ", duration.toString());
console.log("Seconds: ", duration.seconds);
console.log("Minutes: ", duration.minutes);
console.log("Hours: ", duration.hours);
console.log("Days: ", duration.days);
console.log("Months: ", duration.months);
console.log("Years: ", duration.years);
console.log("In zh-CN: ", duration.toLocaleString("zh-CN"));

// More methods exist check them out :)