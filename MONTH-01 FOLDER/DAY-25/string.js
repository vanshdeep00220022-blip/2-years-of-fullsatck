const name = "vansh";
const repoCount = 50;
console.log(name , repoCount + " repositories");

// + "" is used to convert repoCount to string and then concatenate it with " repositories"

// this syntax is soo old no one now using thisssss 

s


// String interpolation using template literals


console.log(` hello my name is ${name} has ${repoCount} repositories`);  

// ${ } is used to embed the value of name and repoCount variables directly into the string. This is called string interpolation and it allows us to create more readable and maintainable code.



const gameName = new String(`mine-craft`);
console.log(gameName);



console.log(gameName[0]);                // m

// The new String() constructor creates a string object, which is different from a string primitive. The string object has additional properties and methods compared to a string primitive. However, in most cases, it's recommended to use string literals (like "minecraft") instead of string objects for better performance and simplicity.

//[0 ] is used to access the first character of the string "minecraft", which is 'm'.
// this is used to find the length of the string.

console.log(gameName .__proto__);   // use to check the prototype of the string object, which contains various methods and properties that can be used with string objects. The __proto__ property is a reference to the prototype object of the string, which includes methods like length, toUpperCase(), toLowerCase(), etc. 



console.log(gameName.length);  // 9
console.log(gameName.toUpperCase());  // MINECRAFT
console.log(gameName.charAt(0));   // m
console.log(gameName.indexOf("c"));  // 4


// The length property returns the number of characters in the string, which is 9 for "minecraft". 
// The toUpperCase() method converts all characters in the string to uppercase, resulting in "MINECRAFT".
// The charAt() method returns the character at the specified index, which is 'm' at index 0 in "minecraft".
// The indexOf() method returns the index of the first occurrence of the specified character, which is 'c' at index 4 in "minecraft". If the character is not found, it returns -1.



const newString = gameName.substring(0, 4);
console.log(newString);  // mine

// The substring() method extracts a portion of the string based on the specified start and end indices. In this case, it extracts the characters from index 0 to index 4 (excluding index 4), resulting in "mine".

const anotherString = gameName.slice(0, 4);
console.log(anotherString);  // mine

// in SLICE if we give negeative value (-). It will start from reverse


const NewStringOne ="   vansh     "
console.log(NewStringOne);
console.log(NewStringOne.trim());

// trim is use to remove random space 


const url = "https://vansh.com/vanshdeep"

console.log(url.replace('.com', 'gmail.com'));

//give the value which u want to replace (.com)  and in which value (gmail.com) .SO in upper example .com was replac eto gmail.com 
//now the outpiut is https://vanshgmail.com/vanshdeep


console.log(url.includes('sundar'));   // FALSE, sundar name is not stored

//.includes() tell that in given variable is this nae or thing is stored or not as in the given uper example the sundar name is not stored in the url



//$$$$$$$$$$ SLIPT ##########

//split() method to divide a string into an ordered array of substrings based on a specified separator.


string.split(separator, limit)


//separator (optional): The character, string, or regular expression that determines where the split happens.
//limit (optional): A non-negative integer specifying the maximum number of substrings to include in the array

const text = "one-two-three-four";
const limited = text.split("-", 2);

console.log(limited); 
// Output: [ 'one', 'two' ]

