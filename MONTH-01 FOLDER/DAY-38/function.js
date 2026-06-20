function sayMyName (){
    console.log("v");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
}

sayMyName()


function addTwoNumber(number1, number2){
    console.log(number1, number2);
}

addTwoNumber(3, 4)

//In JavaScript, parameters are the variable names listed in a function's definition, while arguments are the actual values passed to the function when it is invoked. Think of parameters as the blueprints or placeholders, and arguments as the real data that fills them. 

``
//// 'name' is the PARAMETER (the placeholder)
//function greetUser(name) {
 // console.log(`Hello, ${name}!`);
//}

// 'Alice' is the ARGUMENT (the actual value)
//greetUser('Alice'); 


function addNumber(number1, number2){ //function addNumber(number1, number2){ declares a function named addNumber that accepts two parameters, number1 and number2.
    console.log(number1 + number2); //console.log(number1 + number2); adds the two numbers together and prints the sum directly to the console.
} //closes the function block.

const result1 = addNumber(3, 5) //const result1 = addNumber(3, 5) calls the first function with arguments 3 and 5. Because this function lacks a return statement, result1 is assigned a value of undefined.

console.log("Result:", result); //console.log("Result:", result); attempts to log a variable named result. This will throw a runtime error (ReferenceError) because result has not been defined yet in this scope.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function adddNumber(number1, number2){ //function addNumber(number1, number2){ re-declares the addNumber function, overriding the previous definition.
    let result = number1 + number2 //let result = number1 + number2 calculates the sum and saves it to a local variable named result.
    console.log("vansh") //onsole.log("vansh") prints the string "vansh" to the console every time this function runs.
    return result //return result sends the calculated sum back to wherever the function was called.
}
const result = adddNumber(3, 5) //onst result = addNumber(3, 5) calls the new function definition with 3 and 5, storing the returned value (8) into a global constant named result.
console.log("result:",result) //console.log("result:", result) prints the text "result:" followed by the value stored in the variable (8).

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function add_number(number1, number2){ //function add_number(number1, number2){ defines a new function using snake_case naming syntax.
    let result = number1 + number2 //let result = number1 + number2 calculates the sum and stores it locally.
    return result //return Result attempts to return a variable named Result 
    console.log("vansh") //console.log("vansh") sits after the return statement. This line is unreachable code and will never execute.
}

const Result = add_number(3, 5) //const Result = add_number(3, 5) calls the function with arguments 3 and 5, then stores the returned value inside a constant named Result.
console.log("result;", Result) //console.log("result:", Result) prints the text "result:" followed by the value stored in the Result variable.


function loginUserMessage(username = "sam"){ //function loginUserMessage(username = "sam"){ defines a function with a default parameter. If no argument is passed, username defaults to the string "sam".
    if(!username){ //if(!username){ evaluates whether the username variable is falsy (e.g., undefined, null, or an empty string "").
        console.log("pleaase enter a username"); //console.log("pleaase enter a username"); prints a warning message if the if condition evaluates to true.
        return //return exits the function early so the rest of the code inside this block does not execute.
    } // closes the if statement block.
    return '${username}just logged im' //return '\${username}just logged in' returns a literal string. Note that this uses standard single quotes ' instead of backticks `, meaning the ${username} placeholder text will be treated as literal text rather than evaluating the variable.
} //} closes the function block.

console.log(loginUserMessage("vansh")) //console.log(loginUserMessage("vansh")) executes the login function with the argument "vansh", and immediately logs the returned string to the console.
