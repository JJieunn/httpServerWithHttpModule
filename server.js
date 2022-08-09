const http = require("http");
const express = require("express");
const { createUser } = require("./app");

const app = express();
app.use(express.json());

// end point
app.post("/signup", createUser);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});