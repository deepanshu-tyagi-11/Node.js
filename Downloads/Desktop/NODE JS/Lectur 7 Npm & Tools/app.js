const http = require('http');
const RequestHandler = (req , res )=>{
  console.log(req);

};

const server = http.createServer(RequestHandler);



const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});