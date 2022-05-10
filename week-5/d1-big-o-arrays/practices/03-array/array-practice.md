# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification:
TIME: We know where the end of the array is so time complexity will always be constant. No need to shift the other array elements
SPACE: We just push elements towards the end of the array. 1 operation

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification:
TIME: We know where the end of the array is so time complexity will always be constant. No need to shift the other array elements.
SPACE: We just removed the last element in the array. 1 Operation.


[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification:
TIME: We need to remove the first element and shift all other elements in the array to the left.
SPACE: We are just removing one element so only 1 operation.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification:
TIME: We are adding elements to the fron of the array and shifting the array to the right.
SPACE: We are adding elements to the front of the array, 1 operation.

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(1)
Justification:
TIME: We need to split on the index and worse case is that its in front or in the middle and have to shift elements to the right.
SPACE: We need to to only 1 operation

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification:
TIME: We need to add all elements from our desired slice index and place all elements in a new array
SPACE: We are placing n elements in a new array

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_
TIME:
SPACE:


[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
