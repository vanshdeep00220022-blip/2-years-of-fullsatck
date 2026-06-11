// <<<<<<<<<<<<<<< ARRAY >>>>>>>>>>>>>>>

// ARRAY - the array object, as with array in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations

// 1) javascript array are resizable and can contain a mix of different data types like( number, boolean, object, string) but theree is no array inside array

// 2) array have zero base indexing in javascript



const myArray = [0, 1, 2, 3, 4, 5, true, "hitesh"]; // Creates an array using literal notation brackets [].
// Stores mixed data types in a single variable.
// Contains numbers from 0 to 5.Contains a boolean value (true).
// Contains a string value ("hitesh").
const myHeros = [" shaktimaan", "nagraaj"]
//Declares another array using literal notation.
// Holds two string elements representing names.
// Missing a semicolon at the end. JavaScript handles this automatically, but it is best practice to include it.
const myArr = new Array(1, 2, 4, 5)
//Creates an array using the Array constructor.
// Uses the new keyword to instantiate the object.
// Passes four numbers as arguments to initialize elements.
// Produces the identical result as using bracket syntax [1, 2, 4, 5].


// ARRAY METHODSSSS--------

myArr.push(6)   // Adds the number 6 to the very end of the array. [1, 2, 3, 4, 5, 6]
myArr.pop()   // remove last value
myArr.unshift(9) // aAdds the number 9 to the very beginning (index 0) of the array.
myArr.shift()  // Removes the first element from the very beginning of the array.
console.log(myArr)



console.log(myArr.includes(9)) // Checks if the number 9 exists inside the array. It returns a boolean value: true if found, or false if not found.
console.log(myArr.indexOf(3)) //Searches the array for the number 3 and returns its index position (starting from 0). If the value is not present in the array, it returns -1.



const newArr = myArr.join()//Converts the array elements into a single string. It separates elements with commas by default. It stores the result in newArr.

console.log(myArr); //Prints the original array to the console. It maintains its structure as an array.

console.log(newArr);// Prints the newly created string to the console. It displays as a comma-separated text sequence.

console.log(typeof myArr);//Outputs the data type of myArr. It returns "object" because arrays are objects in JavaScript.





// ```````````````````` SLICE - SPICE ````````````````````

//_________________________________________________________________________________
 //SLICE - It extracts or "copies" a specific section of an array and gives it to |you as a new array.                                                              |
//                                                                                |
 //SPICE - It directly changes an array by removing, replacing, or adding new |elements.                                                                        |
//_________________________________________________________________________________


console.log("A ", myArr); // Extracts a shallow copy of a portion of an array.

const myn1 = myArr.slice(1, 3) // It takes a starting index (1) and an ending index (3). It extracts up to, but does not include, the ending index.

console.log(myn1); //It grabs indexes 1 and 2. If myArr is [0, 1, 2, 3, 4, 5], myn1 becomes [1, 2].
console.log("B ", myArr); //slice() does not mutate (change) the original array. myArr remains completely untouched: [0, 1, 2, 3, 4, 5].

const myn2 = myArr.splice(1, 3) //Changes the contents of an array by removing or replacing existing elements.
console.log("C ", myArr); //It takes a starting index (1) and a count of how many elements to delete (3).
console.log(myn2) //splice() mutates the original array. Those three elements are permanently removed from myArr, leaving it as: [0, 4, 5].
