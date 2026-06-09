console.log("Deepanshu is the best");


const fs=require('fs'); // Importing the built-in 'fs' module
fs.writeFile('output.txt', 'writing file', (err) => {      // file ka nam de dia output.txt
    if (err) console.log ('error a gya');            // Error handling
    console.log('file written successfully');         // Confirmation message
});