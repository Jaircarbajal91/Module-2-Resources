function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
    // If so, it's already sorted: return

  // Pick the first value as the pivot
  let pivot = arr[0];
  let left = [];
  let right = [];
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
  for (let i = 1; i < arr.length; i++) {
    // every number larger (or equal ) than the pivot is to the right
    if (arr[i] < pivot) {
      left.push(arr[i])
    }
    if (arr[i] > pivot) {
      right.push(arr[i])
    }
  }
  // Recursively sort the left
  // Recursively sort the right
  let sortedLeft = quicksort(left)
  let sortedRight = quicksort(right)
  // Return the left, pivot and right in sorted order
  return sortedLeft.concat(pivot, sortedRight)
}


module.exports = [quicksort];
