const http = require('http');

function task(x) {
  return new Promise((resolve, reject) => {
    if (x < 18) {
      resolve('yes');
    } else {
      reject('no');
    }
  });
}

const fetchPage = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <input id="inp" type="text">
  <button id="bt">Go</button>
  <script>
    document.getElementById('bt').addEventListener('click', function() {
      var url = document.getElementById('inp').value;
      fetch(url)
        .then(function(response) {
          return response.text();
        })
        .then(function(text) {
          document.getElementById('inp').value = text;
        });
    });
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*'
  };

  if (req.url === '/login/') {
    res.writeHead(200, {
      ...corsHeaders,
      'Content-Type': 'text/plain; charset=UTF-8'
    });
    res.end('l1zavetkns');

  } else if (req.url === '/promise/') {
    res.writeHead(200, {
      ...corsHeaders,
      'Content-Type': 'text/plain; charset=UTF-8'
    });
    res.end(task.toString());

  } else if (req.url === '/fetch/') {
    res.writeHead(200, {
      ...corsHeaders,
      'Content-Type': 'text/html; charset=UTF-8'
    });
    res.end(fetchPage);

  } else {
    res.writeHead(404, corsHeaders);
    res.end('Not found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
