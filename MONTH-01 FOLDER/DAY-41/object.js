// Day 41: Advanced JavaScript Objects & Manipulation
// Master how to iterate, copy, and extract data from objects.

const projectDetails = {
    title: "E-Commerce Backend",
    status: "In Progress",
    techStack: "Node.js & Express",
    difficulty: "Medium"
};

// 1. Extracting Keys, Values, and Entries
const keys = Object.keys(projectDetails);   // ['title', 'status', 'techStack', 'difficulty']
const values = Object.values(projectDetails); // ['E-Commerce Backend', 'In Progress', ...]
const entries = Object.entries(projectDetails); // [['title', 'E-Commerce Backend'], ...]

console.log("Object Keys:", keys);
console.log("Object Entries:", entries);

// 2. Iterating over an Object using for...in loop
console.log("\n--- Project Overview ---");
for (let key in projectDetails) {
    console.log(`${key.toUpperCase()}: ${projectDetails[key]}`);
}

// 3. Clones and Copies (Preventing Mutation)
// Shallow copy using the Spread Operator (...)
const updatedProject = { ...projectDetails, status: "Testing", version: "1.0.0" };

console.log("\nOriginal Status:", projectDetails.status); // In Progress
console.log("Updated Status:", updatedProject.status);    // Testing