function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
  /* Write an ES2015 Version */
  const filterOutOdd = (...args) => args.filter(num => num % 2 === 0)

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => {
    return {...obj1 , ...obj2}
}

const doubleAndReturnArgs = (arr, ...args) => {
    return [arr, ...args.map((val) => val * 2)]
}

/** remove a random element in the items array
and return a new array without that item. */

const removerandom = (items) => {
    let random = Math.floor(Math.random * items.length);
    return [...items.slice(0, random), ...items.slice(random + 1)]
}
/** Return a new array with every item in array1 and array2. */

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    return newObj[key] = val
}


/** Return a new object with a key removed. */

const removekey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

const update = (obj, key, value) => {
    let newObj = {...obj};
    newObj[key] = value;
    return newObj;
}