const router = require("express").Router();
const siteController = require("../../controllers/siteController");

router
  .route("/")
  .get(siteController.findAll)
  .post(siteController.create);

router
  .route("/url")
  .get(siteController.findByUrl);

router
  .route("/:id")
  .get(siteController.findById)
  .put(siteController.update)
  .delete(siteController.remove);

router
  .route("/check/:site")
  .get(siteController.checkSite);

module.exports = router;
// HERRO werd