/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
  You can use the functions that you have already written to help solve the other problems
*/

const each = (elements, cb) => {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

// each(['John','Jim'], sayHi)

// function sayHi (name) {
//   return 'Hello, ${name}';
// }

const map = (elements, cb) => {
  // Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const arr = [];
  each(elements, item => (arr.push(cb(item))));
  return arr;
};

const reduce = (elements, cb, startingValue) => {
  // Do NOT use .reduce to complete this function. 
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  let memo;
  if (startingValue) memo = startingValue;
  else memo = elements.shift();
  for (let i = 0; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
  return memo;
};

const find = (elements, cb) => {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) { return elements[i]; }
  }
  return undefined;
};

const filter = (elements, cb) => {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const arr = [];
  each(elements, (item) => {
    if (cb(item)) arr.push(item);
  });
  return arr;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
   // Flattens a nested array (the nesting can be to any depth).
   // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const arr = reduce(elements, (memo, item) => {
    if (Array.isArray(item)) return memo.concat(flatten(item));
    return memo.concat(item);
  }, []);
  return arr;
};

// Again, I pulled the solution for this off Google so I could figure out what was happening with the code.
// I'm getting better at reading it in plain-speak, I think.

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
