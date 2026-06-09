
// Errors & Debugging:

// 🔍 1. Types of Errors
// Categorization of common programming errors for better understanding and debugging.

// ✏️ 2. Syntax Errors
// Mistakes in code structure or language rules that prevent execution. Example: Missing brackets, incorrect variable names.

// ⚙️ 3. Runtime Errors
// Occur during execution due to unexpected conditions. Example: Division by zero, file not found.
// do invalid operation..

// 🧠 4. Logical Errors
// Code runs without crashing but gives incorrect output. Example: Wrong formula or condition used.

// 🐞 5. Using the Debugger
// Essential for identifying root causes by stepping through code and inspecting variables.

// ⏳ 6. Debugger with Async Code
// Helps visualize flow and pinpoint errors in asynchronous operations like Promises and callbacks.

// 🔁 7. Restart Debug with nodemon
// Automatically restarts the server on code changes—streamlines debugging workflow

// TYPES OF ERRORS:

// // 🛠️ SYNTAX ERROR :

// // Occurs when there's a mistake in the code’s structure, preventing it from compiling or running. Example: Missing a semicolon or unmatched brackets.

//  🧠 LOGICAL ERROR:
//  The program runs but produces incorrect results due to flawed logic. Example: Using a wrong formula or condition.//  jsha ksi ka formula he glat likh dia hoo..

// let x = 5;
// if (x = 10) { // ❗ Mistake: assignment used instead of comparison// kuki yaha haimna single equal to laga dia.
//   console.log("x is 10"); // Unexpected output: always prints
// }

// 2.)
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length; i++) {// yaha haimna less then ka sign laga dia greater ke jagha..
//   console.log(arr[i]); // Last iteration logs: undefined
// }

// 3.)
// let num = "10";
// console.log(num + 5); // Output: 105 (string concatenation)



// ⚠️ RUN-TIME ERROR:
//   Happens while the program is running, often caused by invalid operations. Example: Division by zero or accessing a non-existent file.
//  mtlb kuch asha krna ka lia bol re hai jo glat hai arr computer ko bhe pta hai..

//  ex: console.log(x);
//  hama x pta he nhi ha kya hai.
// ex: let num = 57;
// Num();

// ex:
// const fs = require('fs');
// fs.readFileSync('nonexistentFile.txt');// invalid json single quotes.

// ex:
// const fs = require('fs');
// fs.readFileSync('nonexistentFile.txt');// file not found..


// //-----------------------------------------------------------------------------------------------------------------------

// // DEBUGGER:
// logical error ko solve krna ka lia debugger use krta hai..
// hum debug ke madada se apna code ko accha se debug kr sakta hai.. using some steps..
//---------------------------------------------------------------------------------------------------..

// TOOL :
// phir tool ata hai aur tool dkhna padta hai..

1.) Break point;
// break point lagana se code sirf yaha tuk he debugg hota hai.red color ke dott hoti hai..
// itna bada code ko debug kaisha krayga to haimna apna codde mai chota chota [BREAK] point laga ke error solve kr lega..
2.) pause button.
// ek pause button hota hai jis se ab break point ka aga ka bhe code chl jata hai..
3.)squre:
// yai kheta hai muja debugging nhi krni..


NOTE:

// yadi hum koi Asynch  codeko debug krta hai to haiman  har callback ka badd debugg points  lagana padta hai..
                                    // OPTIONAL:
Restart Debug with Nodemon :

haimna apna run mai ja kai or phir Add Configere mai yai teeno cheeja add krni padti hai tub hamara debug NODEMON ka use krta haii..


{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/node/test.js",
      //"restart": true,
      //"runtimeExecutable": "nodemon",
      //"console": "integratedTerminal"
    }
  ]
}