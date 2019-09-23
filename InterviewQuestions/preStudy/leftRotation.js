// A left rotation operation on an array shifts each of the array's elements  unit to the left.
//  For example, 
//  if  left rotations are performed on array , then the array would become .

let leftRotation = (a, d) => {
    for(let i = 0; i < d; i++){
        let element = a[0];
        a.splice(0, 1);
        a.splice(a.length, 0, element)
    }
    return a;
}

console.log(leftRotation([1,2,3,4,5], 2));
// this one doesnt use split
//  from user ragingwind
// function processData(n, k, input) {
//     const na = [];
    
//         k = k % n;
    
//         for (let i = 0; i < n; ++i) {
//             let pos = i - k;
    
//             if (pos < 0) {
//                 pos += n;
//             }
    
//             na[pos] = input[i];
//         }
    
//         console.log(na.join(' '));
//     }