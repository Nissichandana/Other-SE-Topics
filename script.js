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

// let x = 4%3
//console.log(x);

// 2. Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion. 

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
//console.log(`The GCD of ${number1} and ${number2} is: ${result}`);

// 3. Write a JavaScript program to get integers in the range (x, y) using recursion.

function getRange(x, y, result = []) {
    if (x >= y-1) {
      return result;
    }
  
    result.push(x+1);
    return getRange(x + 1, y, result);
  }
  
  // Example usage:
//   const x = 5;
//   const y = 12;
  const resultArray = getRange(2, 9);
//   console.log(resultArray);


// 4. Write a JavaScript program to compute the sum of an array of integers.

function computeSum(array) {
    // Using the reduce function to sum up the array elements
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  }
  
  // Example usage:
  const integerArray = [1, 2, 3, 4, 5];
  const resultSum = computeSum(integerArray);
 // console.log("Sum:", resultSum);


// 5. Write a JavaScript program to compute the exponent of a number.  

function computeExponent(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * computeExponent(base, exponent - 1);
    }
  }
  
  // Example usage:
  const baseNumber = 2;
  const exponentValue = 3;
  const resultExponent = computeExponent(baseNumber, exponentValue);
//   console.log(`${baseNumber}^${exponentValue} =`, resultExponent);


// 6. Write a JavaScript program to get the first n Fibonacci numbers.  
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

function generateFibonacci(n) {
    const fibonacciNumbers = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
      fibonacciNumbers.push(nextNumber);
    }
  
    return fibonacciNumbers;
  }
  
  // Example usage:
  const n = 8;
  const fibonacciSequence = generateFibonacci(n);
//   console.log(`First ${n} Fibonacci numbers:`, fibonacciSequence);


// 7. Write a JavaScript program to check whether a number is even or not.
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Example usage:
  const testNumber = 6;
  if (isEven(testNumber)) {
   // console.log(`${testNumber} is even.`);
  } else {
   // console.log(`${testNumber} is not even.`);
  }

// 8. Write a JavaScript program for binary search.

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] === target) {
//         return mid; // Target found, return its index
//       } else if (arr[mid] < target) {
//         left = mid + 1; // Target is in the right half
//       } else {
//         right = mid - 1; // Target is in the left half
//       }
//     }
  
//     return -1; // Target not found in the array
//   }
  
//   // Example usage:
//  // const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const targetValue = 5;
//   //const resultIndex = binarySearch(sortedArray, targetValue);
  
//   if (resultIndex !== -1) {
//     //console.log(`${targetValue} found at index ${resultIndex}.`);
//   } else {
//     //console.log(`${targetValue} not found in the array.`);
//   }


// 9. Write a merge sort program in JavaScript.  
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    // Recursively sort the two halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add remaining elements from both halves
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage:
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
//   const sortedArray = mergeSort(unsortedArray.slice()); // Make a copy to keep the original array unchanged
  //console.log("Unsorted array:", unsortedArray);
  //console.log("Sorted array:", sortedArray);


// 10. Write a JavaScript program to check whether a given string is a palindrome or not using recursion.  
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama".
// Test Data:
// ("madam") -> true
// ("abdb") -> false
// ("ab") -> false
// (test("a") -> true
function isPalindrome(str) {
    // Base case: empty string or single-character string is a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters are the same
    if (str[0] === str[str.length - 1]) {
      // Recursively check the substring without the first and last characters
      return isPalindrome(str.slice(1, -1));
    } else {
      return false; // Not a palindrome
    }
  }
  
  // Example usage:
  const testString1 = "radar";
  const testString2 = "hello";
  
  //console.log(`${testString1} is a palindrome: ${isPalindrome(testString1)}`);
  //console.log(`${testString2} is a palindrome: ${isPalindrome(testString2)}`);


// 11. Write a JavaScript program to convert binary number (positive) to decimal number using recursion. 

function binaryToDecimal(binaryString) {
    // Base case: empty string or single-digit string
    if (binaryString.length <= 1) {
      return parseInt(binaryString, 2);
    }
  
    // Recursive case: convert the binary number excluding the last digit
    const binarySubstring = binaryString.slice(0, -1);
    const lastDigit = parseInt(binaryString[binaryString.length - 1], 2);
  
    return 2 * binaryToDecimal(binarySubstring) + lastDigit;
  }
  
  // Example usage:
  const binaryNumber = "101010";
  const decimalNumber = binaryToDecimal(binaryNumber);
  
//   console.log(`Binary: ${binaryNumber}`);
//   console.log(`Decimal: ${decimalNumber}`);


// 12. Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary Search Algorithm and recursion. 

function binarySearchRecursive(arr, target, left, right) {
    if (left > right) {
      return -1; // Target not found
    }
  
    const mid = Math.floor((left + right) / 2);
  
    if (arr[mid] === target) {
      return mid; // Target found, return its index
    } else if (arr[mid] < target) {
      // Target is in the right half
      return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
      // Target is in the left half
      return binarySearchRecursive(arr, target, left, mid - 1);
    }
  }
  
  // Wrapper function for simplicity
  function binarySearch(arr, target) {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
  }
  
  // Example usage:
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetValue = 5;
  const resultIndex = binarySearch(sortedArray, targetValue);
  
  if (resultIndex !== -1) {
    // console.log(`${targetValue} found at index ${resultIndex}.`);
  } else {
    // console.log(`${targetValue} not found in the array.`);
  }
// Test Data:
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6) -> 4
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16) -> -1


// 13. A string consists of digits ranging from 2 to 9, inclusive. Write a JavaScript program to get all possible letter combinations that represent the number using recursion.  
// Test Data:
// ("12") -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
// ("9") -> ["y", "z"]

