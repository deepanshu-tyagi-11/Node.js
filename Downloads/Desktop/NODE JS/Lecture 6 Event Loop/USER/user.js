const fs =require('fs'); 

const userRequestHandler = ((req, res) => {
  
     console.log(req.url, req.method);
     
 
  if (req.url === '/') { 
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title> DEEPANSHU  DEVELOPER</title></head>');
    res.write('<body>');

     res.write('<h1><body> like  share subscribe </h1><br></body>');
     res.write('<form action="/submit-details" method="POST">');
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
 

   const body=[];
   req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
   });

  req.on("end", () => {
  const fullybody = Buffer.concat(body).toString(); 
  console.log(fullybody); 

  const params = new URLSearchParams(fullybody);


 const bodyobject = Object.fromEntries(params); 
 console.log(bodyobject);
//  fs.writeFileSync('user-details.txt', JSON .stringify(bodyobject),// sync ka mtlb hai event loop khud file creat kr raha hai aur yai cheej acchi nhi hai koi yai time jadya leti hai.. islyia hum apna kam worker ko send kr dega mtlb file ko[ASYNCHRONOUS BNA DE SYNCHRONOUS SEE..]
 fs.writeFile('user-details.txt', JSON .stringify(bodyobject),
error =>{
  console.log('data written successfully');// JUB WORKER THREAD FILE CREAT KR DEGA TUB YAI CALL HOGA ISS SE HAIMA PTA CHAL JAYGA KE FILE CREAT KR DE ISNA..
    res.statusCode = 302; 
    res.setHeader('Location', '/');
    return res.end();
}); 
  });
}else{
res.setHeader('Content-Type', 'text/html'). 
res.write('<html>');
res.write('<head><title> DEEPU </title></head>');
res.write('<body><h1> like share subscribe </h1></body>');
res.write('</html>');
res.end();
}
  }
);

module.exports = userRequestHandler;




