import validateWord from "./utils.js";
var myNumber = 12;
var myFloat = 3.1416;
let myString = "HelloWorld";

// Different methods
console.log(`${myString.length}`);
console.log(`${myString.toLowerCase()}`);
console.log(`${myString.indexOf("o")}`);
console.log(`${myString.toUpperCase()}`);

validateWord(myString, "World");

const mySubstring = myString.substring(5, myString.indexOf("r"));
console.log(mySubstring);

const newString = myString.padStart(50, ".");
console.log(newString);

const newString2 = myString.padEnd(50, ".");
console.log(newString2);