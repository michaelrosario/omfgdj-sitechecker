const router = require("express").Router();
const badgeController = require("../../controllers/badgesController");

// Matches with "/api/books"
router
  .route("/")
  .get(badgeController.findAll)
  .post(badgeController.create);

router
  .route("/title")
  .get(badgeController.findByTitle)
  
router
  .route("/:id")
  .get(badgeController.findById)
  .put(badgeController.update)
  .delete(badgeController.remove);


module.exports = router;