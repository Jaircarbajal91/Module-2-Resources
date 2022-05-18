
function bubbleSort(arr) {

  // Iterate through the array
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;
    for (let i = 0; i < arr.length; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        hasSwapped = true
        console.log(arr.join(","));
      }
        // Do not move this console.log
    }
    // If you get to the end of the array and no swaps have occurred, return
    if (!hasSwapped) return arr;
  }
  return arr;
  // Otherwise, repeat from the beginning

}

let arr = [2,4,6,8,1,3,5,7,9];
console.log(bubbleSort(arr))

module.exports = bubbleSort;
