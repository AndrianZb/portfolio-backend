const service = require("./links.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
    const response = await service.create(req.body.data);
    return res.status(201).json({
        data: response[0],
    });
}

async function find(req, res, next) {
    const response = await service.find(req.params.link_id);
    return res.json({
        data: response[0],
    });
}

async function update(req, res, next) {
    const response = await service.update(req.params.link_id, req.body.data);
    return res.json({
        data: response[0],
    });
}

async function remove(req, res, next) {
    const response = await service.remove(req.params.link_id);
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

function hasText(req, res, next) {
    if (req.body.data.link_text) {
        return next();
    }
    next({
        status: 400,
        message: "data must have link_text property",
    });
}

function hasUrl(req, res, next) {
    if (req.body.data.link_url) {
        return next();
    }
    next({
        status: 400,
        message: "data must have link_url property",
    });
}

function hasText(req, res, next) {
    if (req.body.data.link_text) {
        return next();
    }
    next({
        status: 400,
        message: "data must have link_text property",
    });
}

function hasType(req, res, next) {
    if (
        req.body.data.article_id ||
        req.body.data.form_id ||
        req.body.data.object_id
    ) {
        return next();
    }
    next({
        status: 400,
        message: "data must have article_id/form_id/object_id property",
    });
}

module.exports = {
    create: [hasData, hasText, hasUrl, hasType, asyncErrorBoundary(create)],
    find: [asyncErrorBoundary(find)],
    update: [asyncErrorBoundary(update)],
    remove: [asyncErrorBoundary(remove)],
};
