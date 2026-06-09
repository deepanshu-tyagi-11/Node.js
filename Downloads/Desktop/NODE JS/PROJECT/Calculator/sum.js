const sumRequestHandler = (req, res) => {
  console.log("In sumRequestHandler", req.url);
  const body = [];

  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);

    const first = Number(params.get('first'));
    const second = Number(params.get('second'));

    const result = first + second;
    console.log("Sum:", result);

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Result</title></head>
        <body>
          <h1>Result: ${result}</h1>
          <a href="/calculator">Back to Calculator</a>
        </body>
      </html>
    `);
    res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;

