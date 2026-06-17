// Day 35: Practicing Arrays of Objects

// An array containing multiple objects
const codingJourney = [
    { day: 34, topic: "Object Basics", status: "Completed" },
    { day: 35, topic: "Arrays & Objects", status: "In Progress" },
    { day: 36, topic: "Advanced Loops", status: "Upcoming" }
];

const developerProfile = {
    role: "Frontend Engineer in Training",
    challenge: "2-Year Challenge (730 Days)",
    location: "Firozpur",
    motivation: "Khushi",
    
    // Method interacting with an external array
    showCurrentTask: function() {
        const currentTask = codingJourney.find(task => task.day === 35);
        console.log(`Currently grinding on: ${currentTask.topic}`);
        console.log(`Dedication level: 100%. Doing this for ${this.motivation}.`);
    }
};

// 1. Executing the method
developerProfile.showCurrentTask();

// 2. Iterating through the array of objects
console.log("\n--- Challenge Roadmap ---");
codingJourney.forEach(task => {
    console.log(`Day ${task.day}: ${task.topic} [${task.status}]`);
});