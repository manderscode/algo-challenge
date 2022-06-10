/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla' - THESE ARE THE WRONG INSTRUCTIONS 
*/

 //P: 
 // R: 
 //E: 
 //P: function that returns the longest word in sentence
 //return as a single string
 // split the sentence
 // loop through the length of each word
 // return word with reversed string

function longestWord(text) {
    let newText = text.split(' ') // space in .split (' ') b/c you're splitting each word and not each letter
    let longest = ''

    for(let i = 0; i < newText.length; i++){
        if(newText[i].length > longest.length){
            longest = newText[i]
        }
    }
    return longest
}

// explanation for code above: //d-u-c-k= 4 > 0 = condition met
//     max = 4
//     maxChar =4
//    //loop around to the next word in the string
//     //duckling
//     //d-u-c-k-l-i-n-g =8 >4 condition met
//     max = 8
//     maxChar =8
    //loop around to next word
    //tea
    // t-e-a 3 > 8 CONDITION NOT MET
    // so code doesn't run maxChar stays 8
    //loop around to the next word in teh string
    //Tyrannosaurus
    //T-y-r-a-n-n-o-s-a-u-r-u-s =13 letters > 8 letters condition met
    // max = 13
    // maxChar =13



module.exports = longestWord