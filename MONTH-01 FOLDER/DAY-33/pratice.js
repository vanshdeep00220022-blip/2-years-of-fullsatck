//1  JavaScript Object Basics
const user = {
    name : "vansh",
    age : 18,
}

// Fix: Target the age property inside the user object
user.age = 19; 

console.log(user);

//2 Method & this

const calculator = {
    number_1: 10,
    number_2: 20,

    // Method to add the numbers
    sum() {
        return this.number_1 + this.number_2;
    },

    // Method to multiply the numbers
    multiply() {
        return this.number_1 * this.number_2;
    }
};

// Call the methods using dot notation
console.log(calculator.sum());       // Outputs: 30
console.log(calculator.multiply());  // Outputs: 200
