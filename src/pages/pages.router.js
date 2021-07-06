const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./pages.controller");

router
    .route("/")
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route("/:page_id")
    .get(controller.find)
    .put(controller.update)
    .delete(controller.remove)

module.exports = router;