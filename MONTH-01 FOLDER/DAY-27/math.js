//~~~~~~~~~~~~~~~ MATH ~~~~~~~~~~~~~~~

 console.log(Math)


// absolute value
 console.log(Math.abs(-4));          // Negative value to posititve . Not positive to negative
                                     // OUTPUT - 4

// round                                   
 console.log(Math.round(4.3));       // ignores decimal values
                                     // OUTPUT - 4
                                    
console.log(Math.round(4.6));        // OUTPUT - 5



// Ceil ( top value) _ Floor (nichaa wale value or DOWN VALUE )

console.log(Math.ceil(4.2));         // gives upper value only 
                                     // OUTPUT - 5

console.log(Math.floor(4.8));        // gives DOWN value
                                     // output - 4

// Min _ Max
console.log(Math.min(4, 6, 8, 9));    // gives. minimum value from all
                                      // OUTPUT - 4
    
console.log(Math.max(4, 6, 9, 7));    // gives maximum value from all
                                      // OUTPUT - 9 

// Random

console.log(Math.random())            // Gives random value between 0 and 1
                                      // OUTPUT - 0.4243252, 
                                      //          0.42415632,
console.log((Math.random() * 10)) + 1  // ((Math.random() * 10)) use too brackets to play safeeee and to do multipaction first then addition


// TO GET RANDOM VALUE BETWEEN 10 AND 20 

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min)

//🧩 Breakdown of the FormulaHere is how each piece works step-by-step:
// 🎲 Math.random()Generates a random decimal.Number is between 0 and 1.
// 📏 (max - min + 1)Calculates total numbers in range.20 - 10 + 1 equals 11.
// ✖️ Math.random() * 11Scales the random decimal.Range becomes 0 to 11.
// ➕ + minShifts the starting point.Range becomes 10 to 21.