const router = require("express").Router();
//const bookRoutes = require("./books");

// Book routes
//router.use("/books", bookRoutes);

router.get("/check/:site", function(req,res){
      let site = req.params.site;
      // remove http amd https and use www   
      console.log(site);
      return res.json(site);
  })
  

module.exports = router;
