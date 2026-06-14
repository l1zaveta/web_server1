const http = require('http');

function task(x) {
  return x * x * x;
}

const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain; charset=UTF-8'
  };

  if (req.url === '/login/') {
    res.writeHead(200, headers);
    res.end('l1zavetkns');
  } else if (req.url === '/sample/') {
    res.writeHead(200, headers);
    res.end(task.toString());
  } else {
    res.writeHead(404, headers);
    res.end('Not found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
