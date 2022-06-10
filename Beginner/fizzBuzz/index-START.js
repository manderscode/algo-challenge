/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/

//P: number
//R: we're rturning Fizz for numbers that are divisible by 3 
// E: for numbers divisible by 5, we're returning Buzz 
// for numbers which are multiples of both 3 and 5, we're returning "FizzBuzz"
// P: we can use a for loop to iterate through the numbers 
// and write out our conditionals for multiples of 3 = print out "Fizz"
// multiples fo 5, print out "Buzz"
// multiple of both 3 and 5, print "FizzBuzz"

// generally the problem is stated out loud and we are not given instructions, so to clarify, you can ask Q's such as "do you want the print to be lowercase or uppcase"?
function fizzBuzz(n) { 
    for(let i = 1; i <= n; i++) 
        if (i % 3 === 0 && i % 5 === 0) { 
        console.log ('fizzbuzz')       
    }else if (i % 3 === 0) { 
        console.log ('fizz') 
    }else if ( i % 5 === 0) { 
        console.log ('buzz') 
    }else { 
        console.log(i)
    }
    }





module.exports = fizzBuzz