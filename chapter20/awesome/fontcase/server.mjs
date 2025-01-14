import {createServer} from "node:http";

let _ = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    request.on("data", chunk => {
        response.write(chunk.toString().toUpperCase());
    });
    request.on("end", () => response.end());
}).listen(8000);

console.log("Listening! (port 8000)");
console.log("Uppercase web server");
