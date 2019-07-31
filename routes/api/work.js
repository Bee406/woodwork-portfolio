const router = require("express").Router();
const workController = require("../../controllers/workController");

// Matches with "/api/books"
router.route("/")
  .get(workController.findAll)
  .post(workController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(workController.findById)
  .put(workController.update)
  .delete(workController.remove);

module.exports = router;