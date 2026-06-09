
//LECTURE 4:

// 4.3 Understand Request Object

// // Simple NodeJS server
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// Use the browser to access:
// http://localhost:3000/ 
// http://localhost:3000/products


// NOTE : jub hum apna server chlyaga aur browser mai port ka aga kuch bhe likhyga to ya hamara console mai GET ke jagha likh ka a jayga.

//------------------------------------------------------------------------------------------------------------

// Simple NodeJS server:

// const http = require('http');

// const server = http.createServer((req, res) => {// haimna req kya bheji aur haimna kya milaga..
//     //res.setHeader('Content-Type', 'json');
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head>');
//     res.write('<body><h1>Like / Share / Subscribe</h1></body>');
//     res.write('</html>');
//     res.end();
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });



// 🛠️ Overview:

// This is a basic HTTP server setup using Node.js.

// It responds with a simple HTML page.

// The Content-Type header specifies the response format as text/html.


//------------------------------------------------------------------------------------------------------------


// NODE LIFECYCLE AND EVENT LOOP...

// 1. Request Comes

// User sends request to Node.js server.

// Example:

// Open website
// API call
// Read file
// User → Node.js
// 2. Request Goes to Event Queue

// All requests wait in:

// Event Queue

// Like people waiting in a line.

// 3. Event Loop Checks Queue

// The Event Loop continuously checks:

// “Which request is ready?”

// Then it processes the request.

// 4. Heavy Tasks Go to Thread Pool

// Heavy work is sent to:

// Thread Pool

// Examples:

// Database
// File system
// Network/API

// Because these tasks take time.

// 5. Thread Pool Completes Work

// Background threads do the work separately.

// Node.js main thread stays free.

// That is why Node.js is fast.

// 6. Completed Task Returns

// After task finishes:

// Thread Pool → Event Queue

// Callback comes back.

// 7. Event Loop Executes Callback

// Event loop runs completed callback.

// Example:

// console.log("File Read Complete");
// 8. Response Sent to User

// Finally result goes back to user.

// Node.js → User


// SIMPLE FLOW DIAGRAM..

Request
   ↓
Event Queue
   ↓
Event Loop
   ↓
Thread Pool (Heavy Work)
   ↓
Completed Task
   ↓
Event Loop
   ↓
Response

//-------------------------------------------------------------------------------------------------------------

//HUM apna url ka agYA port ka bad kuch bhe dalta ha to yai same he output deta tha ..
// ab hum dkha gee ke yadi url change kra to output bhe change hona chyia..

// ROUTING REQUEST:


// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head>');

//     if (req.url === '/') {
//         res.write('<h1>Welcome to Home page</h1>');
//         res.end();
//     } else if (req.url.toLowerCase() === '/products') {
//         res.write('<h1>Products</h1>');
//         res.end();
//     }

//     res.write('<body><h1>Like / Share / Subscribe</h1></body>');
//     res.write('</html>');
//     res.end();
// });


//-------------------------------------------------------------------------------------------------------

// TAKING USER FROM INPUT..

// if (req.url === '/') {
//     res.write('<h1>Welcome to Home page</h1>');
//     res.write('<form action="/submit-details" method="POST">');
//     res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');
//     res.write('<label for="gender">Gender:</label>');
//     res.write('<input type="radio" id="male" name="gender" value="male">');
//     res.write('<label for="male">Male</label>');
//     res.write('<input type="radio" id="female" name="gender" value="female">');
//     res.write('<label for="female">Female</label><br><br>');
//     res.write('<button type="submit">Submit</button>');
//     res.write('</form>');
//     return res.end();
// }

//----------------------------------------------------------------------------------------------------------------------------------


// REDIRECTING REQUEST..
//jsha hama apna page submit kr aur phir ya muja dubara se home page par le jata hai isa redirecting bolte hai.

// else if (req.method == 'POST' && 
//          req.url.toLowerCase() === '/submit-details') {
//     fs.writeFileSync('user-details.txt', 'Prashant Jain');
//     res.statusCode = 302;// random khai code mai haima resourse code likhna hota hai to 404 de deta hai ..khai tumna dkha ho to..
//     res.setHeader('Location', '/');
//     return res.end();
// }
