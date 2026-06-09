const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Version 2");
});

server.listen(3000);
