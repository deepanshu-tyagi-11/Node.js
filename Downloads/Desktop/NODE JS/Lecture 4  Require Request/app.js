
// const http = require('http');

// function requestHandler(req, res) {// yai function request or response ko handle karega.jo client ne haima request bheji the vo hamara Req OBJECT KA ANDER a jaygi..
//   http.createServer(requestHandler);// maina yaha fun ka reference snd kr dia iss se server creat ho jayga..
//   console.log(req);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------

// Sending Response...

// const http = require('http');

// const server = http.createServer((req, res) => {//yai bola ga ke request ayi hai aur ya ek response ka khali packet hai issms jo bhe response bhejna hai vo likhh ka bhej do.. 
//      console.log(req.url, req.method, req.headers);
//       res.setHeader('Content-Type', 'text/html'); // yai bola ga ke content type hai aur text html hai.
//        res.write('<html>');
//      res.write('<head><title> DEEPANSHU DEVELOPER </title></head>');
//      res.write('<body><h1>Like / Share / Subscribe</h1></body>');
//      res.write('</html>');
//    res.end();

// });

// const PORT = 3000; // node server haima ksi bhe port pai bnana hai.
// server.listen(PORT, () => {// yaha haimna server ko listen kr lia hai kisi port pai.
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });
 // ya jo 3000 hai vo port number hai jo hamara server listen karega mtlb kuch request aygi to iss port no . pai aygi mtlb machine ek sath bhot kam kraygi to hum port no define kr deta hai ke kon se machine kya kam kraygi..
// generally port no 80 hota hai lekin hamne yaha 3000 se start krayga..

// NOTE : iska mtlb ab server to ban gya hai aur request sunna bhe suru kr dia haii..


//----------------------------------------------------------------------------------------------------

// ROUTING REQUEST:

const http = require('http');

const server = http.createServer((req, res) => {
  
     console.log(req.url, req.method, req.headers);
     
  //yai bola ga ke request ayi hai aur ya ek response ka khali packet hai issms jo bhe response bhejna hai vo likhh ka bhej do.. 
  if (req.url === '/') { 
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title> DEEPANSHU  DEVELOPER</title></head>');
    res.write('<body><h1> like  share subscribe </h1></body>');
    res.write('</html>');
    res.end();
}

else if (req.url === '/JOB') {
res.write('<head><title> DEEPU </title></head>');
res.write('<body><h1> DEEPANSHU DEVELOPER </h1></body>');
res.end();
  }
  
else{
// yai bola ga ke content type hai aur text html hai.
res.setHeader('Content-Type', 'text/html')
res.write('<html>');
res.write('<head><title> DEEPU </title></head>');
res.write('<body><h1> bhag bsdka </h1></body>');
res.write('</html>');
res.end();
  }
});

const PORT = 3000; // node server haima ksi bhe port pai bnana hai.
server.listen(PORT, () => {// yaha haimna server ko listen kr lia hai kisi port pai.
  console.log(`Server is running on port http://localhost:${PORT}`);
});