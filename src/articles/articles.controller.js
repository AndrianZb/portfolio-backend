const service = require("./articles.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
    const response = await service.create(req.body.data);
    return res.status(201).json({
        data: response[0],
    });
}

async function find(req, res, next) {
    const response = await service.find(req.params.article_id);
    return res.json({
        data: response[0],
    });
}

async function update(req, res, next) {
    const response = await service.update(req.params.article_id, req.body.data);
    return res.json({
        data: response[0],
    });
}

async function remove(req, res, next) {
    const response = await service.remove(req.params.article_id);
    return res.json({
        data: response[0],
    });
}

function hasData(req, res, next) {
    if (req.body.data) {
        return next();
    }
    next({
        status: 400,
        message: "body must have data property",
    });
}

function hasTitle(req, res, next) {
    if (req.body.data.article_title) {
        return next();
    }
    next({
        status: 400,
        message: "data must have article_title property",
    });
}

function hasContent(req, res, next) {
    if (req.body.data.article_content) {
        return next();
    }
    next({
        status: 400,
        message: "data must have article_content property",
    });
}

function hasPageId(req, res, next) {
    if (req.body.data.page_id) {
        return next();
    }
    next({
        status: 400,
        message: "data must have page_id property",
    });
}

module.exports = {
    create: [
        hasData,
        hasTitle,
        hasContent,
        hasPageId,
        asyncErrorBoundary(create),
    ],
    find: [asyncErrorBoundary(find)],
    update: [asyncErrorBoundary(update)],
    remove: [asyncErrorBoundary(remove)],
};
