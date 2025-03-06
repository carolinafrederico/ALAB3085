// Take an array of numbers and return the sum.

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
function addSum(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
 total = total+array[i]      
    }
    return total
}
console.log(addSum(nums))

// Take an array of numbers and return the average.
function avaSum(array) {
    return addSum(array) / array.length
}
console.log(avaSum(nums))

// Take an array of strings and return the longest string.

