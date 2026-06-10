// ^_^_^_^_^_^_^_^_^_^_ DATES _^_^_^_^_^_^_^_^_^_^

let myDate = new Date()  // let myDate = new Date()Creates a new Date object.Grabs the exact current date and time.
console.log(myDate.toString()); // myDate.toString()Converts the date to a full readable string.Example output: Tue Jun 09 2026 02:55:00 GMT+0530
console.log(myDate.toISOString());//Output format: 2026-06-09T16:13:00.000Z
// Returns a simplified extended ISO format (ISO 8601) string in Coordinated Universal Time (UTC / 'Z').


console.log(myDate.toJSON());//Output format: 2026-06-09T16:13:00.000Z
// Returns a string representation identical to toISOString(), intended for JSON serialization.


console.log(myDate.toLocaleDateString());//Output format: 6/9/2026 (Format varies depending on host system locale settings)
// Returns a string representing only the date portion, localized to the user's region.


console.log(myDate.toLocaleString());//Output format: 6/9/2026, 9:43:00 PM (Format varies depending on host system locale settings)
// Returns a string representing both the date and time portions, localized to the user's region.


console.log(typeof myDate);//Output: "object"
// Confirms that instances created via the new Date() constructor are categorized as structural objects in JavaScript.





let myCreatedDate = new Date(2023, 0, 23) // In JavaScript, months are zero-indexed (0 represents January, 11 represents December).
// Therefore, passing 2023, 0, 23 instantiates the date January 23, 2023.

console.log(myCreatedDate.toDateString());//Output: Mon Jan 23 2023
// Returns only the English date portion (Day-of-week, Month, Day, Year) of the custom Date object, ignoring the time.




let myCreatedDate2 = new Date(2034, 9, 15, 4, 34) // javaScript Date constructors accept arguments in this specific order: (year, monthIndex, day, hours, minutes).
console.log(myCreatedDate2.toLocaleString());



// time stap

let myTimeStamp = Date.now() //Date.now(): Calls a built-in function that returns the current time.
                            // Value: It tracks time in milliseconds since January 1, 1970 (Unix Epoch).
console.log(myTimeStamp);


let Date = new Date("01-14-2023") //new Date("01-14-2023"): Creates a new date object for January 14, 2023.
                                  //let Date =: Saves this specific date into a variable named Date.
console.log(Date.getTime()) //let Date =: Saves this specific date into a variable named Date.
console.log(Math.floor(Date.now()/1000));     //Date.now(): This fails and crashes your program. Because you overwrote the name Date on line 48, JavaScript looks at your specific 2023 date instead of the master clock.

//Math.floor(... / 1000): If it worked, this would divide milliseconds by 1000 to get seconds, and remove dical point to nearest whole number




let Date1 = new Date(). //This creates a brand new timestamp representing the exact current date and time right now and saves it inside a variable named Date1.

console.log(Date1);//This prints out the full date, time, and time zone saved in Date1 to your computer screen.

console.log(Date1.getMonth() + 1)//This extracts the current month from your date. Because JavaScript counts months starting at 0 (January is 0, February is 1), adding + 1 turns it into the human-readable month number (e.g., June becomes 6).

console.log(Date.getDay())//This line breaks and causes an error. It attempts to find the day of the week from the general blueprint Date, instead of looking inside your specific variable Date1.


// '${Date1.getDay()} and the time.  '


Date1.toLocalString('default',{
    weekday: "long" //This attempts to look at your date and pull out just the full day name (like "Wednesday"). However, it will fail because the word toLocaleString is missing the letter e.
})