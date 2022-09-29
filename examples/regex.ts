import { Regexes } from "../src/regexes";

console.log("Valid Email: ", new RegExp(Regexes.Email).test("someone@email.com"));
console.log("Strong Password: ", new RegExp(Regexes.Password).test("Password123"));
// More than 35 regexes except these 2, Check them out!