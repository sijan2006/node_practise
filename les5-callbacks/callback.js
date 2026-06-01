// ================================
// LESSON 05: Callbacks
// Author: Sijan Sapkota
// ================================

const fs = require('fs');

// --- EXAMPLE: Synchronous (Blocking) ---
// This WAITS for the file to be written before moving on
/*fs.writeFileSync('sync.txt', 'I was written synchronously');
console.log("1. File written (sync)");
console.log("2. This runs AFTER the file is written");

console.log("\n--- Now watch async ---\n");
*/

// --- TODO 1: Asynchronous (Non-Blocking) ---
// Use: fs.writeFile('filename', 'content', callback)
// The callback is a function that runs AFTER the file is done writing
// 
fs.writeFile('async.txt', 'I was written asynchronously', function(err) {
    if (err) {
       console.log("Error:", err);
    }
     console.log("4. File written (async)");
});
console.log("3. This runs BEFORE the file is written!");
//
// Uncomment the code above and run it
// Notice: "3" prints BEFORE "4" even though "4" comes first in code!

// --- TODO 2: Read a file asynchronously ---
// Use: fs.readFile('filename', 'utf-8', callback)
// Read 'sync.txt' asynchronously
// The callback receives (err, data)
// Print the data inside the callback

fs.readFile('sync.txt','utf-8', function(err,data) {
    if(err){
        console.log("error ",err);
    }
    console.log("file opened for todo 2 with data ",data);
});




// --- TODO 3: Write your own callback function ---
// Create a function called 'greet' that takes two parameters:
//   - name (string)
//   - callback (function)
// Inside greet:
//   - Print "Hello, " + name
//   - Then call the callback function
//
// Call greet like this:
// greet("Sijan", function() {
//     console.log("This runs after greeting!");
// });
function greet(name,callback){
    console.log("hello",name);
    callback();

}
greet("Sijan",function(){
    console.log("This is callback for greet function ")
});





// --- TODO 4: Callback with data ---
// Create a function called 'calculate'
// It takes three parameters:
//   - a (number)
//   - b (number)  
//   - callback (function)
// Inside calculate:
//   - Add a + b
//   - Pass the result INTO the callback: callback(result)
//
// Call it like this:
// calculate(5, 10, function(result) {
//     console.log("The answer is:", result);
// });

function calculate(a,b,callback){
    let result=a+b;
    callback(result);
}
calculate(2,3,function(result){
    console.log("result inside callback is ",result);
});