function letterCombinations(digits) {
    if (!digits || digits.length === 0) {
      return [];
    }
  
    const digitMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
  
    function generateCombinations(currentIndex, currentCombination) {
      if (currentIndex === digits.length) {
        result.push(currentCombination);
        return;
      }
  
      const currentDigit = digits[currentIndex];
      const letters = digitMap[currentDigit];
  
      for (let i = 0; i < letters.length; i++) {
        generateCombinations(currentIndex + 1, currentCombination + letters[i]);
      }
    }
  
    const result = [];
    generateCombinations(0, '');
  
    return result;
  }
  
  // Example usage:
  const inputDigits = '23';
  const combinations = letterCombinations(inputDigits);
  //console.log(`Letter combinations for ${inputDigits}:`, combinations);




  //Implement a Stack using two queues q1 and q2.

  class StackUsingQueues {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    // Push operation
    push(item) {
      // Enqueue the item to q1
      this.q1.push(item);
    }
  
    // Pop operation
    pop() {
      if (this.q1.length === 0) {
        // If q1 is empty, no elements to pop
        return null;
      }
  
      // Move all elements from q1 to q2 except the last one
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
  
      // Pop the last element from q1 (simulating pop from the stack)
      const poppedItem = this.q1.shift();
  
      // Swap the names of q1 and q2 for the next operation
      [this.q1, this.q2] = [this.q2, this.q1];
  
      return poppedItem;
    }
  }
  
  // Example usage:
  //const stack = new StackUsingQueues();
  
//   stack.push(1);
//   stack.push(2);
//   stack.push(3);
  
//   console.log(stack.pop()); // Output: 3
//   console.log(stack.pop()); // Output: 2
//   console.log(stack.pop()); // Output: 1
//   console.log(stack.pop()); // Output: null (stack is empty)




//   Implement a Queue using 2 stacks s1 and s2 .
// A Query Q is of 2 Types
// (i) 1 x (a query of this type means  pushing 'x' into the queue)
// (ii) 2   (a query of this type means to pop element from queue and print the poped element)

// Note :- If there is no element return -1 as answer while popping.

  class QueueUsingStacks {
    constructor() {
      this.s1 = [];
      this.s2 = [];
    }
  
    // Enqueue operation (Type 1 query)
    enqueue(x) {
      this.s1.push(x);
    }
  
    // Dequeue operation (Type 2 query)
    dequeue() {
      if (this.s2.length === 0) {
        // If s2 is empty, transfer elements from s1 to s2
        while (this.s1.length > 0) {
          this.s2.push(this.s1.pop());
        }
      }
  
      if (this.s2.length === 0) {
        // If both stacks are empty, the queue is empty
        return -1;
      }
  
      // Pop from s2 (simulating dequeue from the queue)
      return this.s2.pop();
    }
  }
  
  // Example usage:
  const queue = new QueueUsingStacks();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
//   console.log(queue.dequeue()); // Output: 1
//   console.log(queue.dequeue()); // Output: 2
//   console.log(queue.dequeue()); // Output: 3
//   console.log(queue.dequeue()); // Output: -1 (queue is empty)



// Given an expression string x. Examine whether the pairs and the orders of {,},(,),[,] are correct in exp.
// For example, the function should return 'true' for exp = [()]{}{[()()]()} and 'false' for exp = [(]).

// Note: The drive code prints "balanced" if function return true, otherwise it prints "not balanced".

  function isBalanced(expression) {
    const stack = [];
    const openingBrackets = '({[';
    const closingBrackets = ')}]';
  
    for (let i = 0; i < expression.length; i++) {
      const currentBracket = expression[i];
  
      if (openingBrackets.includes(currentBracket)) {
        // If it's an opening bracket, push it onto the stack
        stack.push(currentBracket);
      } else if (closingBrackets.includes(currentBracket)) {
        // If it's a closing bracket, check if it matches the top of the stack
        const topOfStack = stack.pop();
  
        if (!topOfStack || openingBrackets.indexOf(topOfStack) !== closingBrackets.indexOf(currentBracket)) {
          // If the stack is empty or the brackets don't match, the expression is not balanced
          return false;
        }
      }
    }
  
    // After iterating through the expression, the expression is balanced if the stack is empty
    return stack.length === 0;
  }
  
  // Example usage:
  const expression1 = "[()]{}{[()()]()}";
  const expression2 = "[(])";
  
//   console.log(isBalanced(expression1) ? "true" : "false"); // Output: balanced
//   console.log(isBalanced(expression2) ? "true" : "false"); // Output: not balanced



// You are given N elements and your task is to Implement a Stack in which you can get a minimum element in O(1) time.

class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    // Push operation
    push(value) {
      this.stack.push(value);
  
      // Update the minimum stack
      if (this.minStack.length === 0 || value <= this.getMin()) {
        this.minStack.push(value);
      }
    }
  
    // Pop operation
    pop() {
      if (this.stack.length === 0) {
        return null;
      }
  
      const poppedValue = this.stack.pop();
  
      // Update the minimum stack
      if (poppedValue === this.getMin()) {
        this.minStack.pop();
      }
  
      return poppedValue;
    }
  
    // Get the minimum element
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
  
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage:
  const stack = new MinStack();
  
  stack.push(3);
  stack.push(5);
  console.log("Current minimum:", stack.getMin()); // Output: 3
  
  stack.push(2);
  stack.push(1);
  console.log("Current minimum:", stack.getMin()); // Output: 1
  
  stack.pop();
  console.log("Current minimum:", stack.getMin()); // Output: 2
  