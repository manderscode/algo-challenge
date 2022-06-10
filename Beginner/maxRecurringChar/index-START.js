/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

//P: a string of text
//R: return the most recurring character - a string 
// E: e.g maxRecurringChar('aabacada') // will return 'a'
// P:

function maxRecurringChar(text) {
// declare a variable to allow the frequency counter to start at 0
  let max = 0,
    maxChar = "";
    //apply the split method to the word/text we were given 
    //for each loops through each letter 
  text.split("").forEach(function (char) { 
      //if the split up text length is greater 
    if (text.split(char).length > max) { // confusion
        // console.log(text.split(char))
      max = text.split(char).length;
      console.log(max)
      maxChar = char;
    }
  });
  console.log(maxChar)
  return maxChar;
}

module.exports = maxRecurringChar;

//Kelly's method which is quadratic

// function maxRecurringChar(text) {
//     // parameters is string of text
//     // return the character that occurs the most
//     // example: e.g maxRecurringChar('abibnbtb') // will return 'b'
//     // psuedocode:
//     // set filtered array as text string
//     // set array as recurring char max

//     let textArray = text.split('')
//     let recurringArray = []
//     for (let i = 0; i < text.length;i++){
//         let filterArray = []
//         filterArray = textArray.filter(char => char === textArray[i])

//         if (recurringArray.length < filterArray.length){
//             recurringArray = filterArray
//         }
//     }
//     return recurringArray[0]
// }