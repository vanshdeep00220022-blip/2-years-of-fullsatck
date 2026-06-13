// singleton


// ```````````````object literals```````````````


const  mySymbol = Symbol("key1") //This creates your unique fingerprint called mySymbol. The text "key1" is just a label to help you identify it later.


const jsUser = {
    name : "vansh", //Standard keys
    age : 18, //Standard keys.
    "full_name" : "vansh", //Written with quotes because it has an underscore. You cannot access this using dot notation (like .full_name).
    [mySymbol] : "myKey1", //[mySymbol] : "myKey1": To use a Symbol variable as a key inside an object, you must wrap it in square brackets [ ]. This tells JavaScript: "Use the unique Symbol fingerprint as the key, not the literal text 'mySymbol'".
    location: "jaipur",   //Standard keys.
    email : "vanshdeep@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Saturday"]
}


console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser['full_name'])
console.log(jsUser[mySymbol])


jsUser.email = "vanshdeep@chatgpt.com" //This updates the email property inside jsUser.
Object.freeze(jsUser) //This updates the email property inside jsUser.
jsUser.email = "vanshdeep@microsoft.com". //This tries to update the email to a Microsoft address.
console.log(jsUser)



jsUser.greeting = function(){ //: This creates a new property named greeting inside your jsUser object and assigns a function to it.
    console.log("Hello js User");

}
jsUser.greetingTwo = function(){  //The this keyword points directly to the object that currently owns or is executing the function.
    // Since this function is attached to jsUser, this represents the jsUser object itself.
    console.log(`Hello js user , ${this.name}`) //It translates to jsUser.name.
            //t looks up into your object, finds the name property ("vansh"), and injects it into the string.

}

console.log(jsUser.greeting());  // The parenthesis () tell JavaScript to execute (run) that function right now.
console.log(jsUser.greetingTwo());