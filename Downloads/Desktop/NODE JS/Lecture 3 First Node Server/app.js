
// const http = require('http');

// function requestHandler(req, res) {// yai function request or response ko handle karega.jo client ne haima request bheji the vo hamara Req OBJECT KA ANDER a jaygi..
//   http.createServer(requestHandler);// maina yaha fun ka reference snd kr dia iss se server creat ho jayga..
//   console.log(req);
// }


const http = require('http');

const server = http.createServer((req, res) => {// yai const server jo hai vo ek object hai aur haimna iss pai listen krna suru kra hai ..
// server bachraj ka nam jisa work krta hai..
  console.log(req);// aur console log pai request ko log kr dia..
  process.exit(); // yai ha hamara server se exit krna ka lia..
});

const PORT = 3021; // node server haima ksi bhe port pai bnana hai.
server.listen(PORT, () => {// yaha haimna server ko listen kr lia hai kisi port pai.
  console.log(`Server is running on port http://localhost:${PORT}`);
});
 // ya jo 3000 hai vo port number hai jo hamara server listen karega mtlb kuch request aygi to iss port no . pai aygi mtlb machine ek sath bhot kam kraygi to hum port no define kr deta hai ke kon se machine kya kam kraygi..
// generally port no 80 hota hai lekin hamne yaha 3000 se start krayga..

// NOTE : iska mtlb ab server to ban gya hai aur request sunna bhe suru kr dia haii..