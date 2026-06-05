// # PRIMITIVE DATA TYPES

// 7 types : String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined 
// javascript is dynamically typed language, we can change the data type of a variable at any time

console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object (this is a quirk in JavaScript, null is considered an object)
console.log(typeof userEmail); // undefined


//************************** SYMBOL ***************************//
 
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false, because each symbol is unique

console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol

//************************** BIGINT ***************************//

const bigNumber = 9007199254740991n;   // n at the end indicates that this is a BigInt 


console.log(typeof bigNumber); // bigint


// # NON-PRIMITIVE DATA TYPES / REFERENCE DATA TYPES

// 3 types : Object, Array, Function

  const heros = ['shaktiman', 'doga', 'naagraj']; // array is a type of object in javascript
  let myObj = {
    name : "vansh",
    age : 18
  };
console.log(typeof heros); // object
console.log(typeof myObj); // object

 const myFunction = function() {
    console.log("hello world");
 }
console.log(typeof myFunction); // function

 