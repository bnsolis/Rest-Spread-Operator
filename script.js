// Filter Out Odds using Rest & Arrow:

// function accepts a variable number of arguments and then runs it through a filter to search for values that have a remainder of 0 when divided by 2.
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

// find Min using Rest & Spread

// function accepts  a variable number of arguments and uses the Math.min feature to return the lowest value.
const findMin = (...args) => Math.min(...args)

// Merge Objects

// function accepts 2 objects and returns a new object with the values of both.
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// Double and Return Args

// function accepts an array and additional arguements and then returns the initial values of the array and the additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => ([...arr, ...args.map(v => v * 2)])

// Slice and Dice

/** remove a random element in the items array
and return a new array without that item. */


const removeRandom = items => {
    // Math.floor rounds (Math.random (random value) * the length of items.)
    let index = Math.floor(Math.random() * items.length);
    // return an array that slices at Index and resumes at Index + 1
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {\
    // Accepts 2 arrays and returns new array with all items.
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    // Create variable to represent all items in obj.
    let newObj = {...obj}
    // newObj at the index of key is equal to the values.
    newObj[key] = val;
    // Return a new obj 
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}