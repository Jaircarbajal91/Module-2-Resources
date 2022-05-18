

function selectionSort(arr) {

  // Copy the original array
  const copy = [...arr];
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty...
  while (copy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));
    let minIndex = 0;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] < copy[minIndex]) minIndex = i;
    }
    let value = copy.splice(minIndex, 1)[0];
    sorted.push(value)
  }
  return sorted;

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while(divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) minIndex = i;
    }
    let value = arr[minIndex];
    for (let i = minIndex; i >= divider; i--) {
      arr[i] = arr[i - 1]
    }
    arr[divider] = value;
    divider++
  }

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat
    return arr;

}


module.exports = [selectionSort, selectionSortInPlace];
