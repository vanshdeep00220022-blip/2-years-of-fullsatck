# Day 25: JavaScript Strings & Methods 🧵

Welcome to Day 25 of my **2-Year Full Stack Development Challenge**! Today, I shifted from theory to heavy practical application by mastering JavaScript Strings. Text manipulation is everywhere in web development, from formatting user inputs to generating dynamic HTML.

## 📊 Challenge Status
**Day 25 of 730** 🗓️
- **Phase:** 1 (Frontend Mastery)
- **Topic:** JS Strings & Template Literals

## 📝 What I Learned Today

Even though Strings are primitive data types in JavaScript, JS automatically wraps them in a temporary object under the hood so we can access powerful built-in properties and methods.

### 1. The Power of Template Literals
Before ES6, combining strings and variables (concatenation) was messy. Now, using backticks (`` ` ``), we can easily inject variables using `${}`.
```javascript
let name = "Dev";
let repo = "GitHub";
// The old messy way:
console.log("My name is " + name + " and I am pushing to " + repo + ".");
// The modern ES6 way:
console.log(`My name is ${name} and I am pushing to ${repo}.`);
