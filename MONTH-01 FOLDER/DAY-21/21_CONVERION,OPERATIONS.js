let score = 40
let scoreValue = "33"
let isLoggedIn = true
let outsideTemp = null
let userEmail = undefined
let score2 = "33abc"


console.log(typeof (score)); // number
console.log(typeof score);   // number

console.log(typeof (scoreValue)); // string
console.log(typeof scoreValue);   // string

console.log(typeof (isLoggedIn)); // boolean
console.log(typeof isLoggedIn);   // boolean

console.log(typeof (outsideTemp)); // object
console.log(typeof outsideTemp);   // object

console.log(typeof (userEmail)); // undefined
console.log(typeof userEmail);   // undefined

console.log(typeof (score2)); // string
console.log(typeof score2);   // string


let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber);        // 40

let valueInNumber2 = Number(scoreValue);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2);        // 40

let valueInNumber3 = Number(isLoggedIn);
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3);        // 1 (true is converted to 1 and false is converted to 0)

let valueInNumber4 = Number(outsideTemp);
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4);        // 0 (null is converted to 0)

let valueInNumber5 = Number(userEmail);
console.log(typeof valueInNumber5); // number
console.log(valueInNumber5);        // NaN (undefined is converted to NaN) 

let valueInNumber6 = Number(score2);
console.log(typeof valueInNumber6); // number
console.log(valueInNumber6);        // NaN (if the string contains non-numeric characters, it will be converted to NaN)



// "33" => 33
// "33abc" => NaN (NOT A NUMBER)
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn2 = 1

let BolleanisLoggedIn = Boolean(isLoggedIn2);
console.log(typeof BolleanisLoggedIn); // boolean
console.log(BolleanisLoggedIn);        // true (1 is converted to true and 0 is converted to false)

//1 => true
//0 => false
// "" => false because empty string is considered as falsy value
// "vansh" => true because non-empty string is considered as truthy value


let somenumber = 33

let stringNumber = String(somenumber);
console.log(stringNumber);        // "33"
console.log(typeof stringNumber); // string



// ************************OPERATIONS************************

let value = 3
let negValue = -value
console.log(negValue);                  // -3

let value2 = 3
let negvalue2 = -value2
console.log(negvalue2);                 // -3


// console.log(2+2);           // 4
// console.log(2-2);           // 0
// console.log(2*2);           // 4
// console.log(2**2);          // 4 (exponentiation operator, 2 raised to the power of 2)
// console.log(2/2);           // 1 (division operator gives the quotient of the division)
// console.log(2%2);           // 0 (modulo operator gives the remainder of the division)


let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3); // "hello world" (string concatenation)

console.log("1" + 2); // "12" (string concatenation, number 2 is converted to string "2")
console.log("1" + 1 + 1 ); // "111" (string concatenation, number 1 is converted to string "1")
console.log(1 + 1 + "1"); // "21" (first 1 + 1 is evaluated to 2, then string concatenation with "1" gives "21")

console.log((2 + 2) * 2); // 16 (parentheses have the highest precedence, so 2 + 2 is evaluated first, then multiplied by 2)


let gameCounter = 100.                 
gameCounter++; // 101
console.log(gameCounter);                           // 101

let gameCounter2 = 100  
gameCounter2--; // 99
console.log(gameCounter2);                          // 99

let gameCounter3 = 100
++gameCounter3; // 101
console.log(gameCounter3);                          // 101

let gameCounter4 = 100
--gameCounter4; // 99
console.log(gameCounter4);                          // 99


let x = 3;
const y = x++;
console.log(x); // 4 (x is incremented after the value of y is assigned)
console.log(y); // 3 (y is assigned the value of x before it is incremented)

let x2 = 3n;
const y2 = x2++;
console.log(x2); // 4n (x2 is incremented after the value of y2 is assigned)
console.log(y2); // 3n (y2 is assigned the value of x2 before it is incremented)


let x1 = 3;
const y1 = ++x1;
console.log(x1); // 4 (x1 is incremented before the value of y1 is assigned)
console.log(y1); // 4 (y1 is assigned the value of x1 after it is incremented)

let x3 = 3n;
const y3 = ++x3;
console.log(x3); // 4n (x3 is incremented before the value of y3 is assigned)
console.log(y3); // 4n (y3 is assigned the value of x3 after it is incremented)