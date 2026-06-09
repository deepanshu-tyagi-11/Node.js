// //NPM & Tools:

// 1.) Install Material Icons// koi bhe tool install krna se phela ya install krayga..// yai files ka icon ka lia .. jo bhe app file creat krayga chaya yai text file ho yaa gith file to iss ka agya issi ka ICON creat ho jayga.

// 2.) npm init.. [MTLB INITLIZE THE PROJECT]
 // code ko bnana maintain krna, module aur packages ko install krna..// npm init mtlb initilize the project..// npm init ek bss file bnana ka tarika hai.. aur samjo iska mtlb project bhe ban gya. kukki hamra project ke sari ke sari dependence [PACKAGE.JSON] ke ander he hoti hai..

                   [ASHA TERMINAL MAI] 
// prashantjain@Prashants-Mac-mini user % npm init

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

YAI SARA PACKAGES HAI JO HUM NPM KE MADAD E INSTALL KR KA CHLAYGA..

// Press ^C at any time to quit.
// package name: (user) User Backend
// Sorry, name can only contain URL-friendly characters and name can no longer contain capital letters.
// package name: (user) user-backend
// version: (1.0.0)
// description: This project will have the backend code of our User project.
// entry point: (user.js) app.js
// test command:
// git repository:
// keywords:
// author: Complete Coding
// license: (ISC)


// 3.) npm Scripts
//"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" :"node app.js",// isa likhna se ab mai apna code ko is command se bhe run kr saktu hm..[npm start]
    "khul-ja-sim-sim" :"node app.js"/// isa bhe likhna se ab mai apna code ko is command se bhe run kr saktu hm..[npm run khul-ja-sim-sim ]//start ek basic command hai to npm start direct chl jata hai.. bbut koi ulti sidha command lilka ka chlana chata ha to..[NPM ka aga RUN ] lokhna padta haii
    //   },


//SCRIPTS:

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node app.js",
  "khul-ja-sim-sim": "node app.js"
},
"author": "Complete Coding",
"license": "ISC",
"devDependencies": {
  "nodemon": "^3.1.7"// aur jo cheej nodemon ko chlna ka lia chiya to nodemon apna ander isa sath he download kr leta hai.
}
// NOTE; github ka ander hama kabhi bhe nodemodule nhi milta kuki jub kabhi hama yai chyia to ma apni package.json file ka ander dependences chek kruga aur inha download kr luga .. kuki package download krna se se nodemodule download hota hai..

/ 4.) npm Packages:
// section 7.4 – npm Packages

// npm – Node.js package manager used for sharing code.//mtlb hum apna code ka ek package bnana chata hai joo koi bhe use kr sakta hai..package ka ander he code ke sari dependences hoti hai.. yai samjo ke yadi paackgae .json bann gya to mtlb hamra project bhe ban gya.. 


// Package – A reusable code block or library.[ like koi haima bna ka de deta hai.. aur phir koi bhe use kr sakta hai insatll kr kai]

// package.json – Metadata file describing the project and its dependencies.

// Versioning – Maintains different versions of packages.

// Local/Global – Packages can be installed locally (project-specific) or globally (system-wide).

// Registry – Central repository for publishing and accessing open-source packages.
// //registry ek traha se library ke traha hota hai jasiha haima kuch naya libraray se lena hota hai to yaha se leta hai..asha he hum jub naya package install krta hai to REGISTERY mai ja ka krta hai.... 

// Examples – Common packages include Express, React, and Lodash.// yai packages hai inha hum use kr sakta hai.

//5.) Installing Packages:

// npm install<package name>// jub bhe koi package download krna hoo.[npm install aur iska aga package ka namm]

// --save – Adds the package to the project's dependencies in package.json.// jo hum nornally chlta hai yai voi hota hai..

// --save-dev – Adds the package to devDependencies, used only in development.// jub bhe huma koi package development kai time pai chiya to mai save-dev ka use kr leta hmm.

// -g – Installs the package globally, making it accessible system-wide.// mtlb jo package maina ab download kia hai ya globlally download ho jaiy mtlb asha na ho ke bss isa project pai lia download hua ha[ab yai haima pura system ka ander kma krayga ].. jo bhe ab mai apna vs code pai project bnauga sabhi mai apply hoo..[jasiha nodmone package]

// --save-exact – Installs the exact version specified, preventing automatic updates.

// --force – Forces npm to install even if the package already exists or has issues.[mtlb muja npm rok raha hai ke kuch galti oe sakti hai.. pr muja pta hai ke ho jana de galti. pr tu chla de too hum iss package ka use krta hai..]


// 6.) Installing nodemon://nodemon ek package..

// Section 7.6 – Installing nodemon:

// 🛠️ Installation Command
// bash
// npm install nodemon --save-dev
// Installs nodemon as a development dependency.

// Automatically restarts Node.js server when file changes are detected.

// Using nodemon:[asah downlaod krta hai ko bhe package ]

 npm install nodemon --save-dev -g

added 29 packages in 2s

4 packages are looking for funding
  run `npm fund` for details
PS C:\Users\deepa\Downloads\Desktop\NODE JS\Lectur 7 Npm & Tools> nodemon app.js
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node app.js`
Server is running on port http://localhost:3003

// ab yai hamara sabhi jagha chlayga kuki haima -g laga ka globally download kr lia.
//ab   {[nodemon] watching extensions: js,mjs,cjs,json}
inma se kuch bhe file mai change hota hai to mai server ko immediately restart kr duga.


ex: [nodemon] starting `node app.js`
Server is running on port http://localhost:3003
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Server is running on port http://localhost:3002

asha change ho jayga hand to hand.


