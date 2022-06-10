/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(n) {
  //Kelly's solution:
  let product = 1;
  for (let i = 1;i <= n;i++) {
    product *= i;
  }
  return product;
}

//Given Solution:
// memolization = prevents you from having to do a bunch of calculations a
// we're gonna do a lot of memolizations and we're gonna save the values of all the calculations so we don't have to do them again
// recursion is when a function calls itself and it's important to know when it ends or it will fuck up your computer
//     // if memo doesn't exist, make it an empty object
//     // you need memo to hold in whatever property
//     memo = memo || {}
//     if(memo[n]){
//         return memo[n]
//     }
//     if (n === 0) {
//         return 1
//     }
//     // where recursion is occurring
//     // n = 20
//     // memo [20] = 20 * factorial (20-1, memo)
//     return memo[n] = n * factorial(n - 1, memo) //memo is inside factorial parameters b/c we're calling it back to make it happen again

// }

module.exports = factorial;
