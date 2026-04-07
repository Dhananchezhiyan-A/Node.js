// const arr=[1,[5,2,1,1],5,[5,5,[6],8],9,[2,2]]
const arr=[5,9,8,7,5,8,6,4,8,5,65,56,58,2,10,45,78]
// const arr=[1,5,9,77]

// Add / Remove

// push() – Adds element(s) to the end
// arr.push(10);
// console.log(arr)

// pop() – Removes last element
// arr.pop();
// console.log(arr)

// unshift() – Adds element(s) to the beginning
// arr.unshift(20)
// console.log(arr)

// shift() – Removes first element
// arr.shift()
// console.log(arr)

// Search

// indexOf() – Returns index of element
// console.log(arr.indexOf(9))

// lastIndexOf() – Returns last index of element
// console.log(arr.lastIndexOf(1))

// includes() – Checks if element exists (true or false)
// console.log(arr.includes(2))

// find() – Returns first matching element
// const y = arr.find(x=>x===5)
// console.log(y)

// findIndex() – Returns index of first match
// const y=arr.findIndex(x=>x===5)
// console.log(y)

// 3. Looping Methods

// findIndex() – Returns index of first match
// const y=arr.findIndex(x=>x===5/2.5)
// console.log(y)

// Loop / Transform
// arr.forEach(x=>console.log(x))

// map() – Returns new array after transformation
// const y = arr.map(x=>x*2)
// console.log(y)

// filter() – Returns elements that match condition
// const y = arr.filter(x=>x===5)
// console.log(y)

// reduce() – Reduces array to single value
// const y= arr.reduce((a,b) =>a+b)
// console.log(y)

// reduceRight() – Same as reduce but right to left
// const y= arr.reduceRight((a,b) =>a+b)
// console.log(y)

// Modify / Extract

// splice() – Adds/removes elements in place
// const y = arr.splice(1,5)
// console.log(y)
// console.log(arr)

// slice() – Returns a shallow copy of part
// const y = arr.slice(3)
// console.log(y)
// console.log(arr)

// concat() – Merges arrays
// const y = arr.concat(100,800)
// console.log(y)

// flat() – Flattens nested arrays
// console.log(arr.flat())

// flatMap() – Map + flatten combined
// console.log(arr.flatMap(x=>[x,x*2]))


// 5. Sorting & Reversing

// sort() – Sorts array elements
// console.log(arr.sort())

// reverse() – Reverses array order
// console.log(arr.reverse())


// Convert

// join() – Converts array to string with separator
// console.log(arr.join("-"));

// toString() – Converts array to comma string
// console.log(arr.toString())


// Check / Condition

// every() – Checks if all elements pass
// console.log(arr.every(x=>x%2!=0))

// some() – Checks if any element passes
// console.log(arr.some(x=>x%2===0))


// Create / Static


// Array.from() – Creates array from iterable
// console.log(Array.from("hello world"))

// Array.of() – Creates array from arguments
// console.log(Array.of(1,5,100,8,8,8,8,5,5,5,8,8,8,8,96))

// Array.isArray() – Checks if value is array
// console.log(Array.isArray([4,8,7,87,7,54,8,5,88,8,85,8,85,85,58,85,58,58,58,5]))
// console.log(Array.isArray(arr))


// Access


// at() – Gets element using index (supports negative)
// console.log(arr.at(-3))

// Fill / Copy


// fill() – Fills array with static value
//  fill(value, start, end)

//  Fills array with a value from start → end (not included)
// value → what to fill
// start → start index (default = 0)
// end → end index (not included)
// arr.fill(1000,1,10)
// console.log(arr)


// copyWithin() – Copies part of array inside itself
// copyWithin(target, start, end)

//  Copies part of array and pastes it inside same array

// target → index to paste
// start → index to copy from
// end → stop (not included)

// const a=["fd","gfre",'frew',"gfgre",85985,52,"hkmjhgg",'jhgfd']
// a.copyWithin(4,5)
// console.log(a)