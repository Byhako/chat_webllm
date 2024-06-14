const { createReadStream } = require('fs');
const { createServer } = require('http');

const PORT = 3000; // Puerto configurado (puedes cambiarlo)

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  createReadStream('index.html').pipe(res);
};

const server = createServer(requestListener);
server.listen(PORT);
