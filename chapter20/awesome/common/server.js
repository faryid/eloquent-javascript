const http = require("http");

/**
 * requestListener is a manual and default listener to server.
 * @param request
 * @param response
 */
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method, url } = request;

  if (url === "/") {
    // `/` endpoint with GET method.
    const message =
      method === "GET"
        ? "<h1>This is Homepage</h1>\n"
        : `<h1>Cannot access with ${method} request</h1>\n`;

    response.end(message);
  } else if (url === "/about") {
    if (method === "GET") {
      // `/about` endpoint with GET method.
      response.end("<h1>This is About page</h1>");
    } else if (method === "POST") {
      // `/about` endpoint with POST method.
      let body = [];

      request.on("data", (chunk) => body.push(chunk));

      request.on("end", () => {
        body = Buffer.concat(body).toString();

        const { firstName, lastName } = JSON.parse(body);

        response.end(`<h2>Hello, ${firstName} ${lastName}</h2>\n`);
      });
    } else {
      // `/about` endpoint with unknown method.
      response.end(`<h1>Cannot access with ${method} request</h1>\n`);
    }
  } else {
    response.statusCode = 404;
    response.end("<h1>Page Not Found</h1>\n");
  }
};

const port = 5000;
const host = "localhost";
const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);
});
