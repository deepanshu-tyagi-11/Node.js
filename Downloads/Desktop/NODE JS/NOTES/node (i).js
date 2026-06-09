//START : 1/JULY/2023;

// - JavaScript Runtime:
//  Node.js is an open-source, cross-platform runtime environment for executing JavaScript code outside of a browser.
// phela js ka code bss chrome pai chlta tha ab unhone ek bhr app bna dia [ NODE JS ] ab hum is pai bhe js ka code chla sakte hain..


// - Different Environment:
//  Node.js is JavaScript in a different environment—meaning it's about running JS on the server or any computer.

// - Built on Chrome's V8 Engine: 
// It runs on the V8 engine, which compiles JavaScript directly to native machine code, enhancing performance.
//mtlb chrome ka jo engine phela JS ko run krta tha ab usi engine ko use krke node js bna dia gya hai ab hum chrome ka bhr bhe js ko run kr sakta hai.


// - Performance-Oriented:
//  V8 is written in C++ for speed.
//mtlb V8 engine ko C++ me likha gya hai taaki wo fast ho sake.

// - In Summary:
// V8 + Backend Features = NodeJS

//------------------------------------------------------------------------------------------------------------------------

//  What is NodeJS:

// - Design: 
// Event-driven, non-blocking I/O model that ensures high efficiency and performance.
// Non bloocking I/O means that operations like reading files or making network requests do not block the execution of other code, allowing for better performance in handling multiple requests simultaneously.asha nhi hai ke pichla ksi operation khatam ho tab tak agla operation wait karega.
//Event driven

// - Full-Stack JavaScript: 
// Allows JavaScript to be used both on the server and client sides.
//mtlb front end aur backend dono mai javascript ka use kar sakte hain..


// - Scalability:
//  Built for scalable network applications thanks to its asynchronous architecture.
//mtlb iski architecture aisi hai ke ye asani se scale ho sakta hai yani agar humare paas jyada users aa jate hain to ye asani se handle kar leta hai.

// - Versatility:
//  Suitable for building web apps, real-time chat apps, and REST API 
// servers.⚙️ NodeJs Features (Diagram + Key Points)

//------------------------------------------------------------------------------------------------------------------------

// ⚙️ NodeJs Features (Diagram + Key Points)

// 🌀 Event Loop Diagram Overview:
// - Clients send a request to the server.
// - Event Loop (single thread, non-blocking) receives the request.
// - For long-timing jobs or I/O operations, it delegates tasks to workers.
``
// - After completion, callbacks are executed, and a response is returned to the client.
// client request bhejta hai server ko phir eventloop (single thread, non-blocking)  request ko receive karta hai then agar koi long-timing  ya I/O operation hai to wo workers ko delegate [mtlb snd ] kar deta hai phir jab worker kam ko  complete kr  deta hai to callbacks execute hote hain aur response client ko vapis bhej deta hai.
//ASHA NHI HAI KE JUB TUK INPUT OUTPUT KHATAM NAHIN HO JATA TAB TAK CLIENT  WAIT KAREGA request bhejna ka lia.

// 📌 Highlighted Features


// - Non-blocking I/O
// - Executes I/O operations asynchronously.
// - Ideal for applications involving high file or network interaction.
// - Networking Support
// - Supports TCP/UDP sockets.

//ham ksi se chat kr rahe hain kabhi msg kra kabhi image bheji kabhi viddeo and other things . to hama bar bar client se server pai connection bnana padta ha yadi hUM .. socket ka use karte hain to hume bar bar connection bnane ki zarurat nhi padti hai sedha CLIENT aur server ka beach ek rasta bna deta hai ke ab app client aur server ke beach direct bat kr sakta hai . islyia ab server ko dhundna ke jrarut nhi padti ke ke client kha hai.Bss beach mai ek direct rasta bna dia jata hai.


//- File System Access: 
// Provides APIs to read and write files directly, which is not possible in browser environments for security reasons.
//ab files ko read aur write kar sakte hain directly yani ab hum server pai files ko access kar sakte hain jo browser mai possible nhi hai security reasons ki wajah se


// - Server-Side Capabilities:
//  Node.js enables JavaScript to run on the server, [ handling HTTP requests, file operations, and other server-side functionalities.]

// - Modules:
//  Organize code into reusable modules using require().
//ab jo hamara  alag alag code module  likha hota hai files ha aur jo bhot sara log packages likta ha .. hum inko bhe require() ka use karke use kar sakte hain.




//-------------------------------------------------------------------------------------------------------------------------
//  Node.js Features (Removed)..


// - Window Object:
//  The global window object, which is part of web browsers, is absent in Node.js.

// - DOM Manipulation:
//  Node.js does not have a built-in Document Object Model (DOM), as it is not intended to interact with a webpage's content.
//mtlb browser mai jo DOM hota hai yani document object model yani jo html ka structure hota hai usko manipulate nhi kar sakte hain yani usko change nhi kar sakte hain kuki yaha koi page hoga he nhi..


// - BOM (Browser Object Model):
//  No direct interaction with things like navigator or screen, which are part of BOM in browsers.
//mtlb hUM JO LInk kholte thea iska hama upper pta chl jata tha ke link konsa khula hua hai..aur history mai kon sa link khola tha .Aur screen ka sath bhe chedh chad nhi kar sakte hain ..

//🛑 Web-Specific APIs:
// APIs like localStorage, sessionStorage, and browser-based fetch are not available in Node.js.
//ab hum in storage ka use nhi kar sakte hain yani .


