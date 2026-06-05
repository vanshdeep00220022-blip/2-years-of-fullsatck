// +++++++++++++++++++++++++++++++++++++++++

// stack(primitive data types) and heap(reference data types, non primitive data types)


let myusername = "VANSH"; // stored in stack

let anotherusername = myusername; // stored in stack
anotherusername = "DEEP"; // changes only the value in the stack

console.log(myusername); // VANSH
console.log(anotherusername); // DEEP


// *********************NON PRIMITIVE DATA TYPES*********************

let myobj = {
    name: "VANSH",
    age: 20
}; // stored in heap

let anotherobj = myobj; // stored in stack, but it is a reference to the object in heap
anotherobj.name = "DEEP"; // changes the value in the heap

console.log(myobj.name); // DEEP
console.log(anotherobj.name); // DEEP
// (.) operator is used to access the properties of the object in heap, and it changes the value in the heap, which is reflected in both myobj and anotherobj, because they are referencing the same object in heap.






// To create a copy of the object in heap, we can use the spread operator or Object.assign()

let myobj2 = {
    name: "VANSH",
    age: 20
};

let anotherobj2 = {...myobj2}; // creates a copy of the object in heap
anotherobj2.name = "DEEP"; // changes only the value in the heap

console.log(myobj2.name); // VANSH
console.log(anotherobj2.name); // DEEP