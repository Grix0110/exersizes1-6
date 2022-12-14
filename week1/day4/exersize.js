// first exercise Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.

//If the first parameter is an object, it should loop over the object's properties and call the callback for each one. The property value should be the first parameter passed to the callback and the property name should be the second.

//If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second.

function each(objArr, callback) {
    if (objArr == typeof "array") {
        for (let i = 0; i < objArr.length; i++) {
            callback(objArr[i]);
        }
    } else {
        for (let key in objArr) {
            callback(objArr[key], key);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
);

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
});

//Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

function reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

var originalArray = [1, 2, 3];
var reversedArray = reverse(originalArray);

console.log(originalArray);
console.log(reversedArray);

//Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.

function getLessThanZero(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

var array = [1, 2, -1, -90, 12];

console.log(getLessThanZero(array));
