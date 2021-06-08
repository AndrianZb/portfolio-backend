const service = require("./messages.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
    const response = await service.create(req.body.data)
    res.status(201).json({
        data: response[0],
    })
}

function hasData(req, res, next) {
    if (req.body.data) {
        return next()
    }
    next({
        status: 400,
        message: `request body must have data property`
    })
}

function hasName(req, res, next) {
    if (req.body.data.name) {
        return next()
    }
    next({
        status: 400,
        message: `data must have name property`
    })
}

function hasEmail(req, res, next) {
    if (req.body.data.email) {
        return next()
    }
    next({
        status: 400,
        message: `data must have email property`
    })
}

function hasMessage(req, res, next) {
    if (req.body.data.message) {
        return next()
    }
    next({
        status: 400,
        message: `data must have message property`
    })
}

function emailIsValid(req, res, next) {
    const email = req.body.data.email
    const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.match(format)) {
        return next()
    } 
    next({
        status: 400,
        message: `${email} is not a valid email address`
    })
}

module.exports = {
    create: [
        hasData,
        hasName,
        hasEmail,
        hasMessage,
        emailIsValid,
        asyncErrorBoundary(create),
    ],
}