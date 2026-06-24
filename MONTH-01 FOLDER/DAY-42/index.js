// Day 42: Comprehensive JS Review (Up to Advanced Objects)
// Task Management Engine to practice cross-concept execution.

// 1. Initial State Definition (Nested Objects & Arrays)
const developerSprint = {
    sprintNumber: 1,
    theme: "JavaScript Core Mastery",
    daysElapsed: 42,
    totalTargetDays: 730,
    tasks: {
        variables: { status: "Completed", score: 95 },
        functions: { status: "Completed", score: 90 },
        objectsBase: { status: "Completed", score: 88 },
        advancedObjects: { status: "In Progress", score: null }
    }
};

// 2. Pure Function to Calculate Progress Statistics
function generateSprintReport(sprintObj) {
    // Using Object.keys to dynamically check tasks
    const taskKeys = Object.keys(sprintObj.tasks);
    const totalTasks = taskKeys.length;
    
    let completedCount = 0;
    let totalScore = 0;

    // Iterating through object using for...in
    for (let key in sprintObj.tasks) {
        const task = sprintObj.tasks[key];
        if (task.status === "Completed") {
            completedCount++;
            totalScore += task.score;
        }
    }

    // Mathematical computations
    const completionPercentage = (completedCount / totalTasks) * 100;
    const averageScore = completedCount > 0 ? (totalScore / completedCount) : 0;

    // Return a newly constructed summary object
    return {
        completionRate: `${completionPercentage}%`,
        avgScore: averageScore.toFixed(1),
        daysRemaining: sprintObj.totalTargetDays - sprintObj.daysElapsed
    };
}

// 3. Execution & Testing
const progressReport = generateSprintReport(developerSprint);

console.log(`--- SPRINT REPORT (DAY ${developerSprint.daysElapsed}/${developerSprint.totalTargetDays}) ---`);
console.log(progressReport);

// Dynamic Object Update Practice
developerSprint.tasks.advancedObjects.status = "Completed";
developerSprint.tasks.advancedObjects.score = 92;

console.log("\nUpdated Advanced Objects Status:", developerSprint.tasks.advancedObjects);