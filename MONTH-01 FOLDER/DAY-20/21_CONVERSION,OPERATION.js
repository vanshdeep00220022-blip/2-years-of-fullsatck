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