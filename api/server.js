const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const usersRouter = require("./users/router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;