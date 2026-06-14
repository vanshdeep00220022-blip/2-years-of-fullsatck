 const tinderUser = new Object () //Single Object Constructor: const tinderUser = new Object() creates an empty object.

 console.log(tinderUser)

 const tinder_User = {} //Object Literal: const tinder_User = {} shows the alternative (and more common) way to create an empty object.

 tinderUser.id = "123abc" //Adding Properties: Lines 7–9 dynamically add properties (id, name, isLoggedIn) to tinderUser using dot notation.
 tinderUser.name = "SAMMY" //Adding Properties: Lines 7–9 dynamically add properties (id, name, isLoggedIn) to tinderUser using dot notation.
 tinderUser.isLoggedIn = false //Adding Properties: Lines 7–9 dynamically add properties (id, name, isLoggedIn) to tinderUser using dot notation.

 console.log(tinderUser)


 const regularUser = { //Deep Nesting: regularUser is an object that contains another object (fullname), which contains yet another object (userfullname).
    mail : "soma@gmai.com", //(regularUser.fullname.userfullname.firstName) to drill down and print the value "vansh".
    fullname: { //(regularUser.fullname.userfullname.firstName) to drill down and print the value "vansh".
        userfullname: { //(regularUser.fullname.userfullname.firstName) to drill down and print the value "vansh".
         firstName: "vansh", //(regularUser.fullname.userfullname.firstName) to drill down and print the value "vansh".
         lastName: "deep",  //(regularUser.fullname.userfullname.firstName) to drill down and print the value "vansh".
    
        }
    }
 }

 console.log(regularUser.fullname)
 console.log(regularUser.fullname.userfullname.firstName)




 const object1 = {1 : "a", 2: "b"} //{object1, object2}: Places the two objects inside a new object as sub-properties rather than merging their keys.
 const object2 = {3 : "a", 2: "b"} //{object1, object2}: Places the two objects inside a new object as sub-properties rather than merging their keys.

 const obj3 = {object1,object2}
 const object3 = Object.assign(object1, object2) //Object.assign(object1, object2): Copies properties from object2 directly into object1, altering object1.
 const object_3 = Object.assign({}, object1, object2) //Object.assign({}, object1, object2): Properly merges both into a brand-new empty object {} without modifying the original objects.
 const obj_3 = {...object1, ...object2} //Spread Operator ({...object1, ...object2}): The most modern and preferred way to merge objects. It expands the key-value pairs of both objects into a new one.


const users = [ //Data Collections: Starts defining const users = [...], which is an array containing objects. This structure is standard for handling lists of items from database queries or API responses.
    {
    id : 1,
    email : "vansh@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
]

users[1].email //Explanation: This accesses the second item (index 1) in the users array, then grabs its email property. Looking at the array snippet above it, index 1 is the second object block. This expression evaluates to "v@gmail.com".
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //Object.keys(tinderUser): Extracts all keys from the object and returns them as an array of strings.
console.log(Object.values(tinderUser)); //Object.values(tinderUser): Extracts all values from the object and returns them as an array.
console.log(Object.entries(tinderUser)); //Object.entries(tinderUser): Converts the object into an array of key-value pairs (an array of multi-dimensional arrays).
 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //Explanation: The hasOwnProperty() method checks if the object contains a specific property directly on itself rather than inheriting it. Since isLoggedIn was explicitly added to tinderUser earlier, this will return true.