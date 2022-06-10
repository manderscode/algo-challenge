/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/
//P: 2 strings
// R: return a boolean 
// E: isAnagram('silent', 'listen') // should return true
// P: 



function isAnagram(stringA, stringB) { 
        // Code goes here
        // function should return boolean
        // check and compare lengths
        // sort the strings
        // compare the two sorted strings
          //Check if the two strings have different lengths
          if (stringA.length !== stringB.length) {
            return false;
        }
        
        //Sort the two strings, split, and sort the letters in ascending alphabetical order, then join them together
        let s1 = stringA.split('').sort().join('');
        let s2 = stringB.split('').sort().join('');
        //Compare the two sorted strings
        return (s1 === s2);
    }


module.exports = isAnagram