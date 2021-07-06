const service = require("./fields.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
    const response = await service.create(req.body.data);
    return res.status(201).json({
        data: response[0],
    });
}

async function find(req, res, next) {
    const response = await service.find(req.params.field_id);
    return res.json({
        data: response[0],
    });
}

async function update(req, res, next) {
    const response = await service.update(req.params.field_id, req.body.data);
    return res.json({
        data: response[0],
    });
}

async function remove(req, res, next) {
    const response = await service.remove(req.params.field_id);
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
    if (req.body.data.field_title) {
        return next();
    }
    next({
        status: 400,
        message: "data must have field_title property",
    });
}

function hasType(req, res, next) {
    if (req.body.data.field_type) {
        return next();
    }
    next({
        status: 400,
        message: "data must have field_type property",
    });
}

function hasPlaceholder(req, res, next) {
    if (req.body.data.field_placeholder) {
        return next();
    }
    next({
        status: 400,
        message: "data must have field_placeholder property",
    });
}

function hasFormId(req, res, next) {
    if (req.body.data.form_id) {
        return next();
    }
    next({
        status: 400,
        message: "data must have form_id property",
    });
}

module.exports = {
    create: [
        hasData,
        hasTitle,
        hasType,
        hasPlaceholder,
        hasFormId,
        asyncErrorBoundary(create),
    ],
    find: [asyncErrorBoundary(find)],
    update: [asyncErrorBoundary(update)],
    remove: [asyncErrorBoundary(remove)],
};
