const service = require("./users.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
    const response = await service.create(req.body.data);
    return res.status(201).json({
        data: response[0],
    });
}

async function find(req, res, next) {
    const response = await service.find(req.params.user_id);
    return res.json({
        data: response[0],
    });
}

async function update(req, res, next) {
    const response = await service.update(req.params.user_id, req.body.data);
    return res.json({
        data: response[0],
    });
}

async function remove(req, res, next) {
    const response = await service.remove(req.params.user_id);
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

function hasName(req, res, next) {
    if (req.body.data.user_name) {
        return next();
    }
    next({
        status: 400,
        message: "data must have user_name property",
    });
}

function hasEmail(req, res, next) {
    if (req.body.data.user_email) {
        return next();
    }
    next({
        status: 400,
        message: "data must have user_email property",
    });
}

module.exports = {
    create: [hasData, hasName, hasEmail, asyncErrorBoundary(create)],
    find: [asyncErrorBoundary(find)],
    update: [asyncErrorBoundary(update)],
    remove: [asyncErrorBoundary(remove)],
};
