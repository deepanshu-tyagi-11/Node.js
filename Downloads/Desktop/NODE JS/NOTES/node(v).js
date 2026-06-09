// 🔄 What Are Streams?

// Streams in Node.js are a way to handle data efficiently by processing it piece by piece rather than loading it all at once. This is particularly useful for large files or real-time data.

// Streaming Workflow:

// Browser sends a request to Node.js for an image.
// Node.js uses readable and writable streams to request data from the image server.
// As the image server responds, Node.js pipes data directly to the browser, improving performance and reducing memory usage.

// SCOKET:
// socket mtlb actual communication kai ek traha se gate ha.. mtlb ushi se data ata ha aur ushi se jataa hai..
// DUPLEX STREAM.
// mtlb ek he time mai ek traf se data jata hai aur ek traf se data atta hai..ex: whatsapp..
// SINGLE STREAM:
// foji ke vokitoki mai hota hai.


// CHUNK:

// mtlb data ka sabsa chota part jo hum snd krta hai is called chunk.and jo data ka flow hai isa bolta ha stream ..
// aur data chota chota part mai ata hai aur download hota jata haii jsha um youtube pai video dkhta hai to chota chota hissa download hota jata hai aur hum dkta reta hai ..yia bnata hai ke hama jo data download ho raha hai chunks mai vo sequence mai ho asha nhi hai ..asha nhi hai video ka chota chunks part  baad mai download hora ha aur koi phela .. Ek swuence mai he data downlooad hona chyia..

//BUFFER:
// Buffers are temporary storage spaces used to hold chunks of data—especially during streaming operations.
// aur phir apni tempory storage mai se jo data ko sselect kr ka bhej deta hai OUTPUT KE SIDE. jo phela ayA tha usha phela bhejta hai aur jo baad mai aya hai isa baad mai snd kr deta hai.

// mtlb jsha 5kb mtlb 5k chunks aya ..[1kb == 1 chunks ]isa collect krayaga aur snd kr dega 5kb ka data ko ek sath..


//------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

// READING CHUNKS:

// reading chunks se kya hua mtlb hamara data anna suru ho gya hai ..pr random manner mai ..kuki abhi haimna isa buffer ke madad se proper sequence mai nhi lagya..
//Buffer 75 73 65 72 6e 61 6d 65 3d 64 65 65 70 75 26 67 65 6e 64 65 72 3d 6d 61 6c 65>

else if (
  req.method == "POST" &&
  req.url.toLowerCase() === "/submit-details"
) {
  req.on("data", (chunk) => {//req.on mtlb mai listen krna chata hmm jub bhe koi naya "DATA" a jay muja bta dena mtlb callback de dena.. aur callback ksha deta ha CHUNK likh krr.. 
    console.log(chunk);
  });
  fs.writeFileSync("user-details.txt", "Prashant Jain");
  res.setHeader("Location", "/");
  res.statusCode = 302;
  return res.end();
}


//--------------------------------------------------------------------------------------------------------------------

// BUFEERING CHUNKS..
// mtlb ab data buffer mai ana suru ho gya hai .
// ab isa aga shai se bheja ga using buffer. 

const body = []; // Empty array banaya chunks store karne ke liye

req.on("data", (chunk) => { // Jab bhi data ka chunk aaye ye event chalega

  console.log(chunk); // Current chunk ko print karega (Buffer form mein)

  body.push(chunk); // Chunk ko body array mein add kar diya

});

req.on("end", () => { // Jab saare chunks aana band ho jaye tab chalega

  const parsedBody = Buffer.concat(body).toString(); 
  // Saare chunks ko join karke readable string mein convert kiya

  console.log(parsedBody); // Final complete form data print karega

});

fs.writeFileSync("user-details.txt", "Prashant Jain"); 
// File create karke usme data write karega..

// output:

// favicon.ico GET
// /submit-details POST
// <Buffer 75 73 65 72 6e 61 6d 65 3d 64 65 65 70 75 26 67 65 6e 64 65 72 3d 6d 61 6c 65>
// username=deepu&gender=male
// / GET
// /favicon.ico GET

//----------------------------------------------------------------------------------------------------------------------

//  Parsing Request..

// Parsing Request..

req.on("end", () => { // Jab saara data receive ho jaye tab ye event chalega

    const fullybody = Buffer.concat(body).toString(); // Sare chunks ko join karke readable string banayi

    console.log(fullybody); // Full form data print karega mtlb sara data mill gya haima buffer se..

    const params = new URLSearchParams(fullybody); // yaha pai haimna apna code ko decode kr lia hai chunks see..or  params[paramaters] data ko key-value pair mein convert karega

    
    const jsonObject = {}; // Empty object banaya [key :value ] store karne ke liye.
    for (const [key, value] of params.entries()) { //ab jo data aya buffer se shai format mai ab tum haima data rehoo mai ab isa key value pair mai kr ka store krta rehuga..
        jsonObject[key] = value; // Key aur value ko object mein store kr ta rehuga..
    }


    console.log(jsonObject); // Final object bna hai javscript kaa.. // Output: { name: 'Prashant', gender: 'male' }

    fs.writeFileSync("user-details.txt", "Prashant Jain"); // File create karke usme data write karega

    res.setHeader("Location", "/");  // Redirect location set ki homepage par bhejna hai

    res.statusCode = 302;  // 302 status code means redirect response

    return res.end();  // Response end karke browser ko redirect kar diya
});


//-------------------------------------------------------------------------------------------------------------

// USING MODULE..
// Matlab code ko alag files mein divide karke simple aur reusable banana

// =======================
// 1.) handler.js
// =======================

const fs = require("fs"); // fs module import kiya file system ka kaam karne ke liye

const requestHandler = (req, res) => { // Ek function banaya jo request aur response handle karega

    if (req.url === "/") { // Agar user homepage "/" par aaye

        res.setHeader("Content-Type", "text/html");  // Browser ko bataya ki HTML response bhejna hai
    }
};

module.exports = requestHandler; // requestHandler function ko export kar diya taaki dusri file mein use ho sake

// =======================
// 2.) app.js
// =======================



// Simple NodeJS server

const http = require('http'); // http module import kiya server banane ke liye

const requestHandler = require('./handler'); // handler.js file ka exported function import kiya

const server = http.createServer(requestHandler); // Server create kiya aur requestHandler ko request handle karne ke liye diya

//----------------------------------------------------------------------------------------------------------

// USING MODULE..
// using module islyia use krta hai ke ek sath 2 ya 3 cheej EXPORT  krni hoo.. 

module.exports = {
    handler: requestHandler,
    extra: "Extra"
};


module.exports.handler = requestHandler;
module.exports.extra = "Extra";


exports.handler = requestHandler;
exports.extra = "Extra";


Simple Hinglish Summary:-

handler.js
   ↓
Request handle kar raha hai

app.js
   ↓
Server bana raha hai

module.exports
   ↓
Function ko export karta hai

require('./handler')
   ↓
Exported function ko import karta hai


//------------------------------------------------------------------------------------------------

// Node.js Practice Set: Build a Calculator
// 🔧 Step-by-Step Instructions
// Create Project::

// Start a new Node.js project named "Calculator".

// Home Page ("/")

// Display a welcome message.

// Include a link to the calculator page.

// Calculator Page ("/calculator")

// Show a form with two input fields.

// Add a "Sum" button to trigger calculation.

// Result Page ("/calculate-result")

// When user clicks "Sum", redirect to this route.

// Ensure the request is handled by the server.

// Use:

// A module for addition logic.

// Another module for handling incoming requests.

// Parse user input, perform addition, and display result on a new HTML page.