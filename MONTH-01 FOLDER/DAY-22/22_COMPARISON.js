console.log (2 > 1);            // true
console.log (2 >= 1);           // true
console.log (2 < 1);            // false
console.log (2 <= 1);           // false
console.log (2 == 1);           // false
console.log (2 != 1);           // true


console.log ("2" > 1 );          // true, string "2" is converted to number 2
console.log ("01" > 2 );         // false, string "01" is converted to number 1console.log (null > 0);           // false, null is converted to 0
console.log (null == 0);         // false, null is only equal to undefined
console.log (null >= 0);         // true, null is converted to 0



// the reason is that an equality check (==) AND COMPARISON (>, <, >=, <=) work differently.
//COMPARISON converts null to a number treated it as 0 thats why (3) null>=0 is true and null > 0 is false
// When we compare values of different types, JavaScript converts the string to a number and then compares them. 
// But when we check for equality, JavaScript does not convert the string to a number, and instead considers them as different types, resulting in false.



console.log(undefined > 0);     // false, undefined is converted to NaN
console.log(undefined == 0);    // false, undefined is only equal to null
console.log(undefined >= 0);    // false, undefined is converted to NaN
console.log(undefined < 0);     // false, undefined is converted to NaN
console.log(undefined <= 0);    // false, undefined is converted to NaN


console.log (undefined > null);     // false, undefined is converted to NaN

console.log ("2" === 2);          // false, strict equality check
// "===" use strict equality check, which does not perform type conversion.
// So, when we compare "2" (a string) with 2 (a number), they are considered different types and the result is false.