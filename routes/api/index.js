const router = require("express").Router();

router.use("/badge",require("./badge.js"));
router.use("/site",require("./site.js"));

module.exports = router;