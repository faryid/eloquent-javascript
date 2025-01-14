import {createServer} from "node:http";
import { createReadStream, createWriteStream } from "node:fs";
import { stat, readdir, rmdir, unlink } from "node:fs/promises";

import { lookup } from "mime-types";
import { urlPath } from "./utils/urlPath.mjs";
import { pipeStream } from "./utils/pipeStream.mjs";

const methods = Object.create(null);

methods.GET = async function(request) {
    let path = urlPath(request.url);
    let stats;

    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 404, body: "File not found"};
    }

    if (stats.isDirectory()) {
        return {body: (await readdir()).join("\n")};
    } else {
        return {body: createReadStream(path), type: lookup(path)};
    }
};

methods.DELETE = async function(request) {
    let path = urlPath(request.url);
    let stats;

    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 204};
    }

    if (stats.isDirectory()) rmdir(path);
    else await unlink(path);
    return {status: 204};
}

methods.PUT = async function(request) {
    let path = urlPath(request.url);
    await pipeStream(request, createWriteStream(path));
    return {status: 204};
}

createServer((request, response) => {
    let handler = methods[request.method] || notAllowed;

    handler(request).catch(error => {
        if (error.status != null) return error;
        return {status: 500, body: String(error)};

    }).then(({body, status = 200, type = "text/plain"}) => {
        response.writeHead(status, {"Content-Type": type});
        if (body?.pipe) body.pipe(response);
        else response.end(body);
    });

}).listen(8000);

async function notAllowed(request) {
    return {
        status: 405,
        body: `Method ${request.method} not allowed`
    }
}

console.log("Listening! (port 8000)");
