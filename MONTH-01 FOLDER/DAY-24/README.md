# Day 24: JavaScript Memory Management (Stack vs. Heap) 🧠

Welcome to Day 24 of my **2-Year Full Stack Development Challenge**! Today, I looked under the hood of JavaScript to understand exactly how it stores data in memory. 

## 📊 Challenge Status
**Day 24 of 730** 🗓️
- **Phase:** 1 (Frontend Mastery)
- **Topic:** JS Memory (Stack & Heap)

## 📝 What I Learned Today

JavaScript engines manage memory using two main data structures:

### 1. The Stack Memory (Primitive Types)
The Stack is fast, structured, and holds static data. All **Primitive Data Types** (String, Number, Boolean, Null, Undefined, Symbol, BigInt) are stored here.
* **Pass by Value:** When you assign a primitive variable to another, JS creates a *strict copy* of that value.
* Changing the copied variable does **not** affect the original.

### 2. The Heap Memory (Reference Types)
The Heap is a larger, less organized space for dynamic data. All **Non-Primitive Data Types** (Objects, Arrays, Functions) are stored here.
* **Pass by Reference:** When you assign an object to another variable, JS does *not* create a copy. It gives the new variable a *reference* (a pointer) to the exact same spot in the Heap memory.
* Changing the copied variable **will** mutate the original object!

## 💻 Code Example: The Danger of References
```javascript
// Stack Example (Safe)
let nameOne = "Dev";
let nameTwo = nameOne;
nameTwo = "Engineer";
console.log(nameOne); // Outputs: "Dev" (Original is untouched!)

// Heap Example (Danger!)
let userOne = { name: "Dev" };
let userTwo = userOne;
userTwo.name = "Engineer";
console.log(userOne.name); // Outputs: "Engineer" (Original got mutated!)
