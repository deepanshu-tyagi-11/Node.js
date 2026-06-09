// RUN & OBSERVE..

//1.) blocking vs synchronously..

const fs = require('fs');

console.log('1. Start of script');

// Synchronous (blocking) operation
console.log('2. Reading file synchronously');
const dataSync = fs.readFileSync('user-details.txt', 'utf8');
console.log('3. Synchronous read complete');

// Asynchronous (non-blocking) operation
console.log('4. Reading file asynchronously');
fs.readFile('user-details.txt', 'utf8', (err, dataAsync) => {
    if (err) throw err;
    console.log('6. Asynchronous read complete');
});

console.log('5. End of script');

// haima dkhna hai kon sa line phela run hoygi..

// 1 - 2 - 3 -4 - 5- 6;


// 2.) Event loop Sequence.
console.log('1. Start of script');

// Microtask queue (Promise)
Promise.resolve().then(() => console.log('2. Microtask 1'));

// Timer queue
setTimeout(() => console.log('3. Timer 1'), 0);

// I/O queue
const fs = require('fs');
fs.readFile('user-details.txt', () => console.log('4. I/O operation'));

// Check queue
setImmediate(() => console.log('5. Immediate 1'));

// Close queue
process.on('exit', (code) => {
  console.log('6. Exit event');
});

console.log('7. End of script');


// 1--7--2--3--5--4--6
// 2 phela islyia aya kuki microtask ke priority jadya hoti ha settimeout see.
// 5 -- 4  basically inka order change ho sakta hai .. depending on fileoperatin na kitna time lia hai.yaha 5 4 se phela islyia assume kr lia ke file na kuch time lia hoga chlna maii.. islia islyia 4 ko baad mai le lia..