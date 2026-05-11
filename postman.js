const http = require('http');
const url = require('url');

let data = { id: 1, name: "Initial", email: "test@gmail.com" };

const server = http.createServer((req, res) => {

  // Set headers (IMPORTANT for Postman)
  res.setHeader('Content-Type', 'application/json');

  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  //  GET
  if (method === 'GET') {
    res.writeHead(200);
    return res.end(JSON.stringify(data));
  }

  //  POST (Create new data)
  else if (method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        data = JSON.parse(body);
        res.writeHead(201);
        res.end(JSON.stringify({ message: "Data Added", data }));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  }

  //  PUT (Replace full data)
  else if (method === 'PUT') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        data = JSON.parse(body);
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Data Replaced", data }));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  }

  //  PATCH (Partial update)
  else if (method === 'PATCH') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const updated = JSON.parse(body);
        data = { ...data, ...updated };
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Data Updated", data }));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  }

  //  DELETE
  else if (method === 'DELETE') {
    data = {};
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Data Deleted" }));
  }

  //  DELETE
   else if (method === 'DELETE') {
    data = {};
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Data Deleted" }));
  }

  //  Method Not Allowed
  else {
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});