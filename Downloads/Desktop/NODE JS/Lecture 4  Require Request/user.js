const http = require('http');
const fs =require('fs'); // fs ka mtlb file system hota ha..

const server = http.createServer((req, res) => {
  
     console.log(req.url, req.method);
     
  //yai bola ga ke request ayi hai aur ya ek response ka khali packet hai issms jo bhe response bhejna hai vo likhh ka bhej do.. 
  if (req.url === '/') { 
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title> DEEPANSHU  DEVELOPER</title></head>');
    res.write('<body>');

     res.write('<h1><body> like  share subscribe </h1><br></body>');
     res.write('<form action="/submit-details" method="POST">');//POST MTLB DATA DE RAHYA HA..
      res.write('<input type="text"  name="username" placeholder="Enter your name"><br>');

      res.write('<label for="male">Male:</label>');
      res.write('<input type="radio" id="male" name="gender" value="male">');

      res.write('<label for="female">Female:</label>');
      res.write('<input type="radio" id="female" name="gender" value="female">');

      res.write('<br><input type="submit" value="Submit">');


    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
} else if (req.method == 'POST' &&  req.url.toLowerCase() === '/submit-details') { 
 
  
 
  fs.writeFileSync('user-details.txt', 'Prashant Jain'); 
  res.statusCode = 302; 
    res.setHeader('Location', '/');
}
res.setHeader('Content-Type', 'text/html')// yai bola ga ke content type hai aur text html hai. 
res.write('<html>');
res.write('<head><title> DEEPU </title></head>');
res.write('<body><h1> like share subscribe </h1></body>');
res.write('</html>');
res.end();
  }
);

const PORT = 3003; // node server haima ksi bhe port pai bnana hai.
server.listen(PORT, () => {// yaha haimna server ko listen kr lia hai kisi port pai.
  console.log(`Server is running on port http://localhost:${PORT}`);
});