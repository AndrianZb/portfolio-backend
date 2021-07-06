const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./submissions.controller");

router
    .route("/")
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route("/:submission_id")
    .get(controller.find)
    .put(controller.update)
    .delete(controller.remove)

module.exports = router;