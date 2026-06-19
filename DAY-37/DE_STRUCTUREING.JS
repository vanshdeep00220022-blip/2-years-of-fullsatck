const course =  {                    //Starts the definition of a constant object named course.
    coursename:  "js in hindi",  //Defines three properties for the object: coursename, price, and courseInstructor.
    price: "999",                //Defines three properties for the object: coursename, price, and courseInstructor.
    courseInstructor: "vansh",   //Defines three properties for the object: coursename, price, and courseInstructor.
}.                               //Closes the object declaration.

// course.courseInstructor.  (de-structureing)

const {price, coursename} = course.  //Unpacks the price and coursename properties into variables using object destructuring.
console.log(price, coursename). //Prints both the price and coursename values together in the console.
console.log(price) //Prints only the price value to the console.



const {coursename: name} = course // Unpacks coursename and renames the local variable to name.
console.log(name). //Prints the newly renamed name variable to the console.

// _______________ Shows how to destruct properties directly inside function parameters.
//const navbar = ({compant}) => {

//}
// navbar(company = "hatish")


//________________Shows a standard JSON data format layout commonly received from web servers.
//. {
//    "name": "vansh",
//    "coursename" : "js in hindi",
//    "price": "free",
//. }


[
    {},
    {},
    {}
]