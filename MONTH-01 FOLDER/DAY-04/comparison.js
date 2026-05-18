// --------------------------------------------------------
// DAY 04: JAVASCRIPT COMPARISON OPERATORS
// --------------------------------------------------------

console.log("--- JS Comparison Operators Running ---");

let myAge = 20;
let legalAge = 18;
let stringAge = "20";

// 1. Basic Comparisons (Returns true or false)
console.log("Is my age greater than legal age?", myAge > legalAge); // true
console.log("Is my age less than legal age?", myAge < legalAge);    // false

// 2. The Golden JS Rule: == vs ===
// Loose equality (==) only checks the VALUE, ignoring the data type.
console.log("Loose Equality (20 == '20'):", myAge == stringAge);   // true 

// Strict equality (===) checks BOTH the VALUE and the DATA TYPE (Highly recommended!)
console.log("Strict Equality (20 === '20'):", myAge === stringAge); // false (Number vs String)

// 3. Not Equal (!= and !==)
console.log("Strict Not Equal (20 !== '20'):", myAge !== stringAge); // true
