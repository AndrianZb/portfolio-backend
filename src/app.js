const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const corsOptions = {
    origin: 'https://portfolio-frontend-nine.vercel.app/',
    optionsSuccessStatus: 200
}

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const usersRouter = require("./users/users.router");
const pagesRouter = require("./pages/pages.router");
const articlesRouter = require("./articles/articles.router");
const formsRouter = require("./forms/forms.router");
const objectsRouter = require("./objects/objects.router");
const fieldsRouter = require("./fields/fields.router");
const imagesRouter = require("./images/images.router");
const linksRouter = require("./links/links.router");
const submissionsRouter = require("./submissions/submissions.router");

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.options("*", cors());
app.use("/users", usersRouter);
app.use("/pages", pagesRouter);
app.use("/articles", articlesRouter);
app.use("/forms", formsRouter);
app.use("/objects", objectsRouter);
app.use("/fields", fieldsRouter);
app.use("/images", imagesRouter);
app.use("/links", linksRouter);
app.use("/submissions", submissionsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
