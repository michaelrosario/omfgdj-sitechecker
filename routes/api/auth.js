const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/"
router.route("/")
  .get(userController.findAll);

router.route("/login")
  .post(userController.login);

router.route("/signup")
  .post(userController.signup);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;