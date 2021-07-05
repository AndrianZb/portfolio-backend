const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./fields.controller");

router.route("/").post(controller.create).all(methodNotAllowed);

module.exports = router;