// Day 43: Mastering JavaScript Arrays 🚀

// 1. Creating an Array of tech stacks
const techStack = ['HTML', 'CSS', 'JavaScript', 'Node.js'];
console.log("Initial Stack:", techStack);

// 2. Modifying Elements (Push & Pop)
techStack.push('React'); // Adds to the end
console.log("After Push:", techStack);

const removedElement = techStack.pop(); // Removes from the end
console.log(`Popped: ${removedElement} | Current Stack:`, techStack);

// 3. Array Transformation (Map)
const upperCaseStack = techStack.map(tech => tech.toUpperCase());
console.log("Uppercase Stack:", upperCaseStack);

// 4. Filtering Elements (Filter)
const longNames = techStack.filter(tech => tech.length > 3);
console.log("Stacks with > 3 characters:", longNames);

// 5. Iterating (forEach)
console.log("--- Iterating through Stack ---");
techStack.forEach((tech, index) => {
    console.log(`Layer ${index + 1}: ${tech}`);
});