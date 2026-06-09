// 🧠 Executing First .js File:

// CODE
const fs = require('fs');           // Importing the built-in 'fs' module// fs is a file ..

let a = 10;                         // Declare variable 'a' with value 10
let b = 5;                          // Declare variable 'b' with value 5

let sum = a + b;                    // Calculate sum of a and b
let product = a * b;                // Calculate product of a and b

let data = `Sum: ${sum}\nProduct: ${product}`;   // Prepare formatted string

console.log(data);                  // Print data to console

fs.writeFile('output.txt', data, (err) => {      // Write data to a file
    if (err) throw err;            // Error handling
    console.log('Data written to file');         // Confirmation message
});



//---------------------------------------------------------------------------------------------------------------

// - Streamlined Node Command
// Run your JavaScript file with:
// node filename.js

// - Require Syntax
// Use the require('module') function to import built-in or external modules.
// require kiss traha se module ko include krta hai.

// - Modular Code
// Using require helps separate concerns and make code reusable and maintainable.
// mtlb alag alag traha ka code ko hum use kr sakta haii.

// - Caching
// Modules are cached after the first load—executed only once, even if required multiple times.
// This improves performance by avoiding repeated loading of the same module.



//----------------------------------------------------------------------------------------------------------
//  Key Features:

//WHAT IS REPL..[READ   EVALUATE/RUN  PRINT   LOOP  ]..

// - Streamlines Interactive Shell
// Executes JavaScript code interactively.
// - Quick Testing
// Ideal for testing and debugging code snippets on the fly.
// - Built-in Help
// Access help via the .help command.
// - Session Management
// Save with .save and load with .load.
// - Node.js API Access
// Offers direct access to Node.js APIs for experimentation.
// - Customizable
// Change prompt and behavior settings to fit your needs.


//-------------------------------------------------------------------------------------------------------------------------
// DNS Works:

// - Domain Name Entry
// User types a domain (e.g., www.example.com) into the browser.
// - DNS Query
// The browser sends a DNS query to resolve the domain into an IP address.
// - DNS Server
// Provides the correct IP address for the domain.
// - Browser Connects
// The browser uses the IP to connect to the web server and loads the website.
// browser website ko load krayga.

// explains in easy points:

// Sure! Here’s a beginner-friendly breakdown of how DNS (Domain Name System) works, based on those points:

// 🧑‍💻 1. You Type a Website Name
// When you want to visit a site like www.example.com, you type it into your browser. It's like saying, "I want to go to this place!"

// 📡 2. Browser Asks for Directions
// Your browser doesn’t know where that site lives, so it asks a DNS server, kind of like asking a friend, “Do you know the address for this website?”
// alag alag server bna hota hai isa  nhi pta ke is website ka address kya hai.

// 🧠 3. DNS Server Replies
// The DNS server is like a super-smart phonebook. It looks up the name and replies with a number (called an IP address), which is the website's actual location on the internet.
//ya sabka address save kr ka rakta haii.


// 🌐 4. Browser Finds the Site
// Now that your browser knows the address, it travels there and loads the website so you can see it!

//-----------------------------------------------------------------------------------------------------------------



// 🌐 How DNS Actually Works :

// - Root DNS
// Serves as the starting point. It directs DNS queries to the correct Top-Level Domain (TLD) server (like .com, .org).
//jub bhe koi .com vali website kholna chahta hai to sabse pehle root DNS server ko pta hota hai ki .com ka address kya hai.

// - TLD (Top-Level Domain) DNS
// Handles queries for specific domain extensions and guides them to the authoritative DNS servers. For example:
// - .com → Verisign
// - .org → Public Interest Registry (PIR)
//phir top level domain DNS server ko pta hota hai ki .com ka address kya hai.
// is traha se yai apas mai link hota hai..

// - Authoritative DNS Server
// Holds the actual IP address of the domain you want to visit. Examples include servers run by Cloudflare or Google DNS

//------------------------------------------------------------------------------------------------------------------------

// 🌐 How the Web Works – Step-by-Step:

// - Client Request Initiation
// You type a URL into the browser—this triggers the start of the network request..
//mtlb client jo hotahai yai browser hota hai.

// - DNS Resolution
// The browser checks with a DNS server to find the IP address linked to that domain name.
//ab jo bhe website haimna kholi hai DNS  uska server bhej dega mtlb ip address bta dega.

// - TCP Connection
// A secure communication line (TCP connection) is made between your browser and the server.
//browser jo hota ha phela vo server ka sath TCP connection bna leta hai.
//mtlb haimna kuch protocol bna dia hai ke yai krna se phela ya krayga..

