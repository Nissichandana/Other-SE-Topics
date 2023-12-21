// 1. Write a JavaScript program to calculate the factorial of a number.  
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
//console.log(factorial(0));

for (let i = 1; i <= 7; i++) {
    //console.log('@'.repeat(i));
}

let x = 4%3
//console.log(x);

function gcdRecursive(a, b) {
    // Base case: GCD(a, 0) = a, GCD(0, b) = b
    if (b === 0) {
        return a;
    } else {
        // Recursive case: GCD(a, b) = GCD(b, a % b)
        return gcdRecursive(b, a % b);
    }
}

// Example usage:
const number1 = 2154;
const number2 = 458;

const result = gcdRecursive(number1, number2);
console.log(`The GCD of ${number1} and ${number2} is: ${result}`);