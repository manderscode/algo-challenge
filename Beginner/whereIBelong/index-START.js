/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

//P: array and number
// R: a number (where it is inserted and once it has been sorted)
// E: whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
// than 1(index 0), but less than 2(index 1).

//P: push the number so it's in your array 
// utilize the 

function whereIBelong(arr, num) {
   //find my place in the sorted array
   // add num to the given array
  arr.push(num); 

  //sort the new array 
  // a and b are coming from the array 
  // ex: 1 and 2 and we did 1-2 = -1 which means that a comes before b 
  arr.sort(function (a,b) {
   return a-b
})
// return index value of the added num in our array
return arr.indexOf(num)
}

module.exports = whereIBelong