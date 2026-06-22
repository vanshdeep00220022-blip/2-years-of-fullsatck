// Day 40: Mastering JavaScript Objects
// Learning how to store, access, and manipulate structured data.

// 1. Creating a Developer Object
const developer = {
    firstName: "Amrit",
    challengeDay: 40,
    isConsistent: true,
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    // Nested Object
    workspace: {
        laptop: "MacBook",
        setup: "Minimalist"
    },
    // Object Method
    updateProgress: function() {
        this.challengeDay++;
        return `Progress updated! Now on Day ${this.challengeDay}`;
    }
};

// 2. Accessing and Modifying Properties
console.log(`Coding Setup: ${developer.workspace.laptop}`); // Dot notation
console.log(`Current Skill: ${developer['skills'][2]}`);   // Bracket notation

developer.skills.push("React"); // Adding a new skill

// 3. Object Destructuring (Clean Full-Stack Syntax)
const { firstName, challengeDay, skills } = developer;
console.log(`${firstName} is on Day ${challengeDay}. Skills: ${skills.join(", ")}`);

// 4. Calling the Method
console.log(developer.updateProgress());