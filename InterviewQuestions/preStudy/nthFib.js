// Nth Fibonacci
//     The Fibonacci sequence is defined as follows: 
//     the first number of the sequence is 0, 
//     the second number is 1,
//     and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. 
//     Write a function that takes in an integer n and returns the nth Fibonacci number.
// Sample input: 6
// Sample output: 5 (0, 1, 1, 2, 3, 5)

let nthFib = (size) => {
    let sequence = [0,1];
    for(let i = 2; i < size; i++){
        sequence.push((sequence[i - 1]) + (sequence[i - 2]));
    }
    return sequence[sequence.length - 1];
}

// recursive version

let nthFibRe = (size) => {
    if(size === 2){
        return 1;
    } else if (size === 1){
        return 0;
    } else {
        return nthFibRe(size-1) + nthFibRe(size -2);
    }
}

console.log(nthFib(17));
console.log(nthFibRe(17));
