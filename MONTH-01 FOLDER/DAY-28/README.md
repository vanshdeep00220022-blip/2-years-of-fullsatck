# Day 28: JavaScript Dates & Date Math ⏳

Welcome to Day 28 of my **2-Year Full Stack Development Challenge**! Today, I tackled the JavaScript `Date` object. I learned how JS understands time under the hood and how to perform mathematical calculations with dates.

## 📊 Challenge Status
**Day 28 of 730** 🗓️
- **Phase:** 1 (Frontend Mastery)
- **Topic:** JS Dates & Time Calculations

## 📝 What I Learned Today

To us, time looks like `MM/DD/YYYY`. To JavaScript, time is just **one massive number**: the amount of milliseconds that have passed since midnight on January 1, 1970 (known as the Unix Epoch).

### 1. Creating Dates
* `new Date()` - Gets the exact current date and time.
* `new Date("2026-12-31")` - Creates a specific date object.

### 2. Extracting Data
JavaScript gives us built-in methods to pull apart a date object:
* `.getFullYear()` ➡️ Gets the 4-digit year.
* `.getMonth()` ➡️ Gets the month (0-11, where January is 0!).
* `.getDate()` ➡️ Gets the day of the month (1-31).

### 3. Date Math (The Secret Sauce)
Because dates are just milliseconds under the hood, you can subtract one date from another to find the difference!

**The formula to convert milliseconds into days:**
```javascript
const date1 = new Date("2026-06-10");
const date2 = new Date("2026-12-25");

// 1. Subtract the dates to get the difference in milliseconds
const differenceInMs = date2 - date1;

// 2. Divide by (1000ms * 60s * 60m * 24h) to get total days
const daysBetween = differenceInMs / (1000 * 60 * 60 * 24);

console.log(`There are ${daysBetween} days until Christmas! 🎄`);
