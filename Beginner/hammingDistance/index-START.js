/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

//P: we're given 2 strings of equal length
// R: calculate and return the hamming distance 
// E: E.g hammingDistance('rover', 'river') // should return 1 - b/c i and o are different and that is the 1 difference between the 2 words 
//P: loop through each letter of each string and compare it to each other
// frequency pattern: going over a sequence of data and checking for a particular condition
//return 1 if not equal

function hammingDistance(stringA, stringB) {
        let diffCount = 0
    
        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i] !== stringB[i]) {
                diffCount += 1
            }
        }  
        return diffCount
    }

module.exports = hammingDistance