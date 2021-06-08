const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./subscriptions.controller");

router.route("/").post(controller.create).all(methodNotAllowed);

module.exports = router;
