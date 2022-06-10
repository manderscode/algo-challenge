/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// function mergeArrays(...arrays) {
//     // spread syntax: ...
//     //...arrays = we don't know how many arrays are being passed in the parameters 
//     // spread syntax takes away the brackets from the 2 different arrays 

//     let jointArray = []
    
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array] // join the arrays together 
//     });

//     return [...new Set([...jointArray])]

    
// }

// USING .forEach(),.FILTER(), .indexOf()
// const array1 = [1, 2, 3, 4, 6];
// const array2 = [4, 5, 6, 2];
// const mergedArray = [
//     ...array1,
//     ...array2
//   ];
//   mergedArray;
//  [ 1, 2, 3, 4, 6, 4, 5, 6, 2] :point_left: :white_check_mark:

//spread operator takes a thing and balloons it up
// it takes an array and put it into this array 
// the spread operator takes an array and makes it into component parts 
// put the content of an array into an array and not arrays into arrays 
 function mergeArrays(...arrays) {
     let jointArray = []
     arrays.forEach(array => { 
         jointArray = [...jointArray, ...array]
     })
    //  === comparison operator is checking if index matches , if it doesn't match then it is filtered out
     const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
    // how does it  search and eliminating repeating #'s in the array?
    //  The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    //  filter((element, index) =>
    //  element
    //     The current element being processed in the array.
    //     index
    //     The index of the current element being processed in the array.
    //  The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present., so it would return only the first index of where each el/ item in the array is found first,
     return uniqueArray
 }
















module.exports = mergeArrays