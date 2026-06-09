
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/home'){
    res.write('<h1> WELCOME TO HOME </h1>');
    return res.end();
  }else if(req.url==='/men'){
    res.write('<h1> WELCOME TO MEN </h1>');
    return res.end();
  }else if(req.url==='/women'){
    res.write('<h1> WELCOME TO WOMEN </h1>');
    return res.end();
  }else if(req.url==='/kid'){
    res.write('<h1> WELCOME TO KID </h1>');
    return res.end();
  }else if(req.url==='/cart'){
    res.write('<h1> WELCOME TO CART </h1>');
    return res.end();
  }


  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Myntra</title>
      <style>
        nav {
          background-color: #f8f8f8;
          padding: 10px;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 20px;
          padding: 0;
          margin: 0;
        }
        li a {
          text-decoration: none;
          color: black;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kid">Kid</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </body>
    </html>
  `);
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
