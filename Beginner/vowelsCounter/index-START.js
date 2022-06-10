/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//P: given a string of text
// R: return the number of vowels found within the text
// E: e.g vowelsCounter('anehizxcv') // will return 3
// P: set counter to 0
// declare variable to all vowels, lower and upperCase
// loop through the text letters and variable w/ vowels - 2 loops necessary
// compare to see if text contains any of the vowels using the comparison operators 



function vowelsCounter(text) {
        let vowelsCount = 0;
        let v = ["a","e","i","o","u","A","E","I","O","U"];
        
        for(let i = 0;i < text.length;i++){ //looping through each letter 
          
          for(let s=0;s<v.length;s++){ //"s" can be named anything and we're looping through the array to see if there is any vowels 
            
            if(text[i] === v[s]){ //if anything from text has any vowels = vowel count will increase 
              vowelsCount++;
            }
          }
        }
        
        return vowelsCount;
    }
module.exports = vowelsCounter;

// ITERATIVE APPROACH
//linear solution
// const vowels = ["a", "e", "i", "o", "u"]
// function vowelsCounter(text) {
//     // Initialize counter
//     let counter = 0;
//     // Loop through text to test if each character is a vowel
//     for (let letter of text.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             counter++
//         }
//     }
//     // Return number of vowels
//     return counter
// }

//This approach is liner b/c each time, the includes method is being run
// includes(searchElement)
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.