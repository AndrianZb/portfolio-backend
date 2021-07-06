const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./links.controller");

router
    .route("/")
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route("/:link_id")
    .get(controller.find)
    .put(controller.update)
    .delete(controller.remove)

module.exports = router;