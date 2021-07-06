const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./objects.controller");

router
    .route("/")
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route("/:object_id")
    .get(controller.find)
    .put(controller.update)
    .delete(controller.remove)

module.exports = router;