// - HTTP Request
// The browser sends a request asking for the content of the webpage.
//upper connection ban gya ab request aygi mtlb jub phone krta ha to hello bolna pai connection ban jata hai aur phir jub bat krta hai to request bhejta hai ki mujhe kya chahiye iski traha kam krta hai browser aur server.
//yai  hamara protocol hai jo browser server ko request bhejta hai ki mujhe kya chahiye.

// - Server Processing
// The server receives that request, processes it, and prepares a response.
// ab server reponse krayga ke server kya mang raha hai ya kya chyia. 

// - HTTP Response
// The server sends back the requested data (HTML, CSS, JavaScript, etc.) via an HTTP response.
// ab server data bhejta hai browser ko jo isna manga tha  ..

// - Network Transmission
// That response travels back across the internet to reach your browser.
//ab network ke madad se data vapis a jayga.

// - Client Receives Response
// The browser gets the data and starts interpreting it.
// ab ya response dikha deta browser ko..

// - Rendering
// Finally, the browser displays the webpage for you to see and interact with.
// aur phir rerendring kr ka accha sa ui dikha dega server browser ko.

//-------------------------------------------------------------------------------------------
//  Internet Protocols Explained:

// 🔗 HTTP (HyperText Transfer Protocol)
// - Used for exchanging web pages between your browser and web servers.
// - Sends data in plain text (not secure).
// - Best for general browsing where security isn’t a concern.

// 🔒 HTTPS (HTTP Secure)
// - A secure version of HTTP that encrypts data.
// - Uses SSL/TLS encryption to protect sensitive info like passwords and payments.
// - Essential for banking, online shopping, and private communication.

// 📶 TCP (Transmission Control Protocol)
// - Makes sure data gets delivered reliably and in the correct order.
// - Creates a stable connection before sending any data.
// mtlb koi error na aya aur aya to isa bhe thik kr dega.
// mtlb data accha se poch jana chyia and order mai..


//-------------------------------------------------------------------------------------------------------------------

// .4 Node Core Modules:

// - Built-in: Core modules are included with Node.js installation.

// mtlb jo cheej hama bar bar chiya the uska logo ne ek nmodule bna ka rakh diya hai.
// mtlb jo cheej hama chyia he chyia uska logo ne ek module bna diya hai isa bar bar likhna ke jrarut nhi hai.
// jsha haina apni node js ko download ,kiya to usme kuch cheej phla se he download he ayi the jinki basic sub ko jrarut he hoti ha..

// - No Installation Needed: Directly available for use without npm install.

// - Performance: Highly optimized for performance.


// Node.js Core Modules::

// - fs (File System): Handles operations like reading and writing files.
// - http: Enables creation of HTTP servers and sending HTTP requests.
// - https: Allows launching of SSL servers.
// - path: Provides tools to manage and manipulate file paths.
// mtlb file mai path ko ksha pass krayga..

// -path os: Offers operating system-related utilities and information.
// yai islyia kam ata hai jissa hama alag alag operting system ka lia alag alag code na likhna pada ..

// - events: Supports event-driven programming and handling events.

// - crypto: Includes cryptographic features like hashing and encryption.

// - url: Parses and formats URLs.

// NOTE: yai hama by default he mil jata hai.

//------------------------------------------------------

//CODE:

// const moduleName = require('module');
// hama koi bhe module pass krna ho to hum asaha kr sakta ha . require likh ka phir iska aga module ka name likhna hota hai.

// // Load the built-in http module
// const http = require('http');

// // Load the third-party express module.// third party module ko asha use kr sakta hai.
// const express = require('express');

// // Load a custom module named myModule.// agar koi local file mai module hai to muja module ke exact location btani padyagi.
// const myModule = require('./myModule');

//-------------------------------------------------------------------------------------------------------------
//  Node.js – require Function:

// 1. Purpose:
// - Used to import modules in Node.js projects.

// 2. Caching Mechanism:
// - Once a module is loaded with require, it is cached.
//eb bar require lagana ka bad bar bar call  nhi krna padta jub tuk code chlta ha hamara.

// 3. File Extension .js:
// - You don’t need to include .js in module file names.
// - Node.js automatically appends .js during resolution.
// thik hai module likhna ka time js lagana ki jrarut nhi hai.

// 4. Path Resolution Strategy:
// Node.js looks for modules in the following order:
// - Core modules (built into Node.js)
// - node_modules/ directory
// - Relative or absolute file paths (e.g., ./, ../)
// mtlb code module jo dhunda ga yai in in jagha dhunda ga..


