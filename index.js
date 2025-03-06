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

const myString=["JavaScript", "is", "harder", "than", "life"]
function getLongestString(stringArray) {
let longestString=""
for (let index = 0; index < myString.length; index++) {
    if (stringArray[index].length > longestString.length){
        longestString=stringArray[index]
    }    
}
return longestString
}
console.log(getLongestString(myString))

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function longerArray(array, number) {
    let newArray=[];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > number) {
            newArray.push(array[i]);
        }
        }
        return newArray  
    }
    console.log(longerArray(myString, 3));

    // Take a number, n, and print every number between 1 and n without using loops. Use recursion.

    function printN(n) {
        if(n>0){
        printN(n-1);
        console.log(n + " ");    
        }
        
        return;
    }
    console.log(printN(7));