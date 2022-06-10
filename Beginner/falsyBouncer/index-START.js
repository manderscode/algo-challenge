/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/
//example of a constant time

//P: array 
// R: an array of only truthy values
// E: E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
//P: create a new variable to utilize the filter method
  // then use the array passed in as the original parameter and utilize the filter method and assign it to the  
  // filter method creates a new array with all elements that pass the test implemented by the provided function
  //Boolean - if it's truthy or falsy -

function falsyBouncer(array) {
  //create a new variable in order to utilize the filter method
  // then use the array passed in as the original parameter and utilize the filter method and assign it to the filter array variable 
  // filter method creates a new array with all elements that pass the test implemented by the provided function
  // strings and #s will always be truthy b/c they contain values 
  //Boolean - if it's truthy or falsy -
  let filterArray = array.filter(Boolean); 
  return filterArray;
}

module.exports = falsyBouncer;
