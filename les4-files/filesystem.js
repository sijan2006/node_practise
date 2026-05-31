// ================================
// LESSON 05: Filesystem (fs module)
// Author: Sijan Sapkota
// ================================

// Node.js has a built-in module called 'fs' (filesystem)
// We import it using require()
const fs = require('fs');

// --- TODO 1: Create and Write a file ---
// Use: fs.writeFileSync('filename.txt', 'content')
// Create a file called 'hello.txt' with the text "Hello from Node.js!"


//fs.writeFileSync("hello.txt","Hello from node js  ");

// Check your lesson-5 folder after running - you will SEE the file appear!

// --- TODO 2: Read a file ---
// Use: fs.readFileSync('filename.txt', 'utf-8')
// Read the 'hello.txt' file you just created
// Store it in a variable and print it


let text=fs.readFileSync("hello.txt",'utf-8');
console.log(text);




// --- TODO 3: Append to a file ---
// Use: fs.appendFileSync('filename.txt', 'new content')
// Add a second line to hello.txt: "\nThis is line 2"
// Read and print the file again to verify

fs.appendFileSync("hello.txt",'Added text here ');
let tex=fs.readFileSync("hello.txt",'utf-8');
console.log(tex);


// --- TODO 4: Check if a file exists ---
// Use: fs.existsSync('filename.txt')
// Check if 'hello.txt' exists -> print true or false
// Check if 'ghost.txt' exists -> print true or false

if(fs.existsSync('Hello.txt')){
    console.log("hello.txt exists");
}
else{
    console.log("hello.txt doesnt exists");

}
if(fs.existsSync('ghost.txt')){
    console.log("ghost.txt exists");
}
else{
    console.log("ghost.txt doesnt exists");

}




// --- TODO 5: Delete a file ---
// Use: fs.unlinkSync('filename.txt')
// Delete 'hello.txt'
// Check if it exists again -> should print false

fs.unlinkSync("hello.txt");
if(fs.existsSync('Hello.txt')){
    console.log("hello.txt exists");
}
else{
    console.log("hello.txt doesnt exists");

}
