# Day 33: Data Processing Pipeline (Arrays + Objects) 🧩

Welcome to **Day 33** of my 2-Year Full Stack Developer Challenge! 🚀

Today is a consolidation day. Instead of learning a brand new concept, I combined the concepts from the past few days (Array iteration, Object grouping, and preventing mutation) into a single **Data Processing Pipeline**.

## 🧠 The Logic
1. **Safe Transformation**: Used `.map()` combined with the Object Spread Operator (`...`) to create a new array of modified objects without altering the original database records.
2. **Data Aggregation**: Used `.reduce()` to group the newly updated objects by their `dept` (department) property.

This simulates a real-world backend controller taking raw database rows, applying business logic (a salary raise), and structuring it cleanly for the frontend.

## 🚀 Code Snippet
```javascript
const updatedEmployees = employees.map(emp => ({
  ...emp,
  salary: Math.floor(emp.salary * 1.10) 
}));
// Followed by a .reduce() grouping function...