// ================================
// LESSON 06: Promises
// Author: Sijan Sapkota
// ================================

// --- EXAMPLE: Creating a Promise ---
// A Promise takes a function with two parameters:
//   - resolve: call this when everything went well ✅
//   - reject: call this when something went wrong ❌

const myFirstPromise = new Promise(function(resolve, reject) {
    // Simulate waiting 2 seconds (like fetching data)
    setTimeout(function() {
        resolve("Data arrived successfully!");
    }, 2000);
});

// Use .then() to handle success
// Use .catch() to handle errors
myFirstPromise
    .then(function(data) {
        console.log("Success:", data);
    })
    .catch(function(err) {
        console.log("Error:", err);
    });

console.log("This prints FIRST because Promise is async!");

// ================================

// --- TODO 1: Create a Promise that REJECTS ---
// Create a Promise called 'failedPromise'
// Inside it, call reject("Something went wrong!")
// Handle it with .catch() and print the error message

const rejectpromise=new Promise(function(resolve,reject){

    setTimeout(function(){

        reject("Data rejected");
        
    }, 2000);
});
rejectpromise.then(function(data){
    console.log("Success",data);
})
.catch(function(err){
    console.log("Failure:",err);
});




// --- TODO 2: Create a function that returns a Promise ---
// Create a function called 'checkAge'
// It takes 'age' as a parameter
// It returns a Promise that:
//   - resolves with "Welcome! You are allowed." if age >= 18
//   - rejects with "Sorry! You are too young." if age < 18
//
// Call it like this:
// checkAge(20)
//     .then(function(message) { console.log(message); })
//     .catch(function(message) { console.log(message); });
//
// Call it twice - once with 20, once with 15
function checkAge(age){
    return new Promise(function(resolve,reject){
        if(age>=18){
            resolve("Welcome! you are allowed");
        }
        else{
            reject("Sorry! You are too young.");
            
        }
    });
}
checkAge(15).then(function(message){
    console.log("Access Granted:",message);

}).catch(function(message){
    console.log("Access Denied:",message);
});
checkAge(20).then(function(message){
    console.log("Access Granted:",message);

}).catch(function(message){
    console.log("Access Denied:",message);
});







// --- TODO 3: Chaining Promises ---
// Create a function called 'step1' that returns a Promise
// It resolves with the number 10
//
// Chain it like this:
// step1()
//     .then(function(num) {
//         console.log("Step 1 result:", num);
//         return num * 2; // Pass data to next .then()
//     })
//     .then(function(num) {
//         console.log("Step 2 result:", num);
//         return num + 5;
//     })
//     .then(function(num) {
//         console.log("Step 3 result:", num);
//     });
//
// Expected output:
// Step 1 result: 10
// Step 2 result: 20
// Step 3 result: 25

function step1(num){
    return new Promise(function(resolve,reject){
        if(num==10){
            resolve(10);
        }
        else{
            reject("No is not 10 ");
        }
    });
}
step1(10).then(function(num){
    console.log("Step 1 result:",(num));
    return num*2;
}).then(function(num){
    console.log("Step 2 result:", num);
    return num+5;
}).then(function(num){
    console.log("Step 3 result:", num);
});


