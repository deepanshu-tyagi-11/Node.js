
// EVENT DRIVEN:

Think of a TV remote:

When you press the "Volume Up" button → an event is triggered.

The TV reacts by increasing the volume → the event handler is executed.

//--------------------------------------------------------------------------------

//single threaded:

// single threaded jo hota hai ya ek bar mai ek kam krta hai aur chota mota kam agya worker ko  bhej deta hai krna ka lia aur bolta ha jub ho jaiy to bta dena.
// phir iska baddd jo muja krna hai vo mai kruga..]
//event loop he btayga ke workero se ke konsa kam kub krna hai..

//-------------------------------------------------------------------------------

V8 vs libuv:

🧠 V8
Open-source JavaScript engine developed by Google

Powers Chrome and Node.js

Compiles JavaScript to native machine code

Delivers high-performance JavaScript execution

🔄 libuv

Multi-platform support library used in Node.js//js window , mac ect;

Handles asynchronous I/O operations.// yai vo hai jo multiple worker thread bna ka betha hai .eventtloop ka nicha.//asynchronous mtlb maina kam btaya aur bola jub ho jay muja bta denna. is called asynchronous..

// provide an event-driven architecture.. event driven bhe provide krta hai..

Manages file system, networking, and timers in a non-blocking way

// yaha sara kam livuv krta hai jo liveuv kam deta hai vo v8 kr deta haii..

//------------------------------------------------------------------------------------------------------------------------

// NODE RUNTIME:

How it works (Simple Flow):
You run your .js file with node filename.js

Node.js uses the V8 engine to execute the code

If your code has asynchronous tasks (like file read):

Node registers a callback

The event loop waits for the task to finish

When ready, the callback is executed

//--------------------------------------------------------------

Event Loop (Node.js):

Timers: Executes callbacks scheduled by setTimeout() and setInterval().
//phela priority setTimeout ,setInterval inha milaygi..

Pending Callbacks: Executes I/O callbacks deferred to the next loop iteration.
// ghumta reta hai to pending callback bhe use kr samjta hai dubara..

Idle, Prepare: Used internally by Node.js..// kuch internally kam krna hoo to yai krta haii.

Poll: Retrieves new I/O events; executes most I/O-related callbacks (except close callbacks, those from timers, and setImmediate()). Node will pause here when necessary.
// poll mtlb jo pending kam thy phela ya krayga.phir timerrs ko dkha gaa.
Check: Executes setImmediate() callbacks.

Close Callbacks: Handles callbacks like socket.on('close', ...).// koi bad mai saf safi vala kam hai yai vo kr deta hai..

//NOTE:


// in 6 ke priority upper se nicha ke traf hoti hai..
// yai btata hai ke har ksi code ke priority same nhi hoti .
// eventloop ek traha se manager hai jo in sara kamo mai ghumta reta hai charo traf ..
//-------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
// - Async code..

// NOTE: pichla code mai haimna response vala code on ka ander he likh dia tha ..
// aur ab kya kia hai haimna respose code jo lia hai vo phela le  lia..

// Server running on address http://localhost:3000
// /favicon.ico GET
// /calculate-result POST

// 1. In Sum Request Handler /calculate-result
// 2. Sending the response
// 3. Chunk Came
// 3. End event came
// 14
// /favicon.ico GET

// yAI event ka based pai chlta hai . jub  event ata hai code pai  to  phela chlta hai..

//---------------------------------------------------------------------------------------

//  BLOCKING CODE..

/// hum bol re hai yai jo kam hai file ka tum he kro .aur sub wait krta rehyga worker side ko mat dena kam .pr yai kam tuma he krna ha asha hum bol re hai. baki  jo eventlop se apna code execute krana ka lia soch rahya hai vo abhi rruka rehyga..
  
// haima event looop ko khali krna ha jaldi se jaldi..jo bhe kam hai vo worker pai dal dena hai..

// USER.[vala folder mai]..

const jsonString = JSON.stringify(jsonObject);
console.log(jsonString);

// BLOCKING EVERYTHING
fs.writeFileSync("user-details.txt", jsonString);// asha diirect file likhna se ..aur baki call block ho jati hai..

res.setHeader("Location", "/");

//----------------------------------------

// aj haimna dkha ke writefile sync jo glat practice the vo bhe maina theek kr le haii. 
// aur hum async code ko ksha thik kr sakta hai aur chla sakta hai..
// taki jo kam jiska baad hona hai  vo iska baad he hoo.jub mujA Pura data receive ho jai to jub mai processing kru.aur jub mera pura kam process ho jay tum mai isa write krna ku duu..
// uska baad mera worker thread kam krna ka baad muja btaya ke tumari kam write ho gya haii.
// yai kam hona ka badd tabhi mai apna user kuu btau ke tumara kam ho gya hai ab tum redurect kr  sakta ho..
// Aur server jo hota hai vo client request ko rok ka rakta hai. jub tuk phali vali req puri na hui hoo.
//------------------------------

  console.log('data written successfully');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();

    // yaha hum client ko rok ka rakh rahyaa ha jub mera data pura writ ho jayga tub mai response bheju gaa..