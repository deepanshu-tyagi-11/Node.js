// const http = require('http');
// const fs =require('fs'); // fs ka mtlb file system hota ha..

// const server = http.createServer((req, res) => {// yai jo creatserver function pass kr rahya hai hum yaha too abb hum iss [FUNCTION] ku nich alag file [APP.JS] mai bhar nikal lega...
  
//      console.log(req.url, req.method);
     
//   //yai bola ga ke request ayi hai aur ya ek response ka khali packet hai issms jo bhe response bhejna hai vo likhh ka bhej do.. 
//   if (req.url === '/') { 
//     res.setHeader('Content-Type', 'text/html'); 
//     res.write('<html>');
//     res.write('<head><title> DEEPANSHU  DEVELOPER</title></head>');
//     res.write('<body>');

//      res.write('<h1><body> like  share subscribe </h1><br></body>');
//      res.write('<form action="/submit-details" method="POST">');//POST MTLB DATA DE RAHYA HA..
//       res.write('<input type="text"  name="username" placeholder="Enter your name"><br>');

//       res.write('<label for="male">Male:</label>');
//       res.write('<input type="radio" id="male" name="gender" value="male">');

//       res.write('<label for="female">Female:</label>');
//       res.write('<input type="radio" id="female" name="gender" value="female">');

//       res.write('<br><input type="submit" value="Submit">');


//     res.write('</form>');
//     res.write('</body>');
//     res.write('</html>');
//     return res.end();
//     } else if (req.method == 'POST' &&  req.url.toLowerCase() === '/submit-details') { 
 

//    const body=[];// const body ka mtlb mai ab mai iss array ko koi value assign nhi kruga..// pr iska ander kuch change krna hoo yai mai kr sakta hmm.
//    req.on("data", (chunk) => {
//     console.log(chunk);
//     body.push(chunk);
//    });

//   req.on("end", () => {
//   const fullybody = Buffer.concat(body).toString(); 
//   console.log(fullybody); 

//   const params = new URLSearchParams(fullybody);

//   //  const jsonObject = {};
//   //   for (const [key, value] of params.entries()) {
//   //       jsonObject[key] = value;
//     //}

//  const bodyobject = Object.fromEntries(params);// upper vali teeno line ek line mai likh dia..
//  console.log(bodyobject);
//  fs.writeFileSync('user-details.txt', 'Prashant Jain'); 
//   });

//   res.statusCode = 302; 
//     res.setHeader('Location', '/');
// }
// res.setHeader('Content-Type', 'text/html')// yai bola ga ke content type hai aur text html hai. 
// res.write('<html>');
// res.write('<head><title> DEEPU </title></head>');
// res.write('<body><h1> like share subscribe </h1></body>');
// res.write('</html>');
// res.end();
//   }
// );

// const PORT = 3003; // node server haima ksi bhe port pai bnana hai.
// server.listen(PORT, () => {// yaha haimna server ko listen kr lia hai kisi port pai.
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });


//---------------------------------------------------------------------------------------------------------------
// const fs =require('fs'); // fs ka mtlb file system hota ha..

// const userRequestHandler = ((req, res) => { //Kyuki is function ka koi naam nahi hai, isliye ise aksar kisi variable me store karte hain and this function is called annonymous ... kuki haimna yai app.js file mai use kra hai to islya ek variblae mai dal dega..varible ka nam hai  [userRequestHandler] ;
  
//      console.log(req.url, req.method);
     
//   //yai bola ga ke request ayi hai aur ya ek response ka khali packet hai issms jo bhe response bhejna hai vo likhh ka bhej do.. 
//   if (req.url === '/') { 
//     res.setHeader('Content-Type', 'text/html'); 
//     res.write('<html>');
//     res.write('<head><title> DEEPANSHU  DEVELOPER</title></head>');
//     res.write('<body>');

//      res.write('<h1><body> like  share subscribe </h1><br></body>');
//      res.write('<form action="/submit-details" method="POST">');//POST MTLB DATA DE RAHYA HA..
//       res.write('<input type="text"  name="username" placeholder="Enter your name"><br>');

//       res.write('<label for="male">Male:</label>');
//       res.write('<input type="radio" id="male" name="gender" value="male">');

//       res.write('<label for="female">Female:</label>');
//       res.write('<input type="radio" id="female" name="gender" value="female">');

//       res.write('<br><input type="submit" value="Submit">');


//     res.write('</form>');
//     res.write('</body>');
//     res.write('</html>');
//     return res.end();

//     } else if (req.method == 'POST' &&  req.url.toLowerCase() === '/submit-details') { 
 

//    const body=[];// const body ka mtlb mai ab mai iss array ko koi value assign nhi kruga..// pr iska ander kuch change krna hoo yai mai kr sakta hmm.

//    req.on("data", (chunk) => {// EK EK CHUNK KO PADH LIA JO A RE HAII.
//     console.log(chunk);
//     body.push(chunk);
//    });

//   req.on("end", () => {// CHUNK KO EKTHA KR KA BUFFER MAI DAL KA PURI BODY KAISHA NIKLNI HAI YA DKH LIA..

//   const fullybody = Buffer.concat(body).toString(); 
//   console.log(fullybody); 

//   const params = new URLSearchParams(fullybody);// US BODY KO PARSE KAISHA KRNA HAI VO DKH LIA..

//   //  const jsonObject = {};
//   //   for (const [key, value] of params.entries()) {
//   //       jsonObject[key] = value;
//     //}

//  const bodyobject = Object.fromEntries(params);// upper vali teeno line ek line mai likh dia..// mtlb paramaters [params ] mai se entry nikal lenaa.. upper jo params haii..
//  console.log(bodyobject);
 
//  fs.writeFileSync('user-details.txt', JSON.stringify(bodyobject));// THEN FIR DKH LIA DATA KAISH FILE MAI DALNA HAI.
//   error =>{
//   console.log('data written successfully');
//     res.statusCode = 302; 
//     res.setHeader('Location', '/');
//     return res.end();
//   }

//   res.statusCode = 302; // jub haimna yai bhr rakha tha to . file writting ka wait he nhi kr raha tha ek dum print kr de raha tha..ab jub yai ander likh dia too nich vala print ho raha hai. to iska lia hum nicha .. [ELSE] laga dega..  
//   res.setHeader('Location', '/');
//   res.end();

//   });// hum bol re hai yai jo kam hai file ka tum he kro .aur sub wait krta rehyga worker side ko mat dena kam .pr yai kam tuma he krna ha asha hum bol re hai. baki  jo eventlop se apna code execute krana ka lia soch rahya hai vo abhi rruka rehyga..

//   return;
// }

// res.setHeader('Content-Type', 'text/html')// yai bola ga ke content type hai aur text html hai. 
// res.write('<html>');
// res.write('<head><title> DEEPU </title></head>');
// res.write('<body><h1> like share subscribe </h1></body>');
// res.write('</html>');
// res.end();

// });

// module.exports = userRequestHandler;

//---------------------------------------------------------------------------------------------------------------

const fs = require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" &&
        req.method == "POST") {
    
    const body = [];      
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = userRequestHandler;