//---------------------------------------------------------------------------------------------------------------------
// JavaScript on Client:

// HTML  CSS  JavaScript
// Download → Rendering Web Page
// - Displays Web Page: Turns HTML code into what you see on screen.
// - User Clicks: Helps you interact with the web page.
// - Updates Content: Allows changes to the page using JavaScript.
// - Loads Files: Gets HTML, images, etc., from the server.

//----------------------------------------------------------------------------------------------------------------------

// JavaScript on Server:

// - Database Management: Stores, retrieves, and manages data efficiently through operations like CRUD (Create, Read, Update, Delete).
// ab javascript backend pai data ko sambhala ga..

// - Authentication: Verifies user identities to control access to the system, ensuring that users are who they claim to be.

// - Authorization: Determines what authenticated users are allowed to do by managing permissions and access controls.
// ab app iss kam ko krna ka lia autorized person ha ya nhi.


// - Input Validation: Checks incoming data for correctness, completeness, and security to prevent malicious data entry and errors.

// - Session Management: Tracks user activity across various requests to maintain state and manage user-specific settings.
// mtlb ab haimna chrome login kr lia ha ab hum isma kitna bhe tab open karein ya kitne bhe page open karein humara session khatam nhi hoga aur kitni bar chaya refresh kra..


// - API Management: Provides and handles interfaces for applications to interact, ensuring smooth data exchange and integration.
// API mtlb client ko smoothly data exchange krna.
// API mtlb mera is particular address pai jao aur waha se data le lo ya bhej do.


// - Error Handling: Manages and responds to errors effectively to maintain system stability and provide useful error messages.

// - Security Measures: Implements protocols to protect data from unauthorized access and attacks, such as SQL injection and cross-site scripting (XSS).

// - Data Encryption: Secures sensitive information by encrypting data stored in databases and during transmission.

// - Logging and Monitoring: Keeps records of system activity to diagnose issues and monitor system health and security.
// Logging and Monitoring mtlb haima dkhna ke server pai koi error to nhi aa..aur kya kya hua thaa jiska karan errror ayi..

//---------------------------------------------------------------------------------------------------------------------


// Client Code vs Server Code:

// - User/client can’t access server code directly.
//user directly server code ko access nhi kar sakta data access krna ka lia phela frontend pai request bhejna padta hai.
// mtlb kuch khridne ke lia phela hama frontend pai request bhejna padta hai phir server ko..

// - Client must raise requests for particular APIs to access certain features or data.
//client frontend  ke through backend pai request bheja ga data ka lia ..Aur backend apna data dega client ko frontend ke through


// - Environment Access: Server-side JavaScript accesses server features like file systems and databases.
// server ka passs he access hota hai file system aur database ka client ka user ka pass nhi hota..


// - Security: Server-side code can handle sensitive operations securely, while client-side code is exposed and must manage security risks.
// mtlb muja apni security backend pai accha se handle krni padyagi.


// - Performance: Heavy computations are better performed on the server to avoid slowing down the client.

// - Resource Utilization: Servers generally offer more powerful processing capabilities than client devices.

// - Data Handling: Server-side can directly manage large data sets and database interactions, unlike client-side JavaScript.


// - Asynchronous Operations: Server-side JavaScript is optimized for non-blocking I/O to efficiently manage multiple requests.

// - Session Management: Servers handle sessions and user states more comprehensively.

// - Scalability: Server-side code is designed to scale and handle requests from multiple clients simultaneously.


//----------------------------------------------------------------------------------------------------------------------
// Other Uses of Node.js:

// - Local Utility Scripts: Automates tasks and processes files locally, much like shell scripts, but using JavaScript.
//like alaran bajana hoo yai kuch downlload krna hoo..


// - Internet of Things (IoT): Builds server-side applications for IoT devices, handling communication and data processing.
// mtlb iot devices ka lia chota chota connections bna sakta haii. 


// - Scripting for Automation: Streamlines repetitive tasks in software development workflows like testing and deployment.
// yadi hama koi task repeat krna hoo .bar bar to ham node js se kr sakta hai..

//- Real-Time Applications: Efficiently manages real-time data applications, such as chat apps and live updates, using WebSockets.
// jsha haimna ek example dkha tha ke server or client ka beach ek pipeline creat kr deta tha phir baaat cheeta krayga..


// NOTE => Deskstop application bnata time hum javascript kai code ko use krta hai with the help of ELECTRON..
// creat cross platform dekstop application using framework  ELECTRON/.  

//------------------------------------------------------------------------------------------------------------------------


// Build Tools: Node.js powers frontend build processes using tools such as:

// - Webpack – Module bundler for JavaScript apps
// - Grunt – Task runner for automation
// - Gulp – Stream-based build system
// - Browserify – Lets you use Node-style require() in the browser
// - Brunch – Fast front-end web app builder
// - Yeoman – Scaffolding tool for modern web apps

// NOTES: yai jo tool ha jo likha ja rahya ha JAVASCRIPT using node js ke madad se  likha jata hai ..
//1.) ya jo hamara tools hota hai yai alag  alag LANGUAGE ka code ko compile kr deta hai using JS .aur code ko  hamri application ka ander built krna mai help krta hai..

//-----------------------------------------------------------------------------------------------------------------------

//  Server Architecture with Node.js

// Overview of Node.js Server Functionality:

// - Create Server – Node.js sets up and listens for incoming requests.
// - Business Logic Execution – Handles request validation, connects to the database, and processes data.
// - Return Response – Sends back output in HTML, JSON, CSS, or JS formats.





 

