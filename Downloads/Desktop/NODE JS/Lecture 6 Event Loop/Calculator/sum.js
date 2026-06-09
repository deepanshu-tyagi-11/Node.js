const sumRequestHandler = (req, res) => {
  console.log("1. In sumRequest Handler", req.url);

  const body = [];
  let result;

req.on('data', chunk => {
  console.log("2. chunk came");
  body.push(chunk);
});

  req.on('end', () => {
    console.log("3 end event came"); // yai jo comment kai beach ka code hai yai [ASYNCHRONOUS CODE HSI ISLYIA YAI BADD MAI EXECUTE HOGA .. PHELA NICHA KA CODE EXECUTE HOGA.. KUKI ABHI YAI PROCESS MAI HAI AUR THREADPOOL APNA KAM KR RAHA HAI BACKROUND MAI ]

    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);

    result = Number(bodyObj.first) + Number(bodyObj.second); //-----------------------------------
    console.log(result);

    console.log("4.sendind the response"); // yaha response phele he le lia..kuki pichla code mmai haimna response on mai dal dia tha..

    res.setHeader('Content-Type', 'text/html');
    res.write(`
<html>
<head><title>Practise Set</title></head>
<body>
<h1>Your Sum is ${result}</h1>
</body>
</html>
`);
    return res.end();
  });

};

exports.sumRequestHandler = sumRequestHandler;