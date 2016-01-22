/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
 // determine if the target is the current index in binary search
 var currentIndex = Math.floor(array.length/2);
//if it is, then return the current index
if(array[currentIndex]===target){
  return currentIndex;
}else if(array[currentIndex]<target){
  //if it is less than the target, then slice everything from the current index and lower. 
  array = array.slice(currentIndex +1)
  //Call binarySearch again to search through the array
  return binarySearch();
}else if (array[currentIndex]>target){
//if it is greter than the target, then slice everything from the current index and lower. 
  //Call binarySearch again to search through the array 
  array = array.slice(0, currentIndex);
  return binarySearch();
} 
  
};