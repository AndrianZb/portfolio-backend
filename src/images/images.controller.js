const service = require("./images.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
    const response = await service.create(req.body.data);
    return res.status(201).json({
        data: response[0],
    });
}

async function find(req, res, next) {
    const response = await service.find(req.params.image_id);
    return res.json({
        data: response[0],
    });
}

async function update(req, res, next) {
    const response = await service.update(req.params.image_id, req.body.data);
    return res.json({
        data: response[0],
    });
}

async function remove(req, res, next) {
    const response = await service.remove(req.params.image_id);
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
    if (req.body.data.image_title) {
        return next();
    }
    next({
        status: 400,
        message: "data must have image_title property",
    });
}

function hasAlt(req, res, next) {
    if (req.body.data.image_alt) {
        return next();
    }
    next({
        status: 400,
        message: "data must have image_alt property",
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
    create: [hasData, hasTitle, hasAlt, hasType, asyncErrorBoundary(create)],
    find: [asyncErrorBoundary(find)],
    update: [asyncErrorBoundary(update)],
    remove: [asyncErrorBoundary(remove)],
};
