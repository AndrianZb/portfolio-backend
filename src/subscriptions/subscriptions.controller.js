const service = require("./subscriptions.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
    const response = await service.create(req.body.data)
    res.status(201).json({
        data: response[0],
    })
}

module.exports = {
    create: [
        asyncErrorBoundary(create),
    ],
}