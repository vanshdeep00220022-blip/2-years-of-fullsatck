const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_Heros = ["superman", "flash", "batman"]
//Two separate arrays are declared, each containing three string elements.

marvel_heros.push(dc_Heros)
//What it does:  The .push() method inserts whatever argument you give it directly into the end of the array as a single element.

console.log(marvel_heros);
console.log(marvel_heros[3][1]) //This targets index position 3 of the main array.Index 3 contains the entire nested DC array: ["superman", "flash", "batman"].

                            //This immediately looks inside that inner array and targets its index position 1.Inside ["superman", "flash", "batman"]:Index 0 is "superman"Index 1 is "flash"Index 2 is "batman"

//// Index:          0           1               2                        3
//.  const marvel_heros = ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]];


//// Actual Output:
//["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]



const allHeros = marvel_heros.concat(dc_Heros)//The .concat() method does not change the original marvel_heros array.
// Instead, it creates a brand new combined array in the background and returns it.
// Since you didn't save that returned value into a variable, the new combined array is instantly lost.
console.log(marvel_heros)

 // OUTPUT - [ 'thor', 'iroman', 'spiderman', 'superman', 'flash', 'batman']

//                        ~~~~~~~~~~~~~~~ PUSH / CONCAT ~~~~~~~~~~~~~~~


// 1.  push() — The Modifier ➕What it does: Adds elements directly to the end of the existing array.
// Original Array: It mutates (permanently changes) your original array.
// The Trap with Arrays: If you push an entire array into another array, it inserts it as a nested array (brackets inside brackets).
// What it returns: It returns the new length of the array (a number), not the array itself.


// concat() — The Creator 📑What it does: Merges arrays together into a flat list.
// Original Array: It does not change the original arrays. They stay completely untouched.
// The Benefit with Arrays: It automatically unpacks the elements of the array you pass in, resulting in a single flat list.
// What it returns: It returns a brand new combined array that you must save to a variable.


const new_heros = [...marvel_heros, ...dc_Heros] 

console.log(new_heros)

//The Spread Operator (...)Unpacks elements from an existing array.
// Copies items individually into a new container.Line-by-Line 
// BreakdownLine 43: Defines a source array named marvel_heros containing strings like "thor", "ironman", and "spider-man".
// Line 44: Creates a completely new array named new_heros
// ....marvel_heros: Pulls all individual items out of the Marvel array and places them inside the new brackets
// ....dc_Heros: Pulls all individual items out of the DC array and appends them right after the Marvel items.
// Line 46: Prints the final, combined array containing all heroes to the console.


const real_anotherArray1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_anotherArray = real_anotherArray1.flat(Infinity)
//.flat() does not change another_array. It outputs a completely new array.
//Infinity argument: By default, .flat() only opens up one level of nesting. Passing Infinity tells JavaScript to keep digging through every single layer, no matter how deep, until all arrays are flattened into individual elements.
console.log(real_anotherArray)




console.log(Array .isArray("vansh"))   // Checks if the passed value is an array.
console.log(Array .from("vansh"))  //Creates a new array instance from an iterable or array-like object.

console.log(Array.from({name : "vanh"})) // Array.from() Requirements: This method only converts iterable objects (like strings, Sets, or Maps) or array-like objects.


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // Array.of() acts like an empty basket.You throw the numbers inside it.It bundles them together.



