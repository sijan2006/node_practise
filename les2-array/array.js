// ================================
// LESSON 02: Arrays in JavaScript
// Author: Sijan Sapkota
// ================================

// --- Creating Arrays ---
const fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits:", fruits);

// --- TODO 1: Create an array of 5 numbers ---

const nums=[1,2,3,4,5];

// --- TODO 2: Access the FIRST and LAST element ---
console.log(`The first element is ${nums[0]} and last element is ${nums[4]}`);

// --- TODO 3: Add an item to the END using .push() ---
nums.push(6);
console.log("Numbers:", nums);

// --- TODO 4: Remove the LAST item using .pop() ---
nums.pop();
console.log("Numbers:", nums);

// --- TODO 5: Loop using .forEach() ---
console.log("Numbers:");
nums.forEach(num => {
    console.log(num);
});

// --- TODO 6: Use .map() to double every number ---

let num2=nums.map((num)=>num*2);
console.log("Numbers doubled :", num2);

// --- TODO 7: Use .filter() to keep numbers greater than 3 ---
let num3=nums.filter((num)=>num>3);
console.log("Numbers filtered :", num3);