// Day 36: Fundamentals & Arrays Revision

// 1. Variables & Data Types
const currentDay = 36;
const totalDays = 730;
const location = "Firozpur";
const drivingForce = "Khushi";
let isMotivated = true;

// 2. Arrays & Array Methods
let coreTopics = ["Variables", "Conditionals", "Loops", "Functions"];

// Adding new elements to an array
coreTopics.push("Arrays");
coreTopics.push("Objects"); 

// Removing the last element (if we want to strictly revise *up to* arrays today)
const pushedAsideForTomorrow = coreTopics.pop(); 

console.log(`--- Day ${currentDay}/${totalDays} Revision Tracker ---`);
console.log(`Broadcasting from: ${location}\n`);

// 3. Control Flow & Loops
if (isMotivated) {
    console.log(`Fuelled by ${drivingForce}, today's revision includes:\n`);
    
    // Iterating through an array using a loop
    for (let i = 0; i < coreTopics.length; i++) {
        console.log(`✅ ${coreTopics[i]}`);
    }
} else {
    console.log("Take a break and recharge!");
}

// 4. Advanced Array Methods (map)
const uppercaseTopics = coreTopics.map(topic => topic.toUpperCase());
console.log("\nTopics Mastered (Shouting it out!):", uppercaseTopics.join(" | "));