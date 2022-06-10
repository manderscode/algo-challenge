/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/
//P: we're given a sequence of numberos 
//R: value of n
//E: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]

//P: 
//declare the first variable to rep. the first num
// define a second variable to rep. the second num
// set the counter to 1 
// utilize the while loop
// your temporary num is set to 0
// temp = previous number + current number
// your previous number then becomes your current number
// your current number then becomes your temporary number so on and so forth 
// increment counter 


//n1 + n 2 = sum 
// 1 + 1 = 2  = sum 
// n1 = n2 
// 2 + 1 = 3 


function fibonacci(n) {
let previous = 0
let current = 1
let counter = 1

while (counter <= n) { 
    let temp = 0
    temp = previous + current
    previous = current
    current = temp
    
    counter++
}

return current

} 
module.exports = fibonacci;

// //original solution we were given
// function fibonacci(n) {
//     let [a, b] = [0, 1];
//     while (n-- > 0){
//         [a, b] = [b, a+b];
//     }
//     return b;
// }