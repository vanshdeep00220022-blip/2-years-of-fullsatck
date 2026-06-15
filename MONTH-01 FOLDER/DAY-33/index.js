/**
 * Day 33: Arrays & Objects - Combined Practice Pipeline
 * Goal: Safely transform and group an array of objects without mutating the original data.
 * Real-world use case: Processing database records before sending them to a frontend UI.
 */

const rawEmployees = [
  { id: 1, name: "Alice", dept: "Engineering", salary: 70000 },
  { id: 2, name: "Bob", dept: "Marketing", salary: 50000 },
  { id: 3, name: "Charlie", dept: "Engineering", salary: 80000 },
  { id: 4, name: "David", dept: "HR", salary: 60000 }
];

function processDataPipeline(employees) {
  // Step 1: Safely clone and transform data (Give everyone a 10% raise)
  // We use .map() and the spread operator (...) to avoid mutating the original array
  const updatedEmployees = employees.map(emp => ({
    ...emp,
    salary: Math.floor(emp.salary * 1.10) 
  }));

  // Step 2: Group the updated employees by their department
  const groupedByDept = updatedEmployees.reduce((acc, emp) => {
    if (!acc[emp.dept]) {
      acc[emp.dept] = [];
    }
    acc[emp.dept].push(emp);
    return acc;
  }, {});

  return groupedByDept;
}

// --- Test Cases ---
const processedData = processDataPipeline(rawEmployees);

console.log("--- Processed Data ---");
console.log(processedData);

console.log("\n--- Original Data (Untouched) ---");
console.log(rawEmployees[0].salary); // Still 70000. No mutation occurred!