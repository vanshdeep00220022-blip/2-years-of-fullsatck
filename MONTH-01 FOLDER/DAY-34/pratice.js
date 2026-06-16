// Day 34: Mastering JavaScript Objects

const challengeTracker = {
    targetGoal: "2-Year Challenge (730 Days)",
    currentDay: 34,
    favoritePerson: "Khushi",
    status: "Locked In",
    location: "Firozpur",
    
    // Object Method
    displayProgress: function() {
        console.log(`Day ${this.currentDay} of my ${this.targetGoal} completed!`);
        console.log(`Fuelled by consistency and thoughts of ${this.favoritePerson}.`);
    }
};

// 1. Object Destructuring (Extracting properties easily)
const { currentDay, status } = challengeTracker;
console.log(`Status update for Day ${currentDay}: ${status} 🚀\n`);

// 2. Calling an Object Method
challengeTracker.displayProgress();

// 3. Adding a new property dynamically
challengeTracker.nextTopic = "Arrays & Loops";
console.log(`\nNext up on the learning agenda: ${challengeTracker.nextTopic}`);