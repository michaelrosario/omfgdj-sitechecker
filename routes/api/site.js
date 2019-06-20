const router = require("express").Router();
const siteController = require("../../controllers/siteController");

// Matches with "/api/books"
router
  .route("/")
  .get(siteController.findAll)
  .post(siteController.create);

router
  .route("/:id")
  .get(siteController.findById)
  .put(siteController.update)
  .delete(siteController.remove);


module.exports = router;
// HERRO werd