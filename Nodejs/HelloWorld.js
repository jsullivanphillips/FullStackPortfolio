// Import the node:http module
const http = require('node:http');

// Define the hostname and port for the server
const hostname = '127.0.0.1';
const port = 3000;
// Create a server that listens for requests (req) and sends back a response (res)
const server = http.createServer((req, res) => {
  // print the server request to the console
  printServerReq(req);
  // Set the response status code to 200 (OK) and the content type to text/html
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // Use CSS amd HTML to style the response
  res.write(`
    <html>
      <body style="background-color: lightblue;">
        <p style='text-align: center; font-size: 20px;'>It's Jamie's first Node.js server</p>
      </body>
    </html>
  `);
  // Send the end message signalling to the server that the message is complete
  res.end();
});

// Start the server. When it's ready run the callback function that prints the hostname:port to the console
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




// Function to print the server request to the console
function printServerReq(req)
{
  console.log("METHOD:")
  console.log(req.method);
  console.log("URL:")
  console.log(req.url);
  console.log("HEADERS:")
  console.log(req.headers);
  console.log("-------------------- END OF REQUEST -------------------");
}