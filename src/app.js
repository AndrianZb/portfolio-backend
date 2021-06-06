const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const messagesRouter = require("./messages/messages.router");
const subscriptionsRouter = require("./subscriptions/subscriptions.router");

const app = express();

app.use(cors());
app.use(express.json());

app.options("*", cors());
app.use("/messages", messagesRouter);
app.use("/subscriptions", subscriptionsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;