/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
   // Code goes here
   // P: given a string containing two or more words 
   // R: a string w/ the equivalent of a sentence when capitalized
   // E: capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
   // P: we take the string and split it 
   // then we take each element and loop through to take the 0 index of each one
   // we use the uppercase method and then we join back with the join method

  let newText = text.toLowerCase().split(' ');
   for (let i=0; i< newText.length; i++){
     newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1); 
     // newText[i].charAt(0).toUpperCase() = capitalizing the first letter of each word
     // substring is taking everything after 0 index of the word
   }
   return newText.join(' ')
}

module.exports = capSentence