/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

//P: given a string of text
//R: 


function palindromeChecker(text) {
    let reversedText = text.toLowerCase()
    .split('').reverse().join('')

    return text === reversedText 
}



module.exports = palindromeChecker;