// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

 

// Example 1:

// Input: [1,2,3,3]
// Output: 3
// Example 2:

// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: [5,1,5,2,5,3,5,4]
// Output: 5
 

// Note:

// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even

// repeatedNTimes A

let repeatedTimes = A => {
    let dictionary = {};
    for(value in A){
        if(dictionary[A[value]]) dictionary[A[value]] = dictionary[A[value]] + 1;

        if(!dictionary[A[value]]) dictionary[A[value]] = 1;
        
    }
    let highestVal = 0;
    let name = '';
    for(key in dictionary){
        if(dictionary[key] > highestVal) {
            name = key;
            highestVal = dictionary[key];
        }
    }
    return parseInt(name);
}

console.log(repeatedTimes([1,2,3,3]));//3
console.log(repeatedTimes([2,1,2,5,3,2]));//2
console.log(repeatedTimes([5,1,5,2,5,3,5,4]));//5
