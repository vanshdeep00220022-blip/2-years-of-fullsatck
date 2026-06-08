const score = 400
console.log(score) 
// Creates a raw, clean number value directly in memory.
// This is the standard, best-practice way to create numbers in JavaScript.

const balance = new Number(100) // new keyword is used to create an instance of a user-defined object type or a built-in object type that has a constructor function.
console.log(balance)

// creates a locked variable named balance. 
// = new Number(100): Makes a number wrapped inside an object

console.log(balance.toString().length); 
// balance: Starts as the number object containing 100.
// .toString(): Converts the number 100 into the text string "100".
// .length: Counts the total characters in "100", which is exactly 3.
// console.log(...): Prints that final count of 3 to the screen.

console.log(balance.toString().length.toString().repeat(4)); 
// Output: "3333"
// we can usee more properties in one codee
console.log(balance.toFixed(2));
//balance: Starts as the value 100.
// .toFixed(2): Forces the number to have exactly 2 decimal places and automatically turns it into a string.
// console.log(...): Prints that formatted text "100.00" to the screen.



const otherNumber = 23.89766
console.log(otherNumber.toPrecision(3))
//Unlike .toFixed(), which counts digits after the decimal point, 
// .toPrecision() counts total significant digits (both before and after the decimal point)
// .otherNumber: Starts as 23.89766.
// .toPrecision(3): Tells JavaScript to format the number to exactly 3 total digits (2, 3, and the first decimal place)
// .Rounding: Since the 4th digit is 9 (which is 5 or higher), JavaScript rounds the previous digit 8 up to 9.


const bigNum = 123.45;
console.log(bigNum.toPrecision(1)); // Output: "1e+2" (which means 100)


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));
//(toLocaleString('en-IN')): Formats the number using the Indian numbering system commas. 10000000 becomes "1,00,00,000".
//toLocaleString(): Apply local formatting


// Country/Region
//Language           Tag	  Output Format.      Example
//United States	   'en-US'	  10,000,000        (Millions)
//Germany	       'de-DE'	  10.000.000        (Uses periods instead)
//France	       'fr-FR'	  10 000 000        (Uses spaces)
//Great Britain	   'en-GB'	  10,000,000




