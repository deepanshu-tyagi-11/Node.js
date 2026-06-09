const http = require('http');
const RequestHandler = require('./user');

const server = http.createServer(RequestHandler);



const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});