// ================================
// LESSON 03: Objects in JavaScript
// Author: Sijan Sapkota
// ================================

// --- Creating an Object ---
const person = {
    name: "Sijan",
    age: 20,
    isStudent: true,
    hobby: "Sleeping"
};

// --- TODO 1: Print the full object ---
console.log(person);

// --- TODO 2: Access and print just the name and age ---
console.log(`The name is ${person.name} and age is ${person.age} `);

// --- TODO 3: Add a new property 'country' with your country name ---
// Print the updated object
person.country="Nepal";
console.log(person);

// --- TODO 4: Update the age to 21 ---
person.age=21;
// Print the updated object
console.log(person);

// --- TODO 5: Delete the 'isStudent' property ---
// Hint: delete person.isStudent

delete person.isStudent;
// Print the updated object
console.log(person);

// --- TODO 6: Loop through ALL properties using for...in ---
// Print each key and value like:
// name : Sijan
// age : 21
// hobby : Sleeping



for (let per in person){
    console.log(` ${per} : ${person[per]} `);
}

// --- TODO 7: Create an ARRAY of 3 person objects ---
// Each person has: name, age, country

let arr = [
    { name: "Rijan", age: 23, country: "Nepal" },
    { name: "Vijan", age: 29, country: "USA" },
    { name: "Pigeon", age: 3, country: "Italy" }
];

// Loop through and print each person's name and country
arr.forEach((ar)=>{
    console.log(`The name is ${ar.name} and country is ${ar.country} `);
